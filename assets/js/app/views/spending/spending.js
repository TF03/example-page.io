SaveBudget.Views.Spending = SaveBudget.Views.BaseView.extend({
    template: _.template($('#tpl-spending').html()),

    renderOne: function(spending) {
        var itemView = new SaveBudget.Views.SpendingItem({model: spending});
        this.$('.spending-list').append(itemView.render().$el);
    }
});
