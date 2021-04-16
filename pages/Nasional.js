const express = require('express');
const router = express.Router();
const axios = require('axios');
const scrape = require('cheerio');
const jwt = require('jsonwebtoken');

const url = 'https://nasional.sindonews.com/';


function aktifasi(req, res, next)
{
    const headers = req.headers['authorization'];

    if(typeof headers !== 'undefined')
    {
        const blast = headers.split(" ");
        const result = blast[1];
        req.token = result;
        next();
    }else{
        res.status(403);
        res.json({
            status: 403,
            pesan: 'Need An Authorization Param',
        })
    }
}

router.get('/rahasia', aktifasi, (req, res, next) => {
    jwt.verify(req.token, 'secret_data', (err, data) => {
        if( err )
        {
            res.status(403);
            res.json({
                status: 403,
                pesan: err,
            })
        }else{

            res.status(200).json({
                pesan: 'Jangan berisik ini halaman rahasia...!!',
                result: data,
            })
        }
    })
});

router.post('/login', (req, res) => {
    const data = {
        nama: 'Rizki Maulana',
        images: 'thisImg.jpg',
        url: 'https://www.lagukita.net',
    }

    const token = jwt.sign(data, 'secret_data');
    res.json({
        status: 200,
        pesan: 'Already to go',
        token: token,
    })
})

router.get('/', (req, res) => {
    res.status(200);
    const data = {
        jumlah: 0,
        status: 200,
        data: [],
    }
    axios.get(url)
    
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
            data.data[row]['poster'] = $(tag[row]).find('.homelist-pict a img').attr("data-original")            
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
