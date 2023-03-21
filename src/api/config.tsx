import moment from "moment";

// eslint-disable-next-line import/no-anonymous-default-export
const config = {
  MY_KEY: "dded54b5d0db07c8c61da8bc167a2b08",
  today: moment(new Date().setDate(new Date().getDate() - 1)).format(
    "YYYYMMDD"
  ),
};

export default config;
