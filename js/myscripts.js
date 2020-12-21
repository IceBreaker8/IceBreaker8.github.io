var maintenance = true;

window.onload = () => {
  if (maintenance) {
    document.getElementById("bod").srcdoc = "maintenance.html";
  }
};
