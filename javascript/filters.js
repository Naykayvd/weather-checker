let projects = [
    // project 1
    {
        imageURL: "./css/images/bmi-converter.png",
        title: "BMI Calculator",
        techStack: "Python",
        description: "A programme that takes your weight, age, height and gender as input and outputs your BMI and your ideal BMI",
        githubURL: "https://github.com/Naykayvd/tkinter-BMI-calculator",
        liveprojectURL: "https://replit.com/@Naykayvd/BMI-converter"
    },
    // project 2
    {
        imageURL: "./css/images/contact form.png",
        title: "Contact Form",
        techStack: "HTML/CSS",
        description: "A simple contact form website",
        githubURL: "https://github.com/Naykayvd/html-contact_forms",
        liveprojectURL: "https://confident-cori-e1e7c8.netlify.app/"
    },
    // project 3
    {
        imageURL: "./css/images/timeline.png",
        title: "Timeline Site",
        techStack: "HTML/CSS",
        description: "While learning web development I was trying out pop-in pop-out animations and made this simple website",
        githubURL: "https://github.com/Naykayvd/html-css--timeline",
        liveprojectURL: "https://sleepy-easley-712209.netlify.app/"
    },
    // project 4
    {
        imageURL: "./css/images/testimonial.png",
        title: "Slider Animation Site",
        techStack: "HTML/CSS",
        description: "I was learning animations and decided to try out slider animation",
        githubURL: "https://github.com/Naykayvd/HTML-Testimonial-sliders",
        liveprojectURL: "https://naughty-villani-0c2706.netlify.app"
    },
    // project 5
    {
        imageURL: "./css/images/Easy_Ticket.png",
        title: "Easy Ticket Task",
        techStack: "Python",
        description: "A ticket purchase programme that takes in the users amount of money, ticket quantity and prints out total amount",
        githubURL: "https://github.com/Naykayvd/Easy-Ticket",
        liveprojectURL: "https://replit.com/@Naykayvd/easy-ticket#main.py"
    },
    // project 6
    {
        imageURL: "./css/images/currency_converter_api.png",
        title: "Currency Converter",
        techStack: "Python",
        description: "A currency converter made with an API and using tkinter",
        githubURL: "https://github.com/Naykayvd/Currency-converter",
        liveprojectURL: "https://replit.com/@Naykayvd/currency-converter#main.py"
    },
    // project 7
    {
        imageURL: "./css/images/calculator.png",
        title: "Javascript Calculator",
        techStack: "Javascript",
        description: "A calculator made with Javascript and html and css",
        githubURL: "https://github.com/Naykayvd/JavaScript-calculator",
        liveprojectURL: "https://javascript-calculator-jsc.netlify.app/"
    },
    // project 8
    {
        imageURL: "./css/images/pokedex.png",
        title: "PokeDex API",
        techStack: "Javascript",
        description: "A Pokedex made with javascript and an api",
        githubURL: "https://github.com/Naykayvd/pokedex-api",
        liveprojectURL: "https://pokedex-nahum.netlify.app"
    },
    // project 9
    {
        imageURL: "./css/images/old_portfolio.png",
        title: "First Portfolio",
        techStack: "HTML/CSS",
        description: "My first portfolio I made while I was learning to code",
        githubURL: "https://github.com/Naykayvd/portfolio-project",
        liveprojectURL: "https://nahum-vandiemen.netlify.app"
    },
    // Project 10
    {
        imageURL: "./css/images/weather.png",
        title: "Weather tracker",
        techStack: "Javascript",
        description: "A web app that tracks the weather in any city with a search function, data is captued with an API",
        githubURL: "https://github.com/Naykayvd/weather-checker",
        liveprojectURL: "https://weather-checker-nahum.netlify.app/"
    }
];

function createCard(card) {
    let createdCard = 
    `<div data-aos="fade-right" class="project-card"
    techStack=${card.techStack}
    <h2>${card.title}</h2>
    <h3>${card.techStack}</h3>
    <img class="img_project" src="${card.imageURL}" alt="project-image">
    <p>${card.description}</p>
    <a class="project_button" href="${card.githubURL}">Github</a>
    <a class="project_button" href="${card.liveprojectURL}">Live</a>
    </div>
    `;
    return createdCard;
}

function renderCards() {
    let projectContainer = document.querySelector(".project-card-container");
    projectContainer.innerHTML = ""
    for (project of projects) {
        let card = createCard(project);
        projectContainer.innerHTML += card;
        console.log(card);
    }
}

function filterCards(category) {
    let container = document.querySelector(".project-card-container")
    console.log(category);
    let cards = document.getElementsByClassName("project-card-container");
    console.log(cards.innerHTML);
    cards.innerHTML = ""

    if (category === "All") {
        for (project of projects) {
            renderCards(project)
        }

        return;
    }

    if (category === "HTML/CSS") {
        let projectsH = projects.filter(project => project.techStack == category)
        container.innerHTML = ""

        for (project of projectsH) {
            console.log(container.innerHTML);
            container.innerHTML += createCard(project)
        }
        
        return;
    }
    
    if (category === "Python") {
        let projectsH = projects.filter(project => project.techStack == category)
        container.innerHTML = ""

        for (project of projectsH) {
            console.log(container.innerHTML);
            container.innerHTML += createCard(project)
        }
        
        return;
    }

    if (category === "Javascript") {
        let projectsH = projects.filter(project => project.techStack == category)
        container.innerHTML = ""

        for (project of projectsH) {
            console.log(container.innerHTML);
            container.innerHTML += createCard(project)
        }
        
        return;
    }
}

filterCards("All")