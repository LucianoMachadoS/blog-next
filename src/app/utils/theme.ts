export const theme = {
  colors: {
    // O TS agora entrega a string da variável, não a cor direta
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    white: 'var(--color-white)',
    lightGray: 'var(--color-lightGray)',
    gray: 'var(--color-gray)',
    darkGray: 'var(--color-darkGray)',
  },
  spacings: {
    small: 'var(--spacing-small)',
    medium: 'var(--spacing-medium)',
    large: 'var(--spacing-large)',
  },
  font: {
    sizes: {
      small: 'var(--font-size-small)',
      medium: 'var(--font-size-medium)',
      large: 'var(--font-size-large)',
    },
  },
} as const;

export type Theme = typeof theme;
