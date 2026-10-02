// Sarthak & Shivangi Royal Wedding Interactive Scripts

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initDateReveal();
  initCountdownTimer();
  initAudioController();
  initNavigationDots();
  initRSVPForm();
});

/* 1. Sequential Scroll Animations (IntersectionObserver) */
function initScrollAnimations() {
  const revealItems = document.querySelectorAll(".reveal-item");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, observerOptions);

  revealItems.forEach((el) => observer.observe(el));
}

/* 2. Page 2: Interactive Date Reveal */
function initDateReveal() {
  const tapBtn = document.getElementById("tapRevealBtn");
  const revealedBox = document.getElementById("revealedDateBox");

  if (!tapBtn || !revealedBox) return;

  tapBtn.addEventListener("click", () => {
    tapBtn.style.transform = "scale(0.9) rotate(-2deg)";
    setTimeout(() => {
      tapBtn.style.display = "none";
      revealedBox.classList.add("active");
      playChimeEffect();
    }, 250);
  });
}

/* 3. Live Countdown Timer */
function initCountdownTimer() {
  const weddingDate = new Date("November 11, 2026 12:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    let distance = weddingDate - now;

    if (distance < 0) {
      // If past in future years, cycle to next November 11
      distance = Math.abs(distance);
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dEl = document.getElementById("cdDays");
    const hEl = document.getElementById("cdHours");
    const mEl = document.getElementById("cdMins");
    const sEl = document.getElementById("cdSecs");

    if (dEl) dEl.textContent = String(days).padStart(2, "0");
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
    if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* 4. Background Audio Player & Sound Effects */
let audioCtx = null;
let isAudioPlaying = false;
let melodyInterval = null;

function initAudioController() {
  const audioBtn = document.getElementById("floatingAudioBtn");
  if (!audioBtn) return;

  audioBtn.addEventListener("click", () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (isAudioPlaying) {
      stopRoyalMelody();
      audioBtn.classList.remove("playing");
      audioBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>`;
      isAudioPlaying = false;
    } else {
      startRoyalMelody();
      audioBtn.classList.add("playing");
      audioBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>`;
      isAudioPlaying = true;
    }
  });
}

function startRoyalMelody() {
  if (!audioCtx) return;
  // Ambient Indian Royal Raag Bhairavi / Yaman gentle sitar harmony chords
  const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C, D, E, G, A, C5
  let index = 0;

  melodyInterval = setInterval(() => {
    if (!isAudioPlaying || !audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    const freq = notes[index % notes.length];
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 1.9);

    index = (index + 1) % notes.length;
  }, 1200);
}

function stopRoyalMelody() {
  if (melodyInterval) {
    clearInterval(melodyInterval);
    melodyInterval = null;
  }
}

function playChimeEffect() {
  try {
    const ctx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + i * 0.1 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.1 + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.65);
    });
  } catch (e) {
    // sound ignored if unsupported
  }
}

/* 5. Navigation Dots Active State */
function initNavigationDots() {
  const sections = document.querySelectorAll(".page-section");
  const dots = document.querySelectorAll(".nav-dot");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
      if (dot.getAttribute("data-target") === current) {
        dot.classList.add("active");
      }
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetId = dot.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* 6. RSVP Form Submission + WhatsApp Integration */
function initRSVPForm() {
  const rsvpForm = document.getElementById("weddingRsvpForm");
  const modal = document.getElementById("rsvpSuccessModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalGuestName = document.getElementById("modalGuestName");

  if (!rsvpForm) return;

  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const attendanceEl = document.querySelector('input[name="attendance"]:checked');
    const attendance = attendanceEl ? attendanceEl.value : "Attending";
    const fullName = document.getElementById("guestFullName").value.trim();
    const contact = document.getElementById("guestContact").value.trim();
    const pickupEl = document.querySelector('input[name="pickup"]:checked');
    const pickup = pickupEl ? pickupEl.value : "NO";

    if (!fullName) {
      alert("Please enter your Full Name");
      return;
    }

    if (modalGuestName) modalGuestName.textContent = fullName;
    if (modal) modal.classList.add("active");

    // Optional WhatsApp Message composition
    const message = encodeURIComponent(
      `*Wedding RSVP: Sarthak & Shivangi*\n` +
      `👤 *Guest Name:* ${fullName}\n` +
      `📞 *Contact:* ${contact}\n` +
      `✨ *Attendance:* ${attendance}\n` +
      `🚗 *Station/Airport Pickup Required:* ${pickup}\n` +
      `_Looking forward to celebrating at Pushkara Resort and Spa!_`
    );

    // After 2.5s or click, option to send via WhatsApp
    const waLink = document.getElementById("waDirectLink");
    if (waLink) {
      waLink.href = `https://wa.me/?text=${message}`;
    }
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      rsvpForm.reset();
    });
  }
}
