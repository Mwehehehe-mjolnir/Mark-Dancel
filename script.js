/* =========================================================
   1. EDIT YOUR DETAILS HERE
   Everything on the website comes from this CONFIG object.
   ========================================================= */
const CONFIG = {
  name: "Mark Christopher Dancel",
  email: "christopherdancel04@gmail.com",          // example: "you@example.com"
  github: "",         // example: "https://github.com/username"
  linkedin: "",       // optional
  photo: "dance.jpg",          // example: "photo.jpg" (placed in the same folder)
  formEndpoint: "",   // example: a Formspree URL. Leave empty until connected.

  typed: [
    "BSIT Student",
    "Aspiring Programmer",
    "Network Design and Management Student"
  ],

  intro:
    "Hello! I'm a 3rd-year BSIT student passionate about programming, " +
    "technology, computer networking, and building practical digital solutions.",

   about: [
    "I'm a 3rd-year BSIT student majoring in Network Design and Management. " +
    "I'm still growing my programming skills while exploring web development, " +
    "computer networking, and other areas of information technology.",
    "I like picking up new technologies, tracking down bugs, and building projects " +
    "that give me real, hands-on practice."
  ],

  // [icon name, title, description]
  interests: [
    ["code",    "Programming and Web Development", "Building and practicing with HTML, CSS, and JavaScript."],
    ["network", "Computer Networking",             "Learning how devices connect and communicate."],
    ["server",  "Network Design and Management",   "Designing, configuring, and troubleshooting networks."],
    ["bulb",    "Technology and Problem Solving",  "Breaking problems down and finding practical fixes."]
  ],

  // [icon name, label, value]
  profile: [
    ["user",   "Full Name",      "Mark Christopher Dancel"],
    ["book",   "Course",         "Bachelor of Science in Information Technology (BSIT)"],
    ["network","Major",          "Network Design and Management (NDM)"],
    ["cal",    "Year Level",     "3rd Year College"],
    ["check",  "Current Status", "Currently Studying"],
    ["school", "University",     "Nueva Vizcaya State University"],
    ["pin",    "Location",       "Solano Nueva Vizcaya"]
  ],

  education: [
    {
      year: "First Year College",
      major: "",
      focus: "Introduction to Information Technology, computer fundamentals, programming fundamentals, and basic web development.",
      status: "Completed"
    },
    {
      year: "Second Year College",
      major: "",
      focus: "Object-oriented programming, database fundamentals, software development, and computer networking fundamentals.",
      status: "Completed"
    },
    {
      year: "Third Year College",
      major: "Network Design and Management (NDM)",
      focus: "Network configuration, network design, routing and switching, subnetting, VLANs, network troubleshooting, and continued programming practice.",
      status: "Currently Studying",
      current: true   // highlights this entry
    }
  ],


  projects: [
    {
      title: "Programmer's Profile Website",
      desc: "A personal portfolio website showcasing my profile, education, projects, and contact information.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: ""
    },
    
  ]
};

/* =========================================================
   2. ICONS (inline SVG paths, Lucide-style)
   ========================================================= */
const ICONS = {
  code:     '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  network:  '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
  server:   '<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/>',
  bulb:     '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
  user:     '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  book:     '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/>',
  cal:      '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  check:    '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  school:   '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
  pin:      '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  github:   '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-1 2.6V22"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>'
};

/* =========================================================
   3. SMALL HELPER FUNCTIONS
   ========================================================= */
const NAV_ITEMS = ["Home", "About", "Profile", "Education", "Projects", "Contact"];

// Shortcut for document.getElementById
function $(id) {
  return document.getElementById(id);
}

// Makes text safe to insert into HTML
function escapeHtml(text) {
  const replacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  return String(text).replace(/[&<>"]/g, (char) => replacements[char]);
}

// Returns an icon as an <svg> string
function icon(name) {
  return `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
}

// Builds a list of navigation links
function navLinks() {
  return NAV_ITEMS
    .map((item) => `<li><a href="#${item.toLowerCase()}">${item}</a></li>`)
    .join("");
}

/* =========================================================
   4. NAVIGATION
   ========================================================= */
function setupNavigation() {
  const links = $("links");
  const menuButton = $("menu");

  links.innerHTML = navLinks();

  // Open or close the mobile menu
  menuButton.onclick = () => {
    const isOpen = links.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  };

  // Close the mobile menu after a link is clicked
  links.onclick = (event) => {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
      menuButton.setAttribute("aria-expanded", false);
    }
  };

  // Logo shows the first name, for example <juan />
  const firstName = CONFIG.name.replace(/[\[\]]/g, "").split(" ")[0].toLowerCase();
  $("navName").textContent = firstName || "dev";
}

/* =========================================================
   5. HERO SECTION AND TYPING EFFECT
   ========================================================= */
function setupHero() {
  $("heroName").textContent = CONFIG.name;
  $("heroRole").textContent = "3rd-Year BSIT Student | Aspiring Programmer";
  $("heroSpec").textContent = "Specialization: Network Design and Management (NDM)";
  $("heroIntro").textContent = CONFIG.intro;

  // Use a real photo if one is set
  if (CONFIG.photo) {
    const photo = $("photo");
    photo.style.backgroundImage = `url("${CONFIG.photo}")`;
    photo.innerHTML = "";
    photo.setAttribute("role", "img");
    photo.setAttribute("aria-label", "Profile photo");
  }

  startTypingEffect();
}

function startTypingEffect() {
  const element = $("typed");
  const words = CONFIG.typed;

  // Skip the animation if the visitor prefers reduced motion
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.textContent = words.join(" / ");
    return;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];
    charIndex += deleting ? -1 : 1;
    element.textContent = word.slice(0, charIndex);

    let delay = deleting ? 35 : 70;

    if (!deleting && charIndex === word.length) {
      deleting = true;
      delay = 1400;                       // pause when a word is complete
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 300;                        // pause before the next word
    }

    setTimeout(tick, delay);
  }

  tick();
}

/* =========================================================
   6. ABOUT, PROFILE, EDUCATION, PROJECTS
   ========================================================= */
function renderAbout() {
  $("aboutText").innerHTML = CONFIG.about
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  $("interests").innerHTML = CONFIG.interests
    .map(([iconName, title, description]) => `
      <div class="card">
        ${icon(iconName)}
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
      </div>`)
    .join("");
}

function renderProfile() {
  $("profileGrid").innerHTML = CONFIG.profile
    .map(([iconName, label, value]) => `
      <div class="card">
        ${icon(iconName)}
        <span class="lbl">${escapeHtml(label)}</span>
        <span class="val">${escapeHtml(value)}</span>
      </div>`)
    .join("");
}

function renderEducation() {
  $("timeline").innerHTML = CONFIG.education
    .map((item) => {
      const majorLine = item.major
        ? `<br><strong style="color:var(--text)">Major: ${escapeHtml(item.major)}</strong>`
        : "";

      return `
        <article class="card tl${item.current ? " current" : ""}">
          <h3>${escapeHtml(item.year)}</h3>
          <p style="margin:4px 0 10px">
            Bachelor of Science in Information Technology${majorLine}
          </p>
          <p style="margin-bottom:12px">
            <strong style="color:var(--text)">Focus:</strong> ${escapeHtml(item.focus)}
          </p>
          <span class="tag status">${escapeHtml(item.status)}</span>
        </article>`;
    })
    .join("");
}

function renderProjects() {
  $("projectGrid").innerHTML = CONFIG.projects
    .map((project) => {
      // Show the image if provided, otherwise a placeholder
            // Show the image if provided, otherwise leave the gradient box empty
      const preview = project.image
        ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} preview" loading="lazy">`
        : "";
      const tags = project.tech
        .map((tech) => `<span class="tag mono">${escapeHtml(tech)}</span>`)
        .join("");

      // Only show a real link if one was added (no fake links)
      const button = project.link
        ? `<a class="btn" href="${escapeHtml(project.link)}" target="_blank" rel="noopener noreferrer">View Project</a>`
        : `<span class="btn disabled" aria-disabled="true">Link not added yet</span>`;

      return `
        <article class="card prj">
          <div class="prj-img">${preview}</div>
          <h3>${escapeHtml(project.title)}</h3>
          <p style="margin:6px 0 12px">${escapeHtml(project.desc)}</p>
          <div>${tags}</div>
          ${button}
        </article>`;
    })
    .join("");
}

/* =========================================================
   7. CONTACT DETAILS AND FOOTER
   ========================================================= */
// Builds one contact row: a clickable link if a URL exists, otherwise placeholder text
function contactItem(iconName, label, href, placeholder) {
  const svg = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[iconName]}</svg>`;

  if (!href) {
    return `<span class="item">${svg}<span>${escapeHtml(placeholder)}</span></span>`;
  }

  const external = href.startsWith("http")
    ? ' target="_blank" rel="noopener noreferrer"'
    : "";

  return `<a href="${href}"${external}>${svg}<span>${escapeHtml(label)}</span></a>`;
}

function renderContact() {
  $("clist").innerHTML =
    contactItem("mail", CONFIG.email, CONFIG.email && "mailto:" + CONFIG.email, "Email: [Your Email Address]") +
    contactItem("github", "GitHub", CONFIG.github, "GitHub: [Your GitHub Profile URL]") +
    contactItem("linkedin", "LinkedIn", CONFIG.linkedin, "LinkedIn: [Your LinkedIn URL, if available]");
}

function renderFooter() {
  $("footerName").textContent = CONFIG.name;
  $("year").textContent = new Date().getFullYear();   // updates automatically
  $("footerLinks").innerHTML = navLinks();

  let icons = "";

  if (CONFIG.github) {
    icons += `<a href="${CONFIG.github}" aria-label="GitHub" target="_blank" rel="noopener noreferrer">${icon("github")}</a>`;
  }
  if (CONFIG.email) {
    icons += `<a href="mailto:${CONFIG.email}" aria-label="Email">${icon("mail")}</a>`;
  }

  $("footerIcons").innerHTML = icons;
}

/* =========================================================
   8. CONTACT FORM (validation and sending)
   ========================================================= */
const feedback = $("fb");

// Shows or clears an error under one field. Returns true when the field is valid.
function setFieldError(fieldId, message) {
  $(fieldId).classList.toggle("bad", Boolean(message));
  document.querySelector(`[data-for="${fieldId}"]`).textContent = message || "";
  return !message;
}

function showFeedback(type, message) {
  feedback.className = type;      // "ok", "no", or "info"
  feedback.textContent = message;
}

async function handleSubmit(event) {
  event.preventDefault();
  feedback.className = "";
  feedback.textContent = "";

  const name = $("fName").value.trim();
  const email = $("fEmail").value.trim();
  const message = $("fMsg").value.trim();

  // Validate every field (all three run so every error shows at once)
  const results = [
    setFieldError("fName", name.length < 2 ? "Enter your name (at least 2 characters)." : ""),
    setFieldError("fEmail", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address."),
    setFieldError("fMsg", message.length < 10 ? "Write a message of at least 10 characters." : "")
  ];

  if (!results.every(Boolean)) {
    showFeedback("no", "Please fix the highlighted fields and try again.");
    return;
  }

  // No backend connected yet: be honest that nothing was sent
  if (!CONFIG.formEndpoint) {
    showFeedback(
      "info",
      "Your input is valid, but this form isn't connected to an email service yet, " +
      "so nothing was sent. Set formEndpoint in CONFIG (for example, a Formspree URL) to enable sending."
    );
    return;
  }

  // Backend connected: send the message
  try {
    const response = await fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (!response.ok) throw new Error("Request failed");

    showFeedback("ok", "Message sent. Thank you!");
    $("form").reset();
  } catch (error) {
    showFeedback("no", "The message couldn't be sent. Check your connection and try again.");
  }
}

/* =========================================================
   9. START EVERYTHING
   ========================================================= */
setupNavigation();
setupHero();
renderAbout();
renderProfile();
renderEducation();
renderProjects();
renderContact();
renderFooter();
$("form").addEventListener("submit", handleSubmit);