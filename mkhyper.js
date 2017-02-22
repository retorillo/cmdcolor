const colors = require('./color.json');

function capitalize(name) {
  return name[0].toUpperCase() + name.substr(1).toLowerCase();
}

function lowerCamelCase(name) {
  switch(name) {
    case 'Bright White':
      return 'lightWhite';
    case 'Gray':
      return 'lightBlack';
    default:
      var words = [];
      for (n of name.split(/\s+/))
        words.push( words.length > 0 ? capitalize(n) : n.toLowerCase());
      return words.join('')
  }
}

for (var c in colors) {
  var name = lowerCamelCase(c);
  var rgb = colors[c];
  var hex = (rgb[0] << 16 | rgb[1] << 8 | rgb[2]).toString(16);
  console.log(`${name}:'#${hex}',`);
}
