SaveBudget.Views.SpendingForm = Backbone.View.extend({
    template: _.template($('#tpl-new-spending').html()),

    events: {
        'submit .spending-form': 'onFormSubmit'
    },

    render: function() {
        var categoryList = [];
        var categories = SaveBudget.categories;
        categories.each(function(e){
            var categoryItem = e.attributes;
            categoryList.push({id: categoryItem.id, name: categoryItem.name});
        });
        var html = this.template(_.extend(this.model.toJSON(), {
            isNew: this.model.isNew(),
            categoryList: categoryList
        }));
        this.$el.append(html);
        return this;
    },

    onFormSubmit: function(e) {
        e.preventDefault();

        this.trigger('form:submitted', {
            title: this.$('.spending-title-input').val(),
            cost: this.$('.spending-cost-input').val(),
            category: this.$('.spending-category-input').val()
        });
    }
});
