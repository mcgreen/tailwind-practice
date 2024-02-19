import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'es',
    loadComponent: async () => {
      return (await import ('./email-subscribe/email-subscribe.component')).EmailSubscribeComponent
    },
  },
  {
    path: 'pg',
    loadComponent: async () => {
      return (await import ('./pricing-grids/pricing-grids.component')).PricingGridsComponent
    },
  },
  {
    path: 'pm',
    loadComponent: async () => {
      return (await import ('./product-modal/product-modal.component')).ProductModalComponent
    },
  },
  {
    path: 'ig',
    loadComponent: async () => {
      return (await import ('./image-gallery/image-gallery.component')).ImageGalleryComponent
    },
  },
  {
    path: 'lm',
    loadComponent: async () => {
      return (await import ('./login-modal/login-modal.component')).LoginModalComponent
    },
  },
  {
    path: '**',
    loadComponent: async () => {
      return (await import ('./email-subscribe/email-subscribe.component')).EmailSubscribeComponent
    },
  },
];
