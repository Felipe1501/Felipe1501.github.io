const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".light-dark"),
        searchToggle = document.querySelector(".searchToggle"),
        sidebarAbrir= document.querySelector(".sidebarAbrir"),
        sidebarFechar = document.querySelector(".sidebarFechar"),
        search = document.querySelector(".pesquisar-botao input"),
        project = document.querySelectorAll(".card-container-1");

        //armazenar escolha de modo noturno ou claro
        let getMode = localStorage.getItem("mode");
            if(getMode && getMode === "dark-mode"){
                body.classList.add("noturno");
            }

    //modo noturno e claro
        modeToggle.addEventListener("click", () =>{
            modeToggle.classList.toggle("ativar");
            body.classList.toggle("noturno");

            //função para quando o usuário dar f5 na página, a função do modo noturno ou claro continuar
            if(!body.classList.contains("noturno")){
                localStorage.setItem("mode", "light-mode");
            }else{
                localStorage.setItem("mode", "dark-mode");
            }
        });
    
    //função pesquisar
        searchToggle.addEventListener("click", () =>{
            searchToggle.classList.toggle("ativar");
        });

    //função menu lateral responsivo
        sidebarAbrir.addEventListener("click" , () =>{
            nav.classList.add("ativar");
        });

        body.addEventListener("click", e =>{
            let clicarElem = e.target;

            if(!clicarElem.classList.contains("sidebarAbrir") && !clicarElem.classList.contains("menu")){
                nav.classList.remove("ativar");
            }
        });

    search.addEventListener("keyup", e =>{
        if(e.key == "Enter"){
            let searchValue = search.value,
            value = searchValue.toLowerCase();
            project.forEach(project =>{
                if(value === project.dataset.name){
                    return project.style.display =  "block";
                }
                project.style.display = "none"; 
            });

        }
    });

    search.addEventListener("keyup", () =>{
        if(search.value != "") return;

        project.forEach(project =>{
            project.style.display =  "block";
        });
    });

