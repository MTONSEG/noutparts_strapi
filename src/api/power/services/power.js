'use strict';

/**
 * power service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::power.power');
