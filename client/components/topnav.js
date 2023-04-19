class Topnav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Top Menu -->
      <div class="absolute top-0 right-0 z-10 flex items-center gap-7 p-4">
        <button onclick="addItem()"><i class="fa-solid fa-plus fa-xl"></i></button>
        <button>        
          <i class="fa-solid fa-bell fa-xl relative">
            <div id="statusBubble" class="absolute -top-3 -right-[0.10rem] border border-cream bg-red-500 h-[0.75rem] w-[0.75rem] rounded-full"></div>
          </i>
        </button>
        <div class="h-10 w-10 relative bg-cover bg-center" style="background-image: url('../assets/images/man-1.png')">
          <div id="statusBubble" class="absolute bottom-0 right-0 border border-cream bg-green-500 h-3 w-3 rounded-full"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("topnav-component", Topnav);
