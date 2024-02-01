
// Замените ваш массив продуктов на реальные данные
const products = [
    // Компрессоры
    { category: 'compressors', name: 'DA-5D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-7D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-11D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-15D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-18D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-22D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-30D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-37D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-55D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-75D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-110D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DA-132D', description: 'Серия DA - винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DNA-5D', description: 'Серия DNA - винтовые комбинированные (Компрессор серия DA + Ресивер)', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DNA-7D', description: 'Серия DNA - винтовые комбинированные (Компрессор серия DA + Ресивер)', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DNA-11D', description: 'Серия DNA - винтовые комбинированные (Компрессор серия DA + Ресивер)', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DNA-15D', description: 'Серия DNA - винтовые комбинированные (Компрессор серия DA + Ресивер)', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DNAD-5D', description: 'Серия DNAD - представляет собой винтовые комбинированные компрессоры с осушителем (компрессоры серии DA + ресивер + осушитель)', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DNAD-7D', description: 'Серия DNAD - представляет собой винтовые комбинированные компрессоры с осушителем (компрессоры серии DA + ресивер + осушитель)', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DNAD-11D', description: 'Серия DNAD - представляет собой винтовые комбинированные компрессоры с осушителем (компрессоры серии DA + ресивер + осушитель)', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'compressors', name: 'DNAD-15D', description: 'Серия DNAD - представляет собой винтовые комбинированные компрессоры с осушителем (компрессоры серии DA + ресивер + осушитель)', image: 'assets/img/Модель_DA_5D.jpeg' },

     // Диз. компрессоры
     { category: 'compressors', name: 'DAC-X3.5/7', description: 'Серия DAC - Дизельные, мобильные винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
     { category: 'compressors', name: 'DAC-X5/7', description: 'Серия DAC - Дизельные, мобильные винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
     { category: 'compressors', name: 'DAC-X10/7', description: 'Серия DAC - Дизельные, мобильные винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },
     { category: 'compressors', name: 'DAC-X12/12', description: 'Серия DAC - Дизельные, мобильные винтовые компрессоры с прямым приводом', image: 'assets/img/Модель_DA_5D.jpeg' },

    // Осушители
    { category: 'dryers', name: 'RD-10', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'dryers', name: 'RD-20', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'dryers', name: 'RD-30', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'dryers', name: 'RD-50', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'dryers', name: 'RD-60', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'dryers', name: 'RD-75', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'dryers', name: 'RD-100', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'dryers', name: 'RD-150', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'dryers', name: 'RD-175', description: 'Серия RD - осушители воздуха с холодильным принудительным охлаждением.', image: 'assets/img/Модель_DA_5D.jpeg' },

    // Ресиверы
    { category: 'receivers', name: 'АТ-300/8', description: 'Серия AT - ресиверы воздушные с термической обработкой', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'receivers', name: 'АТ-300/10', description: 'Серия AT - ресиверы воздушные с термической обработкой', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'receivers', name: 'АТ-600/8', description: 'Серия AT - ресиверы воздушные с термической обработкой', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'receivers', name: 'АТ-600/10', description: 'Серия AT - ресиверы воздушные с термической обработкой', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'receivers', name: 'АТ-1000/8', description: 'Серия AT - ресиверы воздушные с термической обработкой', image: 'assets/img/Модель_DA_5D.jpeg' },
    { category: 'receivers', name: 'АТ-1000/10', description: 'Серия AT - ресиверы воздушные с термической обработкой', image: 'assets/img/Модель_DA_5D.jpeg' },

];

const displayedProducts = 3;
let currentFilter = 'compressors'; // Начальная категория для отображения при загрузке страницы
let startIndex = 0;

// Функция для отображения продуктов на странице
function displayProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === currentFilter);

    for (let i = 0; i < startIndex + displayedProducts && i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        const card = createProductCard(product);
        productContainer.appendChild(card);
    }

    if (startIndex + displayedProducts < filteredProducts.length) {
        document.getElementById('showMoreBtn').textContent = 'Показать больше';
    } else {
        document.getElementById('showMoreBtn').textContent = 'Скрыть';
    }
}

// Функция для создания HTML-элемента карточки продукта
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img class="card_img" src="${product.image}" alt="card">
        <div class="card_info">
            <div class="card_title"><span>Модель:</span> ${product.name}</div>
            <p class="card_subtitle">${product.description}</p>
        </div>
    `;
    return card;
}

// Обработчики событий для кнопок фильтрации
document.querySelectorAll('.btn_filter').forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        startIndex = 0; // Сбросить индекс начала при смене фильтра
        displayProducts();
    });
});

// Обработчик события для кнопки "Показать больше" или "Скрыть"
document.getElementById('showMoreBtn').addEventListener('click', function () {
    if (this.textContent === 'Скрыть') {
        hideProducts();
    } else {
        showMoreProducts();
    }
});

// Функция для обработки нажатия кнопки "Показать больше"
function showMoreProducts() {
    startIndex += displayedProducts;
    displayProducts();
}

// Функция для обработки нажатия кнопки "Скрыть"
function hideProducts() {
    startIndex = 0; // Сбросить индекс начала
    displayProducts();
}

// Установим активный класс для кнопки "Компрессоры" по умолчанию
const defaultFilterButton = document.querySelector('.btn_filter[data-filter="compressors"]');
defaultFilterButton.classList.add('active');

// Обработчики событий для кнопок фильтрации
document.querySelectorAll('.btn_filter').forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        startIndex = 0; // Сбросить индекс начала при смене фильтра
        displayProducts();

        // Убрать класс active у всех кнопок и добавить его только активной
        document.querySelectorAll('.btn_filter').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Инициализация отображения продуктов
displayProducts();



document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.burger');
    const dropDownMenu = document.querySelector('.dropdown-menu');

    toggleBtn.onclick = function (event) {
        event.preventDefault();
        dropDownMenu.classList.toggle('open');
    }
});







// Функция для прокрутки вверх
function scrollToTop() {
    document.body.scrollTop = 0; // Для поддержки старых браузеров
    document.documentElement.scrollTop = 0; // Для современных браузеров
}

/* Показывать кнопки только при прокрутке вниз */
window.onscroll = function () {
    showScrollToTopButtons();
};

function showScrollToTopButtons() {
    var btn = document.getElementById("scrollToTopBtn");
    var btn2 = document.getElementById("scrollToTopBtn2");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        btn2.style.display = "block";
    } else {
        btn.style.display = "none";
        btn2.style.display = "none";
    }
}








let selector = document.querySelector("#tel");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

let validation = new JustValidate("#form");

validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введите имя!"
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Минимум 2 символа!"
  }
]).addField("#tel", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введите телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
]).onSuccess(async function () {
  let data = {
    name: document.getElementById("name").value,
    tel: selector.inputmask.unmaskedvalue(),
  };

  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });

  let result = await response.text();

  alert(result);
});


