if(window.location.href == 'file:///Users/aishazhumagul/Desktop/web/js/lesson-9-exercises/ex2-1.html'){
    var obj1 = {id: 1, name: "IPhone 12 PRO", price: "1200 USD", info: "6 GB RAM, Memory 128 GB, double front back camera"};
    var obj2 = {id: 2, name: "Xiaomi Redmi Note 8", price: "250 USD", info: "6 GB RAM, Memory 64 GB, 3 cameras on back"};
    var obj3 = {id: 3, name: "Asus Tuf Gaming Pro", price: "1500 USD", info: "24 GB RAM, SSD 1 TB, RX Radeon"};
    var obj4 = {id: 4, name: "Samsung Galaxy Note 13", price: "999 USD", info: "4 GB RAM, Memory 256 GB, front-back cameras"};
    
    var objects = [obj1, obj2, obj3, obj4];
    
    for(let i=0;i<objects.length;i++){
        let divElement = document.createElement('div');
        document.querySelectorAll(".container")[0].append(divElement);
    
        let paragraph1 = document.createElement('p');
    
        let span_name = document.createElement("span");
        span_name.id = "good_name";
        span_name.innerText = objects[i].name;
    
        let span_price = document.createElement("span");
        span_price.id = "good_price";
        span_price.innerText = objects[i].price;
    
        paragraph1.append(span_name);
        paragraph1.append(" - ");
        paragraph1.append(span_price);
        divElement.append(paragraph1);
        
        let paragraph2 = document.createElement('p');
        paragraph2.innerText = objects[i].info;
        paragraph2.id = "good_info";
        divElement.append(paragraph2);
    
        let add_button = document.createElement('button');
        add_button.innerText = "+ Add to basket";
        add_button.id = "add";
        add_button.addEventListener('click', add);
        divElement.append(add_button);
    }
    
    let go_button = document.createElement("button");
    go_button.id = "go";
    go_button.innerText = "Go to basket";
    go_button.addEventListener('click', page2);
    document.querySelectorAll(".container")[0].append(go_button);
    
    
    let goodsJsonFromStorage = localStorage.getItem('goods');
    console.log(goodsJsonFromStorage);
    let goods = JSON.parse(goodsJsonFromStorage);
    
    if(goods == null){
        goods = [];
    }
    
    function add() {
        let target = event.target;
    
        let name = target.parentElement.children[0].children[0].innerText;
        console.log(name);
    
        let price = target.parentElement.children[0].children[1].innerText;
        console.log(price);
    
        let good = {
            name: name,
            price: price
        }
        
        goods.push(good);
        let jsonGoods = JSON.stringify(goods);
        localStorage.setItem('goods', jsonGoods);
    }

    function page2() {
        window.open('ex2-2.html', '_self')
    }

}else if(window.location.href == 'file:///Users/aishazhumagul/Desktop/web/js/lesson-9-exercises/ex2-2.html'){
    let jsonGoods = localStorage.getItem('goods');
    let goods = JSON.parse(jsonGoods);
    console.log(goods);

    let headerElement = document.createElement('div');
    headerElement.className = "header";

    let h3_name = document.createElement('h3');
    h3_name.innerText = "Name";

    let h3_price = document.createElement('h3');
    h3_price.innerText = "Price";

    let h3_remove = document.createElement('h3');
    h3_remove.innerText = "Remove";

    headerElement.append(h3_name);
    headerElement.append(h3_price);
    headerElement.append(h3_remove);
    document.querySelectorAll(".container")[0].append(headerElement)

    // document.querySelectorAll('.container').innerHTML = '';

    if(goods!=null){
        for(let i=0;i<goods.length;i++){
            let itemsElement = document.createElement('div');
            itemsElement.className = "items";
            itemsElement.value = goods[i].id;
            let p_name = document.createElement('p');
            p_name.innerText = goods[i].name;
        
            let p_price = document.createElement('p');
            p_price.innerText = goods[i].price;
        
            let btn_remove = document.createElement('button');
            btn_remove.id = "remove";
            btn_remove.innerText = "- Remove";
            btn_remove.addEventListener('click', remove);
        
            itemsElement.append(p_name);
            itemsElement.append(p_price);
            itemsElement.append(btn_remove);
            document.querySelectorAll(".container")[0].append(itemsElement)
        }
    }

    let back_container = document.createElement('div');
    back_container.id = 'container_back';
    document.body.append(back_container);
    let back_button = document.createElement("button");
    back_button.id = "back";
    back_button.innerText = "Go Back";
    back_button.addEventListener('click', page1);
    document.querySelector('#container_back').append(back_button);

    function remove() {
        let target = event.target;

        let divGood = target.parentElement;
        let id = divGood.value;
        divGood.remove();

        for(let i=0;i<goods.length;i++){
            if(goods[i].id==id) index = i;
        }
        goods.splice(index, 1);
        console.log(goods);


        localStorage.setItem('goods', JSON.stringify(goods));
    }

    function page1() {
        window.open('ex2-1.html', '_self')
    }
}

