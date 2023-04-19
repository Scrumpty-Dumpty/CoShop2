class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Sidebar Menu -->
      <div id="menu" class="min-h-screen w-60 transition-all duration-200">
        <div class="flex items-center justify-center p-4">
          <span class="flex-1 text-xl font-semibold">CoShop</span>
          <button id="menuBtn" type="button" aria-controls="menu" aria-label="Open navigation" aria-expanded="true">
            <i class="fa-solid fa-bars-staggered fa-lg"></i>
          </button>
        </div>
        <nav class="p-4 flex flex-col gap-5">
          <a href="../index.html" class="flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-house fa-lg p-5"></i>
            <span class="ml-2 font-medium">Dashboard</span>
          </a>
          <a href="" class="cursor-not-allowed flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-message fa-lg p-5"></i>
            <span class="ml-2 font-medium">Messages</span>
          </a>
          <a href="../pages/lists.html" class="flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-list fa-lg p-5"></i>
            <span class="ml-2 font-medium">Lists</span>
          </a>
          <a href="../pages/groups.html" class="flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-user-group fa-lg p-5"></i>
            <span class="ml-2 font-medium">Groups</span>
          </a>
          <a href="../pages/settings.html" class="flex items-center hover:bg-cream rounded-md">
            <i class="fa-solid fa-gear fa-lg p-5"></i>
            <span class="ml-2 font-medium">Settings</span>
          </a>
        </nav>
      </div>
    `;
  }
}

customElements.define("menu-component", Menu);

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const linkText = document.querySelectorAll("span");
let colorPicker = document.getElementById("colorpicker");

// used to expand the menu
const expand = () => {
  menuBtn.setAttribute("aria-expanded", "true");
  menuBtn.setAttribute("aria-label", "Close menu");
  localStorage.setItem("menu-expanded", "true");
  menu.classList.replace("w-[97px]", "w-60");
  linkText.forEach((l) => {
    l.classList.remove("hidden");
  });
};

// used to shrink the menu
const shrink = () => {
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Open menu");
  localStorage.setItem("menu-expanded", "false");
  menu.classList.replace("w-60", "w-[97px]");
  linkText.forEach((l) => {
    l.classList.add("hidden");
  });
};

// on load fetch and apply menu state
localStorage.getItem("menu-expanded") == "true" ? expand() : shrink();

// update menu state on change
menuBtn.addEventListener("click", () => {
  localStorage.getItem("menu-expanded") == "true" ? shrink() : expand();
});

// on load fetch and apply menu color
// if no custom color is set then use defaults
menu.style.backgroundColor = localStorage.getItem("navColor") ?? "#F2BB7F";
colorPicker.setAttribute(
  "value",
  localStorage.getItem("navColor") ?? "#F2BB7F"
);

// save and update menu color on change
colorPicker.addEventListener("input", () => {
  localStorage.setItem("navColor", colorPicker.value);
  menu.style.backgroundColor = localStorage.getItem("navColor");
});
