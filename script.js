class Produto {
    /*we´ve to use this, to reference our variables,
    turning it able to have acess in the others instances*/
    //and we use the constructor method, like a model to get
    //our atributtes
    constructor() {
        this.id = 0;
        this.productName = ''
    };

    adicionar(){
        alert('Testando nossa função js');
    };
    excluir(){
        //--
        alert('O item foi excluido!!');
    }
};

const produto = new Produto();