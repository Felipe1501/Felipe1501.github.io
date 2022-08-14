class User{
    constructor(name, gender, birth, country, email, password, photo, admin){

        //começa com underline = _propriedade, que por convenção trata-se de atributos privados
        this._id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    get id(){
        return this._id;
    }

    get register(){
        return this._register;
    }

    //não é uma regra, é uma convenção, uma boa prática coletiva
    get name(){
        return this._name;
    }

    get gender(){
        return this._gender;
    }

    get birth(){
        return this._birth;
    }

    get country(){
        return this._country;
    }

    get email(){
        return this._email;
    }

    get photo(){
        return this._photo;
    }

    get password(){
        return this._password;
    }

    get admin(){
        return this._admin;
    }

    //set = método para atribuição de valores
    set photo(value){
        this._photo = value;
    }
    //model = sempre que envolver manipulação de dados
    //DAO = data Acess Object, uma abstração do controle dos dados
    loadFromJSON(json){
        for (let name in json){
            switch(name){
                case '_register':
                    this[name] = new Date(json[name]);
                break;
                default:
                    this[name] = json[name];
            }
            
        }
    }

   static getUserStorage(){
        let users = [];

        if(localStorage.getItem("users")){

            users = JSON.parse(localStorage.getItem("users"));
        }

        return users;
    }

    getNewID(){

      let usersID = parseInt(localStorage.getItem("usersID"));

      //refere-se a toda aplicação, window, que não se refere somente ao documento atual
      if (!usersID > 0) usersID = 0;

      usersID++;

      localStorage.setItem("usersID", usersID);

      return usersID;
    }

    save(){

        let users = User.getUserStorage();

        if(this.id > 0){
            //localiza uma informação em um array = filter, que retorna para a tela a informação
            //let user = users.filter(u => {return u._id === this.id;});
            //map = localiza uma informação, mapeia sua posição, se alterar dados, substitui
            
            users.map(u => {

                if(u._id == this.id){
                    //Object.assign = copia atributos de um objeto(s) gerando um novo.
                    Object.assign(u, this);
                }

                return u;

            });
        
        }else{

            this._id = this.getNewID();

        //push = o método push adiciona ao final do array
        users.push(this);

        }

        localStorage.setItem("users", JSON.stringify(users));
    }

    remove(){

        let users = User.getUserStorage();

        users.forEach((userData, index)=>{

            if (this._id == userData._id){
                users.splice(index, 1);
            }

        });
        //removeItem = remove uma chave do localStorage
        localStorage.setItem("users", JSON.stringify(users));
    }
}

//método construtor é um método chamado automaticamente quando invocamos a classe