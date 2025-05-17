function createStyles() {
    const style = document.createElement('style');
    style.textContent = `
body {
background-color: #222;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0;
font-family: Arial, sans-serif;
background: url('gif.mp4') no-repeat center center fixed;
background-size: cover;
}
.neumorphism-box {
width: 50;
height: 50;
background-color: #f0f0f0;
border-radius: 20px;
transition: box-shadow 0.3s ease;
}
body {
margin: 0;
padding: 0;
font-family: Arial, sans-serif;
position: relative;
}
span {
margin: 0;
padding: 0;
font-family: Arial, sans-serif;
position: relative; 
}

.top-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100;
background-color: #223;
padding: 10px 20px;
display: flex;
align-items: center;
text-align: center;
gap: 10px;
}

.top-text {
margin: 0;
}

.top-button {
position: unset;
top: 9000px;
left: 5px;
padding: 10px 20px;
background-color: #007bff;
color: #fff;
border: none;
border-radius:50px;
cursor: pointer;
}
.button-epic {
position: unset;
top: 9000px;
left: 5px;
padding: 10px 20px;
background-color: #222;
color: #fff;
border: none;
border-radius:50px;
cursor: pointer;
}

.button-epic:hover {
background-color: gray;
}

.top-button:hover {
background-color: #0056b3;
}

.loadingtext {
text-align: center;
margin-top: 0px;
font-family: sans-serif;
}
.top-img {
margin: 0;
}
.spacerbutton {
width: 4;
color: transparent;
background-color: transparent;
border-color: transparent;
}
#bg-video {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;
}
img {
border-radius: 25px;
width: 300px;
height: 300px;
}
a {
color: transparent;
}
.button-container {
gap: 10px;
background-color: #223;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
transition: transform 250ms;
}
.button-container:hover {
transform: scale(1.1);
}
.button-container2 {
gap: 10px;
background-color: #1e1f22;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
transition: transform 250ms;
width: 5%;
height: 40.4px;
}
.button-container2:hover {
transform: scale(0.8);
}
.game-img {
border-radius: 25px;
height: 225px;
width: 225px;
}
.image-container {
margin-top: 380px;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 10px;
}
iframe {
border-color: transparent;
border-radius: 25px;
width: 90vw;
height: 80vh;
max-width: 100%;
max-height: 100%;
}
.iframe2 {
border-color: transparent;
border-radius: 25px;
width: 67vw;
height: 80vh;
max-width: 100%;
max-height: 100%;
}
.fullscreenbutton {
cursor: pointer;
width: 40px;
height: 40px;
}
.tooltip {
position: relative;
display: inline-block;
border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
visibility: hidden;
width: 120px;
background-color: black;
color: #fff;
text-align: center;
border-radius: 6px;
padding: 5px 0;
transition: ease-in;
position: absolute;
z-index: 1;
top: 5px;
left: 105%;
}

.tooltip:hover .tooltiptext {
visibility: visible;
transition: ease-in;
}
.gameicon {
width: 40px;
height: 40px;
border-radius: 25px;
}
    `;
    document.head.appendChild(style);
}
// this function will give you nightmares
function loadContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const menu = urlParams.get('menu');
    const game = urlParams.get('game');
    const iframe = urlParams.get('iframe');

    const content = document.createElement('div');
    content.id = 'content';

    if (menu === 'test') {
        content.innerHTML = '<p>response: 200</p>';
    } else if (menu === 'games') {
        content.innerHTML = `
        <video autoplay loop muted playsinline id="bg-video">
    <source src="./gif.mp4" type="video/mp4">
</video>

<br>

<div class="top-container">
    <h1 class="top-text">Games</h1>
    <a href="?menu=home">
        <button class="top-button">Back</button>
    </a>
    <!-- new ui update -->
    <div class="button-container2">
    <!-- add new about:blank button -->
    <button class="button-epic" onclick="launchab()">Open in about:blank</button>
</div>
</div>

<div class="image-container">
    <a href="?game=sm64">
        <img src="./assets/games/asset1.jpg" alt="Super Mario 64" class="game-img">
    </a>
    <a href="?game=basketballbros">
        <img src="./assets/games/asset2.jpg" alt="Basketball Bros" class="game-img">
    </a>
    <a href="?game=nzpzombies">
        <img src="./assets/games/asset3.png" alt="COD Zombies" class="game-img">
    </a>
    <a href="?game=minecraft">
        <img src="./assets/games/asset4.png" alt="Minecraft" class="game-img">
    </a>
    <a href="?game=thereisnogame">
        <img src="./assets/games/asset5.png" alt="There Is No Game" class="game-img">
    </a>
    <a href="?game=pokemonemerald">
        <img src="./assets/games/asset6.png" alt="Pokémon Emerald" class="game-img">
    </a>
    <a href="?game=pokemonruby">
        <img src="./assets/games/asset7.png" alt="Pokémon Ruby" class="game-img">
    </a>
    <a href="?game=pokemonfirered">
        <img src="./assets/games/asset13.png" alt="Pokémon Fire Red" class="game-img">
    </a>
    <a href="?game=vex8">
        <img src="./assets/games/asset8.jpg" alt="Vex 8" class="game-img">
    </a>
        <a href="?game=vex3">
        <img src="./assets/games/asset18.png" alt="Vex 3" class="game-img">
    </a>
    <a href="?game=dirvemad">
        <img src="./assets/games/asset9.png" alt="Drive Mad" class="game-img">
    </a>
    <a href="?game=crazy3d">
        <img src="./assets/games/asset10.png" alt="Crazy Cattle 3D" class="game-img">
    </a>
    <a href="?game=papasfreezeria">
        <img src="./assets/games/asset11.jpg" alt="Papas Freezeria" class="game-img">
    </a>
    <a href="?game=papasscooperia">
        <img src="./assets/games/asset12.jpg" alt="Papas Scooperia" class="game-img">
    </a>
    <a href="?game=theimpossiblequiz">
        <img src="./assets/games/asset14.png" alt="The Impossible Quiz" class="game-img">
    </a>
    <a href="?game=ngon">
        <img src="./assets/games/asset15.png" alt="n-gon" class="game-img">
    </a>
        <a href="?game=webecomewhatwebehold">
        <img src="./assets/games/asset16.png" alt="We Become What We Behold" class="game-img">
    </a>
        <a href="?game=fruitninja">
        <img src="./assets/games/asset17.jpg" alt="Fruit Ninja" class="game-img">
    </a>
        <a href="?game=moviepire">
        <img src="./assets/games/asset19.jpg" alt="Movie Pire" class="game-img">
    </a>
        <a href="?game=rivestream">
        <img src="./assets/games/asset20.png" alt="Rivestream" class="game-img">
    </a>
        <a href="?game=deadshot">
        <img src="./assets/games/asset21.jpg" alt="Dead Shot" class="game-img">
    </a>
        <a href="?game=1v1lol">
        <img src="./assets/games/asset22.jpg" alt="1v1.lol" class="game-img">
    </a>
</div>

        `;
    }
    else if (game === 'sm64') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Super Mario 64</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset1.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=sm64"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'basketballbros') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Basketball Bros</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset2.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=basketballbros"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'nzpzombies') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">NZP Zombies</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset3.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=nzpzombies"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'minecraft') {
        content.innerHTML = `
        `;
         window.location.replace("minecraft.html");
    }
    else if (game === 'thereisnogame') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">There Is No Game</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset5.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=thereisnogame"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'pokemonemerald') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Pokemon Emerald</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset6.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=pokemonemerald"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'pokemonruby') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Pokemon Ruby</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset7.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=pokemonruby"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'pokemonfirered') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Pokemon Fire Red</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset13.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=pokemonfirered"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'vex8') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Vex 8</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset8.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=vex8"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'dirvemad') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Drive Mad</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset9.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=dirvemad"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'crazy3d') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <h1 class="top-text">Crazy Cattle 3D</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset10.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=crazy3d"></iframe>
        `;
    }
    else if (game === 'papasfreezeria') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Papas Freezeria</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset11.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=papasfreezeria"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'papasscooperia') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Papas Scooperia</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset12.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=papasscooperia"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'theimpossiblequiz') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">The Impossible Quiz</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset14.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=theimpossiblequiz"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'ngon') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">n-gon</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset15.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=ngon"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'webecomewhatwebehold') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">We Become What We Behold</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset16.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" class="iframe2" src="index.html?iframe=webecomewhatwebehold"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'fruitninja') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Fruit Ninja</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset17.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=fruitninja"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'vex3') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Vex 3</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset18.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=vex3"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (game === 'moviepire') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Movie Pire</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset19.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=moviepire"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
        else if (game === 'rivestream') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Rivestream</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset20.png" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=rivestream"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
        else if (game === 'deadshot') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">Dead Shot</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset21.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=deadshot"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
        else if (game === '1v1lol') {
        content.innerHTML = `
            <video autoplay loop muted playsinline id="bg-video">
                <source src="./gif.mp4" type="video/mp4">
            </video>
            <br>
            <div class="top-container">
                <div class="tooltip">
                    <span class="tooltiptext">Fullscreen</span>
                    <img class="fullscreenbutton" src="./assets/fullscreenbutton.svg" id="fullscreenBtn" alt="">
                </div>
                <h1 class="top-text">1v1.lol</h1>
                <a href="?menu=games">
                    <button class="top-button">Back</button>
                </a>
                <img src="./assets/games/asset22.jpg" alt="icon" class="gameicon">
            </div>
            <br>
            <iframe id="maingame" src="index.html?iframe=1v1lol"></iframe>
        `;
        setTimeout(() => {
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const maingame = document.getElementById('maingame');
    
            fullscreenBtn.addEventListener('click', () => {
                if (maingame.requestFullscreen) {
                    maingame.requestFullscreen();
                    maingame.focus();
                } else if (maingame.webkitRequestFullscreen) {
                    maingame.webkitRequestFullscreen();
                    maingame.focus();
                } else if (maingame.msRequestFullscreen) {
                    maingame.msRequestFullscreen();
                    maingame.focus();
                }
            });
        }, 0);
    }
    else if (iframe === 'basketballbros') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://basketbros.io/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'nzpzombies') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://nzp.gay";
                iframe.scrolling = 'no';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'thereisnogame') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://ubg100.github.io/games/thereisnogame/index.html";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'pokemonemerald') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://professordragon.github.io/gameboy/?name=pokemonemerald&src=https://picklekid31.github.io/GBA-unblocked-games/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'pokemonruby') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://professordragon.github.io/gameboy/?name=pokemonruby&src=https://picklekid31.github.io/GBA-unblocked-games/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'pokemonfirered') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://professordragon.github.io/gameboy/?name=pokemonred&src=https://picklekid31.github.io/GBA-unblocked-games/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'vex8') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://ubg98.github.io/Vex8/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'dirvemad') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://www.yoosfuhl.com/game/drivemad/index.html";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'crazy3d') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                window.open('https://crazycattle3d-github-io.vercel.app/')
            });
        }, 0);
    }
    else if (iframe === 'papasfreezeria') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%20%20%3Ctitle%3E%3C%2Ftitle%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23223%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%23ruffleplayer%20%7B%0A%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20top%3A%200px%3B%0A%20%20%20%20%20%20bottom%3A%200px%3B%0A%20%20%20%20%20%20right%3A%200px%3B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20border%3A%20none%3B%0A%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%20%20z-index%3A%20999999%3B%0A%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%20%20%20%3Cembed%20src%3D%22https%3A%2F%2Fflashplayer123.pages.dev%2Fassets%2Fdownloads%2Fflashgames%2Fpapasfreezeria.swf%22%20id%3D%22ruffleplayer%22%3E%0A%20%20%20%20%20%20%20%20%3Cscript%20src%3D%22https%3A%2F%2Funpkg.com%2F%40ruffle-rs%2Fruffle%22%3E%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'papasscooperia') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%20%20%3Ctitle%3E%3C%2Ftitle%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23223%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%23ruffleplayer%20%7B%0A%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20top%3A%200px%3B%0A%20%20%20%20%20%20bottom%3A%200px%3B%0A%20%20%20%20%20%20right%3A%200px%3B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20border%3A%20none%3B%0A%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%20%20z-index%3A%20999999%3B%0A%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%20%20%20%3Cembed%20src%3D%22https%3A%2F%2Fflashgamesforfun.pages.dev%2Fgames%2Fswfs%2Fpapasscooperia_v102.swf%22%20id%3D%22ruffleplayer%22%3E%0A%20%20%20%20%20%20%20%20%3Cscript%20src%3D%22https%3A%2F%2Funpkg.com%2F%40ruffle-rs%2Fruffle%22%3E%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'theimpossiblequiz') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%20%20%3Ctitle%3E%3C%2Ftitle%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23223%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%23ruffleplayer%20%7B%0A%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20top%3A%200px%3B%0A%20%20%20%20%20%20bottom%3A%200px%3B%0A%20%20%20%20%20%20right%3A%200px%3B%0A%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20border%3A%20none%3B%0A%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%20%20z-index%3A%20999999%3B%0A%20%20%20%20%20%20height%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%20%20%20%3Cembed%20src%3D%22https%3A%2F%2Fflashplayer123.pages.dev%2Fassets%2Fdownloads%2Fflashgames%2Ftheimpossiblequiz.swf%22%20id%3D%22ruffleplayer%22%3E%0A%20%20%20%20%20%20%20%20%3Cscript%20src%3D%22https%3A%2F%2Funpkg.com%2F%40ruffle-rs%2Fruffle%22%3E%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'ngon') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://landgreen.github.io/n-gon/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'webecomewhatwebehold') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://webecomewhatwebehold.github.io/file/";
                iframe.style.width = '100%';
                iframe.style.height = '100vh';
                iframe.style.position = 'fixed';
                iframe.style.top = '0px';
                iframe.style.bottom = '0px';
                iframe.style.right = '0px';
                iframe.style.border = 'none';
                iframe.style.margin = '0';
                iframe.style.padding = '0';
                iframe.style.overflow = 'hidden';
                iframe.style.zIndex = '999999';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'fruitninja') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://ubg98.github.io/FruitNinja/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'vex3') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://ubg98.github.io/Vex3/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'moviepire') {
        // warning so people dont complain about shit
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play website</button><br><br><strong id="warningtext">WARNING: This website contains a lot of ads, please ingore them. Or use an ad blocker.</strong>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            const warningtext = document.getElementById('warningtext');
            playgame.addEventListener('click', () => {
                playgame.remove();
                warningtext.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://moviepire.net/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                iframe.allowFullscreen = 'true';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
        else if (iframe === 'rivestream') {
        // warning so people dont complain about shit
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play website</button><br><br><strong id="warningtext">WARNING: This website contains a lot of ads, please ingore them. Or use an ad blocker.</strong>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            const warningtext = document.getElementById('warningtext');
            playgame.addEventListener('click', () => {
                playgame.remove();
                warningtext.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://rivestream.org/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                iframe.allowFullscreen = 'true';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
        else if (iframe === 'deadshot') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://deadshot.io/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
        else if (iframe === '1v1lol') {
        content.innerHTML = '<style>body {background: #223; overflow: hidden;}</style><button class="top-button" id="playgame">Play game</button>'
        setTimeout(() => {
            const playgame = document.getElementById('playgame');
            playgame.addEventListener('click', () => {
                playgame.remove();
                const iframe = document.createElement('iframe');
                iframe.src = "https://1v1.lol/";
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.borderRadius = '0px';
                document.body.appendChild(iframe);
            });
        }, 0);
    }
    else if (iframe === 'sm64') {
        document.addEventListener('click', () => {
            <!--
            
            document.write( '<html lang=\"en-us\"><head>\n' );
            document.write( '    <meta charset=\"utf-8\">\n' );
            document.write( '    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n' );
            document.write( '    <title>Super Mario 64</title>\n' );
            document.write( '    <style>\n' );
            document.write( '      body, html{\n' );
            document.write( '        margin: 0;\n' );
            document.write( '        padding: 0;\n' );
            document.write( '        width: 100vw;\n' );
            document.write( '        min-height: 100vh;\n' );
            document.write( '        font-family: Arial, Helvetica, sans-serif;\n' );
            document.write( '        color: white;\n' );
            document.write( '        image-rendering: pixelated;\n' );
            document.write( '        background-color: #223;\n' );
            document.write( '        scrollbar-width: none;\n' );
            document.write( '      }\n' );
            document.write( '      ::-webkit-scrollbar {\n' );
            document.write( '        display: none;\n' );
            document.write( '      }\n' );
            document.write( '      #container {\n' );
            document.write( '        width: 100vw;\n' );
            document.write( '        height: 100vh;\n' );
            document.write( '        display: flex;\n' );
            document.write( '        align-items: center;\n' );
            document.write( '        justify-content: center;\n' );
            document.write( '      }\n' );
            document.write( '      canvas {\n' );
            document.write( '        width: 100vw;\n' );
            document.write( '        height: 100vh;\n' );
            document.write( '      }\n' );
            document.write( '    </style>\n' );
            document.write( '  </head>\n' );
            document.write( '  <body>\n' );
            document.write( '    <div id=\"container\">\n' );
            document.write( '      <canvas class=\"emscripten\" id=\"canvas\" width=\"1920\" height=\"1080\" style=\"cursor: default;\"></canvas>\n' );
            document.write( '    </div>\n' );
            document.write( '    <script type=\"text/javascript\">\n' );
            document.write( '      var Module = {\n' );
            document.write( '        preRun: [],\n' );
            document.write( '        postRun: [],\n' );
            document.write( '        print: (function() {\n' );
            document.write( '          return function(text) {\n' );
            document.write( '            if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(\' \');\n' );
            document.write( '            console.log(text);\n' );
            document.write( '          };\n' );
            document.write( '        })(),\n' );
            document.write( '        printErr: function(text) {\n' );
            document.write( '          if (arguments.length > 1)\n' );
            document.write( '            text = Array.prototype.slice.call(arguments).join(\' \');\n' );
            document.write( '          console.error(text);\n' );
            document.write( '        },\n' );
            document.write( '        canvas: (function() {\n' );
            document.write( '          var canvas = document.getElementById(\'canvas\');\n' );
            document.write( '          canvas.width = window.innerWidth; // Todo: how to do this from c++\n' );
            document.write( '          canvas.height = window.innerHeight;\n' );
            document.write( '          canvas.addEventListener(\"webglcontextlost\", function(e) {\n' );
            document.write( '            alert(\'WebGL context lost. You will need to reload the page.\');\n' );
            document.write( '            e.preventDefault();\n' );
            document.write( '          }, false);\n' );
            document.write( '          return canvas;\n' );
            document.write( '        })(),\n' );
            document.write( '        setStatus: function(text) {\n' );
            document.write( '        }\n' );
            document.write( '      };\n' );
            document.write( '    </script>\n' );
            document.write( '    <script async=\"\" type=\"text/javascript\" src=\"https://3xpsmjs.pages.dev/game/sm64.js\"></script>\n' );
            document.write( '    <script>\n' );
            document.write( '    </script>\n' );
            document.write( '  \n' );
            document.write( '\n' );
            document.write( '\n' );
            document.write( '\n' );
            document.write( '\n' );
            document.write( '</body></html>' );
            
            //-->
              })
        content.innerHTML = '<style>body {background: #223;}</style><button class="top-button">Play game</button>'
    } else {
        content.innerHTML = `
        <video autoplay loop muted playsinline id="bg-video">
    <source src="gif.mp4" type="video/mp4">
</video>

<img src="./Logo.png" alt="">

<br>

<div class="top-container">
    <h1 class="top-text">Techkids games site</h1>
</div>
<!-- new ui update -->
<div class="button-container">
  <br />
    <a href="?menu=games">
        <button class="top-button">
            Games
        </button>
    </a>
    <button class="button-epic" onclick="launchab()">
        Open in about:blank
    </button>
        
    <h4>--- holden was here ---</h4>
  <br />
</div>

        `;
    }
    document.body.appendChild(content);
}
function init() {
    createStyles();
    loadContent();
}
function launchab() {
    const tab = window.open('about:blank', '_blank',);
    const iframe = tab.document.createElement('iframe');
    const stl = iframe.style;
    stl.border = stl.outline = 'none';
    stl.width = '100vw';
    stl.height = '100vh';
    stl.position = 'fixed';
    stl.left = stl.right = stl.top = stl.bottom = '0';
    iframe.src = self.location;
    tab.document.body.appendChild(iframe);
}
window.onload = init;