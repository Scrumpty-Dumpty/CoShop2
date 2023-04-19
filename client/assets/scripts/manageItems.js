let list = document.querySelector("#myUL");
let items = [];

function Item(name, quantity, location) {
  this.name = name;
  this.quantity = quantity;
  this.location = location;
}

function addItem() {
  // create new element
  let newItem = document.createElement("li");
  newItem.innerHTML = `
  <div
    class="flex items-center justify-between border-b border-gray-400 p-2"
  >
    <div class="flex items-center gap-4">
      <input type="checkbox" />
      <input
        id="itemName"
        type="text"
        class="w-min bg-transparent text-xl outline-none"
        placeholder="Add item name..."
      />
    </div>
    <div class="flex items-center gap-4">
      <label for="quantity"><i class="fa-solid fa-hashtag text-gray-600"></i></label>
      <input id="itemQuantity" name="quantity" type="number" class="bg-transparent w-14" value="1" min="1" max="999">

      <select id="itemStore" class="bg-transparent p-2 text-gray-600">
        <option selected>Location</option>
      </select>
      <img src="../assets/images/man-1.png" class="h-10" />
      <!-- <button
        onclick="document.getElementById('editWindow').classList.toggle('hidden');"
      >
        <i class="fa-solid fa-pen-to-square"></i>
      </button> -->
      <button id="itemDelete">
        <i class="fa-solid fa-trash-can text-red-700"></i>
      </button>

      <!-- test button -->
      <button onclick="console.log(items);">
        <i class="fa-solid fa-circle-info text-blue-700"></i>
      </button>

    </div>
  </div>
  `;
  list.appendChild(newItem);

  // create a new item
  let blankItem = items.push(new Item());

  // pull values on change with event listener
  let itemName = document.querySelector("#itemName");
  let itemQuantity = document.querySelector("#itemQuantity");
  let itemDelete = document.querySelector("#itemDelete");

  itemName.addEventListener("change", () => {
    blankItem.name = itemName.value;
    console.log(items);
  });

  itemQuantity.addEventListener("change", () => {
    blankItem.quantity = itemQuantity.value;
    console.log(items);
  });

  itemDelete.addEventListener("click", () => {
    newItem.remove();
    items.pop(blankItem);
    console.log(items.length);
  });
}

// create template item on load
addItem();

// TODO: set unique ids to be able to change parameters
