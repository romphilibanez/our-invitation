function openEnvelope() {
    // Animate the envelope
    document.querySelector('.flap').style.transform = "rotateX(180deg)";
    document.querySelector('.letter').style.transform = "translateY(-250px)";

    // Reveal the invitation after animation
    setTimeout(() => {
        document.querySelector('.envelope-container').style.display = 'none';
        document.querySelector('.invitation').classList.remove('hidden');
    }, 1000);

    // Play background music with a fixed volume
    let music = document.getElementById('background-music');
    music.volume = 0.05; // Set volume (0.0 to 1.0, where 1.0 is full volume)
    music.play();
}
