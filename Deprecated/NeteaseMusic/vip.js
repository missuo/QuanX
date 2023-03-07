/*
[rewrite_local]
# > Unlimted VIP
^https?:\/\/interface\.music\.163\.com\/weapi\/pointmall\/product\/bought url script-response-body https://raw.githubusercontent.com/missuo/QuanX/main/NeteaseMusic/vip.js
[mitm] 
hostname = interface.music.163.com
*/

var objc = JSON.parse($response.body);
objc.data.validateResult.success = true;
objc.data.buyInfo.unlimted = true;
objc.data.buyInfo.limitCount = 10;
let body = JSON.stringify(objc)
$done({body});