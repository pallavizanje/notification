package com.notifications.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.notifications.app.model.Invite;

@Repository
public interface IInviteRepo extends JpaRepository<Invite, Long> {

}
