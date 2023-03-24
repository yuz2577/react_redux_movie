import axios from "axios";
import cherrio from "cheerio";
import fakeUa from "fake-useragent";

var headers = {
  "User-Agent": fakeUa(),
};

// search keyword
const getHTML = async (keyword) => {
  try {
    return await axios.get(
      "/search.naver?query=" +
        encodeURI(keyword) +
        "&where=nexearch&sm=mtb_pcv&qdt=1"
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
  const $thumbList = $(".mcs_common_module .list_image_info .item");
  const $txtList = $(".mcs_common_module .list_image_info .title_box");

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

  var img = "";
  var story = [];
  var content = [];
  var people = [];
  var recommend = [];
  let info = [];
  const $img = $(".mcs_common_module .detail_info .thumb");
  const $story = $(".mcs_common_module .text_expand .desc");
  const $content = $(".mcs_common_module .detail_info .info .info_group");
  const $people = $(
    `.mcs_common_module .cm_info_box[class*="scroll_img_vertical_87_98"] .list>li .area_card`
  );
  const $recommend = $(
    '.mcs_common_module .cm_info_box[class*="scroll_img_vertical_105_148"] .list>li .area_card'
  );

  $img.each((i, n) => {
    img = $(n).find("img").attr("src");
    console.log(img);
  });

  $story.each((i, n) => {
    const storydata = $(n).text();
    story.push(storydata);
  });

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

  $people.each((i, n) => {
    const peopleImg = $(n).find("img").attr("src");
    const peopleName = $(n).find(".title_box .name.type_ell_2 a").text();
    const peoplePosition = $(n)
      .find(".title_box .sub_text.type_ell_2 a")
      .text();
    people.push({
      img: peopleImg,
      name: peopleName,
      position: peoplePosition,
    });
  });

  $recommend.each((i, n) => {
    const recommendImg = $(n).find("img").attr("src");
    const recommendTitle = $(n).find(".title_box .name.type_ell_2 a").text();
    // console.log(recommendImg);
    recommend.push({
      img: recommendImg,
      movieNm: recommendTitle,
    });
  });

  console.log(recommend, "<recommend");

  let res = {
    genre: content[0],
    country: content[1],
    runtime: content[2],
    startDate: content[3],
    story: story[0],
    member: people,
    recommend: recommend,
    img: img,
  };

  return res;
};

// parsing("현재상영영화순위");
