'use strict';

/**
 * coworking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coworking.coworking');
