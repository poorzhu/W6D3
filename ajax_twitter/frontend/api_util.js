const APIUtil = {
    
    // ????? use () after fat arrow?!

    followUser: id => (
        $.ajax({
            url: `/users/${id}/follow`,
            method: 'POST',
        })
    ),

    unfollowUser: id => (
        $.ajax({
            url: `/users/${id}/follow`,
            method: 'DELETE',
        })
    )
}

module.exports = APIUtil;