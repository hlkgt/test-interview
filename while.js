let detik = 90;
while (true) {
    let lampu = 'merah';
    console.log(`lampu ${lampu} ${detik}detik`);
    if (detik === 0) {
        break;
    }
    detik--;
}

console.log(`lampu hijau jalan`);