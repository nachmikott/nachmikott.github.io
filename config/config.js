
import profile from './profile.png';
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
    }
  ],
}
export const intro = {
  title: "Hey, I'm Nachmi",
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
      link: "https://docs.google.com/document/d/1Z44Xt87s5C_Dr6UPxCSSauhs7_Ru3xbEFZiBl-KY4Bs/edit?usp=sharing",
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
      title: "WIP - How I Built This",
      description: "Embed walkthroughs, documentation, tutorials and other learning resources into your application. - More details coming soon.",
      icons: [
        {
          icon: faGithub,
          link: "",
        }
      ]
    },
    {
      title: "WIP - Ancestry Storyteller",
      description: "AI Project in the Geneaology space - more details coming soon.",
      icons: [
        {
          icon: faGithub,
          link: "",
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
  description: "Software Engineer | Freelance",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@nachmikott",
  description: "Fullstack Software Engineer",
  cards: [
    {
      title: "GitHub",
      link: "https://github.com/nachmikott/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/nachmikott/",
    },
    {
      title: 'Upwork',
      link: "https://www.upwork.com/freelancers/~013fb7d3e27d4d03d7?mp_source=share"
    }
  ]
}