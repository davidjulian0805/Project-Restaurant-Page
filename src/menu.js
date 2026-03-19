const loadMenuPage = () => {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("menu-container");

  const title = document.createElement("h2");
  title.classList.add("section-title");
  title.textContent = "Our Menu";

  const subtitle = document.createElement("p");
  subtitle.classList.add("section-subtitle");
  subtitle.textContent = "Authentic Chinese flavors made for every Filipino";

  const categories = [
    {
      category: "🥟 Siopao & Dimsum",
      items: [
        { 
          name: "Fried Siopao (2pcs)", desc: "Lightly crisp, meaty-sarap filling", price: "₱75" 
        },

        { 
          name: "Steamed Siopao Asado", desc: "Classic steamed bun with sweet pork filling", price: "₱65" 
        },
        {
           name: "Hakaw (4pcs)", desc: "Steamed shrimp dumplings", price: "₱95" 
          },

        { 
          name: "Siomai (6pcs)", desc: "Pork and shrimp steamed dumplings", price: "₱85" 
        },
      ],
    },

    {
      category: "🍜 Noodles & Rice",
      items: [
        { 
          name: "Chowfan Solo", desc: "Classic Chinese-style fried rice", price: "₱89" 
        },
        {
           name: "Beef Wonton Noodle Soup", desc: "Silky noodles with wontons in savory broth", price: "₱135"
           },
        {
           name: "Lauriat Meal", desc: "Rice + viand + soup + dessert combo", price: "₱199" 
          },
        { 
          name: "Sweet & Sour Pork Rice", desc: "Crispy pork in tangy sweet sauce over rice", price: "₱155" 
        },
      ],
    },
    
    {
      category: "🧋 Drinks & Desserts",
      items: [
        {
           name: "Halo-Halo Regular", desc: "Classic Filipino shaved ice dessert", price: "₱99"
           },
        {
           name: "Gulaman at Sago", desc: "Sweet jelly and tapioca pearl drink", price: "₱39" 
          },
        { 
          name: "Soft Drinks Regular", desc: "Coke, Sprite, or Royal", price: "₱35"
         },
      ],
    },
  ];

  container.appendChild(title);
  container.appendChild(subtitle);

  categories.forEach(({ category, items }) => {
    const catTitle = document.createElement("h3");
    catTitle.classList.add("category-title");
    catTitle.textContent = category;
    container.appendChild(catTitle);

    items.forEach(({ name, desc, price }) => {
      const item = document.createElement("div");
      item.classList.add("menu-item");

      const info = document.createElement("div");
      info.classList.add("menu-item-info");

      const h3 = document.createElement("h3");
      h3.textContent = name;

      const p = document.createElement("p");
      p.textContent = desc;

      const priceEl = document.createElement("div");
      priceEl.classList.add("menu-item-price");
      priceEl.textContent = price;

      info.appendChild(h3);
      info.appendChild(p);
      item.appendChild(info);
      item.appendChild(priceEl);
      container.appendChild(item);
    });
  });

  content.appendChild(container);
};

export default loadMenuPage;