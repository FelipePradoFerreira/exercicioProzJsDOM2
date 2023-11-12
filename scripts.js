

const produto = document.querySelector('body')
produto.innerHTML = 
`
<ul style="list-style: none">
    <li>
        <h1>Ventilador Arno</h1>
    </li>
    <li>
        <img src="/ventilador.png" style="width: 200px">
    </li>
    <li style="color: blue">
        R$ 125,00
    </li>
    <li>
        Ventilador de mesa silencioso.
    </li>
</ul>
`

const promo = document.createElement('h1')
promo.innerText = 'Não perca essa promoção imperdível!'
promo.id = 'promo'

const promoBody = document.querySelector('body')
promoBody.appendChild(promo)