        function mostrarAlerta(mensaje) {
            const alerta = document.getElementById('miAlerta');
            alerta.textContent = mensaje;
            alerta.style.display = 'block';
            setTimeout(() => {
                alerta.style.display = 'none';
            }, 3000);
        }

        function compararRegex() {
            const patron = document.getElementById('txtRegex').value;
            const flags = document.getElementById('txtFlags').value;
            const texto = document.getElementById('txtTexto').value;
            const divResultado = document.getElementById('divResultado');
            const lblMensaje = document.getElementById('lblMensaje');
            const lblCoincidencias = document.getElementById('lblCoincidencias');

            // Validar campos vacíos
            if (patron.trim() === "") {
                mostrarAlerta("Por favor ingresa una Expresión Regular.");
                return;
            }
            if (texto.trim() === "") {
                mostrarAlerta("Por favor ingresa un texto para evaluar.");
                return;
            }

            try {
                
                const regex = new RegExp(patron, flags);
                
                
                const cumple = regex.test(texto);

                if (cumple) {
                    divResultado.className = "resultado valido";
                    lblMensaje.textContent = "¡El texto CUMPLE con la Expresión Regular!";
                } else {
                    divResultado.className = "resultado invalido";
                    lblMensaje.textContent = "El texto NO CUMPLE con la Expresión Regular.";
                }
                let matches = texto.match(regex);
                if (matches) {
                    lblCoincidencias.textContent = "Coincidencias encontradas: " + matches.join(', ');
                } else {
                    lblCoincidencias.textContent = "No se encontraron coincidencias exactas.";
                }

            } catch (e) {
                mostrarAlerta("Error en la sintaxis de la Expresión Regular.");
                divResultado.className = "resultado invalido";
                lblMensaje.textContent = "Error de sintaxis en la ER.";
                lblCoincidencias.textContent = "";
            }
        }

        function limpiarPantalla() {
            document.getElementById('txtRegex').value = "";
            document.getElementById('txtFlags').value = "g";
            document.getElementById('txtTexto').value = "";
            
            const divResultado = document.getElementById('divResultado');
            divResultado.className = "resultado";
            document.getElementById('lblMensaje').textContent = "Esperando datos...";
            document.getElementById('lblCoincidencias').textContent = "";
        }


        window.compararRegex = compararRegex;
window.limpiarPantalla = limpiarPantalla;