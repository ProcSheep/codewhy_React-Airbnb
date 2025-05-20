// 这种转化麻烦的函数可以直接从standoverflow上面找,style转obj
function styleStrToObj(str){
  // 比如对于font-size->fontSize
  const obj = {}, s = str.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  }).replace(/;\s?$/g,"").split(/:|;/g);
  for (var i = 0; i < s.length; i += 2)
      obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"");
  return obj;
}

export default styleStrToObj