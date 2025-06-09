# Agyani

A monorepo containing various projects and services for agyani.me.

## 🏗️ Project Structure

```
agyani/
├── agyani-landing/     # Main landing page (React + TypeScript)
└── ...                 # Future projects will be added here
```

## 🚀 Quick Start

Each project in this monorepo has its own README with specific instructions. Navigate to the project directory for detailed setup and development instructions.

### Landing Page

```bash
cd agyani-landing
npm install
npm run dev
```

## 🛠️ Development Guidelines

### Git Workflow

- `main` branch is protected and requires pull request reviews
- Feature branches should be created from `main`
- Branch naming convention: `feature/`, `bugfix/`, `hotfix/` prefixes

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks

### Deployment

Each project has its own deployment configuration and process. See individual project READMEs for details.

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🔐 Security

- Regular dependency updates
- Security scanning in CI/CD
- Environment variable management
- Access control and permissions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📈 Performance

- Optimized build processes
- Efficient asset loading
- Proper caching strategies
- CDN integration