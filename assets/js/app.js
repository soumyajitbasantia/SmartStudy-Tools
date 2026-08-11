const iconPaths = {
  calculator: '<path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M8 6h8"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  wallet: '<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><path d="M16 12h5"/><path d="M7 5V3h10v2"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
  multiply: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  graduation: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/>',
  document: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/>',
  timer: '<path d="M10 2h4"/><path d="M12 14v-4"/><path d="M12 14l3 2"/><circle cx="12" cy="14" r="8"/>',
  heartPulse: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3.2 12h4l2-4 3.6 8 2-4h6"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-7"/><path d="M19 7h-4"/><path d="M19 7v4"/>',
  clipboard: '<path d="M9 2h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a2 2 0 0 1 2-2Z"/><path d="M9 4h6"/><path d="M8 12h8"/><path d="M8 16h6"/>',
  hash: '<path d="M4 9h16"/><path d="M4 15h16"/><path d="M10 3 8 21"/><path d="m16 3-2 18"/>',
  fraction: '<path d="M19 5 5 19"/><path d="M7 7h4"/><path d="M8 5v4"/><path d="M14 17h4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'
};

function getIcon(name, label = "") {
  const path = iconPaths[name] || iconPaths.calculator;
  const aria = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  return `<svg class="icon-svg" ${aria} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

const tools = [
  {
    title: "Math Calculator",
    description: "Perform addition, subtraction, multiplication, and division quickly.",
    icon: "calculator",
    category: "Calculator",
    href: "mathematical.html"
  },
  {
    title: "Percentage Calculator",
    description: "Find percentages, discounts, increases, decreases, and original values.",
    icon: "percent",
    category: "Calculator",
    href: "percentage.html"
  },
  {
    title: "Loan EMI Calculator",
    description: "Estimate monthly EMI, total payment, and total interest for a loan.",
    icon: "wallet",
    category: "Finance",
    href: "loan.html"
  },
  {
    title: "Age Calculator",
    description: "Calculate exact age and days left until your next birthday.",
    icon: "calendar",
    category: "Student Life",
    href: "age.html"
  },
  {
    title: "Unit Converter",
    description: "Convert length, weight, and temperature units in seconds.",
    icon: "repeat",
    category: "Converter",
    href: "unit.html"
  },
  {
    title: "Table Generator",
    description: "Generate multiplication tables for quick practice and revision.",
    icon: "multiply",
    category: "Practice",
    href: "table.html"
  },
  {
    title: "GPA Calculator",
    description: "Calculate a weighted GPA or SGPA from subjects, credits, and grade points.",
    icon: "graduation",
    category: "Study",
    href: "gpa.html"
  },
  {
    title: "Word Counter",
    description: "Count words, characters, sentences, reading time, and speaking time.",
    icon: "document",
    category: "Productivity",
    href: "word-counter.html"
  },
  {
    title: "Pomodoro Timer",
    description: "Focus with a simple study timer using work and break sessions.",
    icon: "timer",
    category: "Productivity",
    href: "pomodoro.html"
  },
  {
    title: "BMI Calculator",
    description: "Check body mass index with metric or centimetre-based inputs.",
    icon: "heartPulse",
    category: "Health",
    href: "bmi.html"
  },
  {
    title: "CGPA Calculator",
    description: "Calculate overall CGPA from semester GPA values and credits.",
    icon: "chart",
    category: "Study",
    href: "cgpa.html"
  },
  {
    title: "Marks Percentage Calculator",
    description: "Calculate total marks, percentage, and grade from exam scores.",
    icon: "clipboard",
    category: "Calculator",
    href: "marks.html"
  },
  {
    title: "LCM & HCF Calculator",
    description: "Find least common multiple and highest common factor quickly.",
    icon: "hash",
    category: "Calculator",
    href: "lcm-hcf.html"
  },
  {
    title: "Fraction Calculator",
    description: "Add, subtract, multiply, and divide fractions with simplification.",
    icon: "fraction",
    category: "Calculator",
    href: "fraction.html"
  }
];

function renderToolCards(containerId, items = tools) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((tool, index) => `
    <a class="tool-card" style="--delay: ${index * 70}ms" href="${tool.href}" data-title="${tool.title.toLowerCase()}" data-category="${tool.category.toLowerCase()}">
      <span class="tool-icon">${getIcon(tool.icon, tool.title)}</span>
      <h3>${tool.title}</h3>
      <p>${tool.description}</p>
      <span class="badge">${tool.category}</span>
    </a>
  `).join("");
}

function setupCategoryFilter(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;
  const categories = [...new Set(tools.map((tool) => tool.category))].sort();
  select.innerHTML += categories.map((category) => `<option value="${category.toLowerCase()}">${category}</option>`).join("");
}

function setupToolFilters(inputId, selectId, gridId, emptyId) {
  const input = document.getElementById(inputId);
  const select = document.getElementById(selectId);
  const grid = document.getElementById(gridId);
  const empty = document.getElementById(emptyId);
  if (!input || !grid) return;

  const applyFilters = () => {
    const query = input.value.trim().toLowerCase();
    const category = select?.value || "all";
    let visibleCount = 0;

    [...grid.querySelectorAll(".tool-card")].forEach((card) => {
      const text = `${card.dataset.title} ${card.dataset.category} ${card.textContent}`.toLowerCase();
      const matchesSearch = text.includes(query);
      const matchesCategory = category === "all" || card.dataset.category === category;
      const isMatch = matchesSearch && matchesCategory;
      card.classList.toggle("hidden", !isMatch);
      if (isMatch) visibleCount += 1;
    });

    if (empty) empty.classList.toggle("hidden", visibleCount !== 0);
  };

  input.addEventListener("input", applyFilters);
  select?.addEventListener("change", applyFilters);
}

function setupToolSearch(inputId, gridId, emptyId) {
  setupToolFilters(inputId, null, gridId, emptyId);
}

function setResult(id, message, type = "success") {
  const element = document.getElementById(id);
  if (!element) return;
  element.innerHTML = message;
  element.className = `result-box ${type}`;
}

async function copyResult(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const text = element.innerText.trim();
  if (!text || text.toLowerCase().includes("will appear") || text.toLowerCase().includes("enter")) return;

  try {
    await navigator.clipboard.writeText(text);
    showToast("Result copied to clipboard.");
  } catch (error) {
    showToast("Copy is not available in this browser.");
  }
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function formatNumber(value, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits
  }).format(value);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(value);
}

function getNumber(id) {
  return Number(document.getElementById(id)?.value);
}

function isPositiveNumber(value) {
  return Number.isFinite(value) && value > 0;
}

function setupThemeToggle() {
  const currentTheme = localStorage.getItem("smartstudy-theme") || "light";
  document.documentElement.dataset.theme = currentTheme;

  document.querySelectorAll(".nav-links").forEach((nav) => {
    if (nav.querySelector(".theme-toggle")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.setAttribute("aria-label", "Toggle dark mode");
    button.innerHTML = currentTheme === "dark" ? getIcon("sun") : getIcon("moon");
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("smartstudy-theme", nextTheme);
      button.innerHTML = nextTheme === "dark" ? getIcon("sun") : getIcon("moon");
    });
    nav.appendChild(button);
  });
}

function hydrateStaticIcons() {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    const iconName = element.dataset.icon;
    element.innerHTML = getIcon(iconName);
  });
}

function setupSpotlight() {
  window.addEventListener("pointermove", (event) => {
    const x = `${(event.clientX / window.innerWidth) * 100}%`;
    const y = `${(event.clientY / window.innerHeight) * 100}%`;
    document.body.style.setProperty("--mouse-x", x);
    document.body.style.setProperty("--mouse-y", y);
  }, { passive: true });
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // The website still works if service worker registration fails.
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateStaticIcons();
  setupThemeToggle();
  setupSpotlight();
  setupRevealAnimations();
  registerServiceWorker();
});
