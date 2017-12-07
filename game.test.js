expect = require("chai").expect;
should = require("chai").should();
_ = require("lodash");
// Warrior = require("./game").Warrior;
// Armour = require("./game").Armor;
// Weapon = require("./game").Weapon;
const {
  Warrior,
  Weapon,
  Armor
} = require("./game");

describe("Test", () => {
  it("true to be true", () => {
    true.should.be.true;
  });
})

describe("Test Armour class", () => {
  describe("Test calculatebonus function", () => {
    it("Bonus shouldnt be 0", () => {
      var spineArmor = new Armor("Spine Armor", 6);
      var spineChain = new Weapon("Spine Chain", 5);
      Scorpion = new Warrior("Scorpion", 7, 7, [spineArmor, spineChain]);
      // console.log(Scorpion.armorBonus);
      expect(Scorpion.armorBonus).not.be.equal(0);
    });
  });
});