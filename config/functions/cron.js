'use strict';

/**
 * Rename this cron.js and put it inside of /config/functions/cron.js to play around with components
 */

const addComponentToauthors = async () => {
  console.log("Update the Component and add  new one")

  const authors = await strapi.services.authors.findOne({id: 1})

  console.log("authors", authors)

  const previousViews = [...authors.Authorsname]
  previousViews.push({
    numberOfViews: 10,
    contentcategory: 5
  })

  const newViews = previousViews

  authors.Authorsname = newViews

  console.log("newauthors", newauthors)

  const updated = await strapi.services.authors.update({id: 1}, Book)

  console.log("updated", updated)
}
const destroyComponentFromauthors = async () => {
  console.log("Update the Component and remove one, this example removes the last one")

  const authors = await strapi.services.authors.findOne({id: 1})

  console.log("authors", authors)

  const previousViews = [...authors.Authorname]
  previousViews.splice(previousViews.length - 1, 5)

  const newViews = previousViews

  authors.viewsPerCategory = newViews

  console.log("newViews", newViews)

  const updated = await strapi.services.authors.update({id: 1}, authors)

  console.log("updated", updated)
}


const editComponentInauthors = async () => {
  console.log("Update the Component and remove one, this example removes the last one")

  const index = 1 //The index of the component to replace

  const authors = await strapi.services.authors.findOne({id: 1})

  console.log("authors", authors)

  const previousViews = [...authors.Authorname]
  
  let newComponent = previousViews[index]
  newComponent = {...newComponent, ...{numberOfViews: 1337}} //Replace the view count with a new number

  previousViews.splice(index, 1, newComponent) //Replace element at index with new element

  const newViews = previousViews

  authors.Authorsname = newViews
  
  books.Bookstitle = newViews
  
  books.Booksimage = newViews

  console.log("newViews", newViews)

  const updated = await strapi.services.author.update({id: 1}, author)

  console.log("updated", updated)
}

module.exports = {
  /**
   */
  '* * * * *': async () => {
    console.log("Books")

    const firstAuthor = await strapi.services.authors.findOne({id: 1})

    console.log("firstAuthor", firstAuthor)

    const secondAuthor = await strapi.services.authors.findOne({id: 2})
    
    console.log("secondAuthor", secondAuthor)
    
    const thirdAuthor = await strapi.services.authors.findOne({id: 3})

    console.log("thirdAuthor", thirdAuthor) 

    const fourthAuthor = await strapi.services.authors.findOne({id: 4})

    console.log("fourthAuthor", fourthAuthor)

    const fifthAuthors = await strapi.services.authors.findOne({id: 5})

    //Add a new Bookcontent to the second Authors

    let updatedfifthAuthors = {...fifthAuthors}

    updatedfifthAuthors.Bookcontent = (
      {
        contentcategory: 1,
        Bookcontent: 5
      }
    )
    
 
    const update = await strapi.services.authors.update({id: 5}, updatedfifthAuthors)
    console.log("update", update)

  }
};