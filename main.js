/*
  - Below I will take my first shoot at the school catalouge project with no help.
*/
// This is the parent class for primary, middle, and highschool classes
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = ['primary', 'middle', 'high'];
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
  // Above are three getter methods for name, level, and #ofStudents...
  set numberOfStudents(numberOfStudents) {
    if (typeof numberOfStudents === 'string' ) {
      this._numberOfStudents = numberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  } // Again, I am not sure if I used the setter method correctly...
}

class Primary extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name) {
    super(name, level, numberOfStudents);
  }
}

class High extends School {
  constructor(name) {
    super(name, level, numberOfStudents);
    this._sportsTeams = ['Falcons', 'Eagles', 'Panthers'];
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}