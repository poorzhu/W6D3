const APIUtil = {
    
    // ????? use () after fat arrow?!

    followUser: id => (
        $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'json',
            method: 'POST',
        })
    ),

    unfollowUser: id => (
        $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'json',
            method: 'DELETE',
        })
    ),

    searchUsers: (queryVal) => (
        $.ajax({
            url: `/users/search`,
            dataType: 'json',
            method: 'GET',

            // what is query?
            data:  { query }
        })      
    )
}

module.exports = APIUtil;