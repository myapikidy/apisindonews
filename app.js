const express = require('express');
const app = express();
const axios = require('axios');
const scrape = require('cheerio');
const cors = require('cors');

app.use(cors({
    origin: '*'
}))
// halaman
const Nasional = require('./pages/Nasional');
const Internasional = require('./pages/Internasional');
const Detail = require('./pages/Detail');
const Pencarian = require('./pages/Pencarian');
const Type = require("./pages/Type");

const url = "https://www.sindonews.com/";

// halaman nasional 

app.use('/nasional', Nasional);
app.use('/internasional', Internasional);
app.use('/detail', Detail);
app.use('/search/', Pencarian);
app.use('/category', Type)
// handling error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 200;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 200);
    const data = {
        jumlah: 0,
        status: 200,
        data: [],
    }
    axios.get(url)
    .then(res => {
        const $ = scrape.load(res.data);
        const tag = $('div.news-content');
        const tag2 = $('div.news-pict');
        data.jumlah = tag.length;
        tag.each(function(i, items){
            data.data[i] = {};
            const result = $(tag[i]).find('div.news-content a');
            data.data[i]['judul'] = result.text();
            data.data[i]['link'] = result.attr().href;
            const waktu = $(tag[i]).find('div.news-content div.news-date').text();
            data.data[i]['waktu'] = waktu;
            const tipe = $(tag[i]).find('div.news-channel div.newsc').text();
            data.data[i]['tipe'] = tipe;
            data.data[i]['poster'] = $(tag2[i]).find('img').attr("data-src");
            data.data[i]['kutipan'] = $(tag[i]).find('div.news-summary').text();

        })
        console.log($(tag2[0]).find('img').attr("data-src"))
    }).then(() => {
        res.json({
            status: data.status,
            jumlah: data.jumlah,
            data: data.data,
        })
    })
});

// getting navbar from sindonews 

module.exports = app;