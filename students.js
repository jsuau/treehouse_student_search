var students = [ 
  { 
   name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

// prompt for a student name

const student = prompt("Type here the name of the student");

//search for the student

console.log(student);
console.log(students[0].name);

for (i = 0; i <= students.length; i ++) {
  console.log(students[i].name);
  
  if (student == students[0].name) {
  console.log("yes");
  } else {
  console.log("no");
}
}




//if student exists, fetch their course data
