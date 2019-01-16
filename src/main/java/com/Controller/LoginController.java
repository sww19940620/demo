package com.Controller;

import com.Dao.LoginInfo;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value="/login")
public class LoginController {


    @RequestMapping(value = "/check",method = RequestMethod.POST )
    public int LoginCheck(@RequestBody LoginInfo loginInfo){
        String userName =loginInfo.getUserName();
        String password =loginInfo.getPassword();
        if(userName.equals("123456")&&password.equals("123456")){
            return 0;
        }
        return 1;
    }
}
