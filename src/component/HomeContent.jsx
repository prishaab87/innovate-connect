import React from "react";

export default function HomeContent() {
  return (
    <div className="content">
      <h2>Welcome to Project Connect</h2>
      <h3>Your Profile</h3>
      <div className="profile">
        <img src="" alt="hey" />
        <form>
          <div>
            <label for="itemName">Name</label>

            <input type="text" className="itemName" name="itemName" required />
          </div>
          <div>
            <label for="description">About </label>
            <textarea
              className="description"
              name="description"
              rows="4"
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
