# Agyani Landing Page

A modern, responsive landing page built with React, TypeScript, and Vite, deployed on Cloudflare Pages.

## 🚀 Features

- ⚡️ Lightning fast development with Vite
- 🔒 Type-safe development with TypeScript
- 🎨 Modern UI with React
- 🚢 Containerized with Docker
- 🌐 Deployed on Cloudflare Pages
- 🔄 CI/CD pipeline ready

## 🛠️ Development

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later
- Docker (optional, for containerized development)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/agyani-landing.git
   cd agyani-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Docker Development

Build and run the container:
```bash
docker build -t agyani-landing .
docker run -d -p 8080:80 agyani-landing
```

## 🏗️ Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## 🚢 Deployment

This project is configured for deployment on Cloudflare Pages. The deployment process is automated through GitHub Actions.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Pages:
   ```bash
   wrangler pages deploy dist
   ```

## 🔧 Configuration

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `cloudflare.toml` - Cloudflare Pages configuration
- `nginx.conf` - Nginx configuration for Docker deployment

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔐 Security

- All dependencies are regularly updated
- Security headers are configured in Cloudflare
- Environment variables are properly managed
- Docker container runs with minimal privileges

## 📈 Performance

- Optimized build process
- Efficient asset loading
- Proper caching strategies
- CDN integration through Cloudflare
