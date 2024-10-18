// Array of courses with details
const courses = [
    {
        title: "Introduction to Web Development",
        instructor: "John Doe",
        description: "Learn the basics of web development.",
        category: "web-development",
        level: "beginner",
        image: "assets/images/cr.png"
    },
    {
        title: "Data Science Bootcamp",
        instructor: "Jane Smith",
        description: "Become a data scientist with hands-on projects.",
        category: "data-science",
        level: "intermediate",
        image: "assets/images/cr.png"
    },
    {
        title: "Advanced Graphic Design",
        instructor: "Alex Brown",
        description: "Master advanced design tools and techniques.",
        category: "design",
        level: "advanced",
        image: "assets/images/cr2.png"
    },
    // More courses...
];

// Function to display courses in the catalog
function displayCourses(filteredCourses) {
    const courseContainer = document.getElementById('courseContainer');
    courseContainer.innerHTML = ''; // Clear previous courses

    // Loop through the filtered courses and create course cards
    filteredCourses.forEach(course => {
        const courseCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${course.image}" class="card-img-top" alt="${course.title}">
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text">${course.description}</p>
                        <p class="text-muted">Instructor: ${course.instructor}</p>
                    </div>
                </div>
            </div>`;
        courseContainer.insertAdjacentHTML('beforeend', courseCard);
    });
}

// Initial display of all courses
displayCourses(courses);

// Filter by category and level
document.getElementById('categoryFilter').addEventListener('change', filterCourses);
document.getElementById('levelFilter').addEventListener('change', filterCourses);

// Search functionality
document.getElementById('searchBar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
    );
    displayCourses(filteredCourses);
});

function filterCourses() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const selectedLevel = document.getElementById('levelFilter').value;

    let filteredCourses = courses;

    // Filter by category
    if (selectedCategory) {
        filteredCourses = filteredCourses.filter(course => course.category === selectedCategory);
    }

    // Filter by level
    if (selectedLevel) {
        filteredCourses = filteredCourses.filter(course => course.level === selectedLevel);
    }

    // Display the filtered courses
    displayCourses(filteredCourses);
}
