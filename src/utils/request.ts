import Taro from "@tarojs/taro";

/**
 * 声明请求对象
 */
console.log(process.env);
const API_BASE_URL = "https://sit-api.tianhong.cn";

/**
 * 声明请求对象参数展示
 * requestHandler
 * params: {},
 * url: "",
 * showToast: false, //默认显示Toast，如果设置true则不会显示Toast
 * success: function (res)
 * fail: function ()
 *
 */

/**
 * GET请求
 *
 */
export async function GET(requestHandler) {
  return httpRequest("GET", requestHandler);
}
/**
 * POST请求
 *
 */
export async function POST(requestHandler) {
  // return new Promise((resolve, reject) => {
  return httpRequest("POST", requestHandler);
  // });
}
/**
 * http request 请求
 * @param {http method} method
 *
 */

export async function httpRequest(method, requestHandler) {
  //注意：可以对params签名等处理
  let params = requestHandler.params;
  params = apiParamSign(params);
  let showToast = requestHandler.showToast;
  let url = requestHandler.url;

  if (!showToast) {
    Taro.showLoading({
      title: "加载中",
      mask: true,
    });
  }

  return Taro.request({
    url: `${API_BASE_URL}/${url}`,
    data: params,
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // responseType: 'text',
    // credentials: 'include',
    header: {
      "content-type": "application/json", // 默认值
      "x-http-devicetype": "miniapp",
      // 'mediaType':'application/json'
    },
    mode: "no-cors",
    success: function (res) {
      console.log("request success!");
      if (!showToast) {
        Taro.hideLoading();
      }
      if (res.data.code == 200) {
        requestHandler.success(res.data);
      } else if (res.data.status == "error") {
        //错误回调处理
        requestHandler.fail();
        Taro.showToast({
          title: res.data.msg,
          icon: "none",
        });
      } else {
        //其他情况当成失败处理
        requestHandler.fail();
      }
    },
    fail: function (res) {
      console.log("request failed!");
      if (!showToast) {
        Taro.hideLoading();
      }
      //错误回调处理
      requestHandler.fail();
    },
  });
}

/**
 * 系统参数和功能参数做签名（按照服务端接口标准制定）
 * @param {传入功能参数} params
 */
function apiParamSign(params) {
  let sysParams = {};
  // let date = new Date();
  // let month = date.getMonth() + 1;
  // sysParams.date =
  //   date.getFullYear() +
  //   "-" +
  //   month +
  //   "-" +
  //   date.getDate() +
  //   " " +
  //   date.getHours() +
  //   ":" +
  //   date.getMinutes() +
  //   ":" +
  //   date.getSeconds();
  // data.task = date.getTime();

  // sysParams.version = "1.0";
  // sysParams.format = "json";
  // sysParams.flag = "dev_flag";

  let data = {};
  //合并对象
  Object.assign(data, sysParams, params);

  let keys = [];
  for (var k in data) {
    if (data.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  keys.sort();
  let paramsStr = "";
  for (var i = -0; i < keys.length; i++) {
    paramsStr += keys[i];
    paramsStr += data[keys[i]];
  }
  // let tmp = md5(paramsStr).toUpperCase() + API_BASE_TOKEN;
  // tmp = md5(tmp).toUpperCase();
  // data.sign = tmp;
  return data;
}
