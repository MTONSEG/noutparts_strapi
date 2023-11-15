import type { Schema, Attribute } from '@strapi/strapi';

export interface CatalogBattaries extends Schema.Component {
  collectionName: 'components_catalog_battaries';
  info: {
    displayName: 'Battaries';
    icon: 'bold';
    description: '';
  };
  attributes: {};
}

export interface CatalogCategories extends Schema.Component {
  collectionName: 'components_catalog_categories';
  info: {
    displayName: 'Categories';
  };
  attributes: {};
}

export interface CatalogKeyboards extends Schema.Component {
  collectionName: 'components_catalog_keyboards';
  info: {
    displayName: 'Keyboards';
  };
  attributes: {
    keyboards: Attribute.Relation<
      'catalog.keyboards',
      'oneToMany',
      'api::keyboard.keyboard'
    >;
  };
}

export interface CatalogMatrices extends Schema.Component {
  collectionName: 'components_catalog_matrices';
  info: {
    displayName: 'Matrices';
  };
  attributes: {
    matrices: Attribute.Relation<
      'catalog.matrices',
      'oneToMany',
      'api::matrix.matrix'
    >;
  };
}

export interface CatalogPowers extends Schema.Component {
  collectionName: 'components_catalog_powers';
  info: {
    displayName: 'Powers';
  };
  attributes: {};
}

export interface CatalogRam extends Schema.Component {
  collectionName: 'components_catalog_rams';
  info: {
    displayName: 'RAM';
  };
  attributes: {
    rams: Attribute.Relation<'catalog.ram', 'oneToMany', 'api::ram.ram'>;
  };
}

export interface CatalogStorages extends Schema.Component {
  collectionName: 'components_catalog_storages';
  info: {
    displayName: 'Storages';
  };
  attributes: {};
}

export interface ContactsAddress extends Schema.Component {
  collectionName: 'components_contacts_addresses';
  info: {
    displayName: 'address';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ContactsCommunication extends Schema.Component {
  collectionName: 'components_contacts_communications';
  info: {
    displayName: 'Communication';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    contact: Attribute.String;
    path: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ContactsWorkTime extends Schema.Component {
  collectionName: 'components_contacts_work_times';
  info: {
    displayName: 'WorkTime';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
    icon: Attribute.Media;
  };
}

export interface DeliveryDelivery extends Schema.Component {
  collectionName: 'components_delivery_deliveries';
  info: {
    displayName: 'Delivery';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    text: Attribute.String;
    iconNova: Attribute.Media;
    iconUkr: Attribute.Media;
    textNova: Attribute.RichText;
    textUkr: Attribute.RichText;
    textBottom: Attribute.Text;
  };
}

export interface GeneralWarranty extends Schema.Component {
  collectionName: 'components_general_warranties';
  info: {
    displayName: 'warranty';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface HomeBanner extends Schema.Component {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
    titleBtn: Attribute.String;
    subtitle: Attribute.Text;
    iconSubtitle: Attribute.Media;
    image: Attribute.Media;
    imageTable: Attribute.Media;
    counter: Attribute.RichText;
  };
}

export interface ListAbout extends Schema.Component {
  collectionName: 'components_list_abouts';
  info: {
    displayName: 'about';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface PaymentPayment extends Schema.Component {
  collectionName: 'components_payment_payments';
  info: {
    displayName: 'Payment';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    types: Attribute.RichText;
    icon: Attribute.Media;
    iconVisa: Attribute.Media;
    iconMastercard: Attribute.Media;
    iconPrivatbank: Attribute.Media;
  };
}

export interface StandartLink extends Schema.Component {
  collectionName: 'components_standart_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    path: Attribute.String;
  };
}

export interface StandartSupport extends Schema.Component {
  collectionName: 'components_standart_supports';
  info: {
    displayName: 'support';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'catalog.battaries': CatalogBattaries;
      'catalog.categories': CatalogCategories;
      'catalog.keyboards': CatalogKeyboards;
      'catalog.matrices': CatalogMatrices;
      'catalog.powers': CatalogPowers;
      'catalog.ram': CatalogRam;
      'catalog.storages': CatalogStorages;
      'contacts.address': ContactsAddress;
      'contacts.communication': ContactsCommunication;
      'contacts.work-time': ContactsWorkTime;
      'delivery.delivery': DeliveryDelivery;
      'general.warranty': GeneralWarranty;
      'home.banner': HomeBanner;
      'list.about': ListAbout;
      'payment.payment': PaymentPayment;
      'standart.link': StandartLink;
      'standart.support': StandartSupport;
    }
  }
}
