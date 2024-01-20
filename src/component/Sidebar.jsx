import React from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div class={styles.sidebar}>
      <ul>
        <li>My Profile</li>
        <li>Personal Details</li>
        <li>Project Descriptions</li>
        <li>Project Gallery</li>
        <li>Project Wishlist</li>
        <li>Blogs</li>
        <li>Friends</li>
      </ul>
      <ul>
        <li>FAQ</li>
        <li>Testimonials</li>
      </ul>
      <ul>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}
