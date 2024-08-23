import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    let authorLink = "https://www.howtocook.recipes/about-me/";
    let authorPhoto= "https://www.howtocook.recipes/wp-content/uploads/2020/08/profile-photo.png";
    let authorName = "Megan Miller";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Miller's home cook blog</a> 
           </div>
        </div>
     );

}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div> 
            <div>
                <h1>Best Homemade Lasagna Recipe</h1>
                <p>This classic lasagna recipe is the perfect dish and always has my family cleaning their plates and eating up every last bit until they’re stuffed.</p>
            </div>
            <RecipeAuthor />
        </div>
       );
    }
 }

 export default RecipeDescription;