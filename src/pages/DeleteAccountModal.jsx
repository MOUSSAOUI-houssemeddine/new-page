import React, { useState } from 'react';
import axios from 'axios';

const DeleteAccountModal = () => {
  const [input, setInput] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    if (input === 'DELETE' && isChecked1 && isChecked2) {
      setLoading(true);
      setError(null);
      axios.delete('api', {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          userId: 'user-id', // Replace with actual user ID or relevant data
        },
      })
        .then(response => {
          console.log('Account deleted', response.data);
          // Handle successful deletion (e.g., navigate to a different page)
        })
        .catch(error => {
          console.error('Error deleting account:', error);
          setError('Failed to delete the account. Please try again.');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError('Please complete all steps.');
    }
  };

  return (
    <div className="bg-white p-6 w-full">
      <header className="flex bg-darkGreen1 h-full w-full text-white py-4">
        <button>--- Back</button>
      </header>
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <button className="float-right" onClick={() => console.log('Modal closed')}>
          &#x2715;
        </button>
        <h2 className="text-2xl font-bold mb-4">Delete Account</h2>
        <p className="mb-4">
          You can permanently delete your account from here. If you're sure about this and you choose to move ahead, all the data connected to this account will be deleted permanently. You will not be able to retrieve it in the future.
        </p>
        <p className="text-red-600 mb-2">Please type DELETE in the box below to continue.</p>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked1}
              onChange={() => setIsChecked1(!isChecked1)}
            />
            I understand that deleting my account will remove all my data permanently.
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked2}
              onChange={() => setIsChecked2(!isChecked2)}
            />
            Yes, please delete my account.
          </label>
        </div>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <div className="flex justify-between">
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded"
            onClick={() => console.log('Modal closed')}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white py-2 px-4 rounded"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete Account'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
