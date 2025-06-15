//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () =>{
  //declares variables
  const addForm = document.querySelector("#guest-form");
  const guestNameInput = document.querySelector("#guest-name");
  const guestCategory = document.querySelector("#guest-category");
  const guestList = document.querySelector("#guest-list");
  const guestCount = document.querySelector("#guest-count");
  const messageArea = document.querySelector("#message-area");

  //button classes for styling
  const btnBaseClasses = "text-sm font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 shadow-sm";
  const btnSecondaryClasses = `${btnBaseClasses} bg-slate-200 text-slate-700 hover:bg-slate-300 focus:ring-slate-400`;
  const btnSaveClasses = `${btnBaseClasses} bg-green-500 text-white hover:bg-green-600 focus:ring-green-400`;
  const btnDeleteClasses = `${btnBaseClasses} bg-red-500 text-white hover:bg-red-600 focus:ring-red-400`;


  //guests array
  let guests = [];

  //populateGuestList Function
  const populateGuestList = () => {
    //sets innerHTML to empty string
    guestList.innerHTML = '';

    guests.forEach(guest => {
      //creates new list tag & populates class and data-id
      const li = document.createElement("li");
      li.className = `guest-item flex items-center justify-between p-4 rounded-lg shadow-sm ${guest.attending ? 'attending' : 'not-attending'}`;
      li.dataset.id = guest.id;

      //sets category class
      const categoryClass = `category-${guest.category.toLowerCase()}`;

      //sets isEditing and button to use during editing and not editing
      const isEditing = guest.isEditing;
      const editButtonClasses = isEditing ? btnSaveClasses : btnSecondaryClasses;
      //populates list tags with HTML
      li.innerHTML = `
        <div class="flex-grow flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            ${isEditing ? `
                <input type="text" value="${guest.name}" class="guest-name-edit w-full sm:w-auto px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
            ` : `
                <span class="guest-name-display font-semibold text-slate-800">${guest.name}</span>
            `}
            <div class="flex items-center gap-3">
                <span class="category-tag ${categoryClass}">${guest.category}</span>
                <span class="text-xs text-slate-400">${guest.timestamp}</span>
            </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0 ml-4">
            <button data-action="toggle" class="${btnSecondaryClasses}">${guest.attending ? 'Attending' : 'Not Attending'}</button>
            <button data-action="${isEditing ? 'save' : 'edit'}" class="${editButtonClasses}">${isEditing ? 'Save' : 'Edit'}</button>
            <button data-action="delete" class="${btnDeleteClasses}">Remove</button>
        </div>
    `;
    //append list tag to ul with guest-list id
    guestList.appendChild(li);
    });
    updateGuestCount();
  }

  //updates guest count
  const updateGuestCount = () => {
    guestCount.textContent = guests.length;
  }

  //printMessage Function
  const printMessage = (msg, isError = false) => {
    //prints message and sets classes for error and no error
    messageArea.textContent = msg;
    messageArea.className =  `text-center mb-4 font-semibold h-6 ${isError ? 'text-red-500' : 'text-green-600'}`;

    //clears message after 3seconds
    setTimeout(() => {
      messageArea.textContent = '';
    }, 3000);
  }

  //handleAddGuest Function
  //handles form submission to add a new guest
  const handleAddGuest = (e) => {
    //prevents default refreshing of screen during submission
    e.preventDefault();

    //checks if max capacity is reached
    if(guests.length >= 10){
      printMessage("The guest list is full(10 guests max).", true);
      return;
    }

    //saves name and category
    const name = guestNameInput.value.trim();
    const category = guestCategory.value;
    
    // NEW: Check if name already exists (case-insensitive)
    const nameExists = guests.some(guest => guest.name.toLowerCase() === name.toLowerCase());
    if (nameExists) {
    printMessage(`"${name}" is already on the list.`, true);
    return;
    }

    

    //create newGuest Array
    const newGuest = {
      id: Date.now(),//Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
      name: name,
      category: category,
      attending: true,
      timestamp: new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}), //Sets current Time
      isEditing: false
    };

    //add new guest
    guests.push(newGuest);
    populateGuestList();

    //resets input fields 
    addForm.reset();
    //focuses to input field
    guestNameInput.focus();
  }

  const handleGuestListsClick = (e) => {
    //exits function if button is not clicked
    const button = e.target.closest('button');
    if(!button) return;

    //exits function if button does not have adata-action
    const action = button.dataset.action;
    if(!action) return;

    //saves HTML with class "guest-item" which is a list tag and converts data-id value to number
    const li = e.target.closest('.guest-item');
    const guestId = Number(li.dataset.id);

    //remove button
    //removes guest
    if(action === "delete"){
      guests = guests.filter(guest => guest.id !== guestId);
      populateGuestList();
    }

    //toggle button(toggles btwn attending, not attending)
    if (action === "toggle"){
      const guest = guests.find(guest => guest.id === guestId);
      guest.attending = !guest.attending;
      populateGuestList();
    }

    //edit button
    //edits guest
    if(action === "edit"){
      guests.forEach(g => g.isEditing = (g.id === guestId));
      populateGuestList();
      const input = li.querySelector('.guest-name-edit');
      if (input) input.focus();
    }

    //save button
    //saves guest
    if(action === "save"){
      const guest = guests.find(guest => guest.id === guestId);
      const input = li.querySelector('.guest-name-edit');
      const newName = input.value.trim();

      if (newName) {
        guest.name = newName;
        guest.isEditing = false;
        populateGuestList();
      }else{
        printMessage("Name cannot be empty.", true);
      }

    }

  }

  //Event Listeners
  addForm.addEventListener("submit", handleAddGuest);
  guestList.addEventListener("click", handleGuestListsClick);

  //initial render
  populateGuestList();

})