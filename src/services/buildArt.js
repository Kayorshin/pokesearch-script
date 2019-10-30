const Jimp = require('jimp');
const path = require('path');
const ColorThief = require('color-thief-jimp');

const RGBToHex = (color) => {
  let { r, g, b } = color;
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length === 1) { r = `0${r}`; }
  if (g.length === 1) { g = `0${g}`; }
  if (b.length === 1) { b = `0${b}`; }

  return (`#${r}${g}${b}`);
};

const sumColors = (c1, c2) => {
  let c = '#';
  for (let i = 0; i < 3; i++) {
    const sub1 = c1.substring(1 + 2 * i, 3 + 2 * i);
    const sub2 = c2.substring(1 + 2 * i, 3 + 2 * i);
    const v1 = parseInt(sub1, 16);
    const v2 = parseInt(sub2, 16);
    const v = Math.floor((v1 + v2) / 2);
    const sub = v.toString(16).toUpperCase();
    const padsub = (`0${sub}`).slice(-2);
    c += padsub;
  }

  return c;
};

module.exports = async (pkm) => {
  const ref = path.resolve('src', 'import', 'background.jpg');
  const background = await Jimp.read(ref);
  const image = await Jimp.read(pkm.image);

  const colorCore = pkm.typeColor.length > 1
    ? sumColors(pkm.typeColor[0], pkm.typeColor[1])
    : pkm.typeColor[0];

  let predominantColor = await ColorThief.getColor(image);
  predominantColor = RGBToHex({
    r: predominantColor[0],
    g: predominantColor[1],
    b: predominantColor[2],
  });

  background.resize(480, 480).color([{ apply: 'mix', params: [colorCore, 60] }]);
  background.composite(image, 40, 40);

  Array.from(background.scanIterator(0, 0, 480, 480)).forEach((img) => {
    if (img.x < 480 && img.y < 15) {
      background.setPixelColor(Jimp.cssColorToHex(predominantColor), img.x, img.y);
    } else if (img.x < 15 && img.y <= 480) {
      background.setPixelColor(Jimp.cssColorToHex(predominantColor), img.x, img.y);
    } else if (img.x < 480 && img.y >= 465 && img.y <= 480) {
      background.setPixelColor(Jimp.cssColorToHex(predominantColor), img.x, img.y);
    } else if (img.y < 480 && img.x >= 465 && img.x <= 480) {
      background.setPixelColor(Jimp.cssColorToHex(predominantColor), img.x, img.y);
    }
  });

  await background.write(path.resolve('src', 'public', `${pkm.id}.jpg`));
};
