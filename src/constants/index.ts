/**
 * Constantes globales de la aplicación
 */

export const APP_NAME = 'Local Base64 Decoder';
export const APP_VERSION = '1.0.0';

export const API_ENDPOINTS = {
  USERS: '/users',
  AUTH: '/auth',
  POSTS: '/posts',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'token',
  THEME: 'theme',
} as const;
