import { assetPath } from '@/lib/asset-path';

// To add or remove a slide later, edit only this list and place the image in public/slides.
export const productSlides = [
  { src: assetPath('/slides/v2/01-wraith-workspace.webp'), alt: 'Veyra workspace with dark wraith wallpaper and visual bookmark boards' },
  { src: assetPath('/slides/v2/02-mist-workspace.webp'), alt: 'Veyra workspace with a light mist wallpaper and organised boards' },
  { src: assetPath('/slides/v2/03-celestial-focus.webp'), alt: 'Veyra workspace with a celestial portrait wallpaper and focus tools' },
  { src: assetPath('/slides/v2/04-pixel-garden.webp'), alt: 'Veyra workspace with a pixel-art garden wallpaper and visual bookmark boards' },
] as const;
