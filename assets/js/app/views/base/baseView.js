SaveBudget.Views.BaseView = Backbone.View.extend({
    templateNotFound: _.template($('#tpl-notFound').html()),

    render: function() {
        var html = this.template();
        this.$el.html(html);

        if (!this.collection.isEmpty()) {
            this.collection.each(this.renderOne, this);
        }
        else {
            this.renderNotFound(this);
        }

        return this;
    },

    renderNotFound: function() {
        var html = this.templateNotFound();
        this.$el.append(html);
        return this;
    }
});