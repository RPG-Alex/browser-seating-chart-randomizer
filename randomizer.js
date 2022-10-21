// Get the dropdown content
var dropdown = document.getElementById("dropdown");
// get the seats for the room
var allSeats = document.getElementsByClassName("seat");
// get the randomise button
var randomise = document.getElementById("randomise");
// get the clear button
var clear = document.getElementById("clear");
//add event for when the randomise button is clicked 
randomise.addEventListener('click', (event) => {
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
    students = classes[dropdown.value]
    assignSeats(students);
})

// add event for when the clear button is clicked which makes all the seats empty again
clear.addEventListener('click',  (event) => {
    students = [
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


function assignSeats(studentList,times_shuffule){
    for(let n = 0; n<times_shuffule;++n){
        rearrange(studentList);
    }
    for (let i = 0; i < studentList.length; i++) {
        allSeats[i].innerHTML = studentList[i];
    }
}
