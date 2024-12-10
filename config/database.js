let mysql = require('mysql')

let koneksi = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'basket_abraham'
})

koneksi.connect(function(error){
    if(!!error){
        console.log(error)
    }else{
        console.log('Connection Success')
    }
})

module.exports = koneksi