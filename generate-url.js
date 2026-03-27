var url = process.argv[2];
if (!url) { console.log('Usage: node generate-url.js https://YOUR-PROJECT.firebaseapp.com'); process.exit(1); }
url = url.replace(/\/+$/, '');
var b64 = Buffer.from(url).toString('base64');
var arr = [];
for (var i = 0; i < b64.length; i++) arr.push(b64.charCodeAt(i));
console.log('Replace the _a array in index.html with:');
console.log('var _a=[' + arr.join(',') + '];');
