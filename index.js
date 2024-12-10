const express = require('express')
const app = express()
const port = 3000
// import body parser
const bodyParser = require('body-parser')


app.get('/',(req,res) =>{
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Halaman Tombol</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        h1 {
          margin-bottom: 20px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          background-color: #4CAF50;
          color: white;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #45a049;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Selamat datang di Table Basket!</h1>
        <button onclick="goToTableBasket()">Ke tabel BASKET</button>
      </div>

      <script>
        function goToTableBasket() {
          // Arahkan pengguna ke /api/basket
          window.location.href = "http://localhost:3000/api/basket";
        }
      </script>
    </body>
    </html>
    `;
    res.send(html);  // Kirim HTML sebagai response
});

//insert, edit, delete
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//import route post
const postsRouter = require('./routes/posts')
app.use('/api/basket', postsRouter)


app.listen(port,()=>{
    console.log(`aplikasi ini berjalan di http://localhost:${port}`)
})