const APIUtil = require('./api_util');

class UsersSearch {
    constructor(el) {
        this.$el = $(el);
        this.$input = this.$el.find('input[name=username]');
        this.$ul = this.$el.find('.users');
        this.$el.on("input", event => this.handleInput(event))
    }

    handleInput(event) {
        debugger
        APIUtil.searchUsers(this.$input.val())
    }
}

module.exports = Users;