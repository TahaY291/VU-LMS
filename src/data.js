// import video from './assets/video.mp4'
// const courses = [
//     {
//     title: "Introduction to JavaScript",
//     heading: "Learn the basics of JavaScript",
//     creditHours: 3,
//     teacher: {
//         img: "teacher1.jpg",
//         name: "John Doe",
//         education: "MSc in Computer Science",
//         university: "University of California",
//     },
//     lectures: [
        
//         {
//             video: `${video}`,
//             reading: "JavaScript Basics.pdf",
//             heading: "Learn the basics of JavaScript",
//             questions: [
//             { 
//                 question: "What is JavaScript?", 
//                 answer: "JavaScript is a programming language used to make web pages interactive." 
//             },
//             { 
//                 question: "What are variables in JavaScript?", 
//                 answer: "Variables are used to store data values in JavaScript." 
//             },
//             ],
//         },
//         {
//             video: `${video}`,
//             reading: "JavaScript Functions.pdf",
//             questions: [
//             { 
//                 question: "What is a function in JavaScript?", 
//                 answer: "A function is a block of code designed to perform a particular task." 
//             },
//             { 
//                 question: "How do you declare a function?", 
//                 answer: "Functions are declared using the `function` keyword followed by a name and parentheses." 
//             },
//             ],
//         },
//         ],
//     },
//     {
//         title: "Advanced CSS",
//         heading: "Master CSS for Modern Web Design",
//         creditHours: 2,
//         teacher: {
//         img: "teacher2.jpg",
//         name: "Jane Smith",
//         education: "M.A. in Web Design",
//         university: "Massachusetts Institute of Technology",
//         },
//         lectures: [
//         {
//             video: "https://www.youtube.com/watch?v=wA8cKNuDHcY",
//             reading: "CSS Grid and Flexbox.pdf",
//             heading: "Master CSS for Modern Web Design",
//             questions: [
//             { 
//                 question: "What is CSS Grid?", 
//                 answer: "CSS Grid is a layout system designed for creating web page layouts." 
//             },
//             { 
//                 question: "How does Flexbox work?", 
//                 answer: "Flexbox is a one-dimensional layout method for arranging items in rows or columns." 
//             },
//             ],
//         },
//         {
//             video: "https://www.youtube.com/watch?v=wA8cKNuDHcY",
//             reading: "Responsive Design Principles.pdf",
//             questions: [
//             { 
//                 question: "What is responsive design?", 
//                 answer: "Responsive design ensures web pages look good on all devices." 
//             },
//             { 
//                 question: "What are media queries?", 
//                 answer: "Media queries allow CSS to apply styles depending on the device's screen size." 
//             },
//             ],
//         },

//     ],
//     },
// ];
import video1 from './assets/lecture1,1.mp4'
import video2 from './assets/lecture1,2 (1).mp4'
import video3 from './assets/lecture1,3.mp4'
import video4 from './assets/lecture1,4.mp4'
import video5 from './assets/lecture1,5.mp4'
const courses = [
    {
        title: "Introduction to Programming",
        heading: "Welcome to the Programming World!",
        creditHours: 3,
        teacher: 
            {
                img: "teacher1.jpg",
                name: "Dr. John Doe",
                education: "Ph.D. in Computer Science",
                university: "Stanford University"
            },
        lectures: [
            {
                video: video1,
                name: "Introduction to Programming Concepts",
                reading: "            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex! Tempore ab accusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "What is Programming?",
                questions: [
                    { question: "What is an algorithm?", answer: "A step-by-step procedure for solving a problem." },
                    { question: "What is a programming language?", answer: "A formal language used to give instructions to a computer." }
                ]
            },
            {
                video: video2,
                name: "Variables and Data Types",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex! Tempore ab accusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "Understanding Variables",
                questions: [
                    { question: "What is a variable?", answer: "A named storage location for data in a computer program." },
                    { question: "What are the common data types?", answer: "Integers, floats, strings, booleans, etc." }
                ]
            },
            {
                video: video3,
                name: "Operators and Expressions",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex! Tempore ab accusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex! Tempore ab accusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "Manipulating Data",
                questions: [
                    { question: "What are arithmetic operators?", answer: "Operators like +, -, *, /, % used for mathematical calculations." },
                    { question: "What is the difference between assignment and comparison operators?", answer: "Assignment operators assign values to variables, while comparison operators check for equality or inequality." }
                ]
            },
            {
                video: video4,
                name: "Control Flow: If-Else Statements",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque namsndkasjdas kj as daksj d askdja sdaksn dsakjd wqkjndewqn akjsndoiw dmasndkasj askn daksjndas mdn skand sad askjdnkjas daksjd ask daks dkas dkjnsakj daskdasj daskjd sak dsakdj askd aksj dksad ksaj dasj dask jdaksjd askj dsakj daksj dsak jdaskjemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex! Tempore ab accusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "Making Decisions",
                questions: [
                    { question: "What does an if-else statement do?", answer: "It allows the program to execute different blocks of code based on a condition." },
                    { question: "What is a nested if-else statement?", answer: "An if-else statement within another if-else statement." }
                ]
            },
            {
                video: video5,
                name: "Control Flow: Loops",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaqa aksndsa kasjnas kajs as a s as nka s asknkj as  aksndas kdnasndka sd askjndkas dasue, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex! Tempore ab accusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "Repeating Actions",
                questions: [
                    { question: "What is a loop?", answer: "A block of code that repeats a specific number of times or until a certain condition is met." },
                    { question: "What are the different types of loops?", answer: "For loop, while loop, do-while loop." }
                ]
            },
            {
                video: "https://media.istockphoto.com/id/1198474553/video/landscape-at-snowdonia-national-park-in-wales-uk-crane-shot.mp4?s=mp4-640x640-is&k=20&c=cMhMPgAPc9vU52PWxWxNxgnR0zAXOMabqk1Df4qyj7s=",
                name: "Functions",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam nat, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "Reusability and Modularity",
                questions: [
                    { question: "What is a function?", answer: "A block of code that performs a specific task and can be reused." },
                    { question: "What are parameters and arguments?", answer: "Parameters are placeholders for values passed to a function, while arguments are the actual values passed." }
                ]
            },
            {
                video: "https://www.shutterstock.com/shutterstock/videos/3477068521/preview/stock-footage-top-view-cargo-container-ship-the-ocean-ship-carrying-container-and-running-for-import-export.webm",
                name: "Arrays",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Euoremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex! Tempore ab accusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "Collections of Data",
                questions: [
                    { question: "What is an array?", answer: "An ordered collection of elements of the same data type." },
                    { question: "How do you access elements in an array?", answer: "Using an index, which starts from 0." }
                ]
            },
            {
                video: "https://www.shutterstock.com/shutterstock/videos/3443839767/preview/stock-footage-motion-timelapse-pov-shot-from-modern-dubai-metro-running-alongside-the-sheikh-zayed-road-at-night.webm",
                name: "Strings",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto rccusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "Working with Text",
                questions: [
                    { question: "What is a string?", answer: "A sequence of characters." },
                    { question: "How can you manipulate strings?", answer: "Using string methods like concatenation, slicing, and searching." }
                ]
            },
            {
                video: "https://www.shutterstock.com/shutterstock/videos/3444612233/preview/stock-footage-motion-timelapse-pov-shot-from-modern-dubai-elevated-metro-system-running-alongside-the-sheikh.webm",
                name: "Object-Oriented Programming (OOP) Concepts",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex!ccusantium non omnis, facere laudantium quod harum saepe obcaecati at voluptate sunt? Minima alias cumque consectetur maxime itaque veritatis est nam cum assumenda odio deleniti modi, quia similique accusantium vel.",
                heading: "Understanding OOP",
                questions: [
                    { question: "What are the core principles of OOP?", answer: "Encapsulation, inheritance, polymorphism." },
                    { question: "What is a class?", answer: "A blueprint for creating objects." }
                ]
            },
            {
                video: "https://www.shutterstock.com/shutterstock/videos/1106297051/preview/stock-footage-network-architecture-and-cloud-computing-in-next-gen-information-technology-animation-rendering.webm",
                name: "Introduction to Algorithms and Data Structures",
                reading: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia labore numquam dignissimos amet, laborum ullam adipisci exercitationem illo repellat minus. Recusandae nisi cum ut perferendis saepe soluta qui voluptatem commodi temporibus delectus illo magni facere provident itaque, alias distinctio beatae voluptate impedit? Eum adipisci quibusdam aliquam quod unde! Omnis modi laboriosam, nisi sapiente doloremque nemo voluptates animi quidem, atque, nihil ullam natus inventore. Et architecto repellendus tempore ex! Tempore ab ",
                heading: "This is last chapter of this course.",
                questions: [
                    { question: "What is an algorithm?", answer: "A step-by-step procedure for solving a problem." },
                    { question: "What are some common data structures?", answer: "Arrays, linked lists, trees, graphs." }
                ]
            }
        ],
        assignments: [
            {
                SrNo: 1,
                title: "Assignment 1",
                assignmentFile: "assignment1.docx",
                dueDate: "2025-01-20", // ISO 8601 format (YYYY-MM-DD)
                totalMarks: 50
            },
            {
                SrNo: 2,
                title: "Assignment 2",
                assignmentFile: "assignment2.pdf",
                dueDate: "2025-01-27",
                totalMarks: 25
            },
            {
                SrNo: 3,
                title: "Assignment 3",
                assignmentFile: "midterm_exam.zip",
                dueDate: "2025-02-10",
                totalMarks: 100
            }
        ],
        gdb: [
            {
                no: 1,
                question: "Discuss the ethical implications of artificial intelligence in modern society.",
                totalMarks: 20,
                startDate: "2025-01-15",
                dueDate: "2025-01-25",
                status: "Open",
                submit: "Not Submitted",
                view: "View",
                result: "-"
            },
            {
                no: 2,
                question: "Analyze the impact of social media on mental health.",
                totalMarks: 15,
                startDate: "2025-02-01",
                dueDate: "2025-02-10",
                status: "Open",
                submit: "Not Submitted",
                view: "View",
                result: "-"
            },
            {
                no: 3,
                question: "Critically evaluate the role of globalization in the 21st century.",
                totalMarks: 25,
                startDate: "2025-03-05",
                dueDate: "2025-03-15",
                status: "Closed",
                submit: "Submitted",
                view: "View",
                result: "78%"
            }
        ],
        quizzes: [
            {
                no: 1,
                quizTitle: "Programming Fundamentals Quiz",
                readingDependency: "Chapter 1 & 2",
                startDate: "2025-01-10",
                dueDate: "2025-01-15",
                totalMarks: 20,
                quizStatus: "Closed",
                submitStatus: "Submitted",
                result: "18/20"
            },
            {
                no: 2,
                quizTitle: "Data Structures Quiz",
                readingDependency: "Chapter 3 & 4",
                startDate: "2025-01-25",
                dueDate: "2025-01-30",
                totalMarks: 15,
                quizStatus: "Open",
                submitStatus: "Not Submitted",
                result: "-"
            },
            {
                no: 3,
                quizTitle: "Control Flow Quiz",
                readingDependency: "Chapter 5",
                startDate: "2025-02-05",
                dueDate: "2025-02-10",
                totalMarks: 10,
                quizStatus: "Upcoming",
                submitStatus: "Not Applicable",
                result: "-"
            }
        ],
        announcements: [    
            {
                id: 1,
                title: "Welcome Students!",
                explanation: "Welcome to the Introduction to Programming course. I'm excited to embark on this learning journey with you. Please review the course syllabus carefully.",
                date: "2025-01-05"
            },
            {
                id: 2,
                title: "Lab Access Information",
                explanation: "Information regarding lab access, including timings and guidelines, is now available on the course website.",
                date: "2025-01-08"
            },
            {
                id: 3,
                title: "Assignment 1 Released",
                explanation: "Assignment 1, 'Programming Fundamentals Practice Problems', has been released. Please refer to the assignment section for details and submission guidelines.",
                date: "2025-01-10"
            },
            {
                id: 4,
                title: "Quiz 1 Approaching",
                explanation: "Quiz 1 on Programming Fundamentals is scheduled for January 15th. Please review the relevant lecture materials and reading assignments.",
                date: "2025-01-12"
            },
            {
                id: 5,
                title: "GDB 1 Open",
                explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
                date: "2025-01-15"
            },
            {
                id: 6,
                title: "GDB 2 Open",
                explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
                date: "2025-01-15"
            },
            {
                id: 7,
                title: "GDB 3 Open",
                explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
                date: "2025-01-15"
            },
            {
                id: 8,
                title: "GDB 4 Open",
                explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
                date: "2025-01-15"
            },
            {
                id: 9,
                title: "GDB 5 Open",
                explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
                date: "2025-01-15"
            },
            {
                id: 10,
                title: "GDB 6 Open",
                explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
                date: "2025-01-15"
            },
            {
                id: 11,
                title: "GDB 7 Open",
                explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
                date: "2025-01-15"
            },

        ]
    },
{
    title: "Advanced Programming Techniques",
    heading: "Welcome to Advanced Programming!",
    creditHours: 4,
    teacher: 
        {
            img: "teacher2.jpg",
            name: "Dr. Jane Smith",
            education: "Ph.D. in Software Engineering",
            university: "MIT"
        },
    lectures: [
        {
            video: "https://videos.pexels.com/video-files/30431696/13041678_1920_1080_50fps.mp4",
            name: "Advanced Programming Concepts",
            reading: "Advanced programming involves understanding complex algorithms, data structures, and software design patterns.",
            heading: "What is Advanced Programming?",
            questions: [
                { question: "What is a design pattern?", answer: "A reusable solution to a commonly occurring problem in software design." },
                { question: "What is recursion?", answer: "A method where a function calls itself to solve a problem." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/30163168/12934575_1920_1080_60fps.mp4",
            name: "Advanced Data Structures",
            reading: "Advanced data structures include trees, graphs, and hash tables, which are essential for efficient data management.",
            heading: "Understanding Advanced Data Structures",
            questions: [
                { question: "What is a binary tree?", answer: "A tree data structure where each node has at most two children." },
                { question: "What is a graph?", answer: "A collection of nodes connected by edges." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/30401545/13028933_1920_1080_60fps.mp4",
            name: "Concurrency and Parallelism",
            reading: "Concurrency and parallelism are key concepts in modern programming, allowing multiple tasks to be executed simultaneously.",
            heading: "Managing Multiple Tasks",
            questions: [
                { question: "What is concurrency?", answer: "The ability of a program to manage multiple tasks at the same time." },
                { question: "What is parallelism?", answer: "The execution of multiple tasks simultaneously." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/29663239/12760684_2560_1440_30fps.mp4",
            name: "Software Design Principles",
            reading: "Software design principles like SOLID help in creating maintainable and scalable software systems.",
            heading: "Designing Robust Software",
            questions: [
                { question: "What is the Single Responsibility Principle?", answer: "A class should have only one reason to change." },
                { question: "What is the Open/Closed Principle?", answer: "Software entities should be open for extension but closed for modification." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/9021867/9021867-hd_1920_1080_25fps.mp4",
            name: "Testing and Debugging",
            reading: "Testing and debugging are crucial for ensuring the reliability and correctness of software applications.",
            heading: "Ensuring Software Quality",
            questions: [
                { question: "What is unit testing?", answer: "Testing individual components of a software application." },
                { question: "What is debugging?", answer: "The process of identifying and fixing errors in software." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/29887184/12831288_2560_1440_60fps.mp4",
            name: "Version Control Systems",
            reading: "Version control systems like Git help in managing changes to source code over time.",
            heading: "Managing Code Changes",
            questions: [
                { question: "What is Git?", answer: "A distributed version control system." },
                { question: "What is a branch in Git?", answer: "A parallel version of a repository, allowing for independent development." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/10839348/10839348-uhd_2732_1440_30fps.mp4",
            name: "Cloud Computing Basics",
            reading: "Cloud computing provides on-demand access to computing resources over the internet.",
            heading: "Introduction to Cloud Computing",
            questions: [
                { question: "What is cloud computing?", answer: "The delivery of computing services over the internet." },
                { question: "What are the main cloud service models?", answer: "IaaS, PaaS, and SaaS." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/29876339/12827203_2560_1440_30fps.mp4",
            name: "DevOps Practices",
            reading: "DevOps is a set of practices that combines software development and IT operations to shorten the development lifecycle.",
            heading: "Integrating Development and Operations",
            questions: [
                { question: "What is DevOps?", answer: "A set of practices that combines software development and IT operations." },
                { question: "What is CI/CD?", answer: "Continuous Integration and Continuous Deployment." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/30325369/12999228_1920_1080_24fps.mp4",
            name: "Microservices Architecture",
            reading: "Microservices architecture is a method of developing software applications as a suite of small, independent services.",
            heading: "Building Scalable Applications",
            questions: [
                { question: "What are microservices?", answer: "Small, independent services that work together to form a larger application." },
                { question: "What are the benefits of microservices?", answer: "Scalability, flexibility, and easier maintenance." }
            ]
        },
        {
            video: "video10_advanced.mp4",
            name: "Security Best Practices",
            reading: "Security best practices are essential for protecting software applications from vulnerabilities and attacks.",
            heading: "Ensuring Application Security",
            questions: [
                { question: "What is encryption?", answer: "The process of converting data into a code to prevent unauthorized access." },
                { question: "What is a firewall?", answer: "A network security system that monitors and controls incoming and outgoing network traffic." }
            ]
        }
    ],
    assignments: [
        {
            SrNo: 1,
            title: "Advanced Assignment 1",
            assignmentFile: "advanced_assignment1.docx",
            dueDate: "2025-02-20",
            totalMarks: 60
        },
        {
            SrNo: 2,
            title: "Advanced Assignment 2",
            assignmentFile: "advanced_assignment2.pdf",
            dueDate: "2025-02-27",
            totalMarks: 30
        },
        {
            SrNo: 3,
            title: "Advanced Assignment 3",
            assignmentFile: "advanced_midterm_exam.zip",
            dueDate: "2025-03-10",
            totalMarks: 120
        }
    ],
    gdb: [
        {
            no: 1,
            question: "Discuss the impact of cloud computing on modern software development.",
            totalMarks: 25,
            startDate: "2025-02-15",
            dueDate: "2025-02-25",
            status: "Open",
            submit: "Not Submitted",
            view: "View",
            result: "-"
        },
        {
            no: 2,
            question: "Analyze the benefits and challenges of microservices architecture.",
            totalMarks: 20,
            startDate: "2025-03-01",
            dueDate: "2025-03-10",
            status: "Open",
            submit: "Not Submitted",
            view: "View",
            result: "-"
        },
        {
            no: 3,
            question: "Critically evaluate the role of DevOps in continuous delivery.",
            totalMarks: 30,
            startDate: "2025-04-05",
            dueDate: "2025-04-15",
            status: "Closed",
            submit: "Submitted",
            view: "View",
            result: "85%"
        }
    ],
    quizzes: [
        {
            no: 1,
            quizTitle: "Advanced Programming Quiz",
            readingDependency: "Chapter 1 & 2",
            startDate: "2025-02-10",
            dueDate: "2025-02-15",
            totalMarks: 25,
            quizStatus: "Closed",
            submitStatus: "Submitted",
            result: "23/25"
        },
        {
            no: 2,
            quizTitle: "Cloud Computing Quiz",
            readingDependency: "Chapter 3 & 4",
            startDate: "2025-02-25",
            dueDate: "2025-03-01",
            totalMarks: 20,
            quizStatus: "Open",
            submitStatus: "Not Submitted",
            result: "-"
        },
        {
            no: 3,
            quizTitle: "DevOps Quiz",
            readingDependency: "Chapter 5",
            startDate: "2025-03-05",
            dueDate: "2025-03-10",
            totalMarks: 15,
            quizStatus: "Upcoming",
            submitStatus: "Not Applicable",
            result: "-"
        }
    ],
    announcements: [    
        {
            id: 1,
            title: "Welcome to Advanced Programming!",
            explanation: "Welcome to the Advanced Programming course. This course will cover advanced topics in software development and design.",
            date: "2025-02-05"
        },
        {
            id: 2,
            title: "Lab Access Information",
            explanation: "Information regarding lab access, including timings and guidelines, is now available on the course website.",
            date: "2025-02-08"
        },
        {
            id: 3,
            title: "Advanced Assignment 1 Released",
            explanation: "Advanced Assignment 1, 'Advanced Programming Problems', has been released. Please refer to the assignment section for details and submission guidelines.",
            date: "2025-02-10"
        },
        {
            id: 4,
            title: "Quiz 1 Approaching",
            explanation: "Quiz 1 on Advanced Programming is scheduled for February 15th. Please review the relevant lecture materials and reading assignments.",
            date: "2025-02-12"
        },
        {
            id: 5,
            title: "GDB 1 Open",
            explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-02-15"
        },
        {
            id: 6,
            title: "GDB 2 Open",
            explanation: "Group Discussion Board 2 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-02-15"
        },
        {
            id: 7,
            title: "GDB 3 Open",
            explanation: "Group Discussion Board 3 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-02-15"
        },
        {
            id: 8,
            title: "GDB 4 Open",
            explanation: "Group Discussion Board 4 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-02-15"
        },
        {
            id: 9,
            title: "GDB 5 Open",
            explanation: "Group Discussion Board 5 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-02-15"
        },
        {
            id: 10,
            title: "GDB 6 Open",
            explanation: "Group Discussion Board 6 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-02-15"
        },
        {
            id: 11,
            title: "GDB 7 Open",
            explanation: "Group Discussion Board 7 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-02-15"
        }
    ]
},
{
    title: "Data Science Fundamentals",
    heading: "Welcome to Data Science!",
    creditHours: 4,
    teacher: 
        {
            img: "teacher3.jpg",
            name: "Dr. Emily Carter",
            education: "Ph.D. in Data Science",
            university: "Harvard University"
        },
    lectures: [
        {
            video: "https://videos.pexels.com/video-files/29641364/12753273_1920_1080_60fps.mp4",
            name: "Introduction to Data Science",
            reading: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
            heading: "What is Data Science?",
            questions: [
                { question: "What is data science?", answer: "A field that uses algorithms and systems to extract insights from data." },
                { question: "What are the key components of data science?", answer: "Data collection, cleaning, analysis, and visualization." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/29660254/12759652_2560_1440_60fps.mp4",
            name: "Data Wrangling",
            reading: "Data wrangling involves cleaning and transforming raw data into a usable format for analysis.",
            heading: "Preparing Data for Analysis",
            questions: [
                { question: "What is data wrangling?", answer: "The process of cleaning and transforming raw data." },
                { question: "What tools are used for data wrangling?", answer: "Pandas, NumPy, and SQL." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/29676865/12765183_1920_1080_25fps.mp4",
            name: "Exploratory Data Analysis (EDA)",
            reading: "EDA is a critical step in data science that involves summarizing the main characteristics of a dataset.",
            heading: "Understanding Your Data",
            questions: [
                { question: "What is EDA?", answer: "A process of summarizing and visualizing data to understand its structure." },
                { question: "What are common EDA techniques?", answer: "Histograms, scatter plots, and correlation matrices." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/29753519/12787590_2560_1440_60fps.mp4",
            name: "Machine Learning Basics",
            reading: "Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data.",
            heading: "Introduction to Machine Learning",
            questions: [
                { question: "What is machine learning?", answer: "A method of training algorithms to make predictions or decisions based on data." },
                { question: "What are the types of machine learning?", answer: "Supervised, unsupervised, and reinforcement learning." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/30331433/13001672_2560_1440_30fps.mp4",
            name: "Data Visualization",
            reading: "Data visualization is the graphical representation of data to help people understand patterns and trends.",
            heading: "Communicating Insights",
            questions: [
                { question: "What is data visualization?", answer: "The graphical representation of data to communicate insights." },
                { question: "What tools are used for data visualization?", answer: "Matplotlib, Seaborn, and Tableau." }
            ]
        }
    ],
    assignments: [
        {
            SrNo: 1,
            title: "Data Cleaning Assignment",
            assignmentFile: "data_cleaning.docx",
            dueDate: "2025-03-20",
            totalMarks: 50
        },
        {
            SrNo: 2,
            title: "EDA Assignment",
            assignmentFile: "eda_assignment.pdf",
            dueDate: "2025-03-27",
            totalMarks: 40
        },
        {
            SrNo: 3,
            title: "Machine Learning Project",
            assignmentFile: "ml_project.zip",
            dueDate: "2025-04-10",
            totalMarks: 100
        }
    ],
    gdb: [
        {
            no: 1,
            question: "Discuss the ethical implications of using machine learning in decision-making.",
            totalMarks: 20,
            startDate: "2025-03-15",
            dueDate: "2025-03-25",
            status: "Open",
            submit: "Not Submitted",
            view: "View",
            result: "-"
        },
        {
            no: 2,
            question: "Analyze the challenges of working with big data.",
            totalMarks: 15,
            startDate: "2025-04-01",
            dueDate: "2025-04-10",
            status: "Open",
            submit: "Not Submitted",
            view: "View",
            result: "-"
        },
        {
            no: 3,
            question: "Critically evaluate the role of data visualization in business decision-making.",
            totalMarks: 25,
            startDate: "2025-05-05",
            dueDate: "2025-05-15",
            status: "Closed",
            submit: "Submitted",
            view: "View",
            result: "90%"
        }
    ],
    quizzes: [
        {
            no: 1,
            quizTitle: "Data Science Basics Quiz",
            readingDependency: "Chapter 1 & 2",
            startDate: "2025-03-10",
            dueDate: "2025-03-15",
            totalMarks: 20,
            quizStatus: "Closed",
            submitStatus: "Submitted",
            result: "19/20"
        },
        {
            no: 2,
            quizTitle: "Machine Learning Quiz",
            readingDependency: "Chapter 3 & 4",
            startDate: "2025-03-25",
            dueDate: "2025-03-30",
            totalMarks: 15,
            quizStatus: "Open",
            submitStatus: "Not Submitted",
            result: "-"
        },
        {
            no: 3,
            quizTitle: "Data Visualization Quiz",
            readingDependency: "Chapter 5",
            startDate: "2025-04-05",
            dueDate: "2025-04-10",
            totalMarks: 10,
            quizStatus: "Upcoming",
            submitStatus: "Not Applicable",
            result: "-"
        }
    ],
    announcements: [    
        {
            id: 1,
            title: "Welcome to Data Science!",
            explanation: "Welcome to the Data Science Fundamentals course. We will explore the exciting world of data and its applications.",
            date: "2025-03-05"
        },
        {
            id: 2,
            title: "Lab Access Information",
            explanation: "Information regarding lab access, including timings and guidelines, is now available on the course website.",
            date: "2025-03-08"
        },
        {
            id: 3,
            title: "Assignment 1 Released",
            explanation: "Assignment 1, 'Data Cleaning Practice Problems', has been released. Please refer to the assignment section for details.",
            date: "2025-03-10"
        },
        {
            id: 4,
            title: "Quiz 1 Approaching",
            explanation: "Quiz 1 on Data Science Basics is scheduled for March 15th. Please review the relevant lecture materials.",
            date: "2025-03-12"
        },
        {
            id: 5,
            title: "GDB 1 Open",
            explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-03-15"
        }
    ]
},
{
    title: "Data Science Fundamentals",
    heading: "Welcome to Data Science!",
    creditHours: 4,
    teacher: 
        {
            img: "teacher3.jpg",
            name: "Dr. Emily Carter",
            education: "Ph.D. in Data Science",
            university: "Harvard University"
        },
    lectures: [
        {
            video: "https://videos.pexels.com/video-files/9130155/9130155-uhd_2560_1440_30fps.mp4",
            name: "Introduction to Data Science",
            reading: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
            heading: "What is Data Science?",
            questions: [
                { question: "What is data science?", answer: "A field that uses algorithms and systems to extract insights from data." },
                { question: "What are the key components of data science?", answer: "Data collection, cleaning, analysis, and visualization." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/29716330/12777302_2560_1440_30fps.mp4",
            name: "Data Wrangling",
            reading: "Data wrangling involves cleaning and transforming raw data into a usable format for analysis.",
            heading: "Preparing Data for Analysis",
            questions: [
                { question: "What is data wrangling?", answer: "The process of cleaning and transforming raw data." },
                { question: "What tools are used for data wrangling?", answer: "Pandas, NumPy, and SQL." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/29634443/12750859_2560_1440_24fps.mp4",
            name: "Exploratory Data Analysis (EDA)",
            reading: "EDA is a critical step in data science that involves summarizing the main characteristics of a dataset.",
            heading: "Understanding Your Data",
            questions: [
                { question: "What is EDA?", answer: "A process of summarizing and visualizing data to understand its structure." },
                { question: "What are common EDA techniques?", answer: "Histograms, scatter plots, and correlation matrices." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/28940037/12524031_1920_1080_25fps.mp4",
            name: "Machine Learning Basics",
            reading: "Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data.",
            heading: "Introduction to Machine Learning",
            questions: [
                { question: "What is machine learning?", answer: "A method of training algorithms to make predictions or decisions based on data." },
                { question: "What are the types of machine learning?", answer: "Supervised, unsupervised, and reinforcement learning." }
            ]
        },
        {
            video: "https://videos.pexels.com/video-files/30038719/12886208_1920_1080_60fps.mp4",
            name: "Data Visualization",
            reading: "Data visualization is the graphical representation of data to help people understand patterns and trends.",
            heading: "Communicating Insights",
            questions: [
                { question: "What is data visualization?", answer: "The graphical representation of data to communicate insights." },
                { question: "What tools are used for data visualization?", answer: "Matplotlib, Seaborn, and Tableau." }
            ]
        }
    ],
    assignments: [
        {
            SrNo: 1,
            title: "Data Cleaning Assignment",
            assignmentFile: "data_cleaning.docx",
            dueDate: "2025-03-20",
            totalMarks: 50
        },
        {
            SrNo: 2,
            title: "EDA Assignment",
            assignmentFile: "eda_assignment.pdf",
            dueDate: "2025-03-27",
            totalMarks: 40
        },
        {
            SrNo: 3,
            title: "Machine Learning Project",
            assignmentFile: "ml_project.zip",
            dueDate: "2025-04-10",
            totalMarks: 100
        }
    ],
    gdb: [
        {
            no: 1,
            question: "Discuss the ethical implications of using machine learning in decision-making.",
            totalMarks: 20,
            startDate: "2025-03-15",
            dueDate: "2025-03-25",
            status: "Open",
            submit: "Not Submitted",
            view: "View",
            result: "-"
        },
        {
            no: 2,
            question: "Analyze the challenges of working with big data.",
            totalMarks: 15,
            startDate: "2025-04-01",
            dueDate: "2025-04-10",
            status: "Open",
            submit: "Not Submitted",
            view: "View",
            result: "-"
        },
        {
            no: 3,
            question: "Critically evaluate the role of data visualization in business decision-making.",
            totalMarks: 25,
            startDate: "2025-05-05",
            dueDate: "2025-05-15",
            status: "Closed",
            submit: "Submitted",
            view: "View",
            result: "90%"
        }
    ],
    quizzes: [
        {
            no: 1,
            quizTitle: "Data Science Basics Quiz",
            readingDependency: "Chapter 1 & 2",
            startDate: "2025-03-10",
            dueDate: "2025-03-15",
            totalMarks: 20,
            quizStatus: "Closed",
            submitStatus: "Submitted",
            result: "19/20"
        },
        {
            no: 2,
            quizTitle: "Machine Learning Quiz",
            readingDependency: "Chapter 3 & 4",
            startDate: "2025-03-25",
            dueDate: "2025-03-30",
            totalMarks: 15,
            quizStatus: "Open",
            submitStatus: "Not Submitted",
            result: "-"
        },
        {
            no: 3,
            quizTitle: "Data Visualization Quiz",
            readingDependency: "Chapter 5",
            startDate: "2025-04-05",
            dueDate: "2025-04-10",
            totalMarks: 10,
            quizStatus: "Upcoming",
            submitStatus: "Not Applicable",
            result: "-"
        }
    ],
    announcements: [    
        {
            id: 1,
            title: "Welcome to Data Science!",
            explanation: "Welcome to the Data Science Fundamentals course. We will explore the exciting world of data and its applications.",
            date: "2025-03-05"
        },
        {
            id: 2,
            title: "Lab Access Information",
            explanation: "Information regarding lab access, including timings and guidelines, is now available on the course website.",
            date: "2025-03-08"
        },
        {
            id: 3,
            title: "Assignment 1 Released",
            explanation: "Assignment 1, 'Data Cleaning Practice Problems', has been released. Please refer to the assignment section for details.",
            date: "2025-03-10"
        },
        {
            id: 4,
            title: "Quiz 1 Approaching",
            explanation: "Quiz 1 on Data Science Basics is scheduled for March 15th. Please review the relevant lecture materials.",
            date: "2025-03-12"
        },
        {
            id: 5,
            title: "GDB 1 Open",
            explanation: "Group Discussion Board 1 is now open for discussion. Please actively participate and share your insights.",
            date: "2025-03-15"
        }
    ]
}
]


export default courses;
// const courses = Array.from({ length: 8 }, (_, courseIndex) => ({
//     title: `Course ${courseIndex + 1}`,
//     heading: `Overview of Course ${courseIndex + 1}`,
//     creditHours: Math.floor(Math.random() * 4) + 1, // Random credit hours between 1 and 4
//     teacher: {
//       img: `teacher${courseIndex + 1}.jpg`,
//       name: `Teacher ${courseIndex + 1}`,
//       education: `Degree ${courseIndex + 1}`,
//       university: `University ${courseIndex + 1}`,
//     },
//     lectures: Array.from({ length: 10 }, (_, lectureIndex) => ({
//       name: `Lecture ${lectureIndex + 1}`,
//       video: `${video}`,
//       reading: `Lecture ${lectureIndex + 1} Notes.pdf`,
//       questions: Array.from({ length: 5 }, (_, questionIndex) => ({
//         question: `Question ${questionIndex + 1} for Lecture ${lectureIndex + 1}`,
//         answer: `Answer ${questionIndex + 1} for Lecture ${lectureIndex + 1}`,
//       })),
//     })),
//   }));


