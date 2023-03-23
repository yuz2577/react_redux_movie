import axios from "axios";
import cherrio from "cheerio";

// search keyword
const getHTML = async (keyword) => {
  try {
    return await axios.get(
      "/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" +
        encodeURI(keyword)
      //검색keyword, 인코딩되서 들어옴
    );
  } catch (err) {
    console.log(err);
  }
};

export const parsing = async (keyword) => {
  const html = await getHTML(keyword);
  // console.log(html);
  const $ = cherrio.load(html.data);
  // console.log($);
  const $thumbList = $(".cs_common_module .list_image_info .item");
  const $txtList = $(".cs_common_module .list_image_info .title_box");

  var thumb = [];
  var txt = [];
  $thumbList.each((idx, node) => {
    const img = $(node).find("img").attr("src");
    // console.log(title);
    thumb.push(img);
  });
  $txtList.each((i, n) => {
    const title = $(n).find(".name").text();
    txt.push(title);
  });

  var resArr = [];

  for (let i = 0; i < thumb.length; i++) {
    resArr.push({ img: thumb[i], title: txt[i] });
    // console.log(thumb[i], txt[i]);
  }
  console.log(resArr);

  return resArr;
};

export const detailParsing = async (keyword) => {
  const html = await getHTML(keyword);
  const $ = cherrio.load(html.data);

  var story = [];
  var content = [];
  const $story = $(".cs_common_module .text_expand .desc");
  const $content = $(".cs_common_module .detail_info .info .info_group");

  $story.each((i, n) => {
    const storydata = $(n).text();
    story.push(storydata);
  });

  let info = [];
  $content.each((i, n) => {
    // const title = $(n).find("dd").text().split("<span>");
    info.push($(n).find("dd").html());
    // genre_ctry.push(title);
  });
  content = info[0].split("</span>");
  var indexArr = [];
  content.map((v, i) => {
    indexArr.push(v.indexOf("<span"));
  });

  content = content.map((v, i) =>
    indexArr[i] > 0 ? v.substr(0, indexArr[i]) : v
  );
  content.push(info[1]);

  let res = {
    genre: content[0],
    country: content[1],
    runtime: content[2],
    startDate: content[3],
    story: story[0],
  };

  return res;
};

// parsing("현재상영영화순위");
