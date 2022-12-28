/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Constance Ng",
  title: "Hello, I'm Constance",
  subTitle: emoji(
    "I'm a Year 4 Computer Science Undergraduate at National University of Singapore. I'm passionate about building Web and Mobile applications and I aspire to be a Software Engineer in the future!"
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1M8rV4vrC2R4Q3gt7P_cdwUy8axxdrUr7?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/constancensq",
  linkedin: "https://www.linkedin.com/in/constance-ng/",
  gmail: "constancensq@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "Exploring and gaining more in-depth skills for front-end and backend",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  programmingLang: [
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain colored"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain colored"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "devicon-javascript-plain colored"
    },

  ],

  softwareSkills: [

    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain colored"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "devicon-react-plain colored"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "devicon-vuejs-plain colored"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "devicon-html5-plain colored"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "devicon-css3-plain colored"
    },
  ],

  backendSkills: [
    {
      skillName: "Golang",
      fontAwesomeClassname: "devicon-go-original-wordmark colored"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain colored"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "devicon-firebase-plain colored"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "devicon-nodejs-plain colored"
    },
    {
      skillName: "Expressjs",
      fontAwesomeClassname: "devicon-express-original colored"
    },
  ],

  toolSkills: [
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain colored"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "devicon-figma-plain colored"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard Universitys",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer Intern",
      company: "TikTok Pte Ltd",
      companylogo: require("./assets/images/tik-tok.png"),
      date: "Aug 2022 – Nov 2022",
      desc: "Golang | MySQL | Hive | Pyspark",
      descBullets: [
        "Improved existing label production service to allow generation of labels using more general rules, increasing the flexibility of the service and optimising the label generation procedure for complex labels",
        "Designed and implemented label production rules to transform and migrate data to a new database, supporting the migration of millions of data points managed by the team",
        "Extended existing labels to provide additional information to support the team’s business requirements",
        "Collaborated with the frontend team to integrate webpage with backend service to display label information"
      ]
    },
    {
      role: "Software Engineer Intern - Backend Antifraud",
      company: "Shopee Pte Ltd",
      companylogo: require("./assets/images/shopee.png"),
      date: "May 2022 – July 2022",
      desc: "Vue.js | Golang | MySQL",
      descBullets: [
        "Implemented an auto-nomination system to nominate the next host for weekly meetings",
        "Created filters for calendar events and functionality to cache them on the browser",
        "Developed a feature to show on-leave status of the team members"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Elixir Technology",
      companylogo: require("./assets/images/smallElixirLogo.png"),
      date: "May 2021 – July 2021",
      desc: "Flutter Web | Google Firebase",
      descBullets: [
        "Developed a responsive web application to onboard new users to test out Elixir’s product",
        "Implemented authentication features using Firebase Authentication",
        "Retrieved and stored information from/to Firebase Storage",
        "Discussed website’s features and designed User Interface with team members and supervisor"
      ]
    },

    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Technical Projects that I have worked on",
  projects: [
    {
      image: require("./assets/images/smart-brain.png"),
      projectName: "Smart Brain",
      techStack: "React | Node | Express | PostgreSQL | HTML/CSS | Javascript",
      projectDesc: "Web application which uses Clarifai's Machine Learning Face Recognition API to detect faces from image URL provided",
      projectDesc2: "Deployed with Render",
      footerLink: [
        {
          name: "See Website",
          url: "https://facerecognitionfe.onrender.com"
        },
        {
          name: "Source Code",
          url: "https://github.com/constancensq/facerecognitionbrain"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ufie.jpeg"),
      projectName: "Ufie",
      techStack: "Flutter | Firebase",
      projectDesc: "Android Mobile application aimed to ease the process of scheduling meetups with friends. Features include user authentication, creation of events, friend systems and more!",
      projectDesc2: "Awarded Apollo 11 (Advanced) level of achievement",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.youtube.com/watch?v=8L8PDYF9BP0&ab_channel=HuiQingYeoh"
        },
        {
          name: "Certification",
          url: "https://credentials.nus.edu.sg/be04c898-9519-4a09-b0ff-d939b44a52c5"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pivotIcon.png"),
      projectName: "PIVOT",
      projectDesc: "Desktop application to assist the police investigators in keeping track of their investigations and relevant information. While it has a GUI, most of the user interactions happen using a CLI (Command Line Interface).",
      techStack: "Java | JavaFX | JUnit",
      footerLink: [
        {
          name: "Learn More",
          url: "https://ay2021s1-cs2103-f09-2.github.io/tp/"
        },
        {
          name: "Source Code",
          url: "https://github.com/AY2021S1-CS2103-F09-2/tp"
        }
      ]
    },
    {
      image: require("./assets/images/duke.png"),
      projectName: "Duke Chatbot",
      techStack: "Java | JavaFX",
      projectDesc: "Desktop organizational application for managing tasks, optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI).",
      footerLink: [
        {
          name: "Learn More",
          url: "https://constancensq.github.io/ip/"
        },
        {
          name: "Source Code",
          url: "https://github.com/constancensq/ip"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1MvKwZ6OhLVELlkfjh6yws6xXMOpZBjNN/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "constancensq@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

export {
  illustration,
  greeting,
  socialMediaLinks,
  bigProjects,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo
};
