import { writable } from 'svelte/store';

export const toggled = writable(false);
export const scrolled = writable(false);
export const isMobile = writable(false);
export const height = writable(0);
export const name = writable('');