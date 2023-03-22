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
  console.log($thumbList);

  var thumb = [];
  $thumbList.each((idx, node) => {
    const title = $(node).find("img").attr("src");
    // console.log(title);
    thumb.push({ idx: title });
  });
  return thumb;
};

// parsing("현재상영영화순위");
