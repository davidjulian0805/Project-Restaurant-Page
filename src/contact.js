const loadContactPage = () => {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("contact-container");

  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";

  const p = document.createElement("p");
  p.textContent = "We're always happy to serve you. Find us at any of our branches nationwide!";

  const info = document.createElement("div");
  info.classList.add("contact-info");

  const rows = [
    {
       icon: "📍", label: "Head Office", value: "Chowking Building, Ortigas Ave, Pasig City" 
      },
    { 
      icon: "📞", label: "Hotline", value: "1-800-1000-CHOW (2469)"
     },
    { 
      icon: "📧", label: "Email", value: "customercare@chowking.com.ph" 
    },
    {
       icon: "🕐", label: "Store Hours", value: "Open Daily, 6:00 AM – 12:00 MN" 
      },
    { 
      icon: "🚗", label: "Drive-Thru", value: "Available at selected branches" 
    },
  ];

  rows.forEach(({ icon, label, value }) => {
    const row = document.createElement("div");
    row.classList.add("contact-row");

    const iconEl = document.createElement("div");
    iconEl.classList.add("icon");
    iconEl.textContent = icon;

    const textEl = document.createElement("div");

    const strong = document.createElement("strong");
    strong.textContent = label;

    const span = document.createElement("span");
    span.textContent = value;

    textEl.appendChild(strong);
    textEl.appendChild(span);
    row.appendChild(iconEl);
    row.appendChild(textEl);
    info.appendChild(row);
  });

  container.appendChild(h2);
  container.appendChild(p);
  container.appendChild(info);
  content.appendChild(container);
};

export default loadContactPage;