'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx){
        console.log(1);
        const authors = await strapi.services.authors.find(ctx.query);
        return authors.map(author =>author.Authorname);
    },
    async findOne(ctx){
        console.log(12);
        const authors = await strapi.services.authors.findOne(ctx.query);
        return authors.map(author =>author.Authorname);
    },
    async add(ctx){
        console.log(13);
        const authors = await strapi.services.authors.add(ctx.query);
        return authors.map(author =>author.Authorname);
    },
    async edit(ctx){
        console.log(14);
        const authors = await strapi.services.authors.edit(ctx.query);
        return authors.map(author =>author.Authorname);
    },
    async destroy(ctx){
        console.log(15);
        const authors = await strapi.services.authors.destroy(ctx.query);
        return authors.map(author =>author.Authorname);
    }
};
