
// Streak speichern + anzeigen
const playerName = "LegitBlock";
const streakKey = "streak_" + playerName;

let streak = parseInt(localStorage.getItem(streakKey)) || 0;
document.getElementById("streak").innerText = streak;

function resetStreak() {
  localStorage.setItem(streakKey, "0");
  document.getElementById("streak").innerText = "0";
}

// Skin anzeigen
const canvas = document.getElementById("skin-canvas");
const viewer = new skinview3d.SkinViewer({
  canvas: canvas,
  width: 300,
  height: 400,
  skin: "https://mc-heads.net/skin/" + playerName
});
viewer.controls.enableZoom = false;
viewer.animation = new skinview3d.WalkingAnimation();
viewer.animation.speed = 1;
