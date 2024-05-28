import React from 'react'
import './singleUser.css'
import Image from 'next/image'

export default function page() {
  return (
    <div className={"single-user-container"}>
    <div className="info-container">
      <div className="imgContainer">
        <Image src={ "/noavatar.png"} alt="" fill />
      </div>
      {/* {user.username} */}
      Ayush
    </div>
    <div className={"formContainer"}>
      <form  className={"form"}>
        <input type="hidden" name="id" />
        <label>Username</label>
        <input type="text" name="username" />
        <label>Email</label>
        <input type="email" name="email"  />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Phone</label>
        <input type="text" name="phone" />
        <label>Address</label>
        <textarea type="text" name="address" />
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          {/* <option value={true} selected={user.isAdmin}>Yes</option>
          <option value={false} selected={!user.isAdmin}>No</option> */}
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          {/* <option value={true} selected={user.isActive}>Yes</option>
          <option value={false} selected={!user.isActive}>No</option> */}
        </select>
        <button>Update</button>
      </form>
    </div>
  </div>

  )
}
