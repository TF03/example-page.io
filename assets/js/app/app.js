window.SaveBudget = {
    Models: {},
    Collections: {},
    Views: {},
    categories: '',

    start: function(data) {
        var categories = new SaveBudget.Collections.Category(data.categories),
            spending = new SaveBudget.Collections.Spending,
            router = new SaveBudget.Router(),
            elementCategories = $('.categories-index');

        this.categories = categories;

        router.on('route:home', function() {
            router.navigate('categories', {
                trigger: true,
                replace: true
            });
        });

        router.on('route:showCategories', function() {
            var categoriesView = new SaveBudget.Views.Categories({
                collection: categories
            });

            elementCategories.html(categoriesView.render().$el);
        });

        router.on('route:newCategory', function() {
            var newCategoryForm = new SaveBudget.Views.CategoryForm({
                model: new SaveBudget.Models.Category()
            });

            newCategoryForm.on('form:submitted', function(attrs) {
                attrs.id = categories.isEmpty() ? 1 : (_.max(categories.pluck('id')) + 1);
                categories.add(attrs);
                router.navigate('categories', true);
            });

            elementCategories.html(newCategoryForm.render().$el);
        });

        router.on('route:editCategory', function(id) {
            var category = categories.get(id),
                editCategoryForm;

            if (category) {
                editCategoryForm = new SaveBudget.Views.CategoryForm({
                    model: category
                });

                editCategoryForm.on('form:submitted', function(attrs) {
                    category.set(attrs);
                    router.navigate('categories', true);
                });

                elementCategories.html(editCategoryForm.render().$el);
            } else {
                router.navigate('categories', true);
            }
        });

        router.on('route:showAllSpending', function() {
            var spendingView = new SaveBudget.Views.Spending({
                collection: spending
            });

            elementCategories.html(spendingView.render().$el);
        });

        router.on('route:newSpending', function() {
            var newSpendingForm = new SaveBudget.Views.SpendingForm({
                model: new SaveBudget.Models.Spending()
            });

            newSpendingForm.on('form:submitted', function(attrs) {
                attrs.id = spending.isEmpty() ? 1 : (_.max(spending.pluck('id')) + 1);
                spending.add(attrs);
                router.navigate('spending', true);
            });

            elementCategories.html(newSpendingForm.render().$el);
        });

        router.on('route:editSpending', function(id) {
            var spendingItem = spending.get(id),
                editSpendingForm;

            if (spendingItem) {
                editSpendingForm = new SaveBudget.Views.SpendingForm({
                    model: spendingItem
                });

                editSpendingForm.on('form:submitted', function(attrs) {
                    spendingItem.set(attrs);
                    router.navigate('spending', true);
                });

                elementCategories.html(editSpendingForm.render().$el);
            } else {
                router.navigate('spending', true);
            }
        });

        if (Backbone.history) {
            Backbone.history.start();
        }
    }
};