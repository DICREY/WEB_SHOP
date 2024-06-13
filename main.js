document.addEventListener("DOMContentLoaded",function() {
    const navbar_email = document.querySelector(".navbar-email")
    const desktop_menu = document.querySelector(".desktop-menu")
    const btnmenu = document.querySelector(".menu")
    const mobile_menu = document.querySelector(".mobile-menu")
    const shopping_cart = document.querySelector(".navbar-shopping-cart")
    const shopping_details = document.querySelector(".cartShoppingDetail")
    const themeBtn = document.querySelector(".theme-btn")
    const cardsContainer = document.querySelector(".cards-container")
    const cartPrecioTotal = document.querySelector(".precioTotal")
    const productShoppingCart = document.querySelector(".shopping-cart")
    const productInCart = document.querySelector(".productInCart")
    const detailProductAside = document.querySelector(".product-detail")
    const exitDetailProductAside = document.querySelector(".btn-exit-product-details")
    const imgProductDetails = document.querySelector(".img-product-details")
    const nameProductDetails = document.querySelector(".product-name-details")
    const valueProductDetails = document.querySelector(".product-value-details")
    const productDescription = document.querySelector(".description-product")
    const btnAddProduct = document.querySelector(".btn-add-product")
    const btnFloat = document.querySelector(".btn-float")
    const btnFloatIcon = document.querySelector(".icon-btn-float")

    navbar_email.addEventListener("click",despmenu)
    btnmenu.addEventListener("click",mobmenu)
    shopping_cart.addEventListener("click",cart)
    themeBtn.addEventListener("click",theme)
    exitDetailProductAside.addEventListener("click",exitProductDetails)
    btnAddProduct.addEventListener("click",addProductWeb)
    btnFloat.addEventListener("click",floatBtn)

    function floatBtn(){
        const name = "bx bxs-chat icon-btn-float"
        let nameClass = name == btnFloatIcon.className ? "bx bx-x icon-btn-float" : "bx bxs-chat icon-btn-float"
        btnFloatIcon.className = nameClass
    }

    function despmenu() {
        shopping_details.classList.add("inactive")
        detailProductAside.classList.add("inactive")
        desktop_menu.classList.toggle("inactive")
    }
    function mobmenu() {
        shopping_details.classList.add("inactive")
        detailProductAside.classList.add("inactive")
        mobile_menu.classList.toggle("inactive")
    }
    function cart() {
        mobile_menu.classList.add("inactive")
        desktop_menu.classList.add("inactive")
        detailProductAside.classList.add("inactive")
        shopping_details.classList.toggle("inactive")
    }
    function theme() {
        const classMoon = "bx bxs-moon theme-btn"
        const classSun = "bx bxs-sun theme-btn"
        if (themeBtn.className === classMoon) {
            themeBtn.className = "bx bxs-sun theme-btn"
            document.documentElement.style.setProperty("--white","#00161a")
            document.documentElement.style.setProperty("--black","white")
        }
        else if (themeBtn.className === classSun) {
            themeBtn.className = "bx bxs-moon theme-btn"
            document.documentElement.style.setProperty("--white","white")
            document.documentElement.style.setProperty("--black","#00161a")
        }
    }
    const productlist = [
        {
            name: "Nissan GTR R34",
            precio: 1200.00,
            imagen: "https://i.pinimg.com/736x/7a/ef/05/7aef05392cedb6fb8d353832ca2ab828.jpg",
            description: "The Nissan Skyline GT-R R34 is an iconic sports car produced by the Japanese automaker Nissan. Part of the GT-R lineage, the R34 model was produced from 1999 to 2002 and is revered for its performance, advanced technology, and its significant role in automotive and pop culture"
        },
        {
            name: "Nissan GTR R35",
            precio: 25000.00,
            imagen: "https://i.pinimg.com/736x/0a/9f/01/0a9f01dc004dac59133ffdbcd764f2e5.jpg",
            description: "The Nissan GT-R R35 is a high-performance sports car produced by Nissan, known for its advanced technology, exceptional performance, and affordability relative to other supercars. Introduced in 2007, the GT-R R35 has gained a reputation for being a highly capable and accessible sports car that offers tremendous value for its performance."
        },
        {
            name: "Pagani Zonda",
            precio: 50000.00,
            imagen: "https://i.pinimg.com/736x/f2/0a/71/f20a7169dba1a4d7f1671ca80e6491d7.jpg",
            description: "The Pagani Zonda is a high-performance sports car produced by the Italian manufacturer Pagani. First introduced in 1999, the Zonda has become one of the most iconic and exclusive supercars in the world, known for its unique design, exceptional performance, and meticulous craftsmanship."
        },
        {
            name: "Mclaren Senna",
            precio: 20000.00,
            imagen: "https://i.pinimg.com/564x/43/ab/ab/43ababb0d44613e8d87a16e478594fca.jpg",
            description: "The McLaren Senna is a high-performance supercar produced by British manufacturer McLaren Automotive. Named after the legendary Formula 1 driver Ayrton Senna, the car is designed with a focus on track performance while being road-legal. It is part of McLaren's Ultimate Series, which also includes the McLaren P1 and Speedtail."
        },
        {
            name: "Mclaren Senna",
            precio: 30000.00,
            imagen: "https://i.pinimg.com/564x/2f/d4/1b/2fd41bf464157e85ff7d9c2628e66bee.jpg",
            description: "The McLaren Senna is a high-performance supercar produced by British manufacturer McLaren Automotive. Named after the legendary Formula 1 driver Ayrton Senna, the car is designed with a focus on track performance while being road-legal. It is part of McLaren's Ultimate Series, which also includes the McLaren P1 and Speedtail."
        },
        {
            name: "Koenigsegg Agera",
            precio: 40000.00,
            imagen: "https://i.pinimg.com/736x/b0/8a/09/b08a09827543bcc151ef558d4018864a.jpg",
            description: "The Koenigsegg Agera is a high-performance hypercar produced by Swedish automaker Koenigsegg. Introduced in 2010, the Agera is renowned for its innovative engineering, blistering speed, and advanced technology. It set several world records for speed and performance, further establishing Koenigsegg as a leading name in the hypercar segment."
        }
    ]
    function addProductWeb(arrAddProduct){
        let name = prompt("ingresa el nombre del producto")
        let precio = Number(prompt("ingresa el precio del producto"))
        let imagen = prompt("ingresa la url de la imagen del producto")
        let descripcion = prompt("ingresa la descripcion del producto")
        arrAddProduct.push({
            name: name,
            precio: precio,
            imagen: imagen,
            description: descripcion
        })
    }
    // addProductWeb(productlist)
    function sectionProduct(arr){
        for (product of arr) {
            const productCard = document.createElement("div")
            productCard.classList.add("product-card")
            
            const imgProduct = document.createElement("img")
            imgProduct.setAttribute("src",product.imagen)
            productCard.appendChild(imgProduct)
            imgProduct.classList.add("img-Product-Section")
            imgProduct.title = product.name
            imgProduct.value = product.precio
            imgProduct.placeholder = product.imagen
            imgProduct.alt = product.description
            imgProduct.addEventListener("click",openProductDetailsAside)
            
            const productInfo = document.createElement("div")
            productInfo.classList.add("product-info")
            productCard.appendChild(productInfo)
    
            const nombrePrecio = document.createElement("div")
            productInfo.appendChild(nombrePrecio)
            
            const productPrecio = document.createElement("p")
            productPrecio.innerText = "$" + product.precio + ",00"
            nombrePrecio.appendChild(productPrecio)
            
            const Nombre = document.createElement("p")
            Nombre.innerText = product.name
            nombrePrecio.appendChild(Nombre)
    
            const figure = document.createElement("figure")
            productInfo.appendChild(figure)
            
            const figureIcon = document.createElement("i")
            figureIcon.classList.add("bx")
            figureIcon.classList.add("bx-cart")
            figure.appendChild(figureIcon)
            
            cardsContainer.appendChild(productCard)
        }
    }
    sectionProduct(productlist) 
    function productsCart() {
        const cartProductlist = [
            {
                name: "Gtr R34",
                precio: 1200.00,
                imagen: "https://i.pinimg.com/736x/7a/ef/05/7aef05392cedb6fb8d353832ca2ab828.jpg"
            },
            {
                name: "Pagani Zonda",
                precio: 50000.00,
                imagen: "https://i.pinimg.com/736x/f2/0a/71/f20a7169dba1a4d7f1671ca80e6491d7.jpg"
            },
            {
                name: "Mclaren Senna",
                precio: 20000.00,
                imagen: "https://i.pinimg.com/564x/43/ab/ab/43ababb0d44613e8d87a16e478594fca.jpg"
            }
        ]
        let cero = 0;
        for (cartProduct of cartProductlist) {
            const figure = document.createElement("figure")
            productShoppingCart.appendChild(figure)

            const img = document.createElement("img")
            img.setAttribute("src",cartProduct.imagen)
            figure.appendChild(img)

            const nombre = document.createElement("p")
            nombre.innerText = cartProduct.name
            productShoppingCart.appendChild(nombre)

            const precio = document.createElement("p")
            precio.innerText = String("$" + cartProduct.precio + ",00")
            productShoppingCart.appendChild(precio)

            const deleteProduct = document.createElement("i")
            deleteProduct.setAttribute("class","bx bxs-x-circle btn-product-delete")
            productShoppingCart.appendChild(deleteProduct)
            
            cero += cartProduct.precio  
        }
        cartPrecioTotal.innerText = String("$" + parseFloat(cero) + ",00")
        productInCart.innerText = cartProductlist.length
    }
    productsCart()
    function openProductDetailsAside(event){
        let cliked = event.target
        mobile_menu.classList.add("inactive")
        desktop_menu.classList.add("inactive")
        shopping_details.classList.add("inactive")
        detailProductAside.classList.remove("inactive")
        
        imgProductDetails.setAttribute("src",cliked.placeholder)
        nameProductDetails.innerText = cliked.title
        valueProductDetails.innerText = "$" + cliked.value + ",00"
        productDescription.innerText = cliked.alt
    }
    function exitProductDetails(){
        detailProductAside.classList.add("inactive")
    }
})
