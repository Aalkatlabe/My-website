const selectVak = document.querySelector("#vak");
const selectOnderdel = document.querySelector("#onderdelen");

const onderdelen = {
    html: ["elements", "styles", "colors", "links", "images"],
    css: ["selectors", "borders", "margins", "fonts", "position"],
    bootstrap: ["grid", "buttons", "navbar", "inputs", "images"],
    javascript: ["variables", "operators", "functions", "objects", "events"],
    c_sharp: ["variables", "data-types", "if...Else", "switch", "for_loop"],
}

selectVak.addEventListener('click', function () {
    if (selectVak.value === 'html') {
        selectOnderdel.textContent = "";
        for (let i = 0; i < onderdelen.html.length; i++) {
            const optionEl = document.createElement("option");
            optionEl.value = "";
            optionEl.textContent = onderdelen.html[i];
            optionEl.value = onderdelen.html[i];
            selectOnderdel.append(optionEl);
            //console.log(optionEl.value);
        }
    }
    else if (selectVak.value === 'css') {
        selectOnderdel.textContent = "";
        for (let i = 0; i < onderdelen.css.length; i++) {
            const optionEl = document.createElement("option");
            optionEl.value = "";
            optionEl.textContent = onderdelen.css[i];
            optionEl.value = onderdelen.css[i];
            selectOnderdel.append(optionEl);
            //console.log(optionEl.value);
        }
    }
    else if (selectVak.value === 'bootstrap') {
        selectOnderdel.textContent = "";
        for (let i = 0; i < onderdelen.bootstrap.length; i++) {
            const optionEl = document.createElement("option");
            optionEl.value = "";
            optionEl.textContent = onderdelen.bootstrap[i];
            optionEl.value = onderdelen.bootstrap[i];
            selectOnderdel.append(optionEl);
            //console.log(optionEl.value);
        }
    }
    else if (selectVak.value === 'javascript') {
        selectOnderdel.textContent = "";
        for (let i = 0; i < onderdelen.javascript.length; i++) {
            const optionEl = document.createElement("option");
            optionEl.value = "";
            optionEl.textContent = onderdelen.javascript[i];
            optionEl.value = onderdelen.javascript[i];
            selectOnderdel.append(optionEl);
            //console.log(optionEl.value);
        }
    }
    else if (selectVak.value === 'c#') {
        selectOnderdel.textContent = "";
        for (let i = 0; i < onderdelen.c_sharp.length; i++) {
            const optionEl = document.createElement("option");
            optionEl.value = "";
            optionEl.textContent = onderdelen.c_sharp[i];
            optionEl.value = onderdelen.c_sharp[i];
            selectOnderdel.append(optionEl);
            //console.log(optionEl.value);



        }
    }

})

//const gridItems = document.querySelectorAll(".grid-item-rooster");
const gridItems = document.querySelectorAll(".inschrijving-item");
const mijnLessen = document.querySelector(".mijn-lessen");
let teller = 1;
for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("click", function () {
        console.log(this.textContent);
        const inschrijving = prompt("Ja/Nee om je in te schrijven voor fysieke lessen");
        console.warn(inschrijving);


        if (inschrijving.toLowerCase() === "ja") {
            alert("We hebben je inschreven voor " + this.textContent);


            const pEl = document.createElement("p");
            pEl.classList = "pEl";
            pEl.textContent += `${teller++}- ${this.textContent} `;
            mijnLessen.append(pEl);




        }
    })

}


