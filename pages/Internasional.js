const express = require('express');
const router = express.Router();
const axios = require('axios');
const scrape = require('cheerio');

router.get('/', (req, res) => {
    const data = {
        jumlah: 0,
        status: 200,
        data: [],
    }
    axios.get('https://international.sindonews.com/')
    .then(res => {
        const $ = scrape.load(res.data);
        const tag = $('.homelist-new li');
        tag.each(function(row, i) {
            data.data[row] = {};
            const result = $(tag[row]).find('.homelist-title a');
            const judul = $(tag[row]).find('.homelist-title').text();
            data.data[row]['link'] = result.attr('href')
            data.data[row]['judul'] = judul;
            const waktu = $(tag[row]).find('.homelist-date').text();
            data.data[row]['waktu'] = waktu;
            data.data[row]['poster'] = $(tag[row]).find('.homelist-pict a img').attr("src")            
            data.data[row]['tipe'] = 'Internasional';
            data.data[row]['kutipan'] = $(tag[row]).find('.homelist-desc').text()
        });
    }).then(() => {
        res.status(200)
        res.json({
            status: 200,
            jumlah: data.data.length,
            data: data.data
        })
    })
});

module.exports = router;