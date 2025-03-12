// Handle form submission to filter scholarships based on user input
document.getElementById("scholarForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const gpa = parseFloat(document.getElementById("gpa").value);
    const studyArea = document.getElementById("studyArea").value;

    // Get the scholarships based on the selected study area
    let results = scholarships[studyArea].filter(scholarship => gpa >= scholarship.gpaMin);

    displayResults(results);
});

// Function to display the scholarship results
function displayResults(results) {
    const resultContainer = document.getElementById("results");
    resultContainer.innerHTML = "";

    if (results.length > 0) {
        results.forEach(scholarship => {
            const div = document.createElement("div");
            div.classList.add("result");
            div.innerHTML = `
                <h3>${scholarship.name}</h3>
                <p>University: ${scholarship.university}</p>
                <p>GPA Requirement: ${scholarship.gpaMin}</p>
                <p>Description: ${scholarship.description}</p>
                <a href="${scholarship.website}" target="_blank">Learn More</a>
            `;
            resultContainer.appendChild(div);
        });
    } else {
        resultContainer.innerHTML = "<p>Don't worry, work on your grades and we'll find you the best scholarships out there!</p>";
    }
}
