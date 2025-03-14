/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Stelica Paval | Software Engineer & Web Developer",
  description:
    "Experienced Software Engineer specializing in scalable web development, cloud solutions, and modern front-end & back-end technologies. Passionate about building high-performance applications with React, Angular, Node.js, and AWS.",
  og: {
    title: "Stelica Paval | Portfolio & Projects",
    type: "website",
    url: "https://stelipaval.com/",
    description:
      "Explore the portfolio of Stelica Paval, a skilled software engineer with expertise in full-stack development, cloud computing, and scalable web solutions.",
    image: "https://stelipaval.com/preview.jpg", // Add a high-quality Open Graph image for social sharing
  },
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Full-Stack Developer",
    "React",
    "Angular",
    "Node.js",
    "AWS",
    "Cloud Computing",
    "Scalable Web Apps",
  ],
};

//Home Page
const greeting = {
  title: "Stelica Paval",
  logo_name: "Stelica Paval",
  nickname: "Software Engineer",
  subTitle: `I specialize in creating software solutions that focus on making things run smoothly, efficiently, and in a way that provides the best experience for users. I enjoy tackling challenges and building systems that are both easy to use and reliable.`,
  resumeLink: "https://drive.google.com/",
  portfolio_repository: "https://github.com/stelipaval",
  githubProfile: "https://github.com/stelipaval",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/stelipaval",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/stelian-paval/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:paval.stelica@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/dorin.paval.1/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular or ReactJS",
        "⚡ Developing mobile applications using React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in NodeJS, Express, .NET Core or Go",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#007acc",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#222222",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: ".Net Core",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "GoLand",
          fontAwesomeClassname: "simple-icons:goland",
          style: {
            color: "#222222",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Politehnica University of Bucharest",
      subtitle: "B.S. in Computer Science",
      logo_path: "iiitk_logo.png",
      alt_name: "UPB Logo",
      duration: "Oct 2013 - Jun 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Heavy focus on full stack engineering with modules on both front and back-end processes ",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://upb.ro/en",
    },
    {
      title: "Maharishi International University",
      subtitle: "Master's in Software Development",
      logo_path: "miu-logo.png",
      alt_name: "MIU Logo",
      duration: "Jan 2022 - Jan 2023",
      descriptions: [
        "⚡ Mastering how web technologies work and have the ability to learn new ones as they arise",
        "⚡ Build full stack web applications at any scale",
        "⚡ Build a mobile app for any business idea",
        "⚡ Use the power of cloud computing and understand AWS Cloud services",
      ],
      website_link: "https://msd.miu.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Cloud Practitioner",
      subtitle: "- AWS",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.credly.com/badges/b94826e4-a09c-499f-b6bd-e99a4ce966ef/linked_in_profile",
      alt_name: "AWS",
      color_code: "#FFC9BB",
    },
    {
      title: "ITIL Foundation",
      subtitle: "- PeopleCert",
      logo_path: "itil-logo.png",
      certificate_link:
        "https://www.credly.com/badges/b94826e4-a09c-499f-b6bd-e99a4ce966ef/linked_in_profile",
      alt_name: "ITIL",
      color_code: "#FFA5AB",
    },
    {
      title: "Modern React with Redux",
      subtitle: "- Stephen Grider",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a4cf5897-fee3-44a4-aca7-dbb58b358d53/",
      alt_name: "Udemy",
      color_code: "#BE93D4",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work, Internship and Mentorship",
  subtitle: "",
  description:
    "Software and web development professional with 6+ years of experience delivering technical systems, solutions, and tools to business and private clients across diverse operational platforms internationally. Experienced in full system development lifecycle, including backend and frontend functions. I am working effectively in independent and team environments as well, across the phases of software development life cycle for front and back end applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer II",
          company: "Terminus",
          company_url: "https://terminus.com/",
          logo_path: "terminus.png",
          duration: "Mar 2023 - Feb 2025",
          location: "Remote",
          description: [
            "Developed scalable, high-performance web applications using using Angular with RxJS and NgRx for brownfield apps and React with Redux for greenfield development, optimizing UI responsiveness and user experience. ",
            "Implemented interactive AmCharts to improve data visualization and analysis while lowering chart rendering time by 30% via lazy loading, memorization, and efficient change detection. ",
            "Designed and connected RESTful APIs using NodeJS and Express, allowing for easy data extraction from Salesforce and HubSpot to simplify ABM campaign analytics.",
            "Improved development productivity by automating operations using CI/CD pipelines, unit testing (Jest), and Agile techniques, resulting in quicker deployments and higher software quality",
          ],
          color: "#610e53",
        },
        {
          title: "Full Stack Developer",
          company: "Self-Employed",
          company_url: "",
          logo_path: "self.jpeg",
          duration: "Nov 2021 - May 2023",
          location: "Remote",
          description: [
            "Designed and created scalable online apps utilizing React, Next.js, and Tailwind CSS, offering dynamic, responsive, and user-friendly interfaces across devices. ",
            "Built and optimized RESTful APIs using Node.js and Express, guaranteeing fast server-side logic and smooth interaction with PostgreSQL and DynamoDB for scalable data management.",
            "Implemented secure authentication and authorization procedures, incorporating JWT security standards to safeguard sensitive data and boost API security ",
            "Deployed and maintained serverless apps on AWS, employing Lambda, API Gateway, and S3 to provide cost-efficient scalability and decreased infrastructure overhead.",
          ],
          color: "#610e53",
        },
        {
          title: "Software Engineer",
          company: "BearingPoint",
          company_url: "https://www.bearingpoint.com/en-us/",
          logo_path: "bearingpoint.png",
          duration: "Sept 2017 - Sept 2021",
          location: "Bucharest, Romania",
          description: [
            "Developed and maintained full-stack web applications with .NET Core, C#, ASP.NET, and Angular, resulting in high-performance, scalable solutions.",
            "Designed and optimized database structures using SQL Server and LINQ2SQL, resulting in improved data integrity and a 20% reduction in query execution time.",
            "Improved backend performance by improving data models, indexing algorithms, and query optimization, resulting in a 15% reduction in load times.",
            "Contributed to automated testing, CI/CD pipelines, and debugging efforts, resulting in fast deployments and ongoing application dependability.",
          ],
          color: "#610e53",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Yardi Systems",
          company_url: "https://www.yardi.com/",
          logo_path: "yardi.jpeg",
          duration: "May 2017 - Jul 2017",
          location: "Bucharest, Romania",
          description: [
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          ],
          color: "#610e53",
        },
      ],
    },
    {
      title: "Mentorships",
      experiences: [
        {
          title: "Teacher Assistant",
          company: "Maharishi International University",
          company_url: "https://msd.miu.edu",
          logo_path: "miu-logo.png",
          duration: "Mar 2022 - Dec 2022",
          location: "Fairfield, IA",
          description: [
            "Grading homework, exams and working with weak students to better understand the topics. I have also helped students in their projects and assignments.",
          ],
          color: "#610e53",
        },

        {
          title: "Programming instructor",
          company: "Logiscool",
          company_url: "https://www.logiscool.com/ro/",
          logo_path: "logiscool.png",
          duration: "Feb 2019 - Jan 2020",
          location: "Bucharest, Romania",
          description: [
            "Teaching children (5-15 y.o.) basics of AI, Python and Unity. I have helped them understanding the concepts by playing games and doing exercises.",
          ],
          color: "#610e53",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create back-end and front-end projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "picturedraw.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@paval.stelica/aws-codestar-a0495785b59",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "17222 Brady, Redford Charter Twp, MI 48240, USA",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/DBiWJTwofPSYMZNs7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "(313) 663-1221",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
