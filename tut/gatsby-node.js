const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipes.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
        component: path.resolve(`src/template/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
  // createPage(
  //   {
  //     path: "/using-dsg",
  //     component: require.resolve("./src/templates/using-dsg.js"),
  //     context: {},
  //     defer: true,
  //   },
  //   {}
  // )
}
