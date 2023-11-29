
function abrirEditProduto(id_produto) {

    const modal = document.getElementById('modalEdit');
    modal.showModal();

    fetch(`http://localhost:3000/products/${id_produto}`, {
        method: "GET",
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => {

        console.log("DATA:", data);

        const name = document.getElementById('name-editar');
        const description = document.getElementById('description-editar');
        const price = document.getElementById('price-editar');

        console.log(name);
        console.log(description);
        console.log(price);

        data.forEach(produto => {
            console.log("NOME PRODUTO: ", produto.name);
            console.log("DESC PRODUTO: ", produto.description);
            console.log("PRICE PRODUTO: ", produto.price);
            name.value = `${produto.name}`;
            description.value = `${produto.description}`;
            price.value = `${produto.price}`;
        });
    })

    const editProduto = document.getElementById('editProduto');
    console.log("BUTTON EDIT:", editProduto);
    editProduto.addEventListener('click', () => {
        editarProduto(id_produto);
        modal.close();
    })
};

function editarProduto(id_produto) {

    const newName = document.getElementById('name-editar');
    const newDesc = document.getElementById('description-editar');
    const newPrice = document.getElementById('price-editar');
    
    if (newName.value != "" && newDesc.value != "" && newPrice.value != "") {
        alert('Editado');
    }
    
    let data = {
        name: newName.value,
        description: newDesc.value,
        price: newPrice.value
    }
    
    fetch(`http://localhost:3000/products/${id_produto}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    return false;
};


function fecharModalEdit() {
    const modal = document.getElementById('modalEdit');
    modal.close();
};
