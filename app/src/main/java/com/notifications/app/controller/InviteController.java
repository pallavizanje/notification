package com.notifications.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.notifications.app.model.Invite;
import com.notifications.app.model.User;
import com.notifications.app.repository.IInviteRepo;

@RestController
public class InviteController {

	@Autowired
	IInviteRepo inviteRepo;

	@GetMapping("/user")
	@ResponseBody
	@CrossOrigin
	public ResponseEntity<User> getUser(@RequestParam String userName) {
		List<User> userList = new ArrayList<>();
		userList.add(new User("1", "andrew", "Fandrew", "Landrew", "andrew"));
		userList.add(new User("2", "mike", "Fmike", "Lmike", "mike"));

		User user = userList.stream().filter(u -> userName.equals(u.getUserName())).findFirst().orElse(null);
		
		if (user == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(user, HttpStatus.OK);

	}
	
	@PostMapping("/notification")
	@CrossOrigin
	public ResponseEntity<Invite> save(@RequestBody Invite invite) {
		try {
			return new ResponseEntity<>(inviteRepo.save(invite), HttpStatus.CREATED);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/notification")
	@ResponseBody
	@CrossOrigin
	public ResponseEntity<List<Invite>> getAllNotification() {
		try {
			//List<Invite> list = inviteRepo.findAll();
			List<Invite> list = inviteRepo.findAll();
			if(list.isEmpty() || list.size() == 0) {
				return new ResponseEntity<List<Invite>>(HttpStatus.NO_CONTENT);
			}
			
			
			return new ResponseEntity<List<Invite>>(list, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<List<Invite>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
