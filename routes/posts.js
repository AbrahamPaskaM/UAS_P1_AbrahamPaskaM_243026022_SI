const express = require('express')
const router = express.Router()

// import database
const koneksi = require('../config/database')

// insert data & validasi
const {body, validationResult} =require('express-validator')


// membaca data
router.get('/', function(req,res){
    koneksi.query('SELECT * FROM basket ORDER BY id desc',
    function(error,rows){
        if(error){ 
            return res.status(500).json({
                status: false,
                message: 'database ngga nyambung TT',
            })
        }else{
            return res.status(200).json({
                status:true,
                message: 'Menampilkan data table Basket :V',
                data:rows
            })
        }    
    })
})

//insert data
router.post('/',
    [
        body('Pemain').notEmpty(),
        body('Tim').notEmpty(),
        body('Posisi').notEmpty(),
        body('MVP').notEmpty(),
        body('Trofi').notEmpty(),

    ],(req,res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({errors:errors.array()})
        }

        //mendefinisikan formData
        let formData = {
            Pemain: req.body.Pemain,
            Tim: req.body.Tim,
            Posisi:req.body.Posisi,
            MVP:req.body.MVP,
            Trofi:req.body.Trofi
        }

        //masukkan data / query
        koneksi.query('INSERT INTO basket SET ?', formData,
            function(err,rows){
                if(err){
                    return res.status(500).json({
                        status: false,
                        message: 'Server mu error TT',
                    })
                }else{
                    return res.status(201).json({
                        status: true,
                        message: 'Berhasil input data >W<',
                        data: rows[0]
                    })
                }
            }
        )
    })

//Detail
router.get('/:id', function(req,res){
    let id = req.params.id

    koneksi.query(`SELECT * FROM basket WHERE ID=${id}`,
        function(error, rows){
            if(error){
                return res.status(500).json({
                    status:false,
                    message:'Server ERROR!!'
                })
            }

            //pencarian posts
            if(rows.length <= 0){
                return res.status(404).json({
                    status: false,
                    message: 'Data tidak ada X'
                })
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'menampilkan data Basket',
                    data: rows[0],
                })
            }
        }
     )

})

// Update
router.patch('/update/:id',[
    //validasi
    body('Pemain').notEmpty(),
    body('Tim'). notEmpty(),
    body('Posisi').notEmpty(),
    body('MVP').notEmpty(),
    body('Trofi').notEmpty(),
],(req,res)=>{
    const errors = validationResult (req)
    if(!errors.isEmpty()){
        return res.status(442).json({
            errors:errors.array()
        })
    }

    //id
    let id = req.params.id

    //data post
    let formData={
        Pemain: req.body.Pemain,
        Tim: req.body.Tim,
        Posis: req.body.Posis,
        MVP:req.body.MVP,
        Trofi:req.body.Trofi,
    }

    // update query
    koneksi.query(`UPDATE basket set ? WHERE id=${id}`,
       formData,function(error,rows){
        if(error){
            return res.status(500).json({
                status: false,
                message: 'server error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Berhasil update data'
            })
        }
       } 
    )
})

//Delete
router.delete('/delete/(:id)',
    function(req,res){
        let id = req.params.id

        koneksi.query(`DELETE FROM basket WHERE id=${id}`,
            function(error,rows){
                if(error) {
                    return res.status(500).json({
                        status: false,
                        message: 'Server error'
                    })
                } else {
                    return res.status(200).json({
                        status: true,
                        message: 'data sudah dihapus'
                    })
                }
            }
        )
    })

module.exports = router