
import profile from './profile.jpg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Nachmi",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    // {
    //   title: "Blog",
    //   link: "https://medium.com/@nachmikott",
    // }
  ],
}
export const intro = {
  title: "Hey, I'm Nachmi Kott",
  description: "A software engineer building and developing meaningful experiences for customers, clients, myself and colleagues.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "/resume",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from The University of Maryland in 2017 with a Bachelor of Computer Science and Minor in Technology Entrepreneurship. I have 6+ years of experience working on web applications, backend APIs, databases and distributed system infrastructure at both enterprise and individual client scale.",
    "Currently, I'm working at Curiosity Media (IXL Learning) as a Senior Software Engineer, building interactive and impactful experiences for those learning Spanish or English as a second language.",
    "Outside of engineering, I'm often skiing, tutoring students in software engineering, traveling, spending time with family and friends, working on a woodworking project, or playing the keyboard.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Project Managament",
      description: "I turn ideas into deliverables. I have experience turning business initiatives into technical solutions using agile methodologies and engineering best practices.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive and impactful websites. I am customer-experience centric, striving to build delightful experiences for users.",
      icons: null,
    },
    {
      title: "System Design",
      description: "I can design systems beyond just websites. This includes end-to-end testing, CICD and 3rd party integrations at scale.",
      icons: null,
    },
    {
      title: "Mentoring and Tutoring",
      description: "I am an experienced mentor and tutor in software engineering. I have helped numerous mentors and tutees achieve their goals and aspirations.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/nachmikott",
        },
      ]
    },
    {
      title: "QuranTalk",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at nachmikott@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:nachmikott@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://calendly.com/nachmikott/30min",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Nachmi Kott | FullsStack Software Engineer",
  description: "I am a Senior Software Engineer. I graduated from the University of Maryland in 2017 with a bachelors degree in Computer Science.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@nachmikott",
  description: "FullsStack Software Engineer",
  cards: [
    {
      title: "My website",
      link: "https://nachmikott.com/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/nachmikott/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/nachmi-kott/",
    },
  ]
}
