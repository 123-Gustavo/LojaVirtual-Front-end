var botaoComprar = document.querySelectorAll(".comprar")
var closeModalComprar = document.querySelectorAll(".close-modal-comprar")
var botaoCarrinho = document.querySelector(".carrinho .box h3")
var closeModalCarrinho = document.querySelector(".carrinho-box .carrinho-main h2 i")
var botaoMicroModal = document.querySelectorAll(".produtos .produtos-single h3 i")
var boxes = document.querySelectorAll(".produtos .produtos-single")
var itemsCarrinho = []
var botaoCarrinhoPerm = false

for(var i = 0; i < boxes.length;i++){

    for(var n = 0; n < botaoComprar.length; n++){
       
        botaoComprar[n].addEventListener('click',(t)=>{
            var modalComprar = document.querySelector(".criarModalComprar")
            /*
                <div class="produto-infos">
                    <img src="img/camiseta-01.png">
                    <h3>Camiseta</h3>
                    <span>R$: 120,00</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna leo, aliquet a fermentum eu, condimentum eget sem. In laoreet arcu sed tristique pretium. </p>
                </div>
            */

                var produtoInfos = modalComprar.querySelector(".modalComprar .produto-infos")

                var img = t.target.parentNode.querySelector("img").src
                var nomeProduto = t.target.parentNode.querySelector("h4").innerHTML
                var precoProduto = t.target.parentNode.querySelector("span").innerHTML
                var descProduto = t.target.parentNode.querySelector("p").innerHTML

                produtoInfos.innerHTML = `
                    <img src="${img}">
                    <h3>${nomeProduto}</h3>
                    <span>${precoProduto}</span>
                    <p>${descProduto}</p> 
                `

                modalComprar.style.display = "block"
        })
    }
    closeModalComprar[i].addEventListener('click',(t)=>{ 
        var modalCarrinho = document.querySelector(".carrinho-box")
        var modalComprar = document.querySelector(".criarModalComprar")

        if(modalCarrinho.style.display == "block"){
            modalComprar.style.display = "none"
            modalCarrinho.style.display = "none"
        }else {
            modalComprar.style.display = "none"
        }
    })

    botaoCarrinho.addEventListener("click",(t)=>{
        var modalCarrinho = document.querySelector(".carrinho-box")


        var delItemCarrinho = document.querySelectorAll(".carrinho-box .carrinho-main .carrinho-produtos-main .carrinho-produtos .icon-lixo")

        for(var z = 0; z < delItemCarrinho.length; z++){
            delItemCarrinho[z].addEventListener("click",(e)=>{
                var nomeCarrinhoRemove = e.target.parentNode.parentNode.parentNode.querySelector(".titulo h3").innerHTML

                for(var o = 0; o < itemsCarrinho.length; o++){
                    if(nomeCarrinhoRemove != itemsCarrinho[o].name){
                        
                        itemsCarrinho[o] = []
                        itemsCarrinho[o].length = 0
                        console.log(itemsCarrinho[o])
                        e.target.parentNode.parentNode.parentNode.style.borderBottom = "0"
                        e.target.parentNode.parentNode.parentNode.style.display = "none"
                        e.target.parentNode.parentNode.parentNode.innerHTML = ""  
                    }else{
                       
                    }
                }
            })
        }
        botaoCarrinhoPerm = true
        modalCarrinho.style.display = "block"

        var botaoComprarCarrinho = document.querySelectorAll(".comprar-carrinho")
        var modalComprar = document.querySelector(".criarModalComprar")
        var modalComprarCarrinho = document.querySelector(".carrinho-box")

        for(var j = 0; j < botaoComprarCarrinho.length; j++){
            botaoComprarCarrinho[j].addEventListener("click",(t)=>{
                var produtoInfos = modalComprar.querySelector(".modalComprar .produto-infos")

                var img = t.target.parentNode.parentNode.getAttribute("img")
                var nomeProduto = t.target.parentNode.parentNode.querySelector(".titulo h3").innerHTML
                var precoProduto = t.target.parentNode.querySelector("span").innerHTML
                var descProduto = t.target.parentNode.parentNode.getAttribute("desc")

                produtoInfos.innerHTML = `
                    <img src="${img}">
                    <h3>${nomeProduto}</h3>
                    <span>${precoProduto}</span>
                    <p>${descProduto}</p> 
                `
                modalComprarCarrinho.style.display = "none"
                modalComprar.style.display = "block"
            })
        }
    })
    
    closeModalCarrinho.addEventListener("click",(t)=>{
        var modalCarrinho = document.querySelector(".carrinho-box")

        modalCarrinho.style.display = "none"
    })

    for(var c = 0; c < botaoMicroModal.length; c++){

        
        botaoMicroModal[c].addEventListener('click',(t)=>{ 
            var micromodal = t.target.parentNode.parentNode.querySelector(".micromodal")

            var micromodalAll = document.querySelectorAll(".micromodal")
            
            var lastIndex = 0

            micromodalAll.forEach((item,index)=>{
                let lastMicroModal = micromodalAll[lastIndex]
                let actualMicroModal = micromodalAll[index]

                lastMicroModal.style.display = "none"

                lastIndex = index     
                
            })

            if(micromodal.style.display != "block"){
                micromodal.style.display = "block"
                var buttonCar = micromodal.querySelector("#buttonAddCar")

                var nomeProdutoCarrinho = micromodal.parentNode.querySelector("h4").innerHTML
                var descProdutoCarrinho = micromodal.parentNode.querySelector("p").innerHTML
                var precoProdutoCarrinho = micromodal.parentNode.querySelector("span").innerHTML
                var imgProdutoCarrinho = micromodal.parentNode.querySelector("img").src

                buttonCar.addEventListener("click",()=>{

                    itemsCarrinho = []

                    itemsCarrinho.push({
                        name:nomeProdutoCarrinho,
                        desc:descProdutoCarrinho,
                        price:precoProdutoCarrinho,
                        img:imgProdutoCarrinho
                    }) 

                    var carrinho = document.querySelector(".carrinho-box .carrinho-main .carrinho-produtos-main")

                    for(var u = 0; u < itemsCarrinho.length; u++){
                            
                        carrinho.innerHTML  += `
                        <div img="${itemsCarrinho[u].img}" desc="${itemsCarrinho[u].desc}" nome="${itemsCarrinho[u].name}" class="carrinho-produtos">
                            <div class="titulo">
                                <h3>${itemsCarrinho[u].name} </h3>
                            </div>
                            <div class="infos">
                                <span>${itemsCarrinho[u].price}</span>
                                <input type="button" value="Comprar!" class="comprar-carrinho">
                                <h4 class="icon-lixo"><i class="fas fa-trash-alt"></i></h4>
                            </div>
                        </div>
                        `
                            
                    }
                    alert("Item adicionado no carrinho")
                    })
            }else if(micromodal.style.display != "none"){
                micromodal.style.display = "none"
            }

            t.target.addEventListener("click",()=>{
                micromodal.style.display = "none"
            })
        })    
    
    }
    var buttonInfos = document.querySelectorAll(".produtos .produtos-single .micromodal .criarMicroModal #buttonInfos")

    for(var c = 0; c < buttonInfos.length; c++){
        buttonInfos[c].addEventListener("click",(e)=>{
            var modalInfos = document.querySelector(".criarModalInfos")

            var img = e.target.parentNode.parentNode.parentNode.querySelector("img").src
            var tituloProduto = e.target.parentNode.parentNode.parentNode.querySelector("h4").innerHTML
            var descProduto = e.target.parentNode.parentNode.parentNode.querySelector("p").innerHTML
            var precoProduto = e.target.parentNode.parentNode.parentNode.querySelector("span").innerHTML

            var infos = modalInfos.querySelector(".modalInfos ")
            var imgInfo = infos.querySelector(".img .images")
            
            var info = infos.querySelector(".infos .informacoes")

            imgInfo.innerHTML = `<img src="${img}"/>`
            info.innerHTML = `
                    <h3>Nome: </h3>
                    <p>${tituloProduto}</p>
                    <h3>Descrição: </h3>
                    <p>${descProduto}</p>
                    <h3>Preço: </h3>
                    <p>${precoProduto}</p>
                    <input type="button" value="Comprar!" class="comprar">
            `

            modalInfos.style.display = "block"
        })   
    }

    var closeModalInfo = document.querySelector(".criarModalInfos .modalInfos .close-modal-infos")

    closeModalInfo.addEventListener("click",()=>{
        var modalInfos = document.querySelector(".criarModalInfos")

        modalInfos.style.display = "none"
    })
    
    var formComprar = document.getElementById("formComprar")

    formComprar.addEventListener("submit",(e)=>{
        e.preventDefault()

        var modalComprar = document.querySelector(".criarModalComprar")

        var nomeProduto =  e.target.parentNode.parentNode.querySelector(".produto-infos h3").innerHTML
        var atributoNome = document.querySelectorAll(".carrinho-produtos")

        for(var g = 0; g < itemsCarrinho.length; g++){
            if(nomeProduto != itemsCarrinho[g].name){
                itemsCarrinho[g] = {}
                if(nomeProduto != atributoNome[g].getAttribute("nome")){
                    atributoNome[g].style.borderBottom = "0"
                    atributoNome[g].style.display = "none" 
                    atributoNome[g].innerHTML = ""
                    console.log(atributoNome[g]+"1")
                }
            }
            nomeProduto = ""
        }

        modalComprar.style.display = "none"
    })
}

