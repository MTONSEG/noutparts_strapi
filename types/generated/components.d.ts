import type { Schema, Attribute } from '@strapi/strapi';

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
      'delivery.delivery': DeliveryDelivery;
      'general.warranty': GeneralWarranty;
      'list.about': ListAbout;
      'payment.payment': PaymentPayment;
      'standart.link': StandartLink;
      'standart.support': StandartSupport;
    }
  }
}
