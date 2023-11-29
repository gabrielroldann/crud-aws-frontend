function deletarProduto(id_produto) {

    fetch(`http://13.59.172.220:3000/products/${id_produto}`, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .catch(error => console.log(error));

    alert('Deletado');
};