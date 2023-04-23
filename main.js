/*
  - Below I will take my first shoot at the school catalouge project with no help.
*/
// This is the parent class for primary, middle, and highschool classes
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level; // My first mistake was assigning the constructor name to an array.
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(val) {
    if (typeof numberOfStudents === 'number' ) {
      this._numberOfStudents = val;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  } // Again, I am not sure if I used the setter method correctly... // I did not set these correctly

  // Here under the getters I will make a method to log quickFacts()
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  // Below will be the static method named pickSubstitureTeacher
  static pickSubstituteTeacher(substituteTeachers) {
    const random = Math.floor(Math.random() * (substituteTeachers.length));
    return substituteTeachers[random];
    /*this._pickSubstituteTeachers = [];
    Math.floor(pickSubstituteTeacher.length * Math.random()); Original code*/
  }

  // Above are three getter methods for name, level, and #ofStudents...
};

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
  }
} // In the Middle constructor I added level to the arg

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
    return (this._sportsTeams);
  }
};

const lorraineHansbury = new Primary ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'); // A new instance 
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;