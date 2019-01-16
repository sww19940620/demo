package com.Mapper;

import com.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {

   User select(int id );
}

