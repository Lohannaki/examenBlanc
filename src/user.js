export class User {
    availability = false;
    #infos;
    #element;

    constructor(options) {
        this.#infos = options;
        this.#element = this.#generateElement();
        this.#element.addEventListener("click", (e) => {
            this.availability = !this.availability
            console.log(e.currentTarget); 
            e.currentTarget.dataset.present = this.availability; 
        });
    }

    getInfos() {
        return this.#infos;
    }

    #generateElement() {
        const containerElement = document.createElement('div');
        containerElement.classList.add("user"); 
        containerElement.dataset.present = "false";
        const html = `
            <img src=${this.#infos.picture.large}>
            <div class="user--info">
                <h1>${this.#infos.name.title} ${this.#infos.name.first} ${this.#infos.name.last}</h1>
                <p>${this.#infos.dob.age} years old</p>
                <p>${this.#infos.location.city}, ${this.#infos.location.country}</p>
            </div>
            <a href="mailto:${this.#infos.email}">
                <span class="mail">✉️</span>
            </a>
        </div>
        `;
        containerElement.insertAdjacentHTML("afterbegin", html); 
        return containerElement; 
    }

    render() {
        document.querySelector('main').insertAdjacentElement("afterbegin", this.#element);
    }

}
