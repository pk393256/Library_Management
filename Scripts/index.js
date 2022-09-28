let count=0
let form=document.getElementsByTagName('form');
form[0].addEventListener('submit',allData)
function allData(){
    event.preventDefault()
    // console.log(form[0].name.value)

    // count++
    // console.log(count)
    let name=document.getElementById('name').value;
    let author=document.getElementById('author').value;
    let date=document.getElementById('added').value;
    let category=document.getElementById('category').value;
    let price=document.getElementById('price').value;
    let description=document.getElementById('desc').value;
    let data=[{name,author,date,category,price,description}];
    if(JSON.parse(localStorage.getItem('book-list'))==null){var prevData=[]}
    else if(JSON.parse(localStorage.getItem('book-list')).length>0){
    var prevData=JSON.parse(localStorage.getItem('book-list'));
    }else{
        var prevData=[]
    }
    // console.log('prevData',prevData)
    let newData=[...prevData,...data]
    localStorage.setItem("book-list",JSON.stringify(newData));
    console.log(JSON.parse(localStorage.getItem('book-list')))
    // console.log('name',date.value)
}
// let name=document.getElementById('name')
// console.log('name',name.innerText)
