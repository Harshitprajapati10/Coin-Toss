const images = [
    "animationimg/one.jpg",
    "animationimg/two.jpg",
    "animationimg/three.jpg",
    "animationimg/four.jpg"
];

let currentIndex = 0;

function cycleImages() {
    const imageElement = document.getElementById("img")
    setTimeout(() => {
        imageElement.src = "animationimg/one.jpg";
    }, 300)
    setTimeout(() => {
        imageElement.src = "animationimg/two.jpg";
    }, 600)
    setTimeout(() => {
        imageElement.src = "animationimg/three.jpg";
    }, 900)
    setTimeout(() => {
        imageElement.src = "animationimg/four.jpg";
    }, 1200)

}

const getimgUrl = () => {
    urls = ["head","tail"]
    const randomIndex = Math.floor(Math.random() * urls.length); 
    return urls[randomIndex];
}

const imageElementhtmlresult = () => {
    const coinElement = document.getElementById("coin")
    coinElement.innerHTML = `<div class="absolute">
                <img id="img" src="img/${getimgUrl()}.jpg" class="h-[220px] rounded-full" alt="" srcset="">
            </div>
            <p id="decision" style="font-size: 150px;" class="text-white absolute ">${getimgUrl()=== "head" ? "H" : "T"}</p>`
}

const setgiphy = () =>{ 
    const imageElement = document.getElementById("img")
    setTimeout(() => {
        imageElement.src = "gif/giphy.gif"
    }, 3000)
    setTimeout(() => { 
        imageElementhtmlresult()
    }, 6000);

}


const animation = () => {
    const sound = new Audio("aud.mp3"); 
    sound.play();
    const decision = document.getElementById("decision")
    const tossButton = document.getElementById("toss")
    tossButton.style.display = "none"
    decision.style.display = "none"
    cycleImages()

    
    setgiphy();
    
}

const tossButton = document.getElementById("toss")
tossButton.addEventListener("click",()=> {animation()})