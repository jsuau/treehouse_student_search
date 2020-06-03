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
let html = '';

function print(message) {
  let divOutput = document.getElementById('output');
  divOutput.innerHTML = message;
}

// prompt for a student name

while (i >= students.length) {

  const student = prompt("Type here the name of the student");
  student.toUpperCase();
  
  //search for the student
  
  for (i = 0; i < students.length; i ++) {
    
    if (student.toUpperCase() === students[i].name.toUpperCase()) {
      html += '<h2>' + students[i].name + '</h2>';
      html += '<p>' + 'Track: ' + students[i].track + '</p>';
      html += '<p>' + 'Achievements: ' + students[i].achievements + '</p>';
      html += '<p>' + 'Points: ' + students[i].points + '</p>';
      print(html);
    break;
      
    } 
  
  }

}





//if student exists, fetch their course data

