let blog = document.getElementById("blog");
blog.addEventListener("click", function(e){
    blog.style.display = "none";

    let blogContents = document.getElementById("blog-contents");
    blogContents.style.display = "block";
})