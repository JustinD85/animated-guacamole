const creatures = {
  0: {
    name: 'Mio',
    type: 'fire',
    health: 120,
    attacks: {
      lowAttack:(creature) => creature.health -= 10,
      midAttack : (creature) => creature.health -= 20,
      highAttack : (creature) => creature.health -= 30,
      specialAttack : function () { this.health += 50 },
    }
  },
  1: {
    name: 'Turnip',
    type: 'water',
    health: 110,
    attacks: {
      lowAttack:(creature) => creature.health -= 10,
      midAttack : (creature) => creature.health -= 20,
      highAttack : (creature) => creature.health -= 30,
      specialAttack : function () { this.health += 50 },
    }
  },
  2: {
    name: 'Mango',
    type: 'grass',
    health: 90,
    attacks: {
      lowAttack:(creature) => creature.health -= 10,
      midAttack : (creature) => creature.health -= 20,
      highAttack : (creature) => creature.health -= 30,
      specialAttack : function () { this.health += 50 },
    }
  },
  3: {
    name: 'Kuru',
    type: 'air',
    health: 130,
    attacks: {
      lowAttack:(creature) => creature.health -= 10,
      midAttack : (creature) => creature.health -= 20,
      highAttack : (creature) => creature.health -= 30,
      specialAttack : function () { this.health += 50 },
    }
  }
}


export default creatures;