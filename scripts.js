const h1Text = document.getElementById('titulo')
h1Text.innerText = "Aplicação de texto no elemento h1 com js."

document.querySelector('ul').innerHTML =
`
<li>ul li 1</li>
<li>ul li 2</li>
<li>ul li 3</li>
`

const aText = document.querySelector('a')
aText.innerText = "Link exemplo"

document.getElementById('lista-ordenada').innerHTML = 
`
<li><a href="https://talentocloud.joyclass.com/">Proz Talento Cloud</a></li>
<li><a href="https://www.youtube.com/">Youtube</a></li>
<li><a href="https://www.linkedin.com/">LinkedIn</a></li>
`