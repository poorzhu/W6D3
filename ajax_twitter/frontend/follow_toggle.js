const APIUtil = require('./api_util');

class FollowToggle {

    // ??? argument = el not $el
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        this.$el.on("click", event => this.handleClick(event));
    }

    render() {
        if (this.followState === "unfollowed") {
            // this should make the button text change?
            this.$el.html('Follow!')
            this.$el.prop("disabled", false)
        } else if (this.followState === "followed") {
            this.$el.html('Unfollow!')
            this.$el.prop("disabled", false)
        } else if (this.followState === "following" || this.followState === "unfollowing" ) {
            this.$el.prop("disabled", true)
        }
    }

    handleClick(event) {
        // prevents defaults of w/e the event is. mostly forms.
        event.preventDefault();        
        const followToggle = this;

        // is AJAX making a request from client that hits Rails which sends info back to client
        
        // debugger

        if (this.followState === "unfollowed"){
            this.followState = 'following'
            this.render();
            APIUtil.followUser(this.userId).then(() => {
                followToggle.followState = "followed";
                followToggle.render();
            });
        } else {
            this.followState = 'unfollowing'
            this.render();
            APIUtil.unfollowUser(this.userId).then(() => {
                followToggle.followState = "unfollowed";
                followToggle.render();
            });            
        }
    }
}

module.exports = FollowToggle;