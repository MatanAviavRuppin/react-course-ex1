window.onload = function() {

     //modals and data
     window.body = {
          elem: document.getElementsByTagName('body')[0],
          enableOverflow: function() {
               this.elem.style.overflow = 'auto';
          },
          disableOverflow: function() {
               this.elem.style.overflow = 'hidden';
          }
     }

     window.shows = {
          modal: document.getElementById('show-recipe-ingredients-modal'),
          renderElem: document.getElementById('recipe-ingredients-render'),
          open: function() {
               this.modal.classList.add('is-active');
               this.modal.querySelector('.card-content').scrollTop = 0;
               body.disableOverflow();
          },
          close: function(){
               this.modal.classList.remove('is-active');
               document.getElementsByName('body')[0].style.overflow = 'auto';
               body.disableOverflow();
          },
          render: function(index) {
               this.modal.querySelector('.card-header-title').innerHTML = 'Ingredients of ' + recipes.list[index].name;
               this.renderElem.innerHTML = recipes.list[index].getIngredients();
               this.open();
          },
     }
     window.ingredients = {
          list: [],
          modal: document.getElementById('add-ingredient-modal'),
          modalOpenButton: document.getElementById('add-ingredient-modal-open-button'),
          modalAddButton: document.getElementById('add-ingredient-modal-add-button'),
          renderElem: document.getElementById('ingredients-render'),
          open: function() {
               this.modal.classList.add('is-active');
               this.modal.querySelector('.card-content').scrollTop = 0;
               body.disableOverflow();
          },
          close: () => {
               this.modal.classList.remove('is-active');
               body.enableOverflow();
          },
          setListeners: function() {
               this.modalOpenButton.addEventListener('click', this.open.bind(this));
               this.modalAddButton.addEventListener('click', this.add.bind(this));
          },
          add: function() {
               let inputIngName = document.getElementById('inputIngName'),
               inputIngImage = document.getElementById('inputIngImage'),
               inputIngCals = document.getElementById('inputIngCals');
               this.list.push(new Ingredient(Ingredient.LAST_ID+1, inputIngName.value, inputIngImage.value, +inputIngCals.value));
               inputIngName.value = '';
               inputIngImage.value = '';
               inputIngCals.value = 
               this.close();
               this.render();
          },
          setInitialData: function(){
               this.list.push(new Ingredient(1, 'Broccoli', 'https://www.health.harvard.edu/media/content/images/p7_Broccoli_HH1812_gi905351392.jpg', 34));
               this.list.push(new Ingredient(2, 'Pasta Barilla', 'https://e-kosher.gr/656-home_default/penne-rigate-barilla-500gr.jpg', 110));
               this.list.push(new Ingredient(3, 'Tomato Sauce', 'https://www.barilla.com//-/media/images/he_il/products/il-products/arrabietta/productsaucesnew250x230.png?la=he-IL', 40));
               this.list.push(new Ingredient(4, 'Basil', 'https://st1.foodsd.co.il/Images/Products/large/N7lOLNKTHa.jpg', 5));
          },
          render: function() {
               let str = '';
               for (let i of this.list)
                    str += i.render();
               this.renderElem.innerHTML = str;
          }
     }
     window.recipes = {
          list: [],
          modal: document.getElementById('add-recipe-modal'),
          modalOpenButton: document.getElementById('add-recipe-modal-open-button'),
          modalAddButton: document.getElementById('add-recipe-modal-add-button'),
          renderElem: document.getElementById('recipes-render'),
          open: function() {
               this.modal.classList.add('is-active');
               this.modal.querySelector('.card-content').scrollTop = 0;
               body.disableOverflow();
          },
          close: function(){
               this.modal.classList.remove('is-active');
               body.enableOverflow();
          },
          setListeners: function(){
               this.modalOpenButton.addEventListener('click', this.open.bind(this));
               this.modalAddButton.addEventListener('click', this.add.bind(this));
          },
          add: function(){
               let inputRecName = document.getElementById('inputRecName'),
               inputRecMethod = document.getElementById('inputRecMethod'),
               inputRecTime = document.getElementById('inputRecTime'),
               inputRecImage = document.getElementById('inputRecImage');
               inputRecIngredients = document.getElementsByName('ingredients[]'),
               ingredientsArray = [];
               inputRecIngredients.forEach(input => {
                    if (input.checked) {
                         ingredientsArray.push(ingredients.list.find(value => value.id == +input.value));
                         input.checked = false;
                    }
               });
               this.list.push(new DishRecipe(inputRecName.value, ingredientsArray, inputRecTime.value, inputRecMethod.value, inputRecImage.value));
               inputRecName.value = '';
               inputRecMethod.value = '';
               inputRecTime.value = '';
               inputRecImage.value = '';
               this.close();
               this.render();
          },
          setInitialData: function(){
               this.list.push(new DishRecipe('Italian Pasta', [ingredients.list[0], ingredients.list[1], ingredients.list[2], ingredients.list[3]], 40, 'Cooking', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.406.325.suffix/1615916524567.jpeg'));
          },
          render: function(){
               let str = '';
               for (let i of this.list)
                    str += i.render();
               this.renderElem.innerHTML = str;
          },
     }

     //initial function calls
     ingredients.setInitialData();
     ingredients.setListeners();
     ingredients.render();
     recipes.setInitialData();
     recipes.setListeners();
     recipes.render();
     

     //general modals functions
     _handleModalClose = (e) => {
          let el = e.target
          el.closest('.is-active').classList.remove('is-active');
          body.enableOverflow();
     }
     document.querySelectorAll('.modal-background').forEach(el => el.addEventListener('click', _handleModalClose));
     document.querySelectorAll('.card-header-icon').forEach(el => el.addEventListener('click', _handleModalClose));
     document.querySelectorAll('.modal-close').forEach(el => el.addEventListener('click', _handleModalClose));
     document.querySelectorAll('.card-footer-item-close').forEach(el => el.addEventListener('click', _handleModalClose));
}
