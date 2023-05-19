function gramophone(band, album, song) {

    let timeInSec = (band.length * album.length * song.length)/ 2;
    let rotations = Math.ceil(timeInSec / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}


gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
console.log("------------------------------------");
gramophone('Rammstein', 'Sehnsucht', 'Engel');