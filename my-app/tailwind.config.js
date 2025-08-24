  
  export const theme = {
    extend: {
        backgroundImage: {
            'background-inicial': "url('/public/background-inicial.png')",
        }
    }
};

// Para fazer as fontes personalizadas funcionarem, precisa configurar aqui também:

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./componentes/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // adiciona se mudar o nome no futuro
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        balgruf: ['balgruf', 'serif'],
        dovahkiin: ['dovahkiin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};