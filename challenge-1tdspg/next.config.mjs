/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8080/mecanico/:path*', // Proxy para a API
        },
      ];
    },
  };
  
  export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // Adiciona a configuração para CORS
//     images: {
//       remotePatterns: [
//         {
//           // Aqui você pode adicionar suas configurações específicas
//           protocol: 'https',
//           hostname: 'example.com', // Altere para o hostname que você precisa
//           port: '',
//           pathname: '/**',
//         },
//       ],
//       // Definindo a política de CORS
//       crossOrigin: 'anonymous',
//     },
//   };
  
//   export default nextConfig;
  