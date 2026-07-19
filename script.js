const portfolioData = {
  topics: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
  profile: {
    fullName: "Natapon Junjua",
    nickname: "Nickname: O | Age: 26",
    headline: "Full-Stack Developer",
    summary:
      "Software developer with almost 4 years of experience in ERP systems and microservices for product sales web applications, focused on scalability, maintainability, and performance.",
    contact: {
      phone: "084-226-3878",
      email: "natapon.jun01@gmail.com",
      address: "Chatuchak, Bangkok, Thailand",
    },
    social: [
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/natapon-jun/",
      },
      {
        label: "GitHub",
        url: "https://github.com/NataponJ",
      },
    ],
    resume: {
      label: "Download Resume",
      filePath: "natapon-junjua-resume.txt",
    },
    about:
      "I build practical business software from front-end interfaces to backend services. My recent work includes microservices, REST APIs, and product features that improve reliability, testing quality, and release confidence.",
  },
  workExperience: [
    {
      title: "Middle Full-Stack Developer",
      location: "Bangkok, Thailand",
      company: "Aware Outsourcing Services Corporation (Thailand) Ltd.",
      client: "AIS",
      duration: "Jul. 2025 - Present",
      stack: [
        "TypeScript",
        "Angular",
        "Node.js",
        "Nest.js",
        "MongoDB",
        "Jest",
        "Docker",
        "Elastic",
        "Huawei Cloud",
      ],
      highlights: [
        "Developed and maintained microservices for a product sales web application.",
        "Designed and implemented new features based on business requirements.",
        "Reduced bugs and improved reliability by troubleshooting critical issues.",
        "Managed deployments and release processes.",
        "Supported UAT and collaborated with QA teams.",
        "Wrote unit tests to reduce regressions and protect quality.",
      ],
    },
    {
      title: "Junior Full-Stack Developer",
      location: "Bangkok, Thailand",
      company: "ITOPPLUS Co., Ltd.",
      client: "Inhouse",
      duration: "Apr. 2023 - Jul. 2025",
      stack: [
        "TypeScript",
        "Angular",
        "Node.js",
        "Express.js",
        "GraphQL",
        "SQL",
        "MySQL",
        "Jest",
        "Jira",
        "Huawei Cloud",
      ],
      highlights: [
        "Developed ERP, HR, service desk, and business process management systems.",
        "Implemented leave request and warning document generation workflows.",
        "Built issue tracking with statuses: Open, In Progress, Resolved, Reopened, and Closed.",
        "Built mention, comment, and reply flows similar to social interaction models.",
        "Developed workflow process tools to help officers track tasks efficiently.",
      ],
    },
  ],
  projects: [
    {
      name: "Product Sales Microservice Platform",
      type: "Enterprise Web Application",
      description:
        "Built and maintained backend microservices and web features to support product sales operations with stable release processes.",
      technologies: ["TypeScript", "Nest.js", "Angular", "MongoDB", "Docker"],
      outcomes: [
        "Delivered new business features and maintained service uptime.",
        "Improved reliability through bug fixing and regression-focused testing.",
      ],
    },
    {
      name: "ERP and HR Management Suite",
      type: "Inhouse Business System",
      description:
        "Developed ERP and HR modules including leave requests, warning documents, and process-driven workflows.",
      technologies: ["TypeScript", "Angular", "Node.js", "Express.js", "MySQL"],
      outcomes: [
        "Streamlined internal workflows for officers and teams.",
        "Centralized operational data into maintainable modules.",
      ],
    },
    {
      name: "Issue Tracking and Collaboration System",
      type: "Workflow and Service Desk",
      description:
        "Implemented issue lifecycle tracking and social collaboration interactions such as mentions, comments, and replies.",
      technologies: ["GraphQL", "Node.js", "Angular", "SQL", "Jira"],
      outcomes: [
        "Enabled transparent tracking from Open to Closed statuses.",
        "Improved team communication in one integrated platform.",
      ],
    },
  ],
  skills: {
    "Programming Languages": ["JavaScript", "TypeScript", "SQL"],
    Frontend: ["Angular", "React", "HTML", "CSS", "SASS"],
    Backend: ["Node.js", "Express.js", "GraphQL", "Nest.js"],
    Database: ["MySQL", "MongoDB"],
    Architecture: ["REST API", "Microservices"],
    Tools: ["Git", "Docker", "Postman", "Jira"],
  },
  education: {
    degree: "Bachelor of Computer Engineering",
    institution: "Panyapiwat Institute of Management",
    years: "2019 - 2023",
    gpa: "3.16",
  },
  internships: [
    {
      title: "Front-end Developer (Intern)",
      location: "Bangkok, Thailand",
      company: "Brainergy Digital Co., Ltd.",
      client: "Inhouse",
      duration: "Jun. 2022 - Feb. 2023",
      stack: ["TypeScript", "Angular", "Node.js", "GitLab", "ClickUp"],
      highlights: [
        "Developed an E-Tax web application.",
        "Customized UI styles and chart-information interfaces.",
        "Built responsive layouts for desktop, tablet, and mobile.",
        "Connected API endpoints and configured project role permissions.",
      ],
    },
    {
      title: "Software Developer (Intern)",
      location: "Pathum Thani, Thailand",
      company: "Soft Square Group of Companies",
      client: "Inhouse",
      duration: "Nov. 2020 - Apr. 2021",
      stack: ["TypeScript", "Angular", "Node.js", "SQL", "PostgreSQL"],
      highlights: [
        "Worked on web design and UX/UI.",
        "Developed front-end web application screens.",
        "Connected API endpoints.",
        "Created SQL scripts for PostgreSQL.",
        "Generated receipt reports.",
      ],
    },
  ],
};

let activeTopic = "about";
const topicOrder = portfolioData.topics.map((topic) => topic.id);

const iconPathMap = {
  phone: "assets/icons/phone.svg",
  email: "assets/icons/envelope.svg",
  address: "assets/icons/map-pin.svg",
  linkedin: "assets/icons/link.svg",
  github: "assets/icons/code.svg",
  download: "assets/icons/download.svg",
};

const skillIconPathMap = {
  "JavaScript": "assets/skill-icons/javascript.svg",
  "TypeScript": "assets/skill-icons/typescript.svg",
  SQL: "assets/skill-icons/sql.svg",
  Angular: "assets/skill-icons/angular.svg",
  React: "assets/skill-icons/react.svg",
  HTML: "assets/skill-icons/html.svg",
  CSS: "assets/skill-icons/css.svg",
  SASS: "assets/skill-icons/sass.svg",
  "Node.js": "assets/skill-icons/nodejs.svg",
  "Express.js": "assets/skill-icons/express.svg",
  GraphQL: "assets/skill-icons/graphql.svg",
  "Nest.js": "assets/skill-icons/nestjs.svg",
  MySQL: "assets/skill-icons/mysql.svg",
  MongoDB: "assets/skill-icons/mongodb.svg",
  "REST API": "assets/skill-icons/rest-api.svg",
  Microservices: "assets/skill-icons/microservices.svg",
  Git: "assets/skill-icons/git.svg",
  Docker: "assets/skill-icons/docker.svg",
  Postman: "assets/skill-icons/postman.svg",
  Jira: "assets/skill-icons/jira.svg",
};

function getSkillIconPath(skillName) {
  return skillIconPathMap[skillName] || iconPathMap.github;
}

function getSkillClassKey(skillName) {
  return skillName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function isValidTopic(topicId) {
  return topicOrder.includes(topicId);
}

function getTopicFromHash() {
  const hashValue = window.location.hash.replace("#", "").trim();
  if (isValidTopic(hashValue)) {
    return hashValue;
  }
  return "about";
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");
  mobileMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function createIconImage(className, sourcePath, altText) {
  const imageElement = document.createElement("img");
  imageElement.className = className;
  imageElement.src = sourcePath;
  imageElement.alt = altText;
  imageElement.setAttribute("aria-hidden", "true");
  return imageElement;
}

function renderProfile() {
  document.getElementById("fullName").textContent = portfolioData.profile.fullName;
  document.getElementById("headline").textContent = portfolioData.profile.headline;
  document.getElementById("profileSummary").textContent = portfolioData.profile.summary;

  const contactContainer = document.getElementById("contact");
  const contacts = [
    { value: portfolioData.profile.contact.phone, iconPath: iconPathMap.phone, iconAlt: "Phone" },
    { value: portfolioData.profile.contact.email, iconPath: iconPathMap.email, iconAlt: "Email" },
    { value: portfolioData.profile.contact.address, iconPath: iconPathMap.address, iconAlt: "Address" },
  ];
  contacts.forEach((item) => {
    const badge = createElement("span", "badge");
    const badgeIconWrap = createElement("span", "badge-icon");
    badgeIconWrap.append(createIconImage("icon-image", item.iconPath, item.iconAlt));
    badge.append(badgeIconWrap);
    badge.append(createElement("span", "badge-text", item.value));
    contactContainer.append(badge);
  });

  const linkContainer = document.getElementById("socialLinks");
  portfolioData.profile.social.forEach((socialItem) => {
    const iconPath = socialItem.label === "LinkedIn" ? iconPathMap.linkedin : iconPathMap.github;
    const link = createElement("a", "btn-link social-link");
    const socialIconWrap = createElement("span", "social-icon");
    socialIconWrap.append(createIconImage("icon-image", iconPath, socialItem.label));
    link.append(socialIconWrap);
    link.append(createElement("span", "social-label", socialItem.label));
    link.href = socialItem.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    linkContainer.append(link);
  });

  const resumeLink = createElement("a", "btn-link social-link");
  const resumeIconWrap = createElement("span", "social-icon");
  resumeIconWrap.append(createIconImage("icon-image", iconPathMap.download, "Download resume"));
  resumeLink.append(resumeIconWrap);
  resumeLink.append(createElement("span", "social-label", portfolioData.profile.resume.label));
  resumeLink.href = portfolioData.profile.resume.filePath;
  resumeLink.setAttribute("download", "Natapon-Junjua-Resume.txt");
  linkContainer.append(resumeLink);

  document.getElementById("about").textContent = portfolioData.profile.about;
}

function setActiveTopic(topicId, options = {}) {
  const { updateHash = true, focusSection = true } = options;
  const nextTopic = isValidTopic(topicId) ? topicId : "about";
  activeTopic = nextTopic;

  document.querySelectorAll(".topic-page").forEach((section) => {
    const isActive = section.dataset.topic === nextTopic;
    section.classList.toggle("active", isActive);
    section.hidden = !isActive;
  });

  document.querySelectorAll(".topic-button").forEach((button) => {
    const isActive = button.dataset.topic === nextTopic;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  if (updateHash) {
    window.location.hash = nextTopic;
  }

  if (focusSection) {
    const sectionElement = document.getElementById(`topic-${nextTopic}`);
    if (sectionElement) {
      sectionElement.focus();
    }
  }

  closeMobileMenu();
}

function moveTopicFocus(currentTopicId, step, buttonGroup) {
  const currentIndex = topicOrder.indexOf(currentTopicId);
  if (currentIndex < 0) {
    return;
  }
  const nextIndex = (currentIndex + step + topicOrder.length) % topicOrder.length;
  const nextTopic = topicOrder[nextIndex];
  const nextButton = buttonGroup.querySelector(`[data-topic="${nextTopic}"]`);
  if (nextButton) {
    nextButton.focus();
  }
}

function createTopicButton(topic, buttonGroup) {
  const button = createElement("button", "topic-button", topic.label);
  button.type = "button";
  button.dataset.topic = topic.id;
  button.setAttribute("aria-controls", `topic-${topic.id}`);
  button.addEventListener("click", () => setActiveTopic(topic.id));
  button.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveTopicFocus(topic.id, 1, buttonGroup);
      return;
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveTopicFocus(topic.id, -1, buttonGroup);
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      const firstButton = buttonGroup.querySelector(`[data-topic="${topicOrder[0]}"]`);
      if (firstButton) {
        firstButton.focus();
      }
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      const lastTopic = topicOrder[topicOrder.length - 1];
      const lastButton = buttonGroup.querySelector(`[data-topic="${lastTopic}"]`);
      if (lastButton) {
        lastButton.focus();
      }
    }
  });
  return button;
}

function renderNavigation() {
  const nav = document.getElementById("topicNav");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");

  portfolioData.topics.forEach((topic) => {
    nav.append(createTopicButton(topic, nav));
    mobileMenu.append(createTopicButton(topic, mobileMenu));
  });

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(mobileMenu.classList.contains("open")));
  });

  document.getElementById("brandHome").addEventListener("click", (event) => {
    event.preventDefault();
    setActiveTopic("about");
  });

  window.addEventListener("hashchange", () => {
    const nextTopic = getTopicFromHash();
    setActiveTopic(nextTopic, { updateHash: false, focusSection: false });
  });

  const initialTopic = getTopicFromHash();
  setActiveTopic(initialTopic, { updateHash: false, focusSection: false });
}

function renderExperience(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach((item) => {
    const card = createElement("article", "exp-card");
    if (item.category) {
      card.append(createElement("p", "pill", item.category));
    }
    card.append(createElement("h3", "", item.title));
    card.append(createElement("p", "company", item.company));
    card.append(
      createElement(
        "p",
        "meta",
        `${item.client} | ${item.location} | ${item.duration}`
      )
    );

    const stack = createElement("p", "meta", `Stack: ${item.stack.join(", ")}`);
    card.append(stack);

    const list = createElement("ul", "list");
    item.highlights.forEach((highlight) => {
      list.append(createElement("li", "", highlight));
    });
    card.append(list);

    container.append(card);
  });
}

function renderSkills() {
  const skillsContainer = document.getElementById("skills");
  Object.entries(portfolioData.skills).forEach(([group, values]) => {
    const groupCard = createElement("div", "skill-group");
    groupCard.append(createElement("h3", "", group));

    const chipWrap = createElement("div", "chips");
    values.forEach((skill) => {
      const chip = createElement("span", "chip");
      const chipIconWrap = createElement("span", "chip-icon");
      chipIconWrap.classList.add(`skill-icon-${getSkillClassKey(skill)}`);
      chipIconWrap.append(createIconImage("icon-image", getSkillIconPath(skill), `${skill} icon`));
      chip.append(chipIconWrap);
      chip.append(createElement("span", "chip-label", skill));
      chipWrap.append(chip);
    });

    groupCard.append(chipWrap);
    skillsContainer.append(groupCard);
  });
}

function renderEducation() {
  const educationBox = document.getElementById("contactEducation");
  const { degree, institution, years, gpa } = portfolioData.education;
  educationBox.append(createElement("h3", "", "Education"));
  educationBox.append(createElement("h3", "", degree));
  educationBox.append(createElement("p", "company", institution));
  educationBox.append(createElement("p", "meta", `${years} | GPA: ${gpa}`));
}

function renderProjects() {
  const projectsContainer = document.getElementById("projects");
  portfolioData.projects.forEach((project) => {
    const card = createElement("article", "exp-card");
    card.append(createElement("p", "pill", project.type));
    card.append(createElement("h3", "", project.name));
    card.append(createElement("p", "meta", project.description));
    card.append(
      createElement("p", "meta project-stack", `Tech: ${project.technologies.join(", ")}`)
    );

    const outcomesList = createElement("ul", "list");
    project.outcomes.forEach((outcome) => {
      outcomesList.append(createElement("li", "", outcome));
    });
    card.append(outcomesList);
    projectsContainer.append(card);
  });
}

function initializePortfolio() {
  renderNavigation();
  renderProfile();
  const internshipEntries = portfolioData.internships.map((internship) => ({
    ...internship,
    category: "Internship",
  }));
  const combinedExperience = [...portfolioData.workExperience, ...internshipEntries];
  renderExperience("experience", combinedExperience);
  renderProjects();
  renderSkills();
  renderEducation();
}

initializePortfolio();
