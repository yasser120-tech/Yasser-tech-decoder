const channels = [
  {
    name: "Al Jazeera English",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Aljazeera_eng.svg",
    url: "https://www.youtube.com/embed/live_stream?channel=UCNye-wNBqNL5ZzHSJj3l8Bg"
  },
  {
    name: "DW News",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/DW_Logo_2012.svg",
    url: "https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg"
  },
  {
    name: "France 24 English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/France24.png",
    url: "https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg"
  },
  {
    name: "TRT World",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/TRT_World_logo.svg",
    url: "https://www.youtube.com/embed/live_stream?channel=UC7fWeaHhqgM4Ry-RMpM2YYw"
  },
  {
    name: "NASA TV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
    url: "https://www.youtube.com/embed/live_stream?channel=UCLA_DiR1FfKNvjuUpBHmylQ"
  }
];

const container = document.getElementById("channels");
const player = document.getElementById("tvPlayer");

channels.forEach(channel => {
  const card = document.createElement("div");
  card.className = "channel-card";

  card.innerHTML = `
    <img src="${channel.logo}" alt="${channel.name}">
    <span>${channel.name}</span>
  `;

  card.addEventListener("click", () => {
    player.src = channel.url;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  container.appendChild(card);
});
