const url = "https://jsonplaceholder.typicode.com/photos";

const Container = document.getElementById("Palette");

function load() {
    fetch(url).then((response) => {
        response.ok ? response.json()
            .then((photos) => {

                let Str = '';

                for (let i = 0; i < 50; i++) {
                    Str +=
                        `<div class="Container" id="IDContainer${i}" onclick="viewContainer(${i})">
                            <div class="ImageContainer">
                                <img class="Image" id="Image${i}">
                            </div>
                            <div class="TitleContainer" id="TitleContainer">
                                <p class="Title" id="Title${i}"></p>
                            </div>
                        </div>`;
                }

                Container.innerHTML = Str;

                for (let i = 0; i < 50; i++) {
                    let Images = "Image" + i;
                    let ImageContainer = document.getElementById(Images);
                    let Photos = photos[i].url;
                    ImageContainer.src = Photos;
                }

                for (let i = 0; i < 50; i++) {
                    let Titles = "Title" + i;
                    let TitleCont = document.getElementById(Titles);
                    let Title = photos[i].title;
                    TitleCont.textContent = Title;
                }
            }) : pass;
    });
}

function viewContainer(index) {
    localStorage.setItem("selectedContainerIndex", index);
    window.location.href = "index2.html";
}

load();
