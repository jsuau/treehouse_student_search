var students = [ 
  { 
   name: 'Pablo',
    track: 'R',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Joanna',
    track: 'Front End Development',
    achievements: 175,
    points: 16375
  },
  {
    name: 'Daniel',
    track: 'PHP Development',
    achievements: 55,
    points: 2025
  },
  {
    name: 'Laura',
    track: 'Learn WordPress',
    achievements: 40,
    points: 1950
  },
  {
    name: 'Negura',
    track: 'Rails Development',
    achievements: 5,
    points: 350
  }
];

let i = students.length;

// prompt for a student name

while (i >= students.length) {

  const student = prompt("Type here the name of the student");
  student.toUpperCase();
  
  //search for the student
  
  for (i = 0; i < students.length; i ++) {
    
    if (student.toUpperCase() === students[i].name.toUpperCase()) {
    console.log(students[i].name);
    break;
      
    } 
  
  }

}





//if student exists, fetch their course data

