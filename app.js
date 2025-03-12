// Pre-prepared scholarships with multiple colleges in each country for each study area
const scholarships = {
    computerScience: [
        { 
            name: "Tech Innovators Scholarship", 
            university: "Oxford University", 
            gpaMin: 3.5, 
            description: "A scholarship for Computer Science students with a GPA of 3.5 or higher.", 
            countries: ["UK"],
            website: "https://www.ox.ac.uk/news/2023-10-12-scholarship-programme-innovators-future-launched"
        },
        {
            name: "Silicon Valley Computer Science Grant",
            university: "Stanford University",
            gpaMin: 3.8,
            description: "A prestigious scholarship for students in Computer Science.",
            countries: ["US"],
            website: "https://globalscholarships.stanford.edu/scholarship-opportunities"
        },
        {
            name: "Canada Future Leaders Scholarship",
            university: "University of Toronto",
            gpaMin: 3.6,
            description: "A scholarship for outstanding Computer Science students in Canada.",
            countries: ["Canada"],
            website: "https://future.utoronto.ca/finances/awards/admission-awards/"
        }
    ],
    
    engineering: [
        { 
            name: "Imperial Engineering Excellence Award", 
            university: "Imperial College London", 
            gpaMin: 3.6, 
            description: "For high-achieving students in Engineering disciplines.", 
            countries: ["UK"],
            website: "https://www.imperial.ac.uk/computing/prospective-students/prizes/"
        },
        {
            name: "MIT Engineering Leadership Award",
            university: "Massachusetts Institute of Technology",
            gpaMin: 3.8,
            description: "A scholarship for future engineering leaders.",
            countries: ["US"],
            website: "https://engineering.mit.edu/students/awards/"
        },
        {
            name: "Waterloo Engineering Talent Grant",
            university: "University of Waterloo",
            gpaMin: 3.7,
            description: "Supporting the brightest engineering students.",
            countries: ["Canada"],
            website: "https://uwaterloo.ca/hire/funding-opportunities"
        }
    ],

    medicine: [
        { 
            name: "UK Medical Future Grant", 
            university: "University of Oxford", 
            gpaMin: 3.7, 
            description: "For students excelling in medical studies and research.", 
            countries: ["UK"],
            website: "https://www.ukri.org/opportunity/"
        },
        {
            name: "Harvard Medicine Scholars Program",
            university: "Harvard University",
            gpaMin: 3.8,
            description: "Funding for exceptional medical students.",
            countries: ["US"],
            website: "https://ghsm.hms.harvard.edu/education/scholars-medicine#:~:text=The%20Scholars%20in%20Medicine%20program,with%20members%20of%20the%20faculty."
        },
        {
            name: "McGill Medical Research Fellowship",
            university: "McGill University",
            gpaMin: 3.7,
            description: "Supporting future doctors and medical researchers.",
            countries: ["Canada"],
            website: "https://www.mcgill.ca/pgme/fellowships-afc/fellowship-programs"
        }
    ],

    business: [
        {
            name: "LSE Business Excellence Award",
            university: "London School of Economics",
            gpaMin: 3.5,
            description: "For students pursuing business and finance degrees.",
            countries: ["UK"],
            website: "https://www.lse.ac.uk/study-at-lse/Graduate/fees-and-funding/lse-masters-awards"
        },
        {
            name: "Wharton Future Business Leaders Scholarship",
            university: "University of Pennsylvania (Wharton)",
            gpaMin: 3.6,
            description: "For top business students with leadership potential.",
            countries: ["US"],
            website: "https://globalyouth.wharton.upenn.edu/programs-courses/future-of-the-business-world/"
        },
        {
            name: "Rotman Business Innovation Grant",
            university: "University of Toronto (Rotman School)",
            gpaMin: 3.6,
            description: "Scholarship for aspiring business professionals.",
            countries: ["Canada"],
            website: "https://www.rotman.utoronto.ca/programs/professional-development-programs/executive-programs/programs-for-individuals/funding-resources/"
        }
    ],

    law: [
        {
            name: "Cambridge Law Scholarship",
            university: "University of Cambridge",
            gpaMin: 3.7,
            description: "For students with a passion for law and justice.",
            countries: ["UK"],
            website: "https://llm.law.cam.ac.uk/finance/law-specific-faculty-and-cambridge-trust-funding"
        },
        {
            name: "Harvard Law Fellowship",
            university: "Harvard University",
            gpaMin: 3.8,
            description: "A prestigious award for future lawyers.",
            countries: ["US"],
            website: "https://harvard.https://hls.harvard.edu/academics/fellowships-and-prizes/fellowships/edu/law-fellowship"
        },
        {
            name: "Osgoode Law Excellence Award",
            university: "York University (Osgoode Hall Law School)",
            gpaMin: 3.6,
            description: "For students in Canada pursuing legal studies.",
            countries: ["Canada"],
            website: "httpshttps://www.osgoode.yorku.ca/programs/juris-doctor/access-and-support/financial-services/funding-sources/scholarships-awards-and-prizes/medals-awards-prizes/#:~:text=The%20Jack%20Walker%20QC%20Award,their%20courtesy%2C%20honesty%20and%20integrity://osgoode.yorku.ca/law-scholarship"
        }
    ],

    arts: [
        {
            name: "Royal Academy of Arts Scholarship",
            university: "Royal Academy of Arts London",
            gpaMin: 3.4,
            description: "For students pursuing creative and fine arts degrees.",
            countries: ["UK"],
            website: "https://royalacademy.achttps://www.rca.ac.uk/study/apply-to-study/funding-your-studies/rca-scholarships-and-awards/.uk/arts-scholarship"
        },
        {
            name: "NYU Tisch School of the Arts Grant",
            university: "New York University (Tisch)",
            gpaMin: 3.5,
            description: "For students in performing arts and visual media.",
            countries: ["US"],
            website: "https://tisch.https://tisch.nyu.edu/performance-studies/resources/grants.htmlnyu.edu/arts-scholarship"
        },
        {
            name: "Emily Carr Fine Arts Award",
            university: "Emily Carr University of Art + Design",
            gpaMin: 3.4,
            description: "Scholarship for artists in Canada.",
            countries: ["Canada"],
            website: "httpshttps://www.ecuad.ca/student-life/financial-aid-awards/graduation-awards/list-of-grad-awards://ecuad.ca/fine-arts-award"
        }
    ]
};

document.getElementById("scholarForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user inputs
    const name = document.getElementById("name").value;
    const gpa = parseFloat(document.getElementById("gpa").value);
    const studyArea = document.getElementById("studyArea").value;
    const country = document.getElementById("country").value;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Check if valid inputs are provided
    if (!name || isNaN(gpa) || !studyArea || !country) {
        resultsDiv.innerHTML = "<p>Please fill out all the fields.</p>";
        return;
    }

    // Get the scholarships for the selected study area
    const scholarshipsForArea = scholarships[studyArea] || [];
    let filteredScholarships = scholarshipsForArea;

    // If 'Anywhere' is selected, include scholarships from all countries
    if (country !== "anywhere") {
        filteredScholarships = scholarshipsForArea.filter(scholarship => scholarship.countries.includes(country));
    }

    // Filter scholarships by GPA
    filteredScholarships = filteredScholarships.filter(scholarship => gpa >= scholarship.gpaMin);

    if (filteredScholarships.length === 0) {
        resultsDiv.innerHTML = "<p>No scholarships found. Don't worry, work on your GPA and we'll find you the best scholarships out there!</p>";
    } else {
        // Display the scholarships
        filteredScholarships.forEach(scholarship => {
            const scholarshipDiv = document.createElement("div");
            scholarshipDiv.classList.add("scholarship");

            scholarshipDiv.innerHTML = `
                <h2>${scholarship.name}</h2>
                <p><strong>Location:</strong> ${scholarship.countries.join(", ")}</p>
                <p><strong>Minimum GPA:</strong> ${scholarship.gpaMin}</p>
                <p><strong>Website:</strong> <a href="${scholarship.website}" target="_blank">${scholarship.website}</a></p>
            `;

            resultsDiv.appendChild(scholarshipDiv);
        });
    }
});
