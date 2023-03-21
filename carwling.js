const axios = require("axios");
const cherrio = require("cheerio");

// search keyword
const getHTML = async (keyword) => {
  try {
    return await axios.get(
      "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" +
        encodeURI +
        keyword
      //검색keyword, 인코딩되서 들어옴
    );
  } catch (err) {
    console.log(err);
  }
};

const parsing = async (keyword) => {
  const html = await getHTML(keyword);
  console.log(html);
  const $ = cherrio.load(html.data);
};

parsing("자바스크립트");
