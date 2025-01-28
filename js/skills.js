document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card, index) => {
    // Add animation delay
    card.style.animationDelay = `${index * 0.1}s`;

    // Set skill level
    const skillLevel = card.getAttribute("data-skill-level");
    const levelBar = card.querySelector(".level-bar");
    levelBar.style.setProperty("--skill-level", `${skillLevel}%`);
  });
});
