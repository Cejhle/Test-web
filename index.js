import express from "express"
const app = express()
const port = 7777

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send(`
    <body style="
      background-image: url('/hutao.jpg'); 
      background-size: cover; 
      background-attachment: fixed; 
      color: white; 
      text-shadow: 2px 2px 4px #000000;
      font-family: sans-serif;
      padding: 40px;
    ">
      <h1 style="color: red;font-size: 30px;">Selamat datang di dunia Cejhle! <b>IHIK</b></h1>
      
      <p style="font-size: 20px;">
        Halo Sayang. <br>
        Perkenalkan aku <b>Cejhle</b>, pendamping setia <b>Hu Tao</b>.
      </p>

      <div style="background: rgba(0,0,0,0.6); padding: 20px; border-radius: 15px;">
        <p style="font-size: 20px;">Gua main Game Gacha banyak banget dan bakalan nambah<br> ini lah daftar Game Gacha yang gua mainin:</p>
        
        <p>Genshin Impact<br> Akun Genshin gua ada 2 jadi jangan bingung kalau Gambarnya ada 2</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <div style="text-align: center;">
                <img src="/genshin.jpg" style="width: 150px; height: 200px; border-radius: 10px; object-fit: cover; border: 2px solid white;">
                
            </div>
            
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <div style="text-align: center;">
                <img src="/genshin2.jpg" style="width: 150px; height: 200px; border-radius: 10px; object-fit: cover; border: 2px solid white;">
                
                </div>

<p>Honkai Starrail</p>
<div style="text-align: center;">
                <img src="/hsr.jpg" style="width: 150px; height: 200px; border-radius: 10px; object-fit: cover; border: 2px solid white;">
                
            </div>
            
            <p>Zenless Zone Zero</p>
            <div style="text-align: center;">
                <img src="/zzz.jpg" style="width: 150px; height: 200px; border-radius: 10px; object-fit: cover; border: 2px solid white;">
                
            </div>
            
            <p>Wuthering Waves</p>
            <div style="text-align: center;">
                <img src="/wuwa.jpg" style="width: 150px; height: 200px; border-radius: 10px; object-fit: cover; border: 2px solid white;">
                
            </div>
            
            <p>Neverness to Everness</p>
            <div style="text-align: center;">
                <img src="/nte.jpg" style="width: 150px; height: 200px; border-radius: 10px; object-fit: cover; border: 2px solid white;">
                
            </div>
            
            <p style="font-size: 17px;">
        <i>Kadang petualangan itu melelahkan... Sudah saatnya aku menjadi Orang Biasa dan Hidup Bahagia bersama Hu Tao di Liyue</i>
      </p>
      
            </div>
      </div>
   </body>
  `);
});

import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });
app.post('/upload', upload.single('foto'), (req, res) => {
    res.send('File berhasil disimpan di folder uploads!');
});

app.listen(port, () => {
  console.log("aplikasi aktif di port ", port)
})