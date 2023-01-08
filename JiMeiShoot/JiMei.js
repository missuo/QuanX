/*
[rewrite_local]
# > Jimei Crack
^https?:\/\/www\.jimeiyuepai\.com\/user\/getUserInfoForHomepage url script-response-body https://raw.githubusercontent.com/missuo/QuanX/main/JiMeiShoot/JiMei.js
[mitm] 
hostname = www.jimeiyuepai.com
*/

var objc = JSON.parse($response.body);
phone = objc.message.sjh
username = objc.message.username
userid = objc.message.id
let new_name = phone + '('+ username + userid + ')'
objc.message.username = new_name
let body = JSON.stringify(objc)
$done({body});