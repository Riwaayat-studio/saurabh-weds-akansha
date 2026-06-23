// ════════ LATEST RE-CONFIGURED HINDU WEDDING PIPELINE ENDPOINT ════════
const DEPLOYMENT_URL = "https://script.google.com/macros/s/AKfycbwuRQjXeQkclDBJR_nB1WYWeYvMpixj8N6VCcrarndIQyNccsLlxz_7OookRluLg0tPig/exec";

// ════════ 1. FLUID VEDIC PETALS DROPPING ENGINE ════════
let petalCanvas, petalCtx, petalsArray = [];

function initFluidPetalsEngine() {
    petalCanvas = document.getElementById('ambientPetalsCanvas');
    if(!petalCanvas) return;
    petalCtx = petalCanvas.getContext('2d');
    petalCanvas.width = window.innerWidth; petalCanvas.height = window.innerHeight;

    petalsArray = [];
    // Creating fluid mixture of Rose (Red) and Marigold (Orange/Yellow) petals
    for (let i = 0; i < 35; i++) {
        petalsArray.push({
            x: Math.random() * petalCanvas.width,
            y: Math.random() * petalCanvas.height,
            size: Math.random() * 5 + 4,
            speedY: Math.random() * 0.6 + 0.4,
            speedX: Math.random() * 0.4 - 0.2,
            opacity: Math.random() * 0.6 + 0.3,
            colorType: Math.random() > 0.5 ? '#C0392B' : '#E67E22', // Crimson Red vs Deep Orange
            oscillationSpeed: Math.random() * 0.02 + 0.01,
            oscillationAmount: Math.random() * 1.5
        });
    }

    let angle = 0;
    function renderPetalsLoop() {
        petalCtx.clearRect(0, 0, petalCanvas.width, petalCanvas.height);
        angle += 0.01;

        petalsArray.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX + Math.sin(angle) * p.oscillationAmount * 0.1;

            if (p.y > petalCanvas.height) { 
                p.y = -10; 
                p.x = Math.random() * petalCanvas.width; 
            }

            petalCtx.beginPath();
            // Draw smooth organic petal shapes instead of simple circles
            petalCtx.ellipse(p.x, p.y, p.size, p.size * 1.4, Math.sin(angle), 0, Math.PI * 2);
            petalCtx.fillStyle = p.colorType;
            petalCtx.globalAlpha = p.opacity;
            petalCtx.fill();
        });
        petalCtx.globalAlpha = 1.0; // Reset canvas layout alpha
        requestAnimationFrame(renderPetalsLoop);
    }
    renderPetalsLoop();
}

// ════════ 2. MICROSCOPIC GOLD SACRED SPARKLE BLAST ════════
let sparkleParticles = [];
function triggerSacredSparkleBlast(clickX, clickY) {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed'; canvas.style.inset = '0'; canvas.style.zIndex = '999999'; canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    
    for (let i = 0; i < 85; i++) {
        sparkleParticles.push({
            x: clickX, y: clickY, radius: Math.random() * 2.2 + 0.8,
            speedX: (Math.random() - 0.5) * 12, speedY: (Math.random() - 0.5) * 12,
            gravity: 0.12, opacity: 1,
            color: Math.random() > 0.4 ? '#F3CD5F' : '#FF7F00' // Gold and Saffron mix
        });
    }
    
    function animateSparkles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        sparkleParticles.forEach(p => {
            p.speedY += p.gravity; p.x += p.speedX; p.y += p.speedY; p.opacity -= 0.022;
            if (p.opacity > 0) {
                alive = true;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color; ctx.globalAlpha = p.opacity; ctx.fill();
            }
        });
        if (alive) { requestAnimationFrame(animateSparkles); } else { canvas.remove(); sparkleParticles = []; }
    }
    animateSparkles();
}

// 🚪 3. MANDAP SPLIT GATE TRANSITION CONTROLLER
let isGateDestroyed = false;
function triggerGateDeployment(event) {
    if (isGateDestroyed) return;
    isGateDestroyed = true;

    const gateScreen = document.getElementById('gift-vault-screen');
    const clickX = event.clientX || window.innerWidth / 2;
    const clickY = event.clientY || window.innerHeight / 2;
    
    gateScreen.classList.add('box-clicked');
    triggerSacredSparkleBlast(clickX, clickY);

    setTimeout(() => {
        gateScreen.classList.add('gate-deployed');
        setTimeout(() => {
            gateScreen.style.display = 'none';
            document.getElementById('main-content-vault').style.display = 'block';
            setTimeout(() => {
                document.getElementById('main-content-vault').style.opacity = '1';
                initFluidPetalsEngine(); 
                initScratchModule();      
                initShubhMuhuratClock(); // Trigger reverse ticker matrix
            }, 50);

            const music = document.getElementById('bgMusic');
            const audioOrb = document.getElementById('audio-orb-controller');
            if (music) { 
                music.volume = 0.50; 
                music.play().then(() => audioOrb.classList.add('playing')).catch(() => {}); 
            }
        }, 1300);
    }, 350);
}

// 🎵 4. AUDIO TOGGLE MANAGEMENT ENGINE
function toggleAudioEngine() {
    const music = document.getElementById('bgMusic');
    const audioOrb = document.getElementById('audio-orb-controller');
    if (!music) return;
    if (music.paused) { music.play(); audioOrb.classList.add('playing'); } 
    else { music.pause(); audioOrb.classList.remove('playing'); }
}

// ⏳ 5. SHUBH MUHURAT REVERSE TICKING CLOCK MODULE (December 10, 2026 @ 07:00 PM)
function initShubhMuhuratClock() {
    const targetDate = new Date("December 10, 2026 19:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            document.querySelector('.countdown-matrix-board').innerHTML = "<div style='font-family:Cinzel;color:#F3CD5F;font-size:1.3rem;letter-spacing:1px;'>The Auspicious Wedding Rituals Have Begun!</div>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('daysNode').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hoursNode').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutesNode').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('secondsNode').innerText = seconds < 10 ? '0' + seconds : seconds;
    }
    setInterval(updateTimer, 1000);
    updateTimer();
}

// 🧮 6. CANVAS MATTE GOLD SCRATCH LAYER MODULE
function initScratchModule() {
    const canvas = document.getElementById('scratchCanvas');
    const container = document.getElementById('scratchBoxNode');
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    canvas.width = container.clientWidth; canvas.height = container.clientHeight;

    let goldGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    goldGrad.addColorStop(0, '#5C4A10'); goldGrad.addColorStop(0.25, '#D4AF37'); 
    goldGrad.addColorStop(0.5, '#F9E6AF'); goldGrad.addColorStop(0.75, '#A67C1E'); goldGrad.addColorStop(1, '#332704');  

    ctx.fillStyle = goldGrad; ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Traditional dust overlay spray texture effect on canvas surface
    for (let i = 0; i < 700; i++) {
        let x = Math.random() * canvas.width; let y = Math.random() * canvas.height;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.13)' : 'rgba(0,0,0,0.08)';
        ctx.fillRect(x, y, 1.2, 1.2);
    }
    ctx.font = '400 12px Cinzel, serif'; ctx.fillStyle = '#170003'; ctx.letterSpacing = '3px'; ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO REVEAL SHUBH DIN', canvas.width / 2, canvas.height / 2 + 4);

    let isDrawing = false;
    function scratchAction(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(clientX - rect.left, clientY - rect.top, 24, 0, Math.PI * 2); ctx.fill();
    }
    canvas.addEventListener('mousedown', () => isDrawing = true);
    window.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mousemove', scratchAction);
    canvas.addEventListener('touchstart', () => isDrawing = true);
    window.addEventListener('touchend', () => isDrawing = false);
    canvas.addEventListener('touchmove', scratchAction);
}

// 🧧 7. REALTIME SILENT BACKGROUND RSVP ENGINE
document.getElementById('traditionalWeddingRsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('guestFullName');
    const phoneInput = document.getElementById('guestPhoneNumber');
    const sideInput = document.querySelector('input[name="weddingSide"]:checked');
    const statusInput = document.querySelector('input[name="attendanceStatus"]:checked');
    const countInput = document.getElementById('totalGuestsCount');
    const msgInput = document.getElementById('couplesBlessingMessage');
    const submitBtn = document.getElementById('submitBtnNode');

    submitBtn.innerText = "SUBMITTING...";
    submitBtn.disabled = true;

    // Direct state response clear injection bypass
    const nameVal = nameInput.value.trim();
    const phoneVal = phoneInput.value.trim();
    const sideVal = sideInput.value;
    const statusVal = statusInput.value;
    const countVal = countInput.value;
    const msgVal = msgInput.value.trim();

    // Map properties matching exactly with your target schema
    const targetFormData = new URLSearchParams();
    targetFormData.append('name', nameVal);
    targetFormData.append('phone', phoneVal);
    targetFormData.append('side', sideVal);
    targetFormData.append('status', statusVal);
    targetFormData.append('guests', countVal);
    targetFormData.append('message', msgVal);

    fetch(DEPLOYMENT_URL, {
        method: "POST",
        mode: "no-cors", // Bypassing browser-side response evaluation lock stream
        body: targetFormData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(() => {
        alert(`Dhanyavaad! Your RSVP response has been successfully registered under ${sideVal}. 🙏✨`);
        nameInput.value = "";
        phoneInput.value = "";
        countInput.value = "";
        msgInput.value = "";
    })
    .catch(err => console.log("Silent pipeline operation block record stream."))
    .finally(() => {
        submitBtn.innerText = "SUBMIT RSVP";
        submitBtn.disabled = false;
    });
});
                  
