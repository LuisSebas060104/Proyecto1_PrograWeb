# Proyecto1_PrograWeb
Proyecto que consiste en la solucion de un sistema estatico en donde se visualiza informacion de paqueteria para AeroPaq

# Tecnologías y versiones 

Para el desarrollo de AeroPaq, se usaron las siguientes tecnologías: 
Entorno: Node.js versión 18 y Vite como empaquetador para una compilación rápida.
Frontend: React versión 18 utilizando componentes funcionales.
Estilos: CSS3 
Base de Datos (Serverless): Google Apps Script conectado a Google Sheets para el almacenamiento de los datos del formulario



# Cómo ejecutar el proyecto

Para correr este proyecto en un entorno local, es necesario seguir los siguientes pasos:
Clonar el repositorio:
git clone https://github.com/LuiSebas060104/Proyecto1_PrograWeb.git

Navegar al directorio del proyecto:
cd Proyecto1_PrograWeb

Instalar las dependencias:
npm install

Levantar el servidor de desarrollo:
npm run dev

Visualizar la aplicación: Abrir el navegador e ir a: http://localhost:5173/


# Decisiones técnicas relevantes

Arquitectura basada en Componentes: La interfaz se dividió en componentes modulares (Cobertura, Contacto, Cotizador, Funcionamiento, Inicio, Navegación, Nosotros, Preguntas y Servicios) para facilitar el mantenimiento, la depuración y la reutilización de código.

Manejo de Estados Locales (useState): Para el componente del "Cotizador", se decidió utilizar el hook useState de React. Esto permite capturar las selecciones del usuario (origen, peso, nivel de servicio y extras) y recalcular matemáticamente la tarifa y el tiempo estimado en tiempo real sin necesidad de recargar la página.

Integración Serverless con Google Sheets: Para cumplir con el requerimiento de validar el interés del mercado de forma rápida y con bajo presupuesto, se configuró un Web App Script en Google Apps Script que expone un endpoint. Desde React, se utiliza fetch enviando los datos como text/plain directamente hacia una hoja de cálculo, logrando una base de datos funcional, gratuita y de fácil acceso para el personal administrativo de AeroPaq.
