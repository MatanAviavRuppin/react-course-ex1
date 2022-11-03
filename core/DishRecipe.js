class DishRecipe {

     static INDEX = -1

     constructor(name, ingredients, time, cookingMethod, image) {
          this.name = name;
          this.ingredients = ingredients;
          this.time = time;
          this.cookingMethod = cookingMethod;
          this.image = image;
          DishRecipe.INDEX++;
          this.index = DishRecipe.INDEX;
     }

     getTotalCalories() {
          let sum = 0;
          for (let i of this.ingredients) {
               sum += i.calories;
          }
          return sum;
     }

     getIngredients() {
          let str = '';
          for (let i of this.ingredients) {
               str += i.render('show');
          }
          return str;
     }

     render() {
          return '<div class="column is-4-desktop is-12-mobile">'
          + '<div class="card px-5 py-5">'
          + '<div class="card-content px-0 h100p">'
          + '<div class="content h100p">'
          + '<div class="card-image"><img src="' + this.image + '" alt="" /></div>'
          + '<div class="has-text-weight-bold mt-3">' + this.name + '</div>'
          + '<div class="mt-2">Cooking Method: ' + this.cookingMethod + '</div>'
          + '<div class="mt-2">Total Cooking Time: ' + this.time + '</div>'
          + '<div class="mt-2">Total Calories: ' + this.getTotalCalories() + '</div>'
          + '<div class="mt-2"><button onclick="shows.render(' + this.index + ')" class="button is-info">Show Ingredients</button></div>'
          + '</div></div></div></div>';
     }
}