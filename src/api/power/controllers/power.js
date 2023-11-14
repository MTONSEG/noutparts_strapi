'use strict';

/**
 * power controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::power.power');
