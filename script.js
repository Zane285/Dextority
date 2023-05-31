// Texts to be printed
const textsToPrint = [
    "/* C#, Python, CSS",
    "Reverse Engineer for .Net */",
    "Heavily Inspired by RadonCoding"
];
// Delay between each character (in milliseconds)
const delay = 100;

// Get the text container elements
const textContainers = document.querySelectorAll("h1, h2, h3");

// Function to print the text slowly
function printTextSlowly(textContainer, text) {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index >= text.length) {
            clearInterval(intervalId);
            return;
        }

        const char = text.charAt(index);
        textContainer.textContent += char;
        index++;
    }, delay);
}

// Call the function for each text container
textContainers.forEach((textContainer, index) => {
    const text = textsToPrint[index];
    textContainer.textContent = ""; // Clear existing content
    printTextSlowly(textContainer, text);
});