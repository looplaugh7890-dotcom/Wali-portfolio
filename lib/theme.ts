export type ThemeColorId = 'yellow' | 'blue' | 'purple' | 'red' | 'green' | 'white';

export interface ThemeColorOption {
  id: ThemeColorId;
  label: string;
  swatchHex: string;
  primaryHex: string;
  primaryRgb: string;
  softHex: string;
  softRgb: string;
  dimHex: string;
  dimRgb: string;
}

export const THEME_COLORS: ThemeColorOption[] = [
  {
    id: 'yellow',
    label: 'Amber Gold',
    swatchHex: '#C6A15B',
    primaryHex: '#C6A15B',
    primaryRgb: '198 161 91',
    softHex: '#E4C888',
    softRgb: '228 200 136',
    dimHex: '#8A6F3E',
    dimRgb: '138 111 62',
  },
  {
    id: 'blue',
    label: 'Sapphire Blue',
    swatchHex: '#3B82F6',
    primaryHex: '#3B82F6',
    primaryRgb: '59 130 246',
    softHex: '#93C5FD',
    softRgb: '147 197 253',
    dimHex: '#1D4ED8',
    dimRgb: '29 78 216',
  },
  {
    id: 'purple',
    label: 'Amethyst Purple',
    swatchHex: '#A855F7',
    primaryHex: '#A855F7',
    primaryRgb: '168 85 247',
    softHex: '#D8B4FE',
    softRgb: '216 180 254',
    dimHex: '#7E22CE',
    dimRgb: '126 34 206',
  },
  {
    id: 'red',
    label: 'Ruby Crimson',
    swatchHex: '#F43F5E',
    primaryHex: '#F43F5E',
    primaryRgb: '244 63 94',
    softHex: '#FB7185',
    softRgb: '251 113 133',
    dimHex: '#BE123C',
    dimRgb: '190 18 60',
  },
  {
    id: 'green',
    label: 'Emerald Green',
    swatchHex: '#10B981',
    primaryHex: '#10B981',
    primaryRgb: '16 185 129',
    softHex: '#6EE7B7',
    softRgb: '110 231 183',
    dimHex: '#047857',
    dimRgb: '4 120 87',
  },
  {
    id: 'white',
    label: 'Diamond White',
    swatchHex: '#F3F4F6',
    primaryHex: '#E5E7EB',
    primaryRgb: '229 231 235',
    softHex: '#FFFFFF',
    softRgb: '255 255 255',
    dimHex: '#9CA3AF',
    dimRgb: '156 163 175',
  },
];

export const DEFAULT_THEME_COLOR: ThemeColorId = 'yellow';
export const THEME_STORAGE_KEY = 'wa_portfolio_theme_color';
