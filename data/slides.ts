import { assetPath } from '@/lib/asset-path';

// To add or remove a slide later, edit only this list and place the image in public/slides.
export const productSlides = [
  { src: assetPath('/slides/01-workspace.png'), alt: 'Veyra workspace with bookmark boards and productivity widgets' },
  { src: assetPath('/slides/02-account.png'), alt: 'Veyra account and licence settings' },
  { src: assetPath('/slides/03-settings.png'), alt: 'Veyra workspace behaviour and layout settings' },
  { src: assetPath('/slides/04-language.png'), alt: 'Veyra language and regional settings' },
  { src: assetPath('/slides/05-support.png'), alt: 'Veyra support information' },
] as const;
