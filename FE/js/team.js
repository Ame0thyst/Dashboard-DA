document.addEventListener("DOMContentLoaded", function() {
  const teamMembers = [
    { name: "Gilang Wiko Wicaksono", role: "team leader", imageUrl: "/assets/anggota/iko.JPG", link: "#" },
    { name: "Silvia Putri Anggreani", role: "Front End", imageUrl: "/assets/anggota/silvia_01.jpeg", link: "#" },
    { name: "Bro Rinal sepuh", role: "Front End", imageUrl: "/assets/anggota/Rinaldi.webp", link: "#" },
    { name: "Riska", role: "Front End", imageUrl: "/assets/anggota/Riskamawarni_Laia.jpg", link: "#" },
    { name: "hantu", role: "⭐", imageUrl: "/assets/anggota/huahaha.jpg", link: "#" },
    { name: "Fajar", role: "deployment", imageUrl: "/assets/anggota/fajar.jpg", link: "#" },
    { name: "Arum", role: "deployment", imageUrl: "/assets/anggota/rum.jpg", link: "#" },
    { name: "Lilis Surwangi", role: "Pitch Deck", imageUrl: "/assets/anggota/Lilis_Surwangi.webp", link: "#" },
    { name: "Ririn", role: "Pitch Deck", imageUrl: "/assets/anggota/Ririn_cute.webp", link: "#" },
    { name: "Syifa Aulia Zahra", role: "Pitch Deck", imageUrl: "/assets/anggota/Syifa_Auliya_Zahra.webp", link: "#" },
    { name: "Dyah Ayu Pitaloka", role: "Pitch Deck", imageUrl: "/assets/anggota/dyah.webp", link: "#" },
    { name: "Putri Nadia N", role: "Pitch Deck", imageUrl: "/assets/anggota/Putri_Nadia_N.webp", link: "#" },
    { name: "Dziahulhaj Fadhil", role: "Pitch Deck", imageUrl: "/assets/anggota/Dziaulhaj.webp", link: "#" },
    // Tambahkan data anggota tim lainnya sesuai kebutuhan
  ];
  const specialMembers = [
      { name: "Kak Aul", role: "Mentor SE", imageUrl: "/assets/anggota/kak_aul.webp", link: "#" },
      { name: "Kak inaa", role: "Mentor DA", imageUrl: "/assets/anggota/kak_ina.webp", link: "#" }
    ];
    


    const teamCardsContainer = document.getElementById("teamCards");
    const specialCardsContainer = document.getElementById("specialCards");
  
    const createCard = (member) => {
      const card = document.createElement("div");
      card.classList.add("team-card");
      card.innerHTML = `
        <img src="${member.imageUrl}" alt="${member.name}">
        <div class="team-card-info">
          <h3>${member.name}</h3>
          <span class="role-label ${member.role.toLowerCase().replace(' ', '-')}">${member.role}</span>
        </div>
      `;
      card.addEventListener("click", function() {
        window.location.href = member.link;
      });
      return card;
    };
  
    // Menambahkan card untuk anggota tim biasa
    teamMembers.forEach(member => {
      teamCardsContainer.appendChild(createCard(member));
    });
  
    // Menambahkan card untuk anggota tim istimewa
    specialMembers.forEach(member => {
      specialCardsContainer.appendChild(createCard(member));
    });
  });
