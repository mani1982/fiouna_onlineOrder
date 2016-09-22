/* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */

$('#payment').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }
});