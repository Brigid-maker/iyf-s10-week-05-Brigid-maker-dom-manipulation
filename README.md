// ===============================
// TASK 9.1: SELECTING ELEMENTS
// ===============================

// 1. Select the h1 element
const h1 = document.querySelector("h1");
console.log("H1 Element:", h1);

// 2. Select all elements with class "content"
const contentParagraphs = document.querySelectorAll(".content");
console.log("All .content elements:", contentParagraphs);

// 3. Select the form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("Form:", form);

// 4. Select the email input
const emailInput = document.querySelector("#email");
console.log("Email Input:", emailInput);

// 5. Select all list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log("Nav Items:", navItems);

// 6. Select the first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First Nav Link:", firstNavLink);

// 7. Select the last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log("Last Paragraph:", lastParagraph);



// ===============================
// TASK 9.2: TRAVERSING THE DOM
// ===============================

// Select header and navigate to nav inside it
const header = document.getElementById("main-header");
const nav = header.querySelector("nav");
console.log("Nav inside header:", nav);

// Select first nav-link → get parent <li>
console.log("Parent LI of first link:", firstNavLink.parentElement);

// Select article → get next sibling (section)
const article = document.querySelector("article");
console.log("Next sibling of article:", article.nextElementSibling);

// Select ul → get all child li elements
const navList = document.querySelector(".nav-list");
console.log("All LI children:", navList.children);

// Start from footer → go up to body
const footer = document.querySelector("footer");
console.log("Footer parent (body):", footer.parentElement);



// ===============================
// TASK 9.3: MODIFYING CONTENT
// ===============================

// TEXT CONTENT
h1.textContent = "Updated DOM Practice Page";

// HTML CONTENT
const articleSection = document.querySelector("article");

articleSection.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content added using JavaScript.</p>
`;

// ATTRIBUTES
const firstLink = document.querySelector(".nav-link");

// Get attribute
console.log("Original href:", firstLink.getAttribute("href"));

// Set attribute
firstLink.setAttribute("href", "https://example.com");

// Remove attribute (if exists)
firstLink.removeAttribute("target");

// STYLES
const container = document.querySelector(".container");

// Apply styles individually
container.style.backgroundColor = "#f4f4f4";
container.style.padding = "25px";
container.style.borderRadius = "10px";



// ===============================
// TASK 9.4: ADDING & REMOVING ELEMENTS
// ===============================

// CREATE + ADD ELEMENT
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added dynamically!";
newParagraph.classList.add("content", "highlight");

// Add to article
articleSection.appendChild(newParagraph);


// REMOVE ELEMENT

// Remove last nav item
const lastNavItem = document.querySelector("nav li:last-child");
if (lastNavItem) {
    lastNavItem.remove();
}

// Remove footer
if (footer) {
    footer.remove();
}


// CLONING ELEMENT

const navItem = document.querySelector(".nav-link").parentElement;
const clonedItem = navItem.cloneNode(true);

// Change cloned text
clonedItem.querySelector("a").textContent = "Cloned Link";

// Add clone to nav
navList.appendChild(clonedItem);



// ===============================
// FINAL TASK: ADD NAV ITEM FUNCTION
// ===============================

function addNavItem(text, href) {
    // Create elements
    const li = document.createElement("li");
    const link = document.createElement("a");

    // Add content
    link.textContent = text;
    link.href = href;

    // Add class
    link.classList.add("nav-link");

    // Structure elements
    li.appendChild(link);

    // Add to navigation list
    document.querySelector(".nav-list").appendChild(li);
}

// Test function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");



// ===============================
// END OF FILE
// ===============================