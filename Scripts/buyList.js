let allData=JSON.parse(localStorage.getItem('buy-list'));

displayData(allData,'');
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

            th1.innerText = data[i].name;
            th2.innerText = data[i].author;
            th3.innerText = data[i].description;
            th4.innerText = data[i].date;
            th5.innerText = data[i].category;
            th6.innerText = data[i].price;
            tr.append(th1, th2, th3, th4, th5, th6)
            tbody.append(tr)

        }
    }
}