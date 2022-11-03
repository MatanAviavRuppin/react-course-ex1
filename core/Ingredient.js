class Ingredient {
     static LAST_ID = 0

     constructor(id, name, image, calories) {
          this.id = id;
          this.name = name;
          this.image = image;
          this.calories = calories;
          Ingredient.LAST_ID++
     }

     render(mode='add') {
          const style = mode == 'add' ? 'block' : 'none';
          return '<div class="column is-4-desktop is-12-mobile">'
          + '<div class="card px-5 py-5">'
          + '<div class="card-content px-0 h100p">'
          + '<div class="content h100p">'
          + '<div class="card-image"><img src="' + this.image + '" alt="" /></div>'
          + '<div class="has-text-weight-bold mt-3">' + this.name + '</div>'
          + '<div class="mt-2">Calories: ' + this.calories + '</div>'
          + '<div style="display: ' + style + ';" class="mt-2"><label class="checkbox"><input type="checkbox" value="' + this.id + '" name="ingredients[]">&nbsp;Add</label></div>'
          + '</div></div></div></div>';
     }
}