// script.js
document.addEventListener('DOMContentLoaded', () => {
    const itemInput1 = document.getElementById('itemInput1');
    const itemInput2 = document.getElementById('itemInput2');
    const addItemButton = document.getElementById('addItemButton');
    const itemsList = document.getElementById('itemsList');
    const sortearButton = document.getElementById('sortearButton');
    const resultado = document.getElementById('resultado');
    const items = [];

    addItemButton.addEventListener('click', () => {
        const item1 = itemInput1.value.trim();
        const item2 = itemInput2.value.trim();
        if (item1 && item2) {
            items.push(item1, item2);
            const li1 = document.createElement('li');
            li1.textContent = item1;
            itemsList.appendChild(li1);

            const li2 = document.createElement('li');
            li2.textContent = item2;
            itemsList.appendChild(li2);

            itemInput1.value = '';
            itemInput2.value = '';
            itemInput1.focus();
        }
    });

    sortearButton.addEventListener('click', () => {
        if (items.length === 0) {
            resultado.textContent = 'Nenhum item para sortear!';
        } else {
            const indice = Math.floor(Math.random() * items.length);
            const itemSorteado = items[indice];
            resultado.textContent = `Item sorteado: ${itemSorteado}`;
        }
    });
});
