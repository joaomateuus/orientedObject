class Product {
    /*we´ve to use this, to reference our variables,
    turning it able to have acess in the others instances*/
    //and we use the constructor method, like a model to get
    //our atributtes
    constructor() {
        //id for products
        this.id = 1;
        //array that will store the object with the product properties
        this.arrayProducts = [];
    };

      //this func will get the value in inputFields
      inputReader() {
        //object that will store the product value 
        let product = {};

        //getting the input with DOM
        //and keeping in it in properties inside the object
        product.id = this.id
        product.name = document.getElementById('name').value;
        product.value = document.getElementById('value').value;
        product.category = document.getElementById('category').value;
        
        return product;
    }

    //validator that allow us to won`t let pass input errors 
    fieldValidator(product) {
        let err = '';

        //for blank fields
        if (product.name == ''){
            err += 'Type product name';
        }

        if (product.value == ''){
            err += 'Type the product value';
        }

        if (product.category == ''){
            err += 'Type the category';
        }
        //if this var arrives here with any error it´ll be displayed
        if (err != ''){
            alert(err);
            return false;
        }

        return true;
    };

    //it will save in the array
    save() {
        //here I´ve passed the value that was stored in our input reader function
        let product = this.inputReader();
        //calling our validator to not allow input erros
        this.fieldValidator(product);
        //if it return true we will save in the object
        //if wont, will be displayed the message as set in the function
        if(this.fieldValidator(product)){
            this.add(product);
            alert('Your product has been saved')
        }
        this.readTable();
        this.clean();
    };
    
    // method that will store the object in the array
    add(product) {
        this.arrayProducts.push(product);
        this.id++;
    }
    
    //func that will run over our, catching values
    readTable() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        

        for ( let i = 0; i < this.arrayProducts.length; i++ ) {
            //func to create new row as products are coming
            let tr = tbody.insertRow();

            //passing the insert func for tds, columns 
            let td_id = tr.insertCell();
            let td_name = tr.insertCell();
            let td_value = tr.insertCell();
            let td_category = tr.insertCell();
            let td_actions = tr.insertCell();
            
            //catching the array data
            td_id.innerText = this.arrayProducts[i].id;
            td_name.innerText = this.arrayProducts[i].name;
            td_value.innerText = this.arrayProducts[i].value;
            td_category.innerText = this.arrayProducts[i].category; 
            //creating editing element w DOM
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png'
            td_actions.appendChild(imgEdit);
            imgEdit.style.height = 20 + 'px';
            //setting a eventlistener in our editImage
            imgEdit.setAttribute("onclick", "product.prepareEdit("+ JSON.stringify(this.arrayProducts[i]) +")");
            //creating delete element w DOM
            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png'
            td_actions.appendChild(imgDelete);
            imgDelete.style.height= 20 + 'px';
            //setting a evenlistener in the trashIcon
            imgDelete.setAttribute("onclick", "product.delete("+ this.arrayProducts[i].id +")");

        };
    } ;

    

    // it will clear the form fields
    clean() {
       document.getElementById('name').value = '';
       document.getElementById('value').value = '';
       document.getElementById('category').value = '';
    }

    delete(id) {
        if(confirm('Do you really want to delete this product ?' + id)){
            let tbody = document.getElementById('tbody');

            for(let i = 0; i < this.arrayProducts.length; i++){
                if(this.arrayProducts[i].id == id) {
                    this.arrayProducts.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }        
    };

    // func to prepare edit
    prepareEdit(data) {
        document.getElementById('name').value = data.name;
        document.getElementById('value').value = data.value;
        document.getElementById('category').value = data.category;

        document.getElementById('btn1').innerText = 'Atualizar';
    }


};




const product = new Product();