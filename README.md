# Event Guest List Manager

A simple, dynamic, single-page web application for managing an event guest list. This project was built to practice working with forms, capturing user input, and updating the page dynamically using JavaScript — all without refreshing the browser.

## Detailed Description

This application provides a clean interface for managing event attendees without any page reloads. All operations are handled dynamically on the client-side.

**Key Features:**
* **Add Guests:** Add guests by name and category (Friend, Family, Colleague).
* **Dynamic List:** The guest list updates instantly as guests are added.
* **Remove Guests:** Easily remove guests from the list with a dedicated button.
* **Edit Names:** An "Edit" button allows for inline updating of a guest's name, which then becomes a "Save" button.
* **Toggle RSVP:** Mark guests as "Attending" or "Not Attending." The UI reflects this status with a strikethrough and color change.
* **Guest Limit:** The application enforces a maximum of 10 guests and alerts the user if they try to exceed the limit.
* **Timestamps:** Displays the time each guest was added to the list.
* **Same Guest NamesL** Displays Name and Category if guest already exists with same name(case-insensitive) and category as input.


## File Structure

* src/index.js
* index.html
* style.css

## Project Setup

 Since this is a self-contained front-end project with no build steps or local dependencies, you can run it directly in your browser.

1.  **Download the file:**
    Clone this repository to your local machine. 

2.  **Open in browser:**
    Simply open the `index.html` file in any modern web browser (like Chrome). The application will be fully functional. You can also use live server with VS Code



## Usage

Once the application is open in your browser, you can perform the following actions:

1.  **Adding a Guest:**
    * Type the guest's name into the "Name" input field.
    * Select a category from the dropdown menu.
    * Click the **Add Guest** button or press the **Enter** key.

2.  **Managing a Guest:**
    * **Toggle RSVP:** Click the "Attending" / "Not Attending" button to change the guest's status.
    * **Edit Name:** Click the **Edit** button. The guest's name will become an editable input field. After making changes, click the **Save** button.
    * **Remove Guest:** Click the **Remove** button to permanently delete the guest from the list.


## Author

* **Daniel Muhia**

##  License

This project is licensed under the MIT License.

---

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



