// ??? save require to const to be referenced

const FollowToggle = require('./follow_toggle');

$(() => {
    // ??? button -> follow-toggle

    $('button.follow-toggle').each( (index, button) => { new FollowToggle(button) });
});