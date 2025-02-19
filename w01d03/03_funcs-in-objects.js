let myDog = {
  breed: 'labrador',
  color: 'white',
  goForWalk: function(distance) {
    console.log(`we went for a ${distance}km long walk`);
  },
  talkAboutMe: function() {
    this.breed
    console.log(`I am a ${this.breed} and my color is ${this.color}`);
  },
  anotherObj: {
    otherKey: 'other value',
    myFunc: function() {
      console.log(this);
    }
  }
};

// arrow functions DO NOT create `this`

this

const copy = myDog; // copying the valet ticket
myDog = null;

copy.talkAboutMe();
