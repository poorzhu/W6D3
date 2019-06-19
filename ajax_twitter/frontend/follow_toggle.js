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
        } else {
            this.$el.html('Unfollow!')
        }
    }

    handleClick(event) {

        // prevents defaults of w/e the event is. mostly forms.

        event.preventDefault();        

        if (this.followState === "unfollowed"){

            // is AJAX making a request from client that hits Rails which sends info back to client
            
            // DO I NEED A PROMISE FOR A THEN REQUEST?

            const followRequest = new Promise(APIUtil.followUser(this.userID));
            followRequest.then( () => {
                this.followState = "followed";
                this.render();
            });
        } else {

            const unfollowRequest = new Promise(APIUtil.unfollowUser(this.userID));
            followRequest.then(() => {
                this.followState = "unfollowed";
                this.render();
            });            
        }
    }
}

module.exports = FollowToggle;