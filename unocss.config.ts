import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--my-color-primary)',
      secondary: 'var(--my-color-secondary)',
      tertiary: 'var(--my-color-tertiary)',
      bg: 'var(--my-background-color)',
      surface: 'var(--my-color-surface)',
      success: 'var(--my-color-success)',
      error: 'var(--my-color-danger)',
      divider: 'var(--my-color-divider)',
      warning: 'var(--my-color-warning)',
      medium: 'var(--my-color-medium)',
      on: {
        primary: 'var(--my-color-primary-contrast)',
        secondary: 'var(--my-color-secondary-contrast)',
        tertiary: 'var(--my-color-tertiary-contrast)',
        bg: {
          1: 'var(--my-text-color)',
          2: 'var(--my-text-color-2)',
          3: 'var(--my-text-color-3)',
        },
        surface: 'var(--my-color-surface-contrast)',
        success: 'var(--my-color-success-contrast)',
        error: 'var(--my-color-danger-contrast)',
        warning: 'var(--my-color-warning-contrast)',
        medium: 'var(--my-color-medium-contrast)',
      },
    },
  },
  rules: [
    ['pt-unsafe-area', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-unsafe-area', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    ['pl-unsafe-area', { 'padding-left': 'env(safe-area-inset-left)' }],
    ['pr-unsafe-area', { 'padding-right': 'env(safe-area-inset-right)' }],
  ],
  shortcuts: [
    ['btn-default', 'w-full min-w-18 max-w-96 font-semibold case-normal'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: ['DM Serif Display', 'Source Serif Pro'],
    //     mono: 'DM Mono',
    //     helvetica: 'Helvetica',
    //   },
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
