// ABRIR UNIDADES
function abrirUnidad(pagina) {
    window.location.href = pagina;
}

// VOLVER AL INICIO
function irInicio() {
    window.location.href = "index.html";
}

const modal = document.getElementById("infoModal");
const modalBody = document.getElementById("modalBody");

if (modal && modalBody) {

    const infoDetallada = {

        "3.1 Técnicas de modulación analógica": {
            titulo: "Modulación Analógica",
            descripcion: `Aunque el GPS moderno es digital, las señales que viajan desde los satélites son ondas electromagnéticas analógicas, por lo que dependen de principios de modulación analógica.
            <br><br>
            <strong>Modulación AM:</strong> En el GPS no se usa directamente como en radio comercial, pero es importante porque las señales pueden sufrir variaciones de amplitud por interferencias, lo que afecta la calidad de la señal recibida en el celular.
            <br><br>
            <strong>Modulación FM:</strong> Tampoco se usa directamente como en radio FM, pero cambios en la frecuencia pueden ocurrir por efecto Doppler (movimiento satélite-receptor). El celular debe compensar esto para calcular bien la posición.`,
            subtemas: []
        },

        "3.2 Técnicas de modulación digital": {
            titulo: "Modulación Digital",
            descripcion: `Es la base del GPS moderno. Permite transmitir datos con mayor precisión, velocidad y resistencia al ruido que las técnicas analógicas.
            <br><br>
            <strong>ASK:</strong> Representa datos variando la amplitud. Es más básica y sensible al ruido.
            <br><br>
            <strong>FSK:</strong> Representa datos cambiando la frecuencia. Se usa en sistemas de baja potencia (IoT, sensores).
            <br><br>
            <strong>PSK (Phase Shift Keying):</strong> El GPS usa BPSK (Binary Phase Shift Keying), modulación por cambio de fase binaria, para transmitir datos desde satélites a los receptores. Cada satélite usa un código único para evitar interferencias y permitir múltiples señales en la misma frecuencia.
            <br>Ejemplo: Tu celular recibe señales GPS moduladas en BPSK para calcular distancias a satélites.
            <br><br>
            <strong>QAM (Quadrature Amplitude Modulation):</strong> Utilizada en 4G/5G, combina amplitud y fase para transmitir grandes cantidades de datos. Usa OFDM, que divide la señal en múltiples subportadoras para mejorar la eficiencia y reducir interferencias.
            <br>Ejemplo: Tu celular usa QAM y OFDM para descargar mapas desde internet.`,
            subtemas: []
        },

        "Técnica de modulación en GPS": {
            titulo: "BPSK: La Técnica Central del GPS",
            descripcion: `La técnica más utilizada e importante en el GPS es BPSK (Binary Phase Shift Keying), modulación por desplazamiento de fase binaria.
            <br><br>
            <strong>¿Qué hace?</strong> 
            <br>
            Codifica los datos cambiando la fase de la señal portadora en 0° o 180°. Un cambio de fase representa un "1", sin cambio representa un "0".
            <br><br>
            <strong>¿Por qué se usa en GPS?</strong>
            <ul style="text-align:left; margin-top:8px;">
                <li>Es muy resistente al ruido y las interferencias.</li>
                <li>Funciona bien con señales de baja potencia (los satélites están a 20,000 km).</li>
                <li>Permite usar códigos únicos por satélite (códigos PRN), para que el receptor identifique cada señal.</li>
            </ul>
            <strong>¿Cómo se implementa?</strong>
            <br>
            Cada satélite GPS transmite en BPSK combinado con Espectro Ensanchado (DSSS). El celular recibe la señal, la descodifica usando el código PRN del satélite y mide el tiempo de llegada para calcular la distancia. Con al menos 4 satélites, triangula la posición exacta.`,
            subtemas: []
        },

        "3.3 Conversión analógico-digital": {
            titulo: "Conversión analógico-digital en GPS",
            descripcion: `El celular convierte las señales del satélite en datos digitales mediante tres pasos:
            <br><br>
            <strong>1. Muestreo:</strong> El receptor GPS captura la señal del satélite en intervalos de tiempo muy cortos.
            <br>Ejemplo: El receptor toma muestras de la señal BPSK miles de veces por segundo para detectar los cambios de fase que codifican la información de posición.
            <br><br>
            <strong>2. Cuantización:</strong> Cada muestra se convierte en un valor numérico aproximado dentro de un rango definido.
            <br>Ejemplo: La intensidad de la señal recibida del satélite se redondea a uno de los niveles disponibles, permitiendo representarla como un número que el procesador puede manejar.
            <br><br>
            <strong>3. Codificación:</strong> Los valores numéricos se traducen a bits (0s y 1s) para que el chip GPS pueda procesarlos y calcular la posición.
            <br>Ejemplo: El tiempo exacto de llegada de la señal del satélite se codifica en bits y se usa para calcular la distancia entre el satélite y el celular.
            <br><br>
            <strong>Flujo del proceso:</strong>
            <div style="display:flex; flex-wrap:wrap; align-items:center; gap:6px; margin-top:12px; font-size:0.85rem; font-weight:600;">
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">📡 Señal del satélite</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">Muestreo</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">Cuantización</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">Codificación</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#1a3c5e; color:#fff; padding:6px 10px; border-radius:6px;">📍 Datos digitales de posición</span>
            </div>`,
            subtemas: []
        },

        "3.4 Códigos de línea": {
            titulo: "Códigos de Línea",
            descripcion: `Los códigos de línea definen cómo se representan los bits (0s y 1s) como señales eléctricas al transmitirse por cables o circuitos. No se usan directamente en la señal GPS satelital, pero sí en la infraestructura de redes, internet y servidores de mapas que hacen posible el A-GPS y la descarga de mapas.
            <br><br>
            <strong>NRZ (Non-Return to Zero):</strong> Un "1" se mantiene como voltaje alto y un "0" como bajo durante todo el tiempo del bit, sin regresar a cero entre bits.
            <br>Ejemplo: En los circuitos internos del chip GPS del celular, los datos de posición calculados (latitud, longitud) se transmiten al procesador principal usando señales NRZ por las pistas del circuito impreso.
            <br><br>
            <strong>Manchester:</strong> Cada bit incluye una transición de señal en el centro, lo que permite al receptor mantenerse sincronizado de forma automática.
            <br>Ejemplo: En redes de área local que conectan servidores de A-GPS con antenas de telecomunicaciones, Manchester se usa para garantizar que los datos de asistencia (efemérides de satélites, correcciones de reloj) lleguen sincronizados y sin errores de temporización.
            <br><br>
            <strong>HDB3 (High Density Bipolar 3):</strong> Sustituye secuencias de cuatro ceros consecutivos por un patrón especial para evitar perder la sincronización en enlaces de larga distancia.
            <br>Ejemplo: En la infraestructura de telecomunicaciones (como enlaces entre antenas o centrales que soportan servicios de mapas y A-GPS), HDB3 evita largas cadenas de ceros. Esto asegura que los datos de geolocalización lleguen sin perder sincronización, manteniendo estable la transmisión en redes de alta capacidad.
            <br><br>
            <strong>¿Cómo viajan los datos de tu ubicación GPS por la red?</strong>
            <div style="display:flex; flex-wrap:wrap; align-items:center; gap:6px; margin-top:12px; font-size:0.82rem; font-weight:600;">
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">📍 Tu posición GPS</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">Datos digitales</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">Bloques de bits</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">Código de línea (NRZ / Manchester)</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">Red 4G / 5G / WiFi</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#e8f4fd; color:#1a3c5e; padding:6px 10px; border-radius:6px;">TCP/IP</span>
                <span style="color:#00d2d3;">→</span>
                <span style="background:#1a3c5e; color:#fff; padding:6px 10px; border-radius:6px;">🗺️ Servidor de mapas</span>
            </div>`,
            subtemas: []
        },

        "3.5 Módem, estándares y protocolos": {
            titulo: "Módem, Estándares y Protocolos",
            descripcion: `El módem conecta el celular con redes móviles para mejorar el posicionamiento mediante A-GPS (GPS Asistido). Sin módem, el GPS tarda mucho más en obtener la posición inicial.
            <br><br>
            <strong>Función del módem:</strong> Permite conectar el celular a redes 4G/5G para descargar datos de asistencia (posición aproximada de satélites, hora exacta) y acelerar el cálculo de ubicación.
            <br><br>
                        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-top:10px;">
                <thead>
                    <tr style="background:#1a3c5e; color:#fff;">
                        <th style="padding:10px; text-align:left;">Estándar / Protocolo</th>
                        <th style="padding:10px; text-align:left;">Función en GPS</th>
                        <th style="padding:10px; text-align:left;">Año de origen / GPS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background:#f8f9fa;">
                        <td style="padding:9px; border-bottom:1px solid #eee;"><strong>IEEE 802.11 (WiFi)</strong></td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">Posicionamiento en interiores donde el GPS satelital no llega</td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">1997 / GPS: ~2005</td>
                    </tr>
                    <tr>
                        <td style="padding:9px; border-bottom:1px solid #eee;"><strong>IEEE 1588 (PTP)</strong></td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">Sincronización de tiempo de alta precisión entre servidores y antenas</td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">2002 / GPS: ~2010</td>
                    </tr>
                    <tr style="background:#f8f9fa;">
                        <td style="padding:9px; border-bottom:1px solid #eee;"><strong>3GPP (4G/5G)</strong></td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">Transmisión de datos de asistencia GPS y descarga de mapas en tiempo real</td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">1998 / GPS: ~2003</td>
                    </tr>
                    <tr>
                        <td style="padding:9px; border-bottom:1px solid #eee;"><strong>GNSS</strong></td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">Sistema global de posicionamiento satelital (GPS, GLONASS, Galileo)</td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">GPS: 1978 / Civil: 1995</td>
                    </tr>
                    <tr style="background:#f8f9fa;">
                        <td style="padding:9px; border-bottom:1px solid #eee;"><strong>TCP/IP</strong></td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">Transmisión de datos de ubicación e información de mapas por internet</td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">1974 / GPS: ~1990s</td>
                    </tr>
                    <tr>
                        <td style="padding:9px; border-bottom:1px solid #eee;"><strong>HTTP/HTTPS</strong></td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">Carga segura de mapas, rutas y datos de tráfico desde servidores web</td>
                        <td style="padding:9px; border-bottom:1px solid #eee;">1991 / GPS: ~2000s</td>
                    </tr>
                    <tr style="background:#f8f9fa;">
                        <td style="padding:9px;"><strong>NTP</strong></td>
                        <td style="padding:9px;">Sincronización del reloj del dispositivo, esencial para calcular distancias a satélites</td>
                        <td style="padding:9px;">1985 / GPS: ~1990s</td>
                    </tr>
                </tbody>
            </table>`,
            subtemas: []
        },
    };

    let historial = [];

    function renderizarContenido(nombreTema, desdeSubtema = false) {
        const data = infoDetallada[nombreTema];
        if (data) {
            if (!desdeSubtema) {
                historial.push(nombreTema);
            }
            modalBody.innerHTML = `
                ${historial.length > 1 ? `<button class="back-btn" onclick="regresar()">← Regresar</button>` : ""}
                <h2>${data.titulo}</h2>
                <p>${data.descripcion}</p>
                ${data.subtemas.length > 0 ? `
                    <hr>
                    <h4>Explorar subtemas:</h4>
                    <ul class="subtema-lista">
                        ${data.subtemas.map(s => `
                            <li class="clickable-subtopic" onclick="renderizarContenido('${s}')">
                                <i class="fas fa-plus-circle"></i> ${s}
                            </li>
                        `).join('')}
                    </ul>
                ` : ""}
            `;
            modal.style.display = "block";
        } else {
            alert("Información sobre '" + nombreTema + "' próximamente.");
        }
    }

    window.renderizarContenido = renderizarContenido;
    window.regresar = function() {
        historial.pop();
        renderizarContenido(historial[historial.length - 1], true);
    };

    document.querySelectorAll('.subtopic-card').forEach(card => {
        card.addEventListener('click', () => {
            historial = [];
            renderizarContenido(card.querySelector('h3').innerText);
        });
    });

    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.onclick = () => { modal.style.display = "none"; historial = []; };
    }
    window.onclick = (event) => {
        if (event.target == modal) { modal.style.display = "none"; historial = []; }
    };
}
