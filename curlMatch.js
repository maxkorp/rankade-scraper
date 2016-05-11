var cp = require('child_process');
var _cmd = "curl 'https://rankade.com/ajax/getMatchDetails' -s -H 'Cookie: cookies_enabled=1; cookies_policy_accepted=1; showed_join_us_modal=1; rvrm=1; rgk=3c9e87c661e610ceaf87e1eab482062f; rankade=NopaXmm3c7HQcT7k4XGcd1; _pk_ref.2.e729=%5B%22%22%2C%22%22%2C1455228418%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; _ga=GA1.2.1103149746.1445614887; _pk_id.2.e729=df8525fb537bb4d8.1445614887.32.1455230119.1455228418.; _pk_ses.2.e729=*' -H 'Origin: https://rankade.com' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-US,en;q=0.8' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.103 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: text/plain, */*; q=0.01' -H 'Referer: https://rankade.com/' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' -H 'DNT: 1' --data 'm={{alphaID}}&t=n9&p=0E' --compressed"

module.exports = function doCurl(alphaID) {

  var cmd = _cmd.replace('{{alphaID}}', alphaID);
  var page = cp.execSync(cmd).toString();
  return page;
}
