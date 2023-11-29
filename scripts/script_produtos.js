async function carregarDados() {
    const carregar = await fetch(`http://localhost:3000/products`, {
        method: 'GET', 
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });

    const produtos = await carregar.json();
    console.log(produtos);

    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');

    const criarTabela = await produtos.forEach(produto => {
        const linha = document.createElement('tr')
        linha.innerHTML = `<td>${produto.name}</td>
            <td>${produto.description}</td>
            <td>$ ${produto.price}</td>
            <td> <a id="verProduto" href="./ver_produto.html?id=${produto.id}"> Ver </a> </td>
            <td> <a id="editarProduto" href="#?id=${produto.id}" onclick="abrirEditProduto('${produto.id}');">Editar</a></td>
            <td> <a id="deletarProduto" href="produtos.html" onclick="deletarProduto('${produto.id}')"> Deletar </a>
        `;
        tbody.appendChild(linha);
    });
};

carregarDados();

const addProduto = document.getElementById('addProduto');
addProduto.addEventListener('click', () => {
    var name = document.getElementById('name');
    var description = document.getElementById('description');
    var price = document.getElementById('price');

    if (name.value != "" && description.value != "" && price.value != '') {
        alert('Enviado');
    }

    let dados = {
        name: name.value,
        description: description.value,
        price: price.value
    }
    
    fetch('http://localhost:3000/products', {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(response => console.log(json))
    .catch(err => console.log(err))
});


function abrirAddProduto() {
    const modal = document.getElementById('modal');
    modal.showModal();
};

function fecharModal() {
    const modal = document.getElementById('modal');
    modal.close();
};
