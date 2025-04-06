function openEnvelope() {
    // Animate the envelope
    document.querySelector('.flap').style.transform = "rotateX(180deg)";
    document.querySelector('.letter').style.transform = "translateY(-300px)";

    // Reveal the invitation after animation
    setTimeout(() => {
        document.querySelector('.envelope-container').style.display = 'none';
        document.querySelector('.invitation').classList.remove('hidden');
    }, 1000);

    // Play background music with a fixed volume
    let music = document.getElementById('background-music');
    music.volume = 0.20; 
    music.play();
    music.currentTime = 0; // Start from the beginning
    
    // Set the timeout to stop at 4 minutes and 20 seconds (260 seconds)
    setTimeout(() => {
        music.currentTime = 0; // Restart the song from the beginning
        music.loop = true; // Enable looping after 4:20
    }, 250000); // 260000 milliseconds (4 minutes and 20 seconds)
}
