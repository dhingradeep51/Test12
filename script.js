let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-img")
let playPauseimg=document.querySelector("#playpause")
let volumeRange=document.querySelector("#volume-range")
let songRange=document.querySelector("#song-duration")
let volSvg=document.querySelector("#vol-svg")
let musicanim=document.querySelector("#musicanim")
let playListImg=document.querySelector("#playlist-img")
let playList=document.querySelector(".playlist")
let playListSong=document.querySelectorAll(".playlist-song")
let index=6
let playsong=false
let track=document.createElement("audio")
let songs=[
    {
        name:"Ve Kamleya",
        path:"music/Song1.mp3",
        image:"images/image1.jpg",
        singer:"Arjit Singh"
    },
    {
        name:"Wavy",
        path:"music/Song2.mp3",
        image:"images/image2.jpg",
        singer:"Karan Aujla"
    },
    {
        name:"Antidote",
        path:"music/Song3.mp3",
        image:"images/image3.jpg",
        singer:"Karan Aujla"
    },
    {
        name:"Bachke Bachke",
        path:"music/Song4.mp3",
        image:"images/image4.jpg",
        singer:"Karan Aujla"
    },
    {
        name:"Kya Baat Ay",
        path:"music/Song5.mp3",
        image:"images/image5.jpg",
        singer:"Harrdy Sandhu"
    },
    {
        name:"Kabhi Kabhi Aditi",
        path:"music/Song6.mp3",
        image:"images/image6.jpg",
        singer:"Rashid Ali"
    },
    {
        name:"Payal",
        path:"music/Song7.mp3",
        image:"images/image7.webp",
        singer:"Yo Yo Honey Singh"
    },
    {
        name:"Saanware",
        path:"music/Song8.mp3",
        image:"images/image8.jpg",
        singer:"Akhil Sachdeva"
    },
    {
        name:"Safar",
        path:"music/Song9.mp3",
        image:"images/image9.jpg",
        singer:"Aditya Yadav"
    },
    {
        name:"Tell Me",
        path:"music/Song10.mp3",
        image:"images/image10.jpeg",
        singer:"Karan Aujla X One Republic"
    },
    {
        name:"Blender",
        path:"music/Song11.mp3",
        image:"images/image11.jpg",
        singer:"Massom Sharma"
    }
]
function loadtrack(index){
    track.src=songs[index].path
    songName.innerHTML=songs[index].name
    songSinger.innerHTML=songs[index].singer
    songImage.style=`background-image: url("${songs[index].image}");`
    track.currentTime=0
    songRange.value=0

    volume()
    setInterval(()=> {
        songRange.max=track.duration
        songRange.value=track.currentTime
    },1000)
    duration()
    
    track.load()

    track.addEventListener("ended",nextSong)
}
loadtrack(index)
function playpause(){
    if(playsong==false){
        playSong()
        musicanim.style.display="block"
    }
    else{
        pauseSong()
        musicanim.style.display="none"
    }
    
}
function playSong(){
    track.play()
    playsong=true
    playPauseimg.src="images/pause.svg"
}
function pauseSong(){
    track.pause()
    playsong=false
    playPauseimg.src="images/play.svg"
}
function nextSong(){
    if(index<songs.length-1){
        index++
        loadtrack(index)
        playSong()
    }
    else{
        index=0
        loadtrack(index)
        playSong()
    }
    songRange.value=0
    track.currentTime=0
}
function previousSong(){
    if(index>0){
        index--
        loadtrack(index)
        playSong()
    }
    else{
        index=songs.length-1
        loadtrack(index)
        playSong()
    }
    songRange.value=0
    track.currentTime=0
}
function volume(){
    track.volume=volumeRange.value/100
    if(volumeRange.value==0){
        volSvg.src="images/mute.svg"
    }
    else{
        volSvg.src="images/volume.svg"
    }
}
function duration(){
    track.currentTime=songRange.value
}
playListImg.addEventListener("click",()=>{
    playList.classList.toggle("playlist-active")
    if(playList.classList.contains("playlist-active")){
        playListImg.src="images/cross.svg"
    }
    else{
        playListImg.src="images/playlist.svg"
    }
})
playListSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadtrack(index)
        playSong()
        playList.classList.toggle("playlist-active")
        playListImg.src="images/playlist.svg"
        track.currentTime=0
        songRange.value=0
    })
})
