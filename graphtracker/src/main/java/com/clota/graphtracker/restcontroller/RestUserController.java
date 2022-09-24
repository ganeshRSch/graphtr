package com.clota.graphtracker.restcontroller;
import com.clota.graphtracker.vo.User;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;


@org.springframework.web.bind.annotation.RestController
public class RestUserController {


   /* @GetMapping("/")
    public String index() {
        return "/index.html";
    }*/

    @GetMapping(path = "user", produces = "application/json")
    public List<User> user() {
        List<User> list = new ArrayList<>();
        User user = new User();
        user.setUserId("12");
        user.setName("Ganesh");
        list.add(user);
        return list;
    }

   @PostMapping(path = "userInput", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void userInput(@RequestBody User user) {

        System.out.println("User :" + user.getEmail());
        System.out.println("Email :" + user.getEmail());
        System.out.println("Mobile :" + user.getMobileNumber());


    }
}
