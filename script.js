// 1. Sample Data


const books = [
  { id:1, title:"The Hobbit", cover:"https://covers.openlibrary.org/b/id/6979861-M.jpg", genre:"Fantasy" },
  { id:2, title:"Dune", cover:"https://covers.openlibrary.org/b/id/8101356-M.jpg", genre:"Sci-Fi" },
  { id:3, title:"Sapiens", cover:"https://covers.openlibrary.org/b/id/8231856-M.jpg", genre:"History" },
  { id:4, title:"1984", cover:"https://covers.openlibrary.org/b/id/7222246-M.jpg", genre:"Sci-Fi" },
  { id:5, title:"Harry Potter", cover:"https://covers.openlibrary.org/b/id/7984916-M.jpg", genre:"Fantasy" },
  { id:6, title:"Pride and Prejudice", cover:"https://covers.openlibrary.org/b/id/8226191-M.jpg", genre:"Classic" },
  { id:7, title:"To Kill a Mockingbird", cover:"https://covers.openlibrary.org/b/id/8225261-M.jpg", genre:"Classic" },
  { id:8, title:"The Great Gatsby", cover:"https://covers.openlibrary.org/b/id/7222246-M.jpg", genre:"Classic" },
  { id:9, title:"Moby Dick", cover:"https://covers.openlibrary.org/b/id/5552226-M.jpg", genre:"Classic" },
  { id:10, title:"War and Peace", cover:"https://covers.openlibrary.org/b/id/7222161-M.jpg", genre:"Classic" },
  { id:11, title:"The Catcher in the Rye", cover:"https://covers.openlibrary.org/b/id/8231996-M.jpg", genre:"Classic" },
  { id:12, title:"Brave New World", cover:"https://covers.openlibrary.org/b/id/8775116-M.jpg", genre:"Sci-Fi" },
  { id:13, title:"The Lord of the Rings", cover:"https://covers.openlibrary.org/b/id/8231852-M.jpg", genre:"Fantasy" },
  { id:14, title:"The Alchemist", cover:"https://covers.openlibrary.org/b/id/8225631-M.jpg", genre:"Fiction" },
  { id:15, title:"The Little Prince", cover:"https://covers.openlibrary.org/b/id/8235116-M.jpg", genre:"Fiction" },
  { id:16, title:"The Da Vinci Code", cover:"https://covers.openlibrary.org/b/id/240726-M.jpg", genre:"Thriller" },
  { id:17, title:"The Girl with the Dragon Tattoo", cover:"https://covers.openlibrary.org/b/id/8231857-M.jpg", genre:"Thriller" },
  { id:18, title:"Gone Girl", cover:"https://covers.openlibrary.org/b/id/8231858-M.jpg", genre:"Thriller" },
  { id:19, title:"The Hunger Games", cover:"https://covers.openlibrary.org/b/id/8231859-M.jpg", genre:"Dystopian" },
  { id:20, title:"Catching Fire", cover:"https://covers.openlibrary.org/b/id/8231860-M.jpg", genre:"Dystopian" },
  { id:21, title:"Mockingjay", cover:"https://covers.openlibrary.org/b/id/8231861-M.jpg", genre:"Dystopian" },
  { id:22, title:"Animal Farm", cover:"https://covers.openlibrary.org/b/id/8226192-M.jpg", genre:"Classic" },
  { id:23, title:"Fahrenheit 451", cover:"https://covers.openlibrary.org/b/id/8226193-M.jpg", genre:"Sci-Fi" },
  { id:24, title:"Jane Eyre", cover:"https://covers.openlibrary.org/b/id/8226194-M.jpg", genre:"Classic" },
  { id:25, title:"Wuthering Heights", cover:"https://covers.openlibrary.org/b/id/8226195-M.jpg", genre:"Classic" },
  { id:26, title:"Dracula", cover:"https://covers.openlibrary.org/b/id/8226196-M.jpg", genre:"Horror" },
  { id:27, title:"Frankenstein", cover:"https://covers.openlibrary.org/b/id/8226197-M.jpg", genre:"Horror" },
  { id:28, title:"The Shining", cover:"https://covers.openlibrary.org/b/id/8226198-M.jpg", genre:"Horror" },
  { id:29, title:"It", cover:"https://covers.openlibrary.org/b/id/8226199-M.jpg", genre:"Horror" },
  { id:30, title:"The Road", cover:"https://covers.openlibrary.org/b/id/8226200-M.jpg", genre:"Dystopian" },
  { id:31, title:"A Game of Thrones", cover:"https://covers.openlibrary.org/b/id/8231862-M.jpg", genre:"Fantasy" },
  { id:32, title:"A Clash of Kings", cover:"https://covers.openlibrary.org/b/id/8231863-M.jpg", genre:"Fantasy" },
  { id:33, title:"A Storm of Swords", cover:"https://covers.openlibrary.org/b/id/8231864-M.jpg", genre:"Fantasy" },
  { id:34, title:"A Feast for Crows", cover:"https://covers.openlibrary.org/b/id/8231865-M.jpg", genre:"Fantasy" },
  { id:35, title:"A Dance with Dragons", cover:"https://covers.openlibrary.org/b/id/8231866-M.jpg", genre:"Fantasy" },
  { id:36, title:"The Martian", cover:"https://covers.openlibrary.org/b/id/8231867-M.jpg", genre:"Sci-Fi" },
  { id:37, title:"Ready Player One", cover:"https://covers.openlibrary.org/b/id/8231868-M.jpg", genre:"Sci-Fi" },
  { id:38, title:"Ender's Game", cover:"https://covers.openlibrary.org/b/id/8231869-M.jpg", genre:"Sci-Fi" },
  { id:39, title:"Neuromancer", cover:"https://covers.openlibrary.org/b/id/8231870-M.jpg", genre:"Sci-Fi" },
  { id:40, title:"Do Androids Dream of Electric Sheep?", cover:"https://covers.openlibrary.org/b/id/8231871-M.jpg", genre:"Sci-Fi" },
  { id:41, title:"The Name of the Wind", cover:"https://covers.openlibrary.org/b/id/8231872-M.jpg", genre:"Fantasy" },
  { id:42, title:"The Wise Man's Fear", cover:"https://covers.openlibrary.org/b/id/8231873-M.jpg", genre:"Fantasy" },
  { id:43, title:"Mistborn", cover:"https://covers.openlibrary.org/b/id/8231874-M.jpg", genre:"Fantasy" },
  { id:44, title:"The Way of Kings", cover:"https://covers.openlibrary.org/b/id/8231875-M.jpg", genre:"Fantasy" },
  { id:45, title:"Words of Radiance", cover:"https://covers.openlibrary.org/b/id/8231876-M.jpg", genre:"Fantasy" },
  { id:46, title:"Educated", cover:"https://covers.openlibrary.org/b/id/8231877-M.jpg", genre:"Memoir" },
  { id:47, title:"Becoming", cover:"https://covers.openlibrary.org/b/id/8231878-M.jpg", genre:"Memoir" },
  { id:48, title:"The Immortal Life of Henrietta Lacks", cover:"https://covers.openlibrary.org/b/id/8231879-M.jpg", genre:"Biography" },
  { id:49, title:"Steve Jobs", cover:"https://covers.openlibrary.org/b/id/8231880-M.jpg", genre:"Biography" },
  { id:50, title:"Thinking, Fast and Slow", cover:"https://covers.openlibrary.org/b/id/8231881-M.jpg", genre:"Non-Fiction" }
];

// 2. State
const genres = ["All", ...new Set(books.map(b=>b.genre))];
let currentGenre = "All";
let favorites    = JSON.parse(localStorage.getItem('favs') || "[]");

// 3. DOM Elements
const tabsEl         = document.getElementById('tabs');
const sheetEl        = document.getElementById('sheet');
const showcaseEl     = document.getElementById('showcase-sheet');
const themeToggleBtn = document.getElementById('theme-toggle');

// 4. Render Tabs (only if changed)
function renderTabs() {
  tabsEl.innerHTML = "";
  genres.forEach(g => {
    const btn = document.createElement('div');
    btn.textContent = g;
    btn.className = `tab${g===currentGenre?" active":""}`;
    btn.onclick = () => {
      if (currentGenre !== g) {
        currentGenre = g;
        renderCounterView();
      }
    };
    tabsEl.appendChild(btn);
  });
}

// 5. Toggle Favorite (debounced)
let favTimeout = null;
function toggleFav(id) {
  if (favTimeout) return;
  favTimeout = setTimeout(() => favTimeout = null, 200);

  favorites = favorites.includes(id)
    ? favorites.filter(x=>x!==id)
    : [...favorites, id];
  localStorage.setItem('favs', JSON.stringify(favorites));
  renderShowcase();
  renderCounterView();
}

// 6. Render Sheets
function createCard(b, i, allowFavorite=true) {
  const div = document.createElement('div');
  div.className = 'pastry';
  div.style.setProperty('--i', i);
  div.innerHTML = `
    <img src="${b.cover}" alt="Cover of ${b.title} (${b.genre})">
    <div class="meta">
      <div>
        <small>${b.title}</small><br>
        <span style="font-size:0.95em;color:#b48a78;">${b.genre}</span>
      </div>
      ${allowFavorite
        ? `<button data-id="${b.id}" class="${favorites.includes(b.id)?'fav':''}" title="Add to Chef's Special">♥</button>`
        : ""
      }
    </div>`;
  // Bake timer on read (double-click)
  div.ondblclick = () => {
    if (!div.querySelector('.timer')) {
      const timer = document.createElement('div');
      timer.className = 'timer';
      div.appendChild(timer);
      setTimeout(()=>timer.remove(), 3000);
    }
  };
  return div;
}

// 7. Efficient Render Functions
function renderCounterView() {
  const filtered = books.filter(b=> currentGenre==="All" || b.genre===currentGenre);
  sheetEl.innerHTML = "";
  filtered.forEach((b,i) => sheetEl.appendChild(createCard(b, i, true)));
}
function renderShowcase() {
  const favBooks = books.filter(b=> favorites.includes(b.id));
  showcaseEl.innerHTML = "";
  favBooks.forEach((b,i) => showcaseEl.appendChild(createCard(b, i, false)));
}

// 8. Event Delegation for Favorites
sheetEl.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON' && e.target.dataset.id) {
    toggleFav(Number(e.target.dataset.id));
    // Sprinkle effect
    const btn = e.target;
    for(let i=0; i<6; i++){
      const dot = document.createElement('div');
      dot.className = 'sprinkle';
      dot.style.left = `${Math.random()*30 + 10}px`;
      dot.style.top  = `${Math.random()*30 + 10}px`;
      btn.parentElement.appendChild(dot);
      setTimeout(()=>dot.remove(), 800);
    }
    e.stopPropagation();
  }
});

// 9. Theme Toggle

themeToggleBtn.onclick = () => {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
};

// 10. Initialize
renderTabs();
renderCounterView();
renderShowcase();

// --- Search Feature ---
const searchInput = document.getElementById('search-input');
let searchTerm = "";

searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value.toLowerCase();
  renderCounterView();
});



// --- About Modal Feature ---
const aboutBtn = document.getElementById('about-btn');
const aboutModal = document.getElementById('about-modal');
const closeAbout = document.getElementById('close-about');

aboutBtn.onclick = () => {
  aboutModal.style.display = 'block';
};
closeAbout.onclick = () => {
  aboutModal.style.display = 'none';
};
window.onclick = (e) => {
  if (e.target === aboutModal) aboutModal.style.display = 'none';
};

// --- Update renderCounterView to filter by search ---
const originalRenderCounterView = renderCounterView;
renderCounterView = function() {
  const filtered = books.filter(b =>
    (currentGenre === "All" || b.genre === currentGenre) &&
    b.title.toLowerCase().includes(searchTerm)
  );
  sheetEl.innerHTML = "";
  filtered.forEach((b, i) => sheetEl.appendChild(createCard(b, i, true)));
};
renderCounterView();