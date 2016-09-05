const colors = require('./color.json');

function colorCode(name) {
  return ['Black', 'Blue', 'Green', 'Cyan', 'Red', 'Magenta', 
    'Yellow', 'White', 'Gray', 'Light Blue', 'Light Green', 
    'Light Cyan', 'Light Red', 'Light Magenta', 'Light Yellow', 
    'Bright White'].indexOf(name);
}

console.log(`Windows Registry Editor Version 5.00`)
console.log(``);
console.log(`[HKEY_CURRENT_USER\\Console]`);

for (var c in colors) {
  var name = c;
  var rgb = colors[c];
  var code = colorCode(c);
  var code2 = ("0" + code).slice(-2);
  var hex = (rgb[2] << 16 | rgb[1] << 8 | rgb[0]).toString(16);
  console.log(`"ColorTable${code2}"=dword:00${hex}`);
}
