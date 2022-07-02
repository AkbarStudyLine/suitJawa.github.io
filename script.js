function getPilihanKomputer() {
    
    const comp = Math.random();
    if (comp < 0.34) return  'gajah'
    if (comp > 0.34 && comp > 0.67) return  'orang'
        
    return  'semut'
}

function getHasil (comp, p) {

    if (p == comp)  return 'Seri!';
    if (p == 'gajah') return (comp == 'orang') ? 'Menang!' : 'Kalah!'
    if (p == 'orang') return (comp == 'semut') ? 'Menang!' : 'Kalah!'
    if (p == 'semut') return (comp == 'gajah') ? 'Menang!' : 'Kalah!'
}


function putar () {
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'orang', 'semut']
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000 ){
            clearInterval; 
            return
        }
        
        imgComputer.setAttribute('src', 'img/'+ gambar[i++] + '.png')
        if (i == gambar.length) i = 0;


    }, 100)
}




const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanKomputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        putar()

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', 'img/'+ pilihanComputer + '.png')
            
            const info = document.querySelector('.info')
            info.innerHTML = hasil
        }, 1000)
        
        
    })
})










// // permainan
// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer()
//     const pilihanPlayer = pGajah.className
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
    
//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', 'img/'+ pilihanComputer + '.png')
    
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

// })

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer()
//     const pilihanPlayer = pOrang.className
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
    
//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', 'img/'+ pilihanComputer + '.png')
    
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

// })

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer()
//     const pilihanPlayer = pSemut.className
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
    
//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', 'img/'+ pilihanComputer + '.png')
    
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil

// })






