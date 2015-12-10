SaveBudget.Views.CategoryForm = Backbone.View.extend({
    template: _.template($('#tpl-new-category').html()),

    events: {
        'submit .category-form': 'onFormSubmit'
    },

    render: function() {
        var html = this.template(_.extend(this.model.toJSON(), {
            isNew: this.model.isNew()
        }));
        this.$el.append(html);
        return this;
    },

    onFormSubmit: function(e) {
        e.preventDefault();

        this.trigger('form:submitted', {
            name: this.$('.category-name-input').val()
        });
    }
});
