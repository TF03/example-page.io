SaveBudget.Views.SpendingItem = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#tpl-spendingItem').html()),

    events: {
        'click .delete-spending': 'onClickDelete'
    },

    initialize: function() {
        this.listenTo(this.model, 'remove', this.remove);
    },

    onClickDelete: function(e) {
        e.preventDefault();
        this.model.collection.remove(this.model);
    },

    render: function() {
        var thisModel = this.model;
        if (this.model.attributes) {
            var category = SaveBudget.categories.get(this.model.attributes.category);
            if (category.attributes) {
                thisModel.attributes.categoryName = category.attributes.name;
            }
        }
        var html = this.template(thisModel.toJSON());
        this.$el.append(html);
        return this;
    }
});
