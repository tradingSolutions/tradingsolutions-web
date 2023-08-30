document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider-id');
    const container = document.getElementById('container-slider');
    let isMouseDown = false;

    function moveSlider(e) {
        if (!isMouseDown) return;
        let rect = container.getBoundingClientRect(),
            x = e.clientX - rect.left;
        x = Math.min(Math.max(0, x), rect.width);
        slider.style.width = x + 'px';
    }

    document.addEventListener('mousedown', function(e) {
        if (e.target === slider || e.target.parentNode === slider) {
            isMouseDown = true;
        }
    });

    document.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    document.addEventListener('mousemove', moveSlider);

        // Obtén una referencia al botón del menú desplegable (toggler)
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Obtén una referencia a todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.navbar-nav a');

    // Agrega un evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cierra el menú desplegable
            navbarToggler.click();
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia a los elementos relevantes
    const projectLinks = document.querySelectorAll(".list-group-item-action");
    const projectCard = document.getElementById("project-1"); // Cambia el ID a tu tarjeta de proyecto

    // Función para cambiar la información del proyecto en la tarjeta derecha
    function changeProjectContent(title, description, imageUrl, projectLink) {
        projectCard.querySelector(".card-title").textContent = title;
        projectCard.querySelector(".card-img-top").setAttribute("src", imageUrl);
        projectCard.querySelector(".card-body p").textContent = description;
        projectCard.querySelector(".btn-primary").setAttribute("href", projectLink);
    }

    // Agrega un event listener a cada enlace de proyecto
    projectLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado de los enlaces
            // Cambia el contenido del proyecto en la tarjeta derecha
            if (this.getAttribute("href") === "#proyecto-1") {
                changeProjectContent(
                    "Trend Following",
                    `Este script implementa una estrategia de trading que se basa en un conjunto de condiciones para abrir posiciones longs y shorts en el mercado. Si
                    todas las condiciones se cumplen, se establecen los niveles de toma de ganancias y stop loss para cada posición. Los indicadores utilizados para la
                    determinación de las entradas son la media movil simple (SMA), media movil exponencial (EMA), y el índice de movimiento direccional DMI. Es
                    importante tener en cuenta que esta estrategia se basa en el análisis técnico y no tiene en cuenta factores fundamentales que pueden afectar el
                    precio de un activo.`,
                    "static/trend-following.JPG",
                );
            }
            if (this.getAttribute("href") === "#proyecto-2") {
                changeProjectContent(
                    "Sessions Data",
                    `El indicador de sesión de trading es una herramienta que te permite visualizar de manera sencilla y eficiente datos estadísticos de las principales
                    sesiones de trading en el mercado Forex: Asia, Londres y Nueva York, siendo posible también utilizarlo en el mercado de criptomonedas. Además, ofrece otras
                    funcionalidades como la posibilidad de configurar colores, estilo y tamaño de las diferentes elementos que se encuentran en el gráfico, lo que te
                    permite personalizar el indicador según tus preferencias y necesidades. También encuentra un perfil de volumen para cada sesión, permitiendo a
                    los traders identificar los niveles de soporte y resistencia relevantes y las zonas de alta y baja liquidez. Además, el indicador también proporciona
                    información sobre la actividad del mercado durante las diferentes sesiones, lo que puede ayudar a los traders a planificar sus estrategias de trading.`,
                    "static/sessions1.png",
                );
            }
            if (this.getAttribute("href") === "#proyecto-3") {
                changeProjectContent(
                    "Stock Scanner",
                    "Descripción del proyecto 3...",
                    "static/trend-following.JPG",
                );
            }
            if (this.getAttribute("href") === "#proyecto-4") {
                changeProjectContent(
                    "Trendline Breakouts",
                    `Trendline Breakout es una sistema de trading que utiliza el indicador SuperTrend y líneas de tendencia para identificar señales de entrada y salida
                    en el mercado. Esta estrategia es adecuada para mercados volátiles y está diseñada para ayudar a los traders a capturar grandes movimientos del
                    mercado. El indicador Supertrend es un indicador de seguimiento de tendencia que se utiliza en el análisis técnico del mercado financiero.

                    La línea Supertrend se dibuja en el gráfico de precios y actúa como una línea de soporte y resistencia dinámica. En una tendencia alcista, la línea se
                    dibuja por debajo del precio y actúa como un nivel de soporte. En una tendencia bajista, la línea se dibuja por encima del precio y actúa como un
                    nivel de resistencia.
                    
                    Por otro lado, el software utiliza tres métodos diferentes para calcular la pendiente de las líneas de tendencia: ATR (Average True Range), Stdev
                    (Standard Deviation) y Linreg (Linear Regression).
                    
                    La pendiente calculada se utiliza para dibujar una banda superior e inferior alrededor del precio, que se ajusta constantemente a medida que el
                    precio se mueve. Si el precio se mueve por encima de la banda superior, se produce un breakout alcista, y si el precio se mueve por debajo de la
                    banda inferior, se produce un breakout bajista`,
                    "static/trendline-breakout.png",
                );
            }
            if (this.getAttribute("href") === "#proyecto-5") {
                changeProjectContent(
                    "Crypto Scanner",
                    "Descripción del proyecto 3...",
                    "static/trend-following.JPG",
                );
            }
            if (this.getAttribute("href") === "#proyecto-6") {
                changeProjectContent(
                    "Fundamental Analysis",
                    "Descripción del proyecto 3...",
                    "static/trend-following.JPG",
                );
            }
            // Agrega más condiciones para otros proyectos si es necesario
        });
    });
});