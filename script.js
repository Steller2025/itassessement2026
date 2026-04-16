function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Fill all required fields");
        return false;
    }

    return true;
}

let images = [
    "images/robot1.jpg",
    "images/robot2.jpg",
    "images/robot3.jpg"
];

let index = 0;

function showSlide() {
    let slide = document.getElementById("slide");
    slide.src = images[index];
}

function nextSlide() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showSlide();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showSlide();
}

let projectImages = [
    ["images/arm1.jpg", "images/arm2.jpg"],
    ["images/vision1.jpg", "images/vision2.jpg"],
    ["images/line.jpg", "images/line2.jpg" ]
];

let indexes = [0, 0, 0];

function showProject(i) {
    document.getElementById("p" + i).src = projectImages[i][indexes[i]];
}

function nextProject(i) {
    indexes[i]++;
    if (indexes[i] >= projectImages[i].length) {
        indexes[i] = 0;
    }
    showProject(i);
}

function prevProject(i) {
    indexes[i]--;
    if (indexes[i] < 0) {
        indexes[i] = projectImages[i].length - 1;
    }
    showProject(i);
}