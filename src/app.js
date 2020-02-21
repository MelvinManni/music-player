let progress = document.getElementById("progress"),
    nextBtn = document.getElementById("next"),
    prevBtn = document.getElementById("prev"),
    play = document.getElementById("play"),
    pause = document.getElementById("pause"),
    playTitle = document.getElementById("play-title"),
    playartist = document.getElementById("play-artist"),
    playThumb = document.getElementById("thumb-play"),
    progressBar = document.getElementById("progress-bar"),
    aud = document.getElementById("audio");
let openBtn = document.getElementById("open"),
    closeBtn = document.getElementById("close"),
    menu = document.getElementById("menu"),
    contMenu = document.getElementById("cont-menu"),
    contMenu2 = document.getElementById("cont-menu-2");


openBtn.addEventListener("click", () => {
    menu.style.width = "180px";
    openBtn.style.display = 'none';
    setInterval(() => {
        contMenu.style.display = 'block';
    }, 800)
});


closeBtn.addEventListener("click", () => {

    contMenu.style.visibility = 'collapse';

    setInterval(() => {
        menu.style.width = "0px";
        openBtn.style.display = 'block';
    }, 500)

});

let index = 0;

const song = [{ song: "music/In My Feelings.mp3", title: "In My Feeling", artist: "Drake", thumb: "thumbnail/feelings.jpg" }, { song: "music/Happier.mp3", artist: "Marshmello ft. Bastille", title: "Happier", thumb: "thumbnail/happier.jpg" }, { song: "music/Lucid Dreams.mp3", artist: "Juice Wrld", title: "Lucid Dream", thumb: "thumbnail/lucid.jpg" }, { song: "music/SICKO MODE.mp3", artist: "Travis Scott", title: "Sicko Mode", thumb: "thumbnail/sicko.jpg" }, { song: "music/Sunflower.mp3", artist: "Post Malone & Swae Lee", title: "Sunflower", thumb: "thumbnail/sunflower.jpg" }]



playTitle.innerHTML = song[index].title;
playartist.innerHTML = song[index].artist;
playThumb.src = song[index].thumb;
aud.src = song[index].song;


for (let i = 0; i < song.length; i++) {

    const div = document.createElement("div");
    const img = document.createElement("img");
    const p1 = document.createElement("p"),
        p2 = document.createElement("p"),
    exp = document.getElementById("explore"),
    icon = document.createElement("i"),
    iDiv = document.createElement("div");


    div.className = "exp-card";
    img.className = "exp-thumb";
    img.src = song[i].thumb;
    p1.className = "pop-title";
    p2.className = "pop-artist";
    p1.innerHTML = song[i].title;
    p2.innerHTML = song[i].artist;
    i.className = "fas fa-play expHov";
    iDiv.className = "idiv";
    exp.appendChild(div);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    
    div.addEventListener("click", () => {
        playTitle.innerHTML = song[i].title;
        playartist.innerHTML = song[i].artist;
        playThumb.src = song[i].thumb;
        aud.src = song[i].song;
        aud.play()
        play.style.display = 'none';
        pause.style.display = 'block';
    });
};





for (let i = 0; i < song.length; i++){

    const div = document.createElement("div");
    const img = document.createElement("img");
    const p1 = document.createElement("p"),
        p2 = document.createElement("p"),
        div2 = document.createElement("div"),
        pop = document.getElementById("popular");
    

    div.className = "pop-card flex row";
    img.className = "pop-thumb";
    img.src = song[i].thumb;
    p1.className = "pop-title";
    p2.className = "pop-artist";
    p1.innerHTML = song[i].title;
    p2.innerHTML = song[i].artist;

    pop.appendChild(div);
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);

    div.addEventListener("click", ()=>{
        playTitle.innerHTML = song[i].title;
        playartist.innerHTML = song[i].artist;
        playThumb.src = song[i].thumb;
        aud.src = song[i].song;
        aud.play()
        play.style.display = 'none';
        pause.style.display = 'block';
    });
};




nextBtn.addEventListener("click", (e)=>{
    if ( index >= 4){
        index = 0;
    } else{
        index++;
    }

    song[index];

    playTitle.innerHTML = song[index].title;
    playartist.innerHTML = song[index].artist;
    playThumb.src = song[index].thumb;
    aud.src = song[index].song;
    aud.play()
    play.style.display = 'none';
    pause.style.display = 'block';

});

prevBtn.addEventListener("click", (e)=>{

    if (index <= 0) {
        index = 4;
    } else {
        index--;
    }

    song[index];

    playTitle.innerHTML = song[index].title;
    playartist.innerHTML = song[index].artist;
    playThumb.src = song[index].thumb;
    aud.src = song[index].song;

    aud.play()
    play.style.display = 'none';
    pause.style.display = 'block';
    

});


play.addEventListener("click",(e)=>{
    aud.play()
    play.style.display = 'none';
    pause.style.display = 'block';
});

pause.addEventListener("click", ()=>{

    aud.pause()
    play.style.display = 'block';
    pause.style.display = 'none';

});

//Always set to play


progressCheck = ()=>{
    let currentTime = aud.currentTime, 
        duration = aud.duration;
    let percentage = currentTime/duration;

    let progressWidth = document.getElementById("progress").offsetWidth,
        width = (progressWidth * percentage);
    
    let newWidth = parseInt(width);

    progressBar.style.width = newWidth+"px";



}


aud.addEventListener("timeupdate", () => {

    if (aud.currentTime >= aud.duration) {
        let nextIndex = index + 1;

        if (nextIndex > song.length) {
            nextIndex = 0;
        }


        playTitle.innerHTML = song[nextIndex].title;
        playartist.innerHTML = song[nextIndex].artist;
        playThumb.src = song[nextIndex].thumb;
        aud.src = song[nextIndex].song;


        aud.play()

    }

});


//set Menu 



