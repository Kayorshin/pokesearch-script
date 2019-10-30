const buildArt = require('./services/buildArt');
const typeList = require('./services/typeList');
const colorList = require('./services/colorList');

const run = async (i) => {
  const pokeJson = {
    image: `https://raw.githubusercontent.com/tiphedor/pokemon-db/master/sprites/${i}.png`,
    typeColor: typeList[i - 1].map((type) => colorList[type]),
    id: i,
  };

  console.log(`Construindo a arte do pokémon: ${pokeJson.id} de 807`);

  await buildArt(pokeJson);

  if (i < 807) run(i + 1);
};

run(1);
