'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx){
        console.log(3);
        const categories = await strapi.services.categories.find(ctx.query);
        return categories.map(author =>author.Categoryage);
    },
    async findOne(ctx){
        console.log(31);
        const categories = await strapi.services.categories.findOne(ctx.query);
        return categories.map(author =>author.Categoryage);
    },
    async add(ctx){
        console.log(32);
        const categories = await strapi.services.categories.add(ctx.query);
        return categories.map(author =>author.Categoryage);
    },
    async edit(ctx){
        console.log(33);
        const categories = await strapi.services.categories.edit(ctx.query);
        return categories.map(author =>author.Categoryage);
    },
    async destroy(ctx){
        console.log(34);
        const categories = await strapi.services.categories.destroy(ctx.query);
        return categories.map(author =>author.Categoryage);
    }
};