import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'

const AllRecipes = () => {
    return (
        <div>
            all recipes
            <TagsList/>
            <RecipesList/>
        </div>
    )
}

export default AllRecipes
