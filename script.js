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
    music.volume = 0.5; // 50% volume
    music.play();
	music.currentTime = 6; // Start from 6 seconds
}
