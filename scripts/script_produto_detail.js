const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id_produto = urlParams.get('id');
console.log(id_produto);

fetch(`http://localhost:3000/products/${id_produto}`, {
    method: "GET",
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json())
.then(produtos => {
    const tabela = document.getElementById('tabela-contato');
    const tbody = document.querySelector('tbody');
    produtos.forEach(produto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${produto.name}</td>
            <td>${produto.description}</td>
            <td>$ ${produto.price}</td>
        `;
        tbody.appendChild(linha);
    });
});
