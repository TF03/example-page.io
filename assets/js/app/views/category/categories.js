SaveBudget.Views.Categories = SaveBudget.Views.BaseView.extend({
    template: _.template($('#tpl-categories').html()),

    renderOne: function(category) {
        var itemView = new SaveBudget.Views.Category({model: category});
        this.$('.category-list').append(itemView.render().$el);
    }
});
