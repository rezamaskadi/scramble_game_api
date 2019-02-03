## Project

Scramble game

## Syarat & Ketentuan

1. Make sure udah lumayan paham soal Javascript & Promise
2. Make sure udah baca2 dokumentasi [Sequelize](http://docs.sequelizejs.com/en/v3/)
3. Make sure udah baca2 dokumentasi [Express](http://expressjs.com/)

## Penjelasan Singkat

1. Project ini pake Sequelize sebagai ORM tool untuk database (MySQL, SQLite, PostgreSQL, dsb)
2. Project ini pake Express untuk ngebantu generate endpoint

## Installation

```
git clone 
```

next

```
cd app/
```

next

```
npm install
```

## Unit Tests

1. Baca [Chai JS](http://chaijs.com/)
2. Instal [Mocha](https://mochajs.org/) globally on your machine and read the docs

## Cara Kerja

Di dalem directory 'system', ada beberapa file (apis.js, constant.js, controller.js, middelware.js, model.js, etc). Basic-nya, file2 itu adalah loaders, hasil yang di load akan dimasukan ke dalam 'args'. Terkecuali di router.js, dimana disitu bakal nge generate semua API yang udah di define di dalam folder 'apis' (file system/api.js sendiri adalah file yang tanggung jawab untuk nge load semua file dalam /apis).

Cara kerja sebuah endpoint adalah dengan melakukan function / procedure dari 1 controller, lalu di chain ke controller selanjutnya secara waterfall, input untuk 1 controller adalah output dari controller selanjutnya. output dari controller terakhir akan di merge dengan output controller sebelumnya, dan balikan ke pada user.

Model dalam /app/models itu model yang bodoh, dia cuma define sesuai dengan apa yang ada di db. singkatnya, model itu adalah object / tabel dalam db.

Worker adalah object yang melakukan operasi2 dari sebuah model. Dianjurkan sebuah function / prosedur dalam worker untuk melakukan 1 hal saja. Dianjurkan juga untuk 1 worker tidak berhubungan dengan worker yang lain.

Controller adalah object yang di panggil oleh endpoint / api. Dianjurkan 1 controller untuk tidak memanggil controlller yang lain, namun 1 controller boleh memanggil beberapa worker.