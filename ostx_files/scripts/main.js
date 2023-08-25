// Функція для плавної прокрутки до форми замовлення
function scrollToOrderForm() {
    $("body,html").animate({
        scrollTop: $("#order_form").offset().top - 50, // Прокручуємо до елемента #order_form з відступом в 50 пікселів
    }, 200); // Тривалість анімації - 200 мілісекунд
}

$(document).ready(function () {
    // Клік на іконку dropdown
    $(".dropdown-icon").on("click", function () {
        scrollToOrderForm(); // Викликаємо функцію прокрутки
    });

    // Заміна всіх відносних та абсолютних посилань на якір #order_form
    $("a").each(function () {
        var href = $(this).attr("href");
        if (href && (href.startsWith("http") || href.startsWith("/"))) {
            $(this).attr("href", "#order_form"); // Замінюємо атрибут href
        }
    });

    // Клік на кнопку або іконку пошуку
    $("button, .search-icon").on("click", function () {
        scrollToOrderForm(); // Викликаємо функцію прокрутки
    });

    // Клік на кнопку вибору типу замовлення
    $(".orderType").on("click", ".orderTypeButton", function () {
        // Додаємо клас активності для обраної кнопки, а від інших видаляємо цей клас
        $(this).addClass("orderTypeButtonActive").siblings().removeClass("orderTypeButtonActive");
    });

    // Функція, яка змінює вміст кнопки на "Lorem Ipsum"
    function foo() {
        document.getElementById("send_order_button").innerHTML = "Lorem Ipsum";
    }

    function foo1() {
        document.getElementById("send_order_button").innerHTML = "Lorem Ipsum";
    }

    // Викликаємо функцію GetCount для оновлення відображення часу
    GetCount();
    // Оновлюємо час кожну секунду
    setInterval(GetCount, 1000);

    // Клік на посилання або елементи з класом .to_form
    $("a:not(.noactive), .to_form").on("click", function (e) {
        e.preventDefault(); // Зупиняємо дію посилання
        scrollToOrderForm(); // Викликаємо функцію прокрутки
    });

    // Клік на посилання з класом .noactive
    $("a.noactive").on("click", function (e) {
        e.preventDefault(); // Зупиняємо дію посилання
    });
});
