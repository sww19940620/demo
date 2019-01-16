package com.Service;


import com.Mapper.UserMapper;
import com.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserMapper userMapper;

    public User Select(int id){
        return userMapper.select(id);
    }

}
