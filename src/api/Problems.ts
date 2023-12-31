const ProblemsAPI = [
	{
		isNpm: true,
		postId: 1,
		id: 1,
		name: "React: Introducción al framework de JavaScript",
		email: "contacto@ejemplo.com",
		body: "En este artículo aprenderás los conceptos básicos de React, cómo configurar un proyecto y cómo crear componentes reutilizables.",
		code: "npm install react",
	},
	{
		isNpm: true,
		postId: 2,
		id: 2,
		name: "Node.js: Construye aplicaciones de servidor eficientes",
		email: "contacto@ejemplo.com",
		body: "Descubre cómo utilizar Node.js para construir aplicaciones de servidor escalables y de alto rendimiento utilizando JavaScript en el backend.",
		code: "npm install node",
	},
	{
		isNpm: true,
		postId: 3,
		id: 3,
		name: "Angular: El framework de desarrollo web",
		email: "contacto@ejemplo.com",
		body: "Aprende a utilizar Angular, un poderoso framework de desarrollo web basado en TypeScript, para crear aplicaciones web modernas y escalables.",
		code: "npm install @angular/cli",
	},
	{
		isNpm: false,
		postId: 4,
		id: 4,
		name: "HTML5: La última versión del lenguaje de marcado web",
		email: "contacto@ejemplo.com",
		body: "Descubre las nuevas características y mejoras de HTML5, incluyendo elementos semánticos, APIs de audio y video, y mucho más.",
		code: "",
	},
	{
		isNpm: false,
		postId: 5,
		id: 5,
		name: "CSS3: Estiliza tus páginas web con las últimas tecnologías",
		email: "contacto@ejemplo.com",
		body: "Aprende a utilizar CSS3 para aplicar estilos avanzados a tus páginas web, como animaciones, efectos de transición y diseños responsivos.",
		code: "",
	},
	{
		isNpm: true,
		postId: 6,
		id: 6,
		name: "Vue.js: El framework progresivo de JavaScript",
		email: "contacto@ejemplo.com",
		body: "Explora Vue.js, un framework de JavaScript flexible y fácil de usar para construir interfaces de usuario interactivas y reactivas.",
		code: "npm install vue",
	},
	{
		isNpm: false,
		postId: 7,
		id: 7,
		name: "JavaScript: El lenguaje de programación del lado del cliente",
		email: "contacto@ejemplo.com",
		body: "Aprende los fundamentos de JavaScript y cómo utilizarlo para agregar interactividad y funcionalidad a tus sitios web.",
		code: "",
	},
	{
		isNpm: true,
		postId: 8,
		id: 8,
		name: "Webpack: Empaqueta y administra tus recursos web",
		email: "contacto@ejemplo.com",
		body: "Descubre cómo utilizar Webpack para administrar y empacar tus recursos web, incluyendo JavaScript, CSS, imágenes y más.",
		code: "npm install webpack",
	},
	{
		isNpm: false,
		postId: 9,
		id: 9,
		name: "Git: Control de versiones para proyectos de desarrollo web",
		email: "contacto@ejemplo.com",
		body: "Aprende a utilizar Git para controlar y gestionar las versiones de tus proyectos de desarrollo web de manera eficiente.",
		code: "",
	},
	{
		isNpm: true,
		postId: 10,
		id: 10,
		name: "Express.js: Desarrollo de aplicaciones web con Node.js",
		email: "contacto@ejemplo.com",
		body: "Descubre cómo utilizar Express.js, un framework web minimalista y flexible, para construir aplicaciones web en Node.js.",
		code: "npm install express",
	},
	{
		isNpm: false,
		postId: 11,
		id: 11,
		name: "Diseño responsivo: Adapta tus sitios web a diferentes dispositivos",
		email: "contacto@ejemplo.com",
		body: "Aprendo a crear diseños responsivos utilizando media queries y técnicas modernas para asegurar que tus sitios web se vean bien en diferentes dispositivos y tamaños de pantalla.",
		code: "",
	},
	{
		isNpm: true,
		postId: 12,
		id: 12,
		name: "TypeScript: Un superconjunto tipado de JavaScript",
		email: "contacto@ejemplo.com",
		body: "Explora TypeScript, un lenguaje de programación que añade tipos estáticos a JavaScript, brindando mayor robustez y escalabilidad a tus proyectos web.",
		code: "npm install typescript",
	},
	{
		isNpm: true,
		postId: 13,
		id: 13,
		name: "Next.js: Construye aplicaciones web con React de manera eficiente",
		email: "contacto@ejemplo.com",
		body: "Aprende a utilizar Next.js, un framework de React, para crear aplicaciones web rápidas y escalables con renderizado del lado del servidor.",
		code: "npm install next",
	},
	{
		isNpm: false,
		postId: 14,
		id: 14,
		name: "Responsive Images: Optimiza y sirve imágenes según el dispositivo",
		email: "contacto@ejemplo.com",
		body: "Descubre cómo optimizar y servir imágenes de manera eficiente en sitios web responsivos, mejorando la carga y rendimiento de tu sitio.",
		code: "",
	},
	{
		isNpm: true,
		postId: 15,
		id: 15,
		name: "Sass: Simplifica y mejora tus estilos CSS",
		email: "contacto@ejemplo.com",
		body: "Aprende a utilizar Sass, un preprocesador de CSS, para escribir estilos más eficientes y mantenibles en tus proyectos web.",
		code: "npm install sass",
	},
	{
		isNpm: false,
		postId: 16,
		id: 16,
		name: "SEO: Optimización para motores de búsqueda",
		email: "contacto@ejemplo.com",
		body: "Descubre las mejores prácticas de SEO (Optimización para motores de búsqueda) para mejorar la visibilidad y el ranking de tu sitio web en los motores de búsqueda.",
		code: "",
	},
	{
		isNpm: true,
		postId: 17,
		id: 17,
		name: "GraphQL: Un lenguaje de consultas para APIs modernas",
		email: "contacto@ejemplo.com",
		body: "Aprende los fundamentos de GraphQL y cómo utilizarlo para obtener datos de manera eficiente en tus aplicaciones web.",
		code: "npm install graphql",
	},
	{
		isNpm: true,
		postId: 18,
		id: 18,
		name: "Jest: Pruebas unitarias y de integración para JavaScript",
		email: "contacto@ejemplo.com",
		body: "Descubre cómo utilizar Jest, un framework de pruebas para JavaScript, para realizar pruebas unitarias y de integración en tus proyectos web.",
		code: "npm install jest",
	},
	{
		isNpm: false,
		postId: 19,
		id: 19,
		name: "mui/Material-UI",
		email: "contacto@ejemplo.com",
		body: "Aprende a crear sitios web accesibles, teniendo en cuenta las pautas de accesibilidad y asegurando que todos los usuarios puedan acceder a tu contenido.",
		code: "npm install @mui/material @emotion/react @emotion/styled",
	},
	{
		isNpm: true,
		postId: 20,
		id: 20,
		name: "Bootstrap: Diseño web responsive con CSS y componentes",
		email: "contacto@ejemplo.com",
		body: "Explora Bootstrap, un framework CSS popular, para desarrollar sitios web responsive y aplicar estilos atractivos utilizando su conjunto de componentes predefinidos.",
		code: "npm install bootstrap",
	},
	{
		isNpm: true,
		postId: 21,
		id: 21,
		name: "Bootstrap: Diseño web responsive con CSS y componentes",
		email: "contacto@ejemplo.com",
		body: "Explora Bootstrap, un framework CSS popular, para desarrollar sitios web responsive y aplicar estilos atractivos utilizando su conjunto de componentes predefinidos.",
		code: "npm install bootstrap",
	},
	{
		isNpm: true,
		postId: 22,
		id: 22,
		name: "React: Construye interfaces interactivas con JavaScript",
		email: "contacto@ejemplo.com",
		body: "Descubre React, una biblioteca JavaScript poderosa, para crear interfaces de usuario interactivas y dinámicas utilizando componentes reutilizables.",
		code: "npm install react",
	},

	{
		isNpm: true,
		postId: 23,
		id: 23,
		name: "Vue.js: Desarrollo ágil de aplicaciones web",
		email: "contacto@ejemplo.com",
		body: "Aprende Vue.js, un framework progresivo de JavaScript, para desarrollar aplicaciones web modernas de manera eficiente y escalable.",
		code: "npm install vue",
	},

	{
		isNpm: true,
		postId: 24,
		id: 24,
		name: "Angular: Construye aplicaciones web robustas",
		email: "contacto@ejemplo.com",
		body: "Explora Angular, un framework de desarrollo web completo, para crear aplicaciones escalables y de alto rendimiento utilizando TypeScript.",
		code: "npm install @angular/core",
	},

	{
		isNpm: true,
		postId: 25,
		id: 25,
		name: "Node.js: Desarrollo de servidores con JavaScript",
		email: "contacto@ejemplo.com",
		body: "Descubre Node.js, un entorno de tiempo de ejecución de JavaScript del lado del servidor, para crear aplicaciones web escalables y de alto rendimiento.",
		code: "npm install node",
	},

	{
		isNpm: true,
		postId: 26,
		id: 26,
		name: "Django: Construye aplicaciones web con Python",
		email: "contacto@ejemplo.com",
		body: "Aprende Django, un framework web de Python, para desarrollar aplicaciones web seguras y escalables utilizando un enfoque basado en el modelo-vista-controlador.",
		code: "pip install django",
	},

	{
		isNpm: true,
		postId: 27,
		id: 27,
		name: "Express.js: Desarrollo de aplicaciones web con Node.js",
		email: "contacto@ejemplo.com",
		body: "Explora Express.js, un framework minimalista de Node.js, para construir aplicaciones web rápidas y robustas utilizando JavaScript en el lado del servidor.",
		code: "npm install express",
	},

	{
		isNpm: true,
		postId: 28,
		id: 28,
		name: "Laravel: Desarrollo de aplicaciones web elegantes con PHP",
		email: "contacto@ejemplo.com",
		body: "Descubre Laravel, un framework PHP elegante y completo, para crear aplicaciones web modernas y escalables utilizando un enfoque de desarrollo limpio y sencillo.",
		code: "composer require laravel/framework",
	},

	{
		isNpm: true,
		postId: 29,
		id: 29,
		name: "Ruby on Rails: Desarrollo ágil de aplicaciones web",
		email: "contacto@ejemplo.com",
		body: "Aprende Ruby on Rails, un framework de desarrollo web basado en el lenguaje Ruby, para crear aplicaciones web rápidas y escalables utilizando convenciones inteligentes y código conciso.",
		code: "gem install rails",
	},

	{
		isNpm: true,
		postId: 30,
		id: 30,
		name: "Spring Boot: Desarrollo de aplicaciones Java robustas",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "mvn spring-boot:run",
	},

	{
		isNpm: true,
		postId: 31,
		id: 31,
		name: "headless-UI/Styles",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm install @headlessui/react",
	},

	{
		isNpm: true,
		postId: 32,
		id: 32,
		name: "Styles/React-icons",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm install react-icons --save",
	},

	{
		isNpm: true,
		postId: 33,
		id: 33,
		name: "init esLint next js 13",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npx esLint --init",
	},

	{
		isNpm: true,
		postId: 34,
		id: 34,
		name: "install React route ",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm install react-router-dom",
	},

	{
		isNpm: true,
		postId: 35,
		id: 35,
		name: "Create Project Next js 13 ",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npx create-next-app@last",
	},

	{
		isNpm: true,
		postId: 36,
		id: 36,
		name: "Next.js 13 and the pages directory App",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i next@latest react@latest react-dom@latest eslint-config-next@latest",
	},

	{
		isNpm: true,
		postId: 37,
		id: 37,
		name: "React-Ace",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i react-ace",
	},

	{
		isNpm: true,
		postId: 38,
		id: 38,
		name: "styled-components",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i styled-components",
	},

	{
		isNpm: true,
		postId: 39,
		id: 39,
		name: "react-hook-form",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i react-hook-form",
	},

	{
		isNpm: true,
		postId: 40,
		id: 40,
		name: "React Router DOM",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i react-router-dom",
	},

	{
		isNpm: true,
		postId: 41,
		id: 41,
		name: "React Bootstrap Typeahead",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i react-bootstrap-typeahead",
	},

	{
		isNpm: true,
		postId: 42,
		id: 42,
		name: "chakra-ui next-js",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i @chakra-ui/next-js",
	},

	{
		isNpm: true,
		postId: 43,
		id: 43,
		name: "NextJS-Locale (For New 'App directory')",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i nextjs-locale",
	},

	{
		isNpm: true,
		postId: 44,
		id: 44,
		name: "protobufjs",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i protobufjs",
	},

	{
		isNpm: true,
		postId: 45,
		id: 45,
		name: "Vercel CLI",
		email: "contacto@ejemplo.com",
		body: "Explora Spring Boot, un framework de Java para el desarrollo de aplicaciones web y servicios REST, que proporciona una configuración sencilla y un enfoque basado en convenciones.",
		code: "npm i -g vercel@latest",
	},
];

export default ProblemsAPI;
