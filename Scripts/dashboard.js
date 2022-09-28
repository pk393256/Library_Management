let allData = JSON.parse(localStorage.getItem('book-list'));
console.log('allData', allData)
let total=document.getElementById('book-count');
total.innerText=allData.length;
let select = document.getElementById('filter');
displayData(allData,'')
var value=select.value;
select.addEventListener('change', () => {
     value = select.value;
     
     total.innerText=allData.length;
    displayData(allData, value)
})


function displayData(data, value) {

    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    if (value == '') {
        for (let i = 0; i < data.length; i++) {

            let tr = document.createElement('TR');
            let th1 = document.createElement('TH');
            let th2 = document.createElement('TH');
            let th3 = document.createElement('TH');
            let th4 = document.createElement('TH');
            let th5 = document.createElement('TH');
            let th6 = document.createElement('TH');
            let th7 = document.createElement('TH');
            let th8 = document.createElement('TH');

            th1.innerText = data[i].name;
            th2.innerText = data[i].author;
            th3.innerText = data[i].description;
            th4.innerText = data[i].date;
            th5.innerText = data[i].category;
            th6.innerText = data[i].price;
            th7.innerHTML = `<Button id=${data[i].name} onclick='buy(this.id)'>Buy</Button>`;
            th8.innerHTML = `<Button id=${data[i].name} onclick='add(this.id)'>ADD</Button>`
            tr.append(th1, th2, th3, th4, th5, th6, th7, th8)
            tbody.append(tr)

        }
    } else {
        console.log(value)
        for (let i = 0; i < data.length; i++) {
            if (value == data[i].category) {
                let tr = document.createElement('TR');
                let th1 = document.createElement('TH');
                let th2 = document.createElement('TH');
                let th3 = document.createElement('TH');
                let th4 = document.createElement('TH');
                let th5 = document.createElement('TH');
                let th6 = document.createElement('TH');
                let th7 = document.createElement('TH');
                let th8 = document.createElement('TH');

                th1.innerText = data[i].name;
                th2.innerText = data[i].author;
                th3.innerText = data[i].description;
                th4.innerText = data[i].date;
                th5.innerText = data[i].category;
                th6.innerText = data[i].price;
                th7.innerHTML = `<Button id=${data[i].name} onclick='buy(this.id)'>Buy</Button>`;
                th8.innerHTML = `<Button id=${data[i].name} onclick='add(this.id)'>ADD</Button>`
                tr.append(th1, th2, th3, th4, th5, th6, th7, th8)
                tbody.append(tr)
            }


        }
    }
}

function buy(name) {
    // console.log(name)
    let allData=JSON.parse(localStorage.getItem('book-list'));
    let newData=[];
    for(let i=0;i<allData.length;i++){
        if(allData[i]['name']==name){
            let x=localStorage.getItem('buy-list');
            if(x){
                x=JSON.parse(x);
                x.push(allData[i]);
                localStorage.setItem('buy-list',JSON.stringify(x))
            }else{
                x=[]
                x.push(allData[i])
                localStorage.setItem('buy-list',JSON.stringify(x))
            }
        }else{
            newData.push(allData[i])
        }
    }
    console.log('book-list',newData)
    
    localStorage.setItem('book-list',JSON.stringify(newData))
    
    displayData(newData, value)
    console.log('buy-list',localStorage.getItem('buy-list'))
}

function add(name) {
    // console.log(name)
    let allData=JSON.parse(localStorage.getItem('book-list'));
    let newData=[];
    for(let i=0;i<allData.length;i++){
        if(allData[i]['name']==name){
            let x=localStorage.getItem('bookmark-list');
            if(x){
                x=JSON.parse(x);
                x.push(allData[i]);
                localStorage.setItem('bookmark-list',JSON.stringify(x))
            }else{
                x=[]
                x.push(allData[i])
                localStorage.setItem('bookmark-list',JSON.stringify(x))
            }
        }else{
            newData.push(allData[i])
        }
    }
    console.log('book-list',newData)

    localStorage.setItem('book-list',JSON.stringify(newData))
    displayData(newData, value)
    console.log('bookmark-list',localStorage.getItem('bookmark-list'))
}
