
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');
const form5 = document.getElementById('form5');
const category1 = document.getElementById('2');
const category2 = document.getElementById('3');
const category3 = document.getElementById('4');
const category4 = document.getElementById('5');
const API = 'http://localhost:5000/database'
listalldiscussions();

function startDiscussion(num){
    let chosenform;
    switch(num){
        case 2: 
            chosenform = form2;
        break;
        case 3:
            chosenform = form3;
        break;
        case 4:
            chosenform = form4;
        break;
        case 5: 
            chosenform = form5;
        break;
    }
    const name = chosenform['Newdiscussiontitle'].value;
    const author = chosenform['Newdiscussiontext'].value;
    const category = num;
    const diskussion = {
        name,
        author,
        category
    }
    fetch(API, {
        method: 'post',
        body: JSON.stringify(diskussion),
        headers: {
            'content-type': 'application/json'
        } 
    }).then(response=>response.json())
    .then(creatediskussion=>{
        console.log(creatediskussion);
        chosenform.reset()
    })
    .then(()=>{window.location.reload()});
}

function listalldiscussions(){
    fetch(API)
    .then(response=>response.json())
    .then(diskussioner=>{
        console.log(diskussioner);
        diskussioner.forEach(diskussion=>{
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const td2 = document.createElement('td');
            const a = document.createElement('a');
            a.textContent = diskussion.name;
            const a2 = document.createElement('a');
            a2.textContent = diskussion.author;
            tr.appendChild(td);
            td.appendChild(a);
            tr.appendChild(td2)
            td2.appendChild(a2);

            let category = document.getElementById(diskussion.category);

            category.appendChild(tr);
        })
    })
}