const express = require('express');
const router = express.Router();
const axios = require('axios');
const scrape = require('cheerio');

router.get('/', (req, res) => {
    if(req.query.q)
    {
        if( req.query.q.length > 0 )
        {
            res.status(200);
            const data = {
                jumlah: 0,
                status: 200,
                data: [],
            }
            axios.get('https://search.sindonews.com/search?type=artikel&q=' + req.query.q)
            .then(res => {
                const $ = scrape.load(res.data);
                const tag = $('ul.news-search li');
                for( let i = 0; i < tag.length; i++)
                {
                    data.data[i] = {};
                    data.data[i]['link'] = $(tag[i]).find('.news-title a').attr().href;
                    data.data[i]['judul'] = $(tag[i]).find('div.news-title a').text();
                    data.data[i]['poster'] = $(tag[i]).find('div.news-pict a img').attr()['data-src'];
                    data.data[i]['waktu'] = $(tag[i]).find('div.news-date').text();
                    data.data[i]['tipe'] = $(tag[i]).find('div.newsc').text();
                    data.data[i]['kutipan'] = $(tag[i]).find('div.news-summary').text();
                }
            }).then(() => {
                res.json({
                    status: 200,
                    jumlah: data.data.length,
                    data: data.data
                })
            }).catch(err => {
                console.log(err)
            })
    
    
        }else{
            res.status(404);
            res.json({
                status: 404,
                pesan: 'Masukan kata kunci',
            })
        }
    }else{
        res.status(404)
        res.json({
            status: 404,
            pesan: 'Pastikan anda memasukan pameter q',
        })
    }
});

module.exports = router;