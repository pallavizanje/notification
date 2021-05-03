package com.notifications.app.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Table(name="tbl_invites")
@Entity
public class Invite {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Long invite_id;
	private String sender_id;
	private String user_id;
	private Boolean status;
	private String invite;
	private String vector;
	private String sig_id;
	
	@CreationTimestamp
	@Column(name="created_at")
	private Date invite_time;
	
	public Long getInvite_id() {
		return invite_id;
	}

	public void setInvite_id(Long invite_id) {
		this.invite_id = invite_id;
	}

	public String getSender_id() {
		return sender_id;
	}

	public void setSender_id(String sender_id) {
		this.sender_id = sender_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public String getInvite() {
		return invite;
	}

	public void setInvite(String invite) {
		this.invite = invite;
	}

	public String getVector() {
		return vector;
	}

	public void setVector(String vector) {
		this.vector = vector;
	}

	public String getSig_id() {
		return sig_id;
	}

	public void setSig_id(String sig_id) {
		this.sig_id = sig_id;
	}

	public Date getInvite_time() {
		return invite_time;
	}

	public void setInvite_time(Date invite_time) {
		this.invite_time = invite_time;
	}
	
	@Override
	public String toString() {
		return "Invite [getInvite_id()=" + getInvite_id() + ", getSender_id()=" + getSender_id() + ", getUser_id()="
				+ getUser_id() + ", getStatus()=" + getStatus() + ", getInvite()=" + getInvite() + ", getVector()="
				+ getVector() + ", getSig_id()=" + getSig_id() + ", getInvite_time()=" + getInvite_time()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}
	
	
}
