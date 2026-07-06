const header = document.querySelector("[data-header]");
const countdown = document.querySelector("[data-countdown]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const formatCountdown = (milliseconds) => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const updateCountdown = () => {
  if (!countdown) return;

  const target = new Date(countdown.dateTime).getTime();
  countdown.textContent = formatCountdown(target - Date.now());
};

if (countdown) {
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}
