import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // O caminho para o seu app Next.js para carregar next.config.js e arquivos .env
  dir: './',
});

// Configurações personalizadas do Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Arquivo de setup que vamos criar no passo 3
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Se você usa Alias (@/components), o next/jest geralmente resolve sozinho.
  // Se não resolver, descomente a linha abaixo:
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1',
  // }
};

// createJestConfig é exportado dessa forma para garantir que o next/jest possa carregar a config assíncrona do Next.js
export default createJestConfig(config);
