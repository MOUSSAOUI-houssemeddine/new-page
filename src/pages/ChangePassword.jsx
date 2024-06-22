import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('token');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword ) {
      setError
      console.log('New passwords do not match');
      return;
    } else {

     axios.put('http://localhost:3000/patients/profile/update-password', {
      oldPassword,
      newPassword,
    },


    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })


      .then(response => {
        if (response.status === 200) {
          setSuccess('Password changed successfully');
          setError('');
        } else {
          setError(response.data.message || 'Error changing password');
        }
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message === 201) {
          setError('Your old password is incorrect');
        } else {
          setError(err.response?.data?.message || 'Error changing password');
        }
        setSuccess('');
      });
  };}

  return (
    <div>
      <header className="flex bg-darkGreen1 h-full w-full text-white py-4">
        <button> --- Back</button>
      </header>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col content-between p-4">
          <label>Old Password</label>
          <input
            type="password"
            value={oldPassword}
            className="p-2 rounded-full w-full shadow-xl"
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col content-between p-4">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            className="p-2 rounded-full w-full shadow-xl"
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col content-between p-4">
          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            className="p-2 rounded-full w-full shadow-xl"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col bg-darkGreen2 text-white p-3 rounded-full shadow-xl mt-2 hover:greenHover">
          <button type="submit">Change Password</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default ChangePassword;
