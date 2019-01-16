function login()
{
    var username = document.getElementById("ID").value;
    var password = document.getElementById("PASSWORD").value;
    if(username===""){
        alert("请输入用户名");
        return false;
    }else if(password===""){
        alert("请输入密码");
        return false;
    }

    var params ={};
    params.userName = username;
    params.password = password;


    $.ajax({
        type: "POST",
        url: "localhost:8080/login/check",
        dataType: "jsonp",
        contentType: "application/json; charset=utf-8",
        data: params,
        success: function (data) {
            if(data.result===0) {
                alert("用户名和密码正确");
            }
           else{
                alert("用户名和密码错误");
            }
        },
        error: function (data) {
        }
    });
}