"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: (ctx) => {
    console.log("iniciando");
    ctx.send({ ok: true });
  },
};