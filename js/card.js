class Card extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "closed" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "imgs_box");
        componentRoot.setAttribute("data-name", this.getAttribute("data-name"));

        const linkProject = document.createElement("a");
        linkProject.href = this.getAttribute("link-url");

        const imgProject = document.createElement("img");
        imgProject.src = this.getAttribute("photo");
        imgProject.alt = this.getAttribute("alt");

        const titleProject = document.createElement("h6");
        titleProject.textContent = this.getAttribute("text-project");
        
        componentRoot.appendChild(linkProject);
        componentRoot.appendChild(imgProject);
        componentRoot.appendChild(titleProject);

        linkProject.appendChild(imgProject);

        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
       


        /* cores */
        :root{
            --h6-color: #2C4EFA;
        }

        body.noturno{
            --h6-color: #2C4EFA;
        }

        /* conteúdo pag principal */

        img{
            border: 2px solid #AFAFB6;
        }


         .imgs_box{
            position: relative;
            height: 300px;
            width: 210px;
            border-radius: 6px;
            overflow: hidden;
            margin: 8px;
        }

         .imgs_box img{
            height: 98%;
            width: 98%;
            border-radius: 6px;
            transition: transform 0.3s linear ;
        }

        .imgs_box:hover img{
            transform: scale(1.05);
        }

        .imgs_box h6{
            position: relative;
            bottom: 10px;
            left: 10px;
            color: var(--h6-color);
            font-size: 14px;
            font-weight: 400;
            text-transform: capitalize;
            margin-top: -15px;
        }

        `;
        return style
    }
}

customElements.define("card-projects", Card);
