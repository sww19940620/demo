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
        url: "/login/check",
        type: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(params),
        success: function (data) {
            console.log(data);
            if(data===0) {
                sessionStorage.setItem("userName",username);


                $.ajax({
                    url: "/TimeTables/get?userName="+username,
                    type: 'GET',
                    success: function (data) {
                        console.log(data);
                        sessionStorage.setItem("courese",data);
                    },
                    error: function (data) {
                    }
                });

                window.location.href='Timetable.html';
            }
           else{
                alert("用户名和密码错误");
            }
        },
        error: function (data) {
        }
    });
}