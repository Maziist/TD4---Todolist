let tasks = []
if (localStorage.getItem("tasks")) {
    tasks = localStorage.getItem("tasks")
    tasks = JSON.parse(tasks)
}
console.log(JSON.parse(localStorage.getItem("task")));

let container = document.querySelector(`#ToDoListContainer`);
function createArticle(task = null,) {
    if (task == null) {
        task = {
            title: document.getElementById('title').value,
            descritpion: document.getElementById('description').value,
        }
        tasks.push(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    let pin = document.createElement('img')
    pin.src = "./assets/imgs/Pinp.png"
    pin.id = "pin"
    let postit = document.createElement('div')
    postit.id = "postit"
    let article = document.createElement("article");
    postit.appendChild(pin)
    let paraOne = document.createElement("p");
    paraOne.innerHTML = task.title
    article.appendChild(paraOne);
    let paraTwo = document.createElement("p");
    paraTwo.innerHTML = task.descritpion
    article.appendChild(paraTwo);
    let div = document.createElement('div');
    article.appendChild(div);
    if (onclick = "createArticle()" === true) {
        title = "";
        descritpion = ""
    }
    let btnSupprimer = document.createElement('button');
    btnSupprimer.innerHTML = "DELETE";
    btnSupprimer.classList.add("truc");
    btnSupprimer.addEventListener('click', function () {
        
        let index = tasks.indexOf(task)
        if (index !== -1) {
            tasks.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
        postit.remove();
    });
   
    div.appendChild(btnSupprimer);
    postit.appendChild(article);
    container.appendChild(postit)
    document.getElementById('description').value = ""
    document.getElementById('title').value = ""
}
let input = document.getElementById('description')

function displayTasks() {
    console.log(tasks);
    tasks.forEach(el => {
        createArticle(el)
    });
}
displayTasks()
let btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', function () {
    localStorage.clear();
    container.innerHTML = ""
    console.log('Tout le localStorage a été effacé.');
    });

function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    let timer = setInterval(function () {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

let speed = 75;
let h1 = document.querySelector('h1');
let delay = h1.innerHTML.length * speed + speed;
typeEffect(h1, speed);