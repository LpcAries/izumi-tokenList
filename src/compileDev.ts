//import { tokens } from "./tokens/tokensDev";
let tokens: any[] = new Array();
const fs = require('fs');
const path = require('path');
let temp: string[] = new Array();
function fileDisplay(filePath: string) {
      // 根据文件路径读取文件，返回一个文件列表
      const files = fs.readdirSync(filePath);
      // 遍历读取到的文件列表
      for (let filename of files) {
          // path.join得到当前文件的绝对路径
          const filepath = path.join(filePath, filename);
          // 根据文件路径获取文件信息
         const stats = fs.statSync(filepath);
         const isFile = stats.isFile(); // 是否为文件
         const isDir = stats.isDirectory(); // 是否为文件夹
         if (isFile) {
             temp.push(filepath);
         }
         if (isDir) {
             fileDisplay(filepath); // 递归，如果是文件夹，就继续遍历该文件夹里面的文件
         }
     };
 }
fileDisplay(path.join(__dirname,'../src/tokens'));
for(let curr_path of temp){
  const curr_data = require(curr_path);
  console.log(curr_data)
  //const curr_tokens = curr_data.tokens;
  //tokens = [...tokens,...curr_tokens];
}
console.log(temp)
console.log(JSON.stringify(tokens, null, '  '));