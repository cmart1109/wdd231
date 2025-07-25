const courseDetails = document.getElementById('course-details');


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.courses').addEventListener('click', function (e) {
        if (e.target && e.target.matches('div')) {
            const courseText = e.target.textContent;
            const [type, code] = courseText.split('-');
            const course = courses.find(c => c.type === type && c.code == code);
            if (course) {
                displayCourseDetails(course);
            }
        }
    });
});

function displayCourseDetails(course) {
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.type} ${course.code}</h2>
        <h3>${course.Name}</h3>
        <p><strong>Completed:</strong> ${course.Completed ? "Yes" : "No"}</p>
    `;
    courseDetails.showModal();
    document.getElementById("closeModal").addEventListener("click", () => {
        courseDetails.close();
    });
}