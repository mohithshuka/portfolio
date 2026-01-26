/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting Section
const greeting = {
  username: "Mohith Shuka",
  title: "Hi all, I'm Mohith Shuka",
  subTitle: emoji(
    "Computer Science Engineering student passionate about open-source development, system-level programming, and building reliable software with hands-on experience in C/C++, Java, Docker, and Linux."
  ),
  resumeLink: "/resume.pdf", // <-- put resume.pdf inside public/
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mohithshuka",
  linkedin: "https://www.linkedin.com/in/mohith-shuka-9a8314291/",
  gmail: "mohithshuka@gmail.com",
  gitlab: "https://gitlab.com/mohithshuka",
  instagram: "https://www.instagram.com/mohithshuka",
  medium: "https://www.linkedin.com/in/mohith-shuka-9a8314291/",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVELOPER WHO LOVES TO EXPLORE DIFFERENT TECH STACKS",
  skills: [
    emoji("⚡ Build responsive and interactive frontend applications"),
    emoji("⚡ Develop scalable backend services and APIs"),
    emoji("⚡ Work with Linux, Docker, and cloud-native tools")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Database", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Don Bosco Institute of Technology",
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2023 – 2027",
      desc: "Actively participating in hackathons, projects, and technical events.",
      descBullets: [
        "Worked on frontend and backend project development",
        "Collaborated in team-based hackathons",
        "Gained experience in rapid prototyping and debugging",
        "Presented solutions to mentors and judges"
      ]
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Computer Science Engineering Student",
      company: "Don Bosco Institute of Technology",
      desc: "Focused on software development, data structures, algorithms, and open-source contributions."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: true,
  display: true
};

// Big Projects
const bigProjects = {
  title: "Projects",
  subtitle: "Some projects and applications I have worked on",
  projects: []
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Programs, certifications, and technical accomplishments",
  achievementsCards: [
    {
      title: "Google for Developers",
      subtitle: "Completed learning programs and developer initiatives.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Profile",
          url: "https://developers.google.com/profile/mohithshuka/110110562605031459199"
        }
      ]
    }
  ],
  display: true
};

// Blogs
const blogSection = {
  title: "Blogs",
  subtitle: "Sharing knowledge and documenting my learning journey",
  displayMediumBlogs: true,
  blogs: [],
  display: true
};

// Talks
const talkSection = {
  title: "Talks",
  subtitle: emoji("Sharing knowledge and learning from the community 🎤"),
  talks: [],
  display: false
};

// Podcast
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations around technology",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out",
  email_address: "mohithshuka@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
