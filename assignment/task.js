// Toggle search bar visibility
document.getElementById('searchBtn').addEventListener('click', function() {
    var searchBarContainer = document.getElementById('searchBarContainer');
    if (searchBarContainer.classList.contains('hidden')) {
        searchBarContainer.classList.remove('hidden');
    } else {
        searchBarContainer.classList.add('hidden');
    }
});

// Generate bulbs based on the number entered in the search bar
document.getElementById('generateBtn').addEventListener('click', function() {
    var bulbContainer = document.getElementById('bulbContainer');
    var numBulbs = document.getElementById('searchBar').value;

    // Clear any previously generated bulbs
    bulbContainer.innerHTML = '';

    // Check if the input is a valid number
    if (numBulbs > 0) {
        for (var i = 0; i < numBulbs; i++) {
            // Create a div for each bulb and checkbox
            var bulbItem = document.createElement('div');
            bulbItem.className = 'bulbItem';

            var bulbImage = document.createElement('img');
            bulbImage.src = "bulb_off.png"; // Placeholder off bulb image
            bulbImage.setAttribute('data-off-src',"bulb_off.png" );
            bulbImage.setAttribute('data-on-src', "bulb_on.png");
            bulbImage.id = 'bulb_' + i;
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'checkbox_' + i;
            checkbox.addEventListener('change', function() {
                var img = this.previousSibling;
                if (this.checked) {
                    img.src = img.getAttribute('data-on-src');
                } else {
                    img.src = img.getAttribute('data-off-src');
                }
            });
            bulbItem.appendChild(bulbImage);
            bulbItem.appendChild(checkbox);
            bulbContainer.appendChild(bulbItem);
        }
    } else {
        alert('Please enter a valid number!');
    }
});
