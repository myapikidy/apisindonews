const express = require('express');
const router = express.Router();
const axios = require('axios');
const scrape = require('cheerio');

router.get('/', (req, res) => {
    
    if(req.query.url.length > 0)
    {
        const data = {
            jumlah: 0,
            status: 200,
            data: [],
        }
        res.status(200);
        axios.get(req.query.url)
        .then(res => {
            const $ = scrape.load(res.data);
            const tag = $('.article');
            tag.each(function(row, i) {
                data.data[row] = {};
                const judul = $(tag[row]).find('h1').text();
                data.data[row]['judul'] = judul;
                const reporter = $(tag[row]).find('.reporter p').text();
                data.data[row]['reporter'] = reporter;
                data.data[row]['waktu'] = $(tag[row]).find('time').text();
                data.data[row]['views'] = $(tag[row]).find('.hit-view').text();
                data.data[row]['poster'] = $(tag[row]).find('figure img').attr().src;
                data.data[row]['konten'] = $(tag[row]).find('#content').text();
            });
        }).then(() => {
            res.status(200)
            res.json({
                status: 200,
                jumlah: data.data.length,
                data: data.data
            })
        })
    }else{
        res.status(404);
        res.json({
            status: 404,
            pesan: 'dibutuhkan url',
        })
    }
});

module.exports = router;