'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx){
        console.log(2);
        const books = await strapi.services.books.find(ctx.query);
        return books.map(book =>book.Booktitle);
    },
    async findOne(ctx){
        console.log(21);
        const books = await strapi.services.books.findOne(ctx.query);
        return books.map(book =>book.Booktitle);
    },
    async add(ctx){
        console.log(22);
        const books = await strapi.services.books.add(ctx.query);
        return books.map(book =>book.Booktitle);
    },
    async edit(ctx){
        console.log(23);
        const books = await strapi.services.books.edit(ctx.query);
        return books.map(book =>book.Booktitle);
    },
    async destroy(ctx){
        console.log(24);
        const books = await strapi.services.books.destroy(ctx.query);
        return books.map(book =>book.Booktitle);
    },
};