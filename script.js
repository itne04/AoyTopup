const gamesData = [
  {
    id: "freefire",
    name: "Garena Free Fire",
    img: "images/free_fire_card.png",
    idHelper: "ປ້อน ID ຜູ້ຫຼິ້ນ (ຕົວເລກ 8-10 ຕົວ)",
    idPlaceholder: "ປ້อน ID Free Fire ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "ff_50", name: "50 Diamonds", price: 12000 },
      { id: "ff_100", name: "100 Diamonds", price: 23000 },
      { id: "ff_310", name: "310 Diamonds", price: 69000 },
      { id: "ff_520", name: "520 Diamonds", price: 115000 },
      { id: "ff_1060", name: "1,060 Diamonds", price: 230000 },
      { id: "ff_2180", name: "2,180 Diamonds", price: 450000 }
    ]
  },
  {
    id: "rov",
    name: "Garena RoV",
    img: "images/rov_card.png",
    idHelper: "ປ້อน OpenID ຈາກໜ້າຕັ້ງຄ່າເກມ",
    idPlaceholder: "ປ້ອນ OpenID ຂອງ RoV ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "rov_16", name: "16 Coupons", price: 12000 },
      { id: "rov_40", name: "40 Coupons", price: 24000 },
      { id: "rov_90", name: "90 Coupons", price: 58000 },
      { id: "rov_210", name: "210 Coupons", price: 115000 },
      { id: "rov_440", name: "440 Coupons", price: 230000 },
      { id: "rov_920", name: "920 Coupons", price: 450000 }
    ]
  },
  {
    id: "pubgm",
    name: "PUBG Mobile",
    img: "images/pubg_mobile_card.png",
    idHelper: "ປ້ອນ Character ID ຂອງເກມ (ຕົວເລກ)",
    idPlaceholder: "ປ້ອນ Character ID ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "pubgm_60", name: "60 UC", price: 23000 },
      { id: "pubgm_325", name: "325 UC", price: 92000 },
      { id: "pubgm_660", name: "660 UC", price: 185000 },
      { id: "pubgm_1800", name: "1,800 UC", price: 460000 },
      { id: "pubgm_3850", name: "3,850 UC", price: 920000 }
    ]
  },
  {
    id: "mlbb",
    name: "Mobile Legends",
    img: "images/mlbb_card.png",
    idHelper: "ປ້ອນ User ID ແລະ Zone ID ໃນວົງເລັບ",
    idPlaceholder: "ຕົວຢ່າງ: 12345678",
    hasServer: true,
    serverLabel: "Zone ID",
    servers: ["(2001) Asia", "(3001) Europe", "(4001) North America", "(5001) South America", "(8001) Local Server"],
    packages: [
      { id: "mlbb_50", name: "50 Diamonds", price: 20000 },
      { id: "mlbb_100", name: "100 Diamonds", price: 39000 },
      { id: "mlbb_282", name: "282 Diamonds", price: 92000 },
      { id: "mlbb_570", name: "570 Diamonds", price: 185000 },
      { id: "mlbb_1163", name: "1,163 Diamonds", price: 370000 }
    ]
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    img: "images/genshin_impact_card.png",
    idHelper: "ປ້ອນ UID ຂອງຜູ້ຫຼິ້ນ (ຕົວເລກ 9 ຕົວ)",
    idPlaceholder: "ປ້ອນ UID ຂອງທ່ານ",
    hasServer: true,
    serverLabel: "ເຊີບເວີ (Server)",
    servers: ["Asia", "America", "Europe", "TW/HK/MO"],
    packages: [
      { id: "genshin_60", name: "60 Genesis Crystals", price: 23000 },
      { id: "genshin_300", name: "300 Genesis Crystals", price: 92000 },
      { id: "genshin_980", name: "980 Genesis Crystals", price: 270000 },
      { id: "genshin_1980", name: "1,980 Genesis Crystals", price: 550000 },
      { id: "genshin_welkin", name: "Blessing of the Welkin Moon (30 Days)", price: 92000 }
    ]
  },
  {
    id: "roblox",
    name: "Roblox (Robux)",
    img: "images/roblox_card.png",
    idHelper: "ປ້ອນຊື່ຜູ້ໃຊ້ (Username) ຂອງ Roblox ຂອງທ່ານ",
    idPlaceholder: "ປ້ອນ Roblox Username ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "roblox_80", name: "80 Robux", price: 23000 },
      { id: "roblox_400", name: "400 Robux", price: 92000 },
      { id: "roblox_800", name: "800 Robux", price: 185000 },
      { id: "roblox_1700", name: "1,700 Robux", price: 370000 }
    ]
  },
  {
    id: "valorant",
    name: "Valorant (Riot Points)",
    img: "images/valorant_card.png",
    idHelper: "ປ້ອນ Riot ID ພ້ອມ Tag (ຕົວຢ່າງ: Username#TAG)",
    idPlaceholder: "ຕົວຢ່າງ: Gamer#LAO",
    hasServer: false,
    packages: [
      { id: "val_475", name: "475 VP", price: 92000 },
      { id: "val_1000", name: "1,000 VP", price: 185000 },
      { id: "val_2050", name: "2,050 VP", price: 370000 },
      { id: "val_3650", name: "3,650 VP", price: 650000 }
    ]
  },
  {
    id: "steam",
    name: "Steam Wallet",
    img: "images/steam_card.png",
    idHelper: "ປ້ອນ Steam Account Name (ທີ່ໃຊ້ເຂົ້າສູ່ລະບົບ)",
    idPlaceholder: "ປ້ອນ Steam Login Name ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "steam_5", name: "Steam Wallet $5", price: 115000 },
      { id: "steam_10", name: "Steam Wallet $10", price: 230000 },
      { id: "steam_20", name: "Steam Wallet $20", price: 450000 },
      { id: "steam_50", name: "Steam Wallet $50", price: 1100000 }
    ]
  },
  {
    id: "hok",
    name: "Honor of Kings",
    img: "images/hok_card.png",
    idHelper: "ປ້ອນ ID ຜູ້ຫຼິ້ນ (UID) ຈາກໜ້າໂປຣໄຟລ໌",
    idPlaceholder: "ປ້ອນ UID Honor of Kings ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "hok_80", name: "80 Tokens", price: 23000 },
      { id: "hok_240", name: "240 Tokens", price: 69000 },
      { id: "hok_480", name: "480 Tokens", price: 138000 },
      { id: "hok_1200", name: "1,200 Tokens", price: 345000 },
      { id: "hok_2400", name: "2,400 Tokens", price: 690000 }
    ]
  },
  {
    id: "codm",
    name: "Call of Duty: Mobile",
    img: "images/codm_card.png",
    idHelper: "ປ້ອນ OpenID ຈາກໜ້າຕັ້ງຄ່າເກມ",
    idPlaceholder: "ປ້ອນ OpenID ຂອງ CODM ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "codm_80", name: "80 CP", price: 23000 },
      { id: "codm_400", name: "400 CP", price: 92000 },
      { id: "codm_800", name: "800 CP", price: 185000 },
      { id: "codm_1600", name: "1,600 CP", price: 370000 },
      { id: "codm_4000", name: "4,000 CP", price: 920000 }
    ]
  },
  {
    id: "fcmobile",
    name: "EA SPORTS FC Mobile",
    img: "images/fcmobile_card.png",
    idHelper: "ປ້ອນ UID ຈາກໜ້າຕັ້ງຄ່າໃນເກມ",
    idPlaceholder: "ປ້ອນ UID FC Mobile ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "fcm_100", name: "100 FC Points", price: 23000 },
      { id: "fcm_500", name: "500 FC Points", price: 115000 },
      { id: "fcm_1050", name: "1,050 FC Points", price: 230000 },
      { id: "fcm_2200", name: "2,200 FC Points", price: 460000 },
      { id: "fcm_5750", name: "5,750 FC Points", price: 1150000 }
    ]
  },
  {
    id: "clashofclans",
    name: "Clash of Clans",
    img: "images/clashofclans_card.png",
    idHelper: "ປ້ອນ Player Tag (ຕົວຢ່າງ: #L28YQ8G)",
    idPlaceholder: "ປ້ອນ Player Tag ຂອງທ່ານ",
    hasServer: false,
    packages: [
      { id: "coc_88", name: "88 Gems", price: 23000 },
      { id: "coc_500", name: "500 Gems", price: 115000 },
      { id: "coc_1200", name: "1,200 Gems", price: 230000 },
      { id: "coc_2500", name: "2,500 Gems", price: 460000 },
      { id: "coc_gold", name: "Gold Pass (ບັດຄຳ)", price: 92000 }
    ]
  }
];

let selectedGame = null;
let selectedPackage = null;
let selectedPayment = null;

// Initialize Game List
document.addEventListener("DOMContentLoaded", () => {
  const gameGrid = document.getElementById("game-list");
  if (gameGrid) {
    gamesData.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.id = `game-${game.id}`;
      card.onclick = () => selectGame(game.id);

      card.innerHTML = `
        <div class="game-card-img-wrapper">
          <img src="${game.img}" alt="${game.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/111827/7dd3fc?text=${encodeURIComponent(game.name)}'">
        </div>
        <div class="game-card-title">${game.name}</div>
      `;
      gameGrid.appendChild(card);
    });
  }

  // Initialize Homepage Game List (links to topup page)
  const homepageGameGrid = document.getElementById("homepage-game-list");
  if (homepageGameGrid) {
    gamesData.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.onclick = () => {
        window.location.href = `topup.html?game=${game.id}`;
      };

      card.innerHTML = `
        <div class="game-card-img-wrapper">
          <img src="${game.img}" alt="${game.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/111827/7dd3fc?text=${encodeURIComponent(game.name)}'">
        </div>
        <div class="game-card-title">${game.name}</div>
      `;
      homepageGameGrid.appendChild(card);
    });
  }

  // Parse URL Search Parameters
  const urlParams = new URLSearchParams(window.location.search);
  const gameParam = urlParams.get('game');
  if (gameParam && gameGrid) {
    // Select the game from query param
    selectGame(gameParam);
    
    // Smooth scroll to selection step-2
    setTimeout(() => {
      const step2 = document.getElementById("step-2-section");
      if (step2) {
        step2.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  }

  const openHistoryParam = urlParams.get('openHistory');
  if (openHistoryParam === 'true') {
    const keysModal = document.getElementById("keys-modal");
    if (keysModal) {
      renderKeysHistory();
      keysModal.classList.add("show");
    }
  }

  // Setup payments select handlers
  const paymentCards = document.querySelectorAll(".payment-card");
  paymentCards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("disabled")) return;
      selectPayment(card.getAttribute("data-payment"));
    });
  });

  // Modal setup
  const keysModal = document.getElementById("keys-modal");
  const keyHistoryBtn = document.getElementById("key-history-btn");
  const closeModalBtn = document.getElementById("close-modal");

  if (keyHistoryBtn && keysModal && closeModalBtn) {
    keyHistoryBtn.addEventListener("click", () => {
      renderKeysHistory();
      keysModal.classList.add("show");
    });

    closeModalBtn.addEventListener("click", () => {
      keysModal.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
      if (e.target === keysModal) {
        keysModal.classList.remove("show");
      }
    });
  }

  // Monitor input fields to update sidebar
  const idInput = document.getElementById("player-id-input");
  if (idInput) {
    idInput.addEventListener("input", (e) => {
      const summaryId = document.getElementById("summary-id");
      summaryId.innerText = e.target.value || "-";
      validateFormState();
    });
  }

  const serverSelect = document.getElementById("server-select");
  if (serverSelect) {
    serverSelect.addEventListener("change", (e) => {
      const summaryServer = document.getElementById("summary-server");
      summaryServer.innerText = e.target.value || "-";
    });
  }

  const phoneInput = document.getElementById("cust-phone-input");
  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      validateFormState();
    });
  }
});

// Selection logic
function selectGame(gameId) {
  const game = gamesData.find(g => g.id === gameId);
  if (!game) return;

  selectedGame = game;
  selectedPackage = null; // reset
  selectedPayment = null; // reset

  // Update Game active state
  document.querySelectorAll(".game-card").forEach(c => c.classList.remove("active"));
  document.getElementById(`game-${gameId}`).classList.add("active");

  // Enable Step 2 & Setup UID Inputs
  const step2 = document.getElementById("step-2-section");
  step2.classList.remove("disabled");

  const idInput = document.getElementById("player-id-input");
  idInput.disabled = false;
  idInput.placeholder = game.idPlaceholder;
  idInput.value = "";
  document.getElementById("id-helper").innerText = game.idHelper;
  document.getElementById("summary-id").innerText = "-";

  // Setup Server UI
  const serverGroup = document.getElementById("server-group");
  const serverSelect = document.getElementById("server-select");
  const summaryServerRow = document.getElementById("summary-server-row");
  const summaryServer = document.getElementById("summary-server");

  if (game.hasServer) {
    serverGroup.style.display = "block";
    serverSelect.disabled = false;
    serverSelect.innerHTML = `<option value="" disabled selected>ເລືອກເຊີບເວີ</option>`;
    game.servers.forEach(srv => {
      serverSelect.innerHTML += `<option value="${srv}">${srv}</option>`;
    });
    summaryServerRow.style.display = "flex";
    summaryServer.innerText = "-";
  } else {
    serverGroup.style.display = "none";
    serverSelect.disabled = true;
    summaryServerRow.style.display = "none";
    summaryServer.innerText = "-";
  }

  // Enable Step 3 & Populate Packages
  const step3 = document.getElementById("step-3-section");
  step3.classList.remove("disabled");

  const packageList = document.getElementById("package-list");
  packageList.innerHTML = "";

  game.packages.forEach(pkg => {
    const tile = document.createElement("div");
    tile.className = "package-tile";
    tile.id = `pkg-${pkg.id}`;
    tile.onclick = () => selectPackage(pkg.id);
    
    // Add discount label if price >= 100,000 Kip
    const hasDiscount = pkg.price >= 100000;
    const discountBadge = hasDiscount ? `<span class="discount-tag">ຫຼຸດ 10%</span>` : '';

    tile.innerHTML = `
      ${discountBadge}
      <div class="package-icon"><i class="fa-solid fa-gamepad"></i></div>
      <div class="package-name">${pkg.name}</div>
      <div class="package-price">${pkg.price.toLocaleString()} ກີບ</div>
    `;
    packageList.appendChild(tile);
  });

  // Enable Step 4 (Payments list)
  const step4 = document.getElementById("step-4-section");
  step4.classList.remove("disabled");

  // Reset payment selection states
  document.querySelectorAll(".payment-card").forEach(card => {
    card.classList.remove("active");
  });

  // Update Summary Sidepanel
  document.getElementById("summary-game").innerText = game.name;
  document.getElementById("summary-package").innerText = "-";
  document.getElementById("summary-payment").innerText = "-";
  document.getElementById("summary-price").innerText = "0 ກີບ";
  const discountRow = document.getElementById("summary-discount-row");
  if (discountRow) discountRow.style.display = "none";

  validateFormState();
}

function selectPackage(pkgId) {
  if (!selectedGame) return;
  const pkg = selectedGame.packages.find(p => p.id === pkgId);
  if (!pkg) return;

  selectedPackage = pkg;

  // Update Package active state
  document.querySelectorAll(".package-tile").forEach(t => t.classList.remove("active"));
  document.getElementById(`pkg-${pkgId}`).classList.add("active");

  // Calculate discount: 10% if price >= 100,000 Kip
  const originalPrice = pkg.price;
  let discount = 0;
  if (originalPrice >= 100000) {
    discount = Math.round(originalPrice * 0.10);
  }
  const finalPrice = originalPrice - discount;

  // Update Summary Sidepanel
  document.getElementById("summary-package").innerText = pkg.name;
  
  const discountRow = document.getElementById("summary-discount-row");
  const discountVal = document.getElementById("summary-discount");
  if (discount > 0) {
    if (discountVal) discountVal.innerText = "-" + discount.toLocaleString() + " ກີບ";
    if (discountRow) discountRow.style.display = "flex";
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  document.getElementById("summary-price").innerText = finalPrice.toLocaleString() + " ກີບ";

  // Auto-select the only payment method: BCELOne
  selectPayment("bcel");

  validateFormState();
}

function selectPayment(paymentKey) {
  if (!selectedGame || !selectedPackage) return;
  
  selectedPayment = paymentKey;

  // Update Payment active state
  document.querySelectorAll(".payment-card").forEach(c => c.classList.remove("active"));
  const card = document.querySelector(`.payment-card[data-payment="${paymentKey}"]`);
  if (card) card.classList.add("active");

  // Update Summary Sidepanel
  let payName = "BCELOne QR";
  if (paymentKey === "umoney") payName = "U-Money";
  if (paymentKey === "ldb") payName = "LDB Trust";
  document.getElementById("summary-payment").innerText = payName;

  validateFormState();
}

function validateFormState() {
  const idValue = document.getElementById("player-id-input").value.trim();
  const phoneValue = document.getElementById("cust-phone-input").value.trim();
  const btnSubmit = document.getElementById("btn-submit-topup");

  let isValid = true;

  if (!selectedGame) isValid = false;
  if (!selectedPackage) isValid = false;
  if (!selectedPayment) isValid = false;
  if (!idValue) isValid = false;
  if (!phoneValue || phoneValue.length < 7) isValid = false;

  // If MLBB or Genshin is selected, verify server select is selected
  if (selectedGame && selectedGame.hasServer) {
    const srvSelect = document.getElementById("server-select").value;
    if (!srvSelect) isValid = false;
  }

  if (isValid) {
    btnSubmit.classList.remove("disabled");
  } else {
    btnSubmit.classList.add("disabled");
  }
}

// Complete checkout and save
function executeTopup() {
  const idValue = document.getElementById("player-id-input").value.trim();
  const phoneValue = document.getElementById("cust-phone-input").value.trim();
  const serverSelectVal = document.getElementById("server-select").value;

  if (!selectedGame || !selectedPackage || !selectedPayment) {
    alert("ກະລຸນາເລືອກເກມ, ແພັກເກດ ແລະ ຊ່ອງທາງການຈ່າຍເງິນໃຫ້ຄົບถ້ວນ!");
    return;
  }

  if (!idValue) {
    alert("ກະລຸນາປ້ອນ ID ຜູ້ຫຼິ້ນ!");
    return;
  }

  if (selectedGame.hasServer && !serverSelectVal) {
    alert("ກະລຸນາເລືອກເຊີບເວີ!");
    return;
  }

  if (!phoneValue || phoneValue.length < 7) {
    alert("ກະລຸນາປ້ອນເບີໂທຕິດຕໍ່ໃຫ້ຖືກຕ້ອງ!");
    return;
  }

  // Calculate discount: 10% if price >= 100,000 Kip
  const originalPrice = selectedPackage.price;
  let discount = 0;
  if (originalPrice >= 100000) {
    discount = Math.round(originalPrice * 0.10);
  }
  const finalPrice = originalPrice - discount;

  // Create order data
  const orderId = 'TXN-' + Math.floor(100000 + Math.random() * 900000);
  const dateStr = new Date().toLocaleString('lo-LA', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });

  const orderData = {
    orderId: orderId,
    gameId: selectedGame.id,
    gameName: selectedGame.name,
    playerId: idValue,
    server: selectedGame.hasServer ? serverSelectVal : null,
    packageName: selectedPackage.name,
    originalPrice: originalPrice,
    discount: discount,
    price: finalPrice,
    paymentMethod: selectedPayment,
    phone: phoneValue,
    date: dateStr,
    status: 'PENDING' // QR scanning page will be displayed
  };

  // Save to current order
  localStorage.setItem('myOrder', JSON.stringify(orderData));

  // Save to history list
  let history = JSON.parse(localStorage.getItem('purchasedKeysHistory') || '[]');
  history.unshift({
    orderId: orderId,
    date: dateStr,
    gameName: selectedGame.name,
    playerId: idValue,
    server: orderData.server,
    packageName: selectedPackage.name,
    originalPrice: originalPrice,
    discount: discount,
    price: finalPrice,
    paymentMethod: selectedPayment,
    status: 'SUCCESS'
  });
  localStorage.setItem('purchasedKeysHistory', JSON.stringify(history));

  // Redirect to receipt
  window.location.href = 'receipt.html';
}

// Render Order History Modal
function renderKeysHistory() {
  const container = document.getElementById("keys-history-list");
  if (!container) return;

  const history = JSON.parse(localStorage.getItem('purchasedKeysHistory') || '[]');

  if (history.length === 0) {
    container.innerHTML = `
      <div class="empty-keys-state">
        <i class="fa-solid fa-gamepad" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.3; color: #6366f1;"></i>
        <p style="font-size: 1.1rem; margin-bottom: 8px; font-weight: bold; color: #cbd5e1;">ບໍ່ພົບປະຫວັດການເຕີມເງິນ</p>
        <p style="font-size: 0.9rem; color: #64748b;">ເມື່ອທ່ານເຮັດທຸລະກຳສຳເລັດ, ປະຫວັດຈະມາສະແດງຢູ່ບ່ອນນີ້</p>
      </div>
    `;
    return;
  }

  let html = '';
  history.forEach((order, idx) => {
    let payName = "BCELOne QR";
    if (order.paymentMethod === "umoney") payName = "U-Money";
    if (order.paymentMethod === "ldb") payName = "LDB Trust";

    html += `
      <div class="history-order-card">
        <div class="history-order-header">
          <div>
            <span class="order-id"><i class="fa-solid fa-receipt"></i> ${order.orderId}</span>
            <span class="order-date">${order.date}</span>
          </div>
          <span class="order-badge">ສຳເລັດ</span>
        </div>
        <div class="history-order-items">
          <div class="history-item-row" style="border-bottom: none; padding: 0;">
            <div class="history-item-info">
              <span class="history-item-name">${order.gameName} - ${order.packageName}</span>
              <span class="history-item-brand">
                ID: ${order.playerId} ${order.server ? `• ເຊີບເວີ: ${order.server}` : ''}
              </span>
            </div>
            <div style="text-align: right;">
              ${order.discount && order.discount > 0 ? `<div style="font-size: 0.75rem; color: #f43f5e; text-decoration: line-through; margin-bottom: 2px;">${(order.originalPrice || (order.price + order.discount)).toLocaleString()} ກີບ</div>` : ''}
              <div style="color: #10b981; font-weight: 700;">${order.price.toLocaleString()} ກີບ</div>
              <div style="font-size: 0.75rem; color: #64748b;">${payName}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}
