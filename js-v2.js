// Get the dropdown content
var dropdown = document.getElementById("dropdown");
// get the seats for the room
var allSeats = document.getElementsByClassName("seat");
//add event for when class is chosen from dropdown
dropdown.addEventListener('change', (event) => {
    students=[
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]',
        '[empty]'

    ];
    assignSeats(students);
    students = classes[event.target.value]
    assignSeats(students);
})

//Student data
var classes = {
    "class a": [
        "student 1",
        "student 2",
        "student 3",
        "student 4",
        "student 5",
        "student 6"
        ],
    "class b": [
        "student 1",
        "student 2",
        "student 3",
        "student 4",
        "student 5",
        "student 6"
        ]
};

//Rearranging Student List
function rearrange(studentList) {
  for (let index = studentList.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));

      const temporary = studentList[index];
      studentList[index] = studentList[randomPosition];
      studentList[randomPosition] = temporary;
  }
}


function assignSeats(studentList){
    for (let i = studentList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = studentList[i];
    studentList[i] = studentList[j];
    studentList[j] = temp;
}

    for (let i = 0; i < studentList.length; i++) {
        allSeats[i].innerHTML = studentList[i];
        
    }
}
