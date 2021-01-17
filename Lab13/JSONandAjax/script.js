$(function(){
    $("#fetchUser").click(buttonClickEvent);
    function buttonClickEvent(){
        $.get("https://jsonplaceholder.typicode.com/users/?id=" + $("#userId").val())
            .done(function (data){
                $("#id1").text(data[0].id);
                $("#name").text(data[0].name);
                $("#username").text(data[0].username);
                $("#email").text(data[0].email);
                $("#phone").text(data[0].phone);
                $("#website").text(data[0].website);
            })
            .fail(function(error){
                console.error(error);
            });
    }

    $(document).on("click", "button", function(){
        let postId = $(this).val();
        $.get("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
            .done(function(data){
                console.log("postId: " + postId);
                console.log(data);
                let comment = '';
                for (let i=0; i < data.length; i++){
                    comment += '<ul><li>' + data[i].name + '</li>';
                    comment += '<li>' + data[i].email + '</li>';
                    comment += '<li>' + data[i].body + '</li></ul>';
                }
                $("#comment" + postId).html(comment);
            })
            .fail(function(error){
                console.error(error);
            });
    });

    $.get("https://jsonplaceholder.typicode.com/posts?userId=1")
        .done(function(data){
            let html = '';
            for (let i=0; i < data.length; i++){
                html += '<div class="postField">';
                html += '<div class="postTitle">' + data[i].title + '</div>';
                html += '<div class="postBody">' + data[i].body + '</div>'
                html += '<button id="button_'+i+'" value="'+data[i].id+'">Comments</button>';
                html += '<div id="comment'+data[i].id+'"></div>';
                html += '</div>';
            }
            $("#posts").html(html);
        })
        .fail(function(error){
            console.error(error);
        });
});