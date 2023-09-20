// area branch leo2
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

// area branch leo
let jamMakan = 16;
let jamSekarang = 1;
while (jamSekarang < jamMakan) {
    jamSekarang > jamMakan ? console.log(`belum waktunya makan, karena masih pukul ${jamSekarang}`) : console.log(`belum waktunya makan, karena masih pukul ${jamSekarang}`);
    jamSekarang++;
}
