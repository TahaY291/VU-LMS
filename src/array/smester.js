const courseData = [
    {
        semester: 1,
        courses: [
            { code: "CS101", title: "Introduction to Computing", type: "Required", creditHours: 3, status: "Studied" },
            { code: "ENG101", title: "English Comprehension", type: "Required", creditHours: 3, status: "Studied" },
            { code: "ECO401", title: "Economics", type: "Elective", creditHours: 3, status: "--" },
            { code: "MGT211", title: "Introduction to Business", type: "Elective", creditHours: 3, status: "Studied" },
            { code: "MTH101", title: "Calculus and Analytical Geometry", type: "Required", creditHours: 3, status: "Studied" },
            { code: "PAK301", title: "Pakistan Studies", type: "Required", creditHours: 2, status: "Studied" },
            { code: "PHY101", title: "Physics", type: "Required", creditHours: 3, status: "Studied" },
            { code: "VU001", title: "Introduction to e-Learning", type: "Required", creditHours: 1, status: "Studied" },
        ],
    },
    {
        semester: 2,
        courses: [
            { code: "CS201", title: "Introduction to Programming", type: "Required", creditHours: 3, status: "Studied" },
            { code: "CS201P", title: "Introduction to Programming (Practical)", type: "Required", creditHours: 1, status: "Studied" },
            { code: "ENG201", title: "Business and Technical English Writing", type: "Required", creditHours: 3, status: "Studied" },
            { code: "ETH202", title: "Ethics (for Non-Muslims)", type: "Elective", creditHours: 2, status: "--" },
            { code: "ISL202", title: "Islamic Studies", type: "Elective", creditHours: 2, status: "--" },
        ],
    },
    {
        semester: 3,
        courses: [
            { code: "CS301", title: "Data Structures", type: "Required", creditHours: 3, status: "Studied" },
            { code: "MTH203", title: "Linear Algebra", type: "Required", creditHours: 3, status: "Studied" },
            { code: "ACC101", title: "Financial Accounting", type: "Elective", creditHours: 3, status: "Studied" },
            { code: "ENG301", title: "Advanced Communication Skills", type: "Required", creditHours: 3, status: "Studied" },
            { code: "STAT201", title: "Statistics", type: "Elective", creditHours: 3, status: "Studied" },
        ],
    },
    {
        semester: 4,
        courses: [
            { code: "CS401", title: "Object-Oriented Programming", type: "Required", creditHours: 3, status: "Studied" },
            { code: "CS401P", title: "Object-Oriented Programming (Practical)", type: "Required", creditHours: 1, status: "Studied" },
            { code: "MTH204", title: "Discrete Mathematics", type: "Required", creditHours: 3, status: "Studied" },
            { code: "CS305", title: "Software Engineering", type: "Required", creditHours: 3, status: "Studied" },
            { code: "SOC101", title: "Introduction to Sociology", type: "Elective", creditHours: 3, status: "Studied" },
        ],
    },
    {
        semester: 5,
        courses: [
            { code: "CS501", title: "Database Management Systems", type: "Required", creditHours: 3, status: "In Progress" },
            { code: "CS502", title: "Computer Networks", type: "Required", creditHours: 3, status: "In Progress" },
            { code: "CS503", title: "Operating Systems", type: "Required", creditHours: 3, status: "In Progress" },
            { code: "HUM201", title: "Professional Ethics", type: "Elective", creditHours: 2, status: "In Progress" },
            { code: "CS504", title: "Web Development", type: "Required", creditHours: 3, status: "In Progress" },
        ],
    },
    {
        semester: 6,
        courses: [
            { code: "CS601", title: "Artificial Intelligence", type: "Required", creditHours: 3, status: "Planned" },
            { code: "CS602", title: "Mobile Application Development", type: "Elective", creditHours: 3, status: "Planned" },
            { code: "CS603", title: "Cloud Computing", type: "Elective", creditHours: 3, status: "Planned" },
            { code: "MGT302", title: "Entrepreneurship", type: "Elective", creditHours: 3, status: "Planned" },
            { code: "CS604", title: "Human-Computer Interaction", type: "Required", creditHours: 3, status: "Planned" },
        ],
    },
    {
        semester: 7,
        courses: [
            { code: "CS701", title: "Big Data Analytics", type: "Elective", creditHours: 3, status: "Planned" },
            { code: "CS702", title: "Cybersecurity", type: "Required", creditHours: 3, status: "Planned" },
            { code: "CS703", title: "Machine Learning", type: "Elective", creditHours: 3, status: "Planned" },
            { code: "CS704", title: "Software Project Management", type: "Required", creditHours: 3, status: "Planned" },
            { code: "HUM301", title: "Organizational Behavior", type: "Elective", creditHours: 3, status: "Planned" },
        ],
    },
    {
        semester: 8,
        courses: [
            { code: "CS801", title: "Final Year Project I", type: "Required", creditHours: 3, status: "Planned" },
            { code: "CS802", title: "Final Year Project II", type: "Required", creditHours: 3, status: "Planned" },
            { code: "CS803", title: "Advanced Web Technologies", type: "Elective", creditHours: 3, status: "Planned" },
            { code: "CS804", title: "Blockchain Technologies", type: "Elective", creditHours: 3, status: "Planned" },
            { code: "MKT401", title: "Digital Marketing", type: "Elective", creditHours: 3, status: "Planned" },
        ],
    },
];
export default courseData;
