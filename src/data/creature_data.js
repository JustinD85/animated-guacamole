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
  },
  4: {
    name: 'Atlas',
    type: 'grass',
    health: 100,
    attacks: {
      lowAttack:(creature) => creature.health -= 10,
      midAttack : (creature) => creature.health -= 20,
      highAttack : (creature) => creature.health -= 30,
      specialAttack : function () { this.health += 50 },
    }
  },
  5: {
    name: 'Oceanus',
    type: 'water',
    health: 100,
    attacks: {
      lowAttack:(creature) => creature.health -= 10,
      midAttack : (creature) => creature.health -= 20,
      highAttack : (creature) => creature.health -= 30,
      specialAttack : function () { this.health += 50 },
    }
  },
  6: {
    name: 'Hemara',
    type: 'fire',
    health: 100,
    attacks: {
      lowAttack:(creature) => creature.health -= 10,
      midAttack : (creature) => creature.health -= 20,
      highAttack : (creature) => creature.health -= 30,
      specialAttack : function () { this.health += 50 },
    }
  },
  7: {
    name: 'Aether',
    type: 'air',
    health: 100,
    attacks: {
      lowAttack:(creature) => creature.health -= 10,
      midAttack : (creature) => creature.health -= 20,
      highAttack : (creature) => creature.health -= 30,
      specialAttack : function () { this.health += 50 },
    }
  }
}


export default creatures;