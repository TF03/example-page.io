SaveBudget.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'categories': 'showCategories',
        'category/new': 'newCategory',
        'category/edit/:id': 'editCategory',

        'spending': 'showAllSpending',
        'spending/new': 'newSpending',
        'spending/edit/:id': 'editSpending'
    }
});
