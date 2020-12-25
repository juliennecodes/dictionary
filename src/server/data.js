class Word{
  constructor(word, definition){
    this.word = word;
    this.definition= definition;
  }
}

const vinegar =   new Word("vinegar", "a sour-tasting liquid containing acetic acid, obtained by fermenting dilute alcoholic liquids, typically wine, cider, or beer, and used as a condiment or for pickling.");
const cake =  new Word("cake", "an item of soft, sweet food made from a mixture of flour, shortening, eggs, sugar, and other ingredients, baked and often decorated.");
const coffee = new Word("coffee", "a hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.");
const octopus = new Word("octopus","a cephalopod mollusc with eight sucker-bearing arms, a soft body, strong beaklike jaws, and no internal shell.");
const book = new Word("book", "a written or printed work consisting of pages glued or sewn together along one side and bound in covers.");

const dictionary = {
  vinegar,
  cake,
  coffee,
  octopus,
  book,
}

module.exports = {dictionary};
