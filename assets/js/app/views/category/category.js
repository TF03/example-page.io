SaveBudget.Views.Category = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#tpl-category').html()),

    events: {
        'click .delete-category': 'onClickDelete'
    },

    initialize: function() {
        this.listenTo(this.model, 'remove', this.remove);
    },
    
    onClickDelete: function(e) {
        e.preventDefault();
        this.model.collection.remove(this.model);
    },

    render: function() {
        var html = this.template(this.model.toJSON());
        this.$el.append(html);
        return this;
    }
});
