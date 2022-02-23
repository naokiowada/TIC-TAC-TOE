const table = document.getElementById('ticTacToe')


let tablesSquare = '<table class="square">'
let endTable = '</table>'
let tr = '<tr>'
let endTr = '</tr>'
let td = '<td>'
let endTd = '</td>'
let createTable =''
let display = '大和田'

createTable += tablesSquare
    for (let i = 0; i < 3; i++) {
        createTable += tr
        for (let n = 0; n < 3; n++) {
            createTable += 　td + display + endTd
        }
        createTable += endTr
    }
   createTable += endTable

console.log(createTable)

table.innerHTML = createTable
// const table = document.getElementById(ticTacToe)

// let createTable = ''
// createTable += '<table class="square">'
//     for (let tr = 0; tr < 3; tr++) {
//         createTable += '<tr>'
//         for (let td = 0; td < 3; td++) {
//             createTable += '<td></td>'
//         }
//         createTable += '</tr>' + '</table>'
//     }
   

// console.log(createTable)

