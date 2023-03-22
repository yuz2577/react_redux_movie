import axios from 'axios';
import cherrio from 'cheerio';

// search keyword
const getHTML = async (keyword) => {
    try {
        return await axios.get(
            '/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' +
                encodeURI(keyword),
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
    const $thumbList = $('.cs_common_module .list_image_info .item');
    const $txtList = $('.cs_common_module .list_image_info .title_box');

    var thumb = [];
    var txt = [];
    $thumbList.each((idx, node) => {
        const img = $(node).find('img').attr('src');
        // console.log(title);
        thumb.push(img);
    });
    $txtList.each((i, n) => {
        const title = $(n).find('.name').text();
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

// parsing("현재상영영화순위");
