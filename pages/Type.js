const express = require("express");
const router = express.Router();
const axios = require("axios");
const scrape = require("cheerio");

const cat = [
  {
    type: "olahraga",
    url: "https://sports.sindonews.com/",
  },
  {
    type: "eksbis",
    url: "https://ekbis.sindonews.com/",
  },
  {
    type: "teknologi",
    url: "https://autotekno.sindonews.com/",
  },
  {
    type: "lifestyle",
    url: "https://lifestyle.sindonews.com/",
  },
  {
    type: "kalam",
    url: "https://kalam.sindonews.com/",
  },
];

router.get("/", (req, res) => {
  try {
    let url = cat.find((items) => items.type == req.query.type);
    if (url !== undefined) {
      const data = {
        jumlah: 0,
        status: 200,
        data: [],
      };
      if (url.type == "kalam") {
        axios
          .get(url.url)
          .then((res) => {
            const $ = scrape.load(res.data);
            const tag = $(".homelist-new li");
            tag.each(function (row, i) {
              data.data[row] = {};
              const result = $(tag[row]).find(".homelist-title a");
              const judul = $(tag[row]).find(".homelist-title").text();
              data.data[row]["link"] = result.attr("href");
              data.data[row]["judul"] = judul;
              const waktu = $(tag[row]).find(".homelist-date").text();
              data.data[row]["waktu"] = waktu;
              data.data[row]["poster"] = $(tag[row])
                .find(".homelist-pict a img")
                .attr("src");
              data.data[row]["tipe"] = "Internasional";
              data.data[row]["kutipan"] = $(tag[row])
                .find(".homelist-desc")
                .text();
            });
          })
          .then(() => {
            res.status(200);
            res.json({
              status: 200,
              jumlah: data.data.length,
              data: data.data,
            });
          })
      } else {
        axios
          .get(url.url)
          .then((res) => {
            const $ = scrape.load(res.data);
            const tag = $(".homelist-new li");
            tag.each(function (row, i) {
              data.data[row] = {};
              const result = $(tag[row]).find(".homelist-title a");
              const judul = $(tag[row]).find(".homelist-title").text();
              data.data[row]["link"] = result.attr("href");
              data.data[row]["judul"] = judul;
              const waktu = $(tag[row]).find(".homelist-date").text();
              data.data[row]["waktu"] = waktu;
              data.data[row]["poster"] = $(tag[row])
                .find(".homelist-pict a img")
                .attr("data-original");
              data.data[row]["tipe"] = "Internasional";
              data.data[row]["kutipan"] = $(tag[row])
                .find(".homelist-desc")
                .text();
            });
          })
          .then(() => {
            res.status(200);
            res.json({
              status: 200,
              jumlah: data.data.length,
              data: data.data,
            });
          });
      }
    } else {
      res.status(400);
      res.json({
        status: 400,
        message: "pastikan anda memasukan kategori yang tersedia",
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      status: 400,
      message: "pastikan anda memasukan kategori yang tersedia",
    });
  }
});

module.exports = router;
