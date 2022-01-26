const arr = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    " Labore aliquid, magnam optio quae iure dolorem doloribus impedit recusandae?",
    "Dicta nostrum accusamus aut a reprehenderit velit ab porro repellendus possimus dolore.",
    "Aliquid accusantium quod laboriosam deserunt consectetur fugit possimus doloribus debitis cupiditate ad architecto, sapiente reprehenderit incidunt corporis eos!",
    "Vitae aliquid quidem libero minima porro ab repudiandae ea dolorem voluptatem adipisci nostrum officiis ad debitis culpa animi facilis, cupiditate temporibus.",
    "Vitae reiciendis delectus, totam quos dolores autem odio tempore!",
    "Vero, cum corporis obcaecati quae facere nesciunt aspernatur cupiditate commodi minima laudantium porro provident consectetur et ipsam.",
    "Dolores cupiditate quae dolorum consequuntur numquam cum perspiciatis unde totam commodi quisquam, non voluptas eligendi magnam harum dolore voluptatem, dolor sed ullam, velit magni autem natus ad quasi?",
    "Tenetur dolore molestiae cupiditate sint, culpa eius, inventore debitis recusandae repellendus itaque expedita omnis at odit dolorem beatae ipsum earum possimus, deserunt rem neque dolores doloribus fuga similique?",
    "Exercitationem mollitia iure pariatur nemo commodi, possimus"
];
const index = Math.floor(Math.random() * 10);
const str = arr[index];

const text = document.querySelector(".text");
const input = document.querySelector(".input");
const progressBar = document.querySelector(".progress-bar");

let timer = null;

const charEls = []

function populateText(str) {
    str.split("").map(letter => {
        const span = document.createElement("span");
        span.innerText = letter;
        text.appendChild(span);
        charEls.push(span);
    });
}
 
populateText(str);

function resetCharEls() {
    charEls.map(charEl => {
        charEl.classList.remove("correct");
        charEl.classList.remove("wrong");
    })
}

function start() {
    progressBar.classList.add("active");
    timer = setTimeout(() => {
        alert("Time's up!!");        
    }, 15000);
}

input.addEventListener("keyup", () => {
    if(!timer) {
        start();
    }
    const val = input.value;
    resetCharEls();
    let errorCount = 0;
    val.split("").map((letter, i) => {
        if(letter === str[i]) {
            charEls[i].classList.add("correct");
        }
        else {
            charEls[i].classList.add("wrong");
            errorCount++;
        }
    });
    if(val.length === str.length && errorCount === 0) {
        clearTimeout(timer);
        alert("Well Done");
    }
     
});

input.focus();