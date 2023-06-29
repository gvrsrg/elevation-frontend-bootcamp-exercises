const PostsView = function () {
    postsDiv = $("#posts")
    nameInput = $("#name")
    textInput = $("#text")

    const viewPosts = function (posts) {
        postsDiv.empty()

        for (let post of posts) {
            postsDiv.append(`<div class="post"><b>${post.name}</b>: ${post.text}</div>`)
        }

    }
    const clearInput = function () {
        nameInput.val("")
        textInput.val("")

    }

    return {
        viewPosts,
        clearInput

    }

}