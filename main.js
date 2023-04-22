/*
  - Below I will take my first shoot at the school catalouge project with no help.
*/
// This is the parent class for primary, middle, and highschool classes
class School {
  constructor(name) {
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
    this._numberOfStudents = numberOfStudents;
  } // Again, I am not sure if I used the setter method correctly...
}

class Primary extends School {
  constructor(name) {

  }
}

class Middle extends School {
  constructor(name) {

  }
}

class High extends School {
  constructor(name) {

  }
}