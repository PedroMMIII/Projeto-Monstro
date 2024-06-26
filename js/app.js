const monstros = [
    {
        id: 1,
        nome: 'Bob',
        altura: 0.30,
        foto: 'https://robohash.org/bob',
        habilidade: 'Bob faz uma investida, pode atacar com todas as suas armas naturais. Todos os ataques recebem o bônus de +2, mas devem ser feitos contra o mesmo personagem'
    },

    {
        id: 2,
        nome: 'Jorge',
        altura: 2,
        foto: 'https://robohash.org/jorge',
        habilidade: 'Jorge muda para uma forma determinada. Funciona como a magia metamorfose, exceto que não há limite de nível ou tamanho. A criatura adquire o tipo da nova forma'
    },

    {
        id: 3,
        nome: 'Noel',
        altura: 5,
        foto: 'https://robohash.org/noel',
        habilidade: 'Noel começar seu turno agarrando um personagem menor que ela poderá realizar um teste de manobra contra este personagem como uma ação livre. Se for bem-sucedida, engolirá o personagem, causando o dano de sua mordida. Um personagem engolido sofre uma quantidade de dano por rodada, e pode escapar causando uma quantidade de dano na criatura. Apenas armas de corte e perfuração podem ser usadas para escapar'
    },

    {
        id: 4,
        nome: 'Colosso',
        altura: 20.5,
        foto: 'https://robohash.org/colosso',
        habilidade: 'Colosso acertar um ataque com uma de suas armas naturais, poderá fazer a manobra derrubar como uma ação livre'
    }
]

const secao = document.querySelector('.secaoMonstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map(monstros => {
    return `<div> 
        <p>Nome: ${monstros.nome} </p>
        <p>Altura: ${monstros.altura} </p>
        <img src="${monstros.foto}">
        <p>Habilidade: ${monstros.habilidade} </p>
    </div>`
})
secao.innerHTML = todosOsMonstros;