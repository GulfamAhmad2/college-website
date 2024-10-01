import fy from "../assets/image/fy.webp";
import sy from "../assets/image/sy.webp";
import ty from "../assets/image/ty.webp";
import arrow from "../assets/svg/arrow.svg";
export const navigation = [
  { id: 6, title: "Home", url: "/" },
  {
    id: 1,
    title: "About Us",
    icon: arrow,
    url: "/about",
    child: [
      { id: 1, title: "Director Message", url: "/about/director-msg" },
      { id: 2, title: "Principle Message", url: "/about/principle-msg" },
      { id: 3, title: "Our Staff", url: "/about/staff" },
    ],
  },
  { id: 2, title: "Course", icon: arrow, url: "/admission" },
  { id: 3, title: "Resources", url: "/notice" },
  { id: 4, title: "Gallery", url: "/resources" },
  { id: 5, title: "Contact", url: "/attendance" },
  // { id: 6, title: "Login", url: "/contact" },
  // { id: 7, title: "Registration", url: "/contact" },
];

// export const social = [
//   {
//     id: 4,
//     title: "Instagram",
//     iconUrl: instagram,
//     url: "https://www.instagram.com/gulfam.ahmad.566/",
//   },
//   {
//     id: 1,
//     title: "youtube",
//     iconUrl: linkedin,
//     url: "https://www.linkedin.com/in/gulfam-ahmad-86998124a/",
//   },
//   {
//     id: 2,
//     title: "facebook",
//     iconUrl: github,
//     url: "https://github.com/GulfamAhmad2",
//   },
// ];

export const courseDetails = [
  {
    id: 1,
    img: fy,
    title: "Fy 2024",
    desc: "BSc IT In the first year of BSc IT, students are introduced to the core concepts of information technology. This year focuses on building a strong foundation in programming, mathematics, and basic IT principles. Students will gain hands-on experience with essential tools and languages that will prepare them for more advanced topics in the coming years.",
  },
  {
    id: 1,
    img: sy,
    title: "Sy 2024",
    desc: "BSc IT The second year is designed to dive deeper into the technical aspects of IT, introducing students to subjects like data structures, database management, and networking. This year also emphasizes practical skills and project-based learning, helping students understand real-world applications of IT concepts.",
  },
  {
    id: 1,
    img: ty,
    title: "Ty 2024",
    desc: "BSc IT In the final year, students focus on advanced topics like web development, mobile app development, and cloud computing. They also work on major projects that integrate everything they have learned throughout the course. This year prepares students for careers in the IT industry or further studies in specialized fields.",
  },
];

export const collegeDetails = [
  {
    section: "About Us",
    content:
      "Gyanodaya College is dedicated to nurturing intellectual and personal growth, providing students with an environment where they can thrive academically and socially. Since its inception, Gyanodaya has been committed to offering quality education that  fosters creativity, critical thinking, and professional  development. With a wide range of undergraduate and postgraduate  programs, we aim to equip our students with the knowledge and  skills they need to excel in today’s dynamic world. At  Gyanodaya, we believe in holistic education that emphasizes  values, integrity, and a lifelong passion for learning.",
  },
  {
    section: "Vision",
    content: "Committed and persuasive efforts towards holistic education.",
  },
  {
    section: "Mission",
    content: [
      "To impart education based on values, justice, and equality among students from all strata of society.",
      "To enable students to grow intellectually, professionally, and ethically throughout their lives.",
    ],
  },
  {
    section: "Objectives",
    content: [
      "To encourage, spread, and facilitate higher education among all sections of society, especially the Gujarati-speaking community, irrespective of class, caste, and creed.",
      "To mold their character and make them good and responsible citizens.",
      "To inculcate a sense of discipline and develop a holistic approach among students.",
      "To develop students intellectually and socially.",
      "To realize students' potential for excellence.",
      "To instill moral values and mold students into excellent human beings.",
    ],
  },
  {
    section: "Quality Policy",
    content:
      "Gyanodaya  College shall impart education and instill respect for values, justice, equality, ethics, social sensitivity, gender sensitization, and environmental consciousness for the betterment of society and self through optimum utilization of available resources.",
  },
];
export const notices = [
  {
    title: "New Course Registration",
    link: "https://example.com/course-registration",
    important: true,
  },
  {
    title: "Library Guidelines",
    link: "https://example.com/library-guidelines",
    important: false,
  },
  {
    title: "Upcoming Events",
    link: "https://example.com/upcoming-events",
    important: true,
  },
];
export const eventData = {
  title: "Tech Conference 2024",
  date: "October 15, 2024",
  time: "10:00 AM - 4:00 PM",
  location: "Online",
  description: "Join us for a day of tech talks and networking.",
  agenda: [
    "Opening Remarks",
    "Keynote Speech",
    "Panel Discussion",
    "Networking Session",
  ],
  speakers: ["John Doe", "Jane Smith", "Alice Johnson"],
  registrationLink: "https://example.com/register",
};

export const dropDownDetails = {
  year: ["FY", "SY", "TY"],
  date: ["2022", "2023", "2024"],
  sem: ["Sem 1", "Sem 2"],
};

export const mockData = {
  FY: {
    2024: {
      "Sem 1": [
        {
          subjectName: "Mathematics 1",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Programming Fundamentals",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Digital Electronics",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Web Designing",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Communication Skills",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Introduction to Computers",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        // More subjects...
      ],
      "Sem 2": [
        // Similar structure for Sem 2
        {
          subjectName: "Mathematics II",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Object-Oriented Programming (OOP)",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Data Structures",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Database Management Systems (DBMS)",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Computer Architecture",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Environmental Science",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
      ],
    },

    // More years...
  },
  SY: {
    2024: {
      "Sem 1": [
        {
          subjectName: "Mathematics III",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Operating Systems",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Computer Networks",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Software Engineering",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Java Programming",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Microprocessor Systems",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        // More subjects...
      ],
      "Sem 2": [
        // Similar structure for Sem 2
        {
          subjectName: "Discrete Mathematics",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Design and Analysis of Algorithms",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Network Security",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Advanced Database Systems",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Mobile Application Development",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Data Communication and Networking",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
      ],
    },
  },
  TY: {
    2024: {
      "Sem 1": [
        {
          subjectName: "Internet Of Technologies",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Artificial Intelligence",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Software Testing",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Software project management",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Advanced Java",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Advance Web application",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },

        // More subjects...
      ],
      "Sem 2": [
        // Similar structure for Sem 2
        {
          subjectName: "Big Data Analytics",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Information Security",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Machine Learning",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Cyber Security",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "Project Development",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
        {
          subjectName: "IT Management",
          subjectUrl: "https://example.com/download/math1",
          notes: [
            {
              title: "Chapter 1 Notes",
              url: "https://example.com/math1-chapter1",
            },
            {
              title: "Chapter 2 Notes",
              url: "https://example.com/math1-chapter2",
            },
          ],
        },
      ],
    },

    // More years...
  },
};
