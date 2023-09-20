//Setup and start animation! name
var typed = new Typed('#name', {
    strings: ['Omkar,'],
    typeSpeed: 80,
});

// Setup and start animation! 'Web Developer', 'Linux Administrator', 'Java Developer'
var typed = new Typed('#element', {
    strings: [ 'Linux Administrator','Network Management','Web Developer', 'Java Developer'],
    typeSpeed: 50,
    backSpeed: 0,
    loop: true
});

// Get references to the buttons by their IDs
var downloadResumeBtn = document.getElementById('downloadResumeBtn');
var visitHackerRankBtn = document.getElementById('visitHackerRankBtn');

// Add click event listeners to the buttons
downloadResumeBtn.addEventListener('click', function () {
    // Open the PDF file in a new tabp
    window.open('omkar.pdf', '_blank');
});

visitHackerRankBtn.addEventListener('click', function () {
    // Open HackerRank in a new tab
    window.open('https://www.hackerrank.com/omii1211?hr_r=1', '_blank');
});
