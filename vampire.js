class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.creator = null;
    this.offspring = [];
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVamps = 0;
    let currentVamp = this;

    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfVamps ++;
    }
    return numberOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let thisVamp = this.numberOfVampiresFromOriginal;
    let otherVamp = vampire.numberOfVampiresFromOriginal;
    if (thisVamp < otherVamp) {
      return true;
    } else {
      return false;
    }
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this.name;
    }
    for (const vamp of this.offspring){
      vampireWithName(name);
    }
    return null;

      // for (const vamp of this.offspring) {
      //   // console.log("VAMP:", vamp);
      //   // console.log("THIS.name : ", this.name);
      //   if (vamp === this.name) {
      //     // console.log("vamp @ this.name in if: ", this.name);
      //     return this.vampireWithName(this.name);
      //   }
      //   return null;
      // }

      // this.offspring.forEach((name, i) => {
    //   if (name === this.offspring[i]) {
    //     // return true;
    //     vampireWithName(name);
    //   }
    //   return false;
    // });

        // let allVamps = [];
    // if (allVamps) {
    //   if (this.name === name){
    //     allVamps.push(this);
    //     console.log("FIRST allvamps: ", allVamps);
    //   }
    //   for (const vamp of this.offspring){
    //     const vampsWithMatchedName = vamp.vampireWithName(name);
    //     allVamps = allVamps.concat(vampsWithMatchedName);
    //     return allVamps;
    //   }
    // } //else {
    //   return null;
    // }
      // return allVamps;

      // for (const vamp of this.offspring){
      //   console.log("first VAMP: ", vamp);
      //   if (this.name === name) {
      //     console.log("VAMP with name", vamp.vampireWithName(vamp[name]));
      //     return vamp.vampireWithName(name);
      //   }
      //   return null;
      // }
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

