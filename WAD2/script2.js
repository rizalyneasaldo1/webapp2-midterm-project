const selectedContainerIndex = localStorage.getItem("selectedContainerIndex");

function loadWholeContainer() {
    if (selectedContainerIndex !== null) {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(photos => {
                const selectedImage = document.getElementById("bigImage");
                const selectedTitle = document.getElementById("bigTitle");

                selectedImage.src = photos[selectedContainerIndex].url;
                selectedTitle.textContent = photos[selectedContainerIndex].title;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}

window.onload = loadWholeContainer;

document.getElementById("back").addEventListener("click", function() {
    window.location.href = "index1.html";
});