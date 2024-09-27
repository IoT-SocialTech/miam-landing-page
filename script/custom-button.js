class CustomButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const button = document.createElement('button');
        button.classList.add('custom-button', this.getAttribute('class'));
        button.textContent = this.getAttribute('label');
        button.onclick = () => {
            eval(this.getAttribute('onClick'));
        };

        const style = document.createElement('style');
        style.textContent = `
            .custom-button {
                border: none;
                border-radius: 2px;
                cursor: pointer;
                transition: background-color 0.3s, transform 0.3s;            
                }

            .custom-button.primary {
                padding: 20px 40px;
                margin-top: 10px;
                font-size: 16px;
                background-color: #5A9BD4;
                color: white;
            }

            .custom-button.primary:hover {
                background-color: #346FA4;
                transition: all 0.3s;
            }

            .custom-button.secondary {
                padding: 10px 0;
                width: 100%;
                margin-top: 10px;
                font-size: 16px;
                background-color: white;
                color: #5A9BD4;
                border: 1px solid #5A9BD4;
            }

            .custom-button.secondary:hover {
                background-color: white;
                color: #5A9BD4;
                font-weight: bold;
                transition: all 0.3s;
                transform: scale(1.05);
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

customElements.define('custom-button', CustomButton);

function handleClick(targetId) {
    const section = document.getElementById(targetId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
