const postsModel = Posts()
const viewModel = PostsView()


$('#submit').on('click', function () {
    postsModel.addMessage($("#name").val(), $("#text").val());
    viewModel.viewPosts(postsModel.getMessages());
    viewModel.clearInput()
})


viewModel.viewPosts(postsModel.getMessages());