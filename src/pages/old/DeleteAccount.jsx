import { useEffect, useRef } from "react";
import React  from "react";

const DeleteAccount = () => {
  
  const r = useRef(null)
  useEffect (() => {
    r.current.focus()
  },[])

  return (
    <div className="bg-white p-6   w-full">
      <button className="float-right"> X</button>
      <h2 className="text-2xl font-bold mb-4">Delete Account</h2>
      <p className="mb-4">
        You can permanently delete your account from here. If you're sure about
        this and you choose to move ahead, all the data connected to this
        account will be deleted permanently. You will not be able to retrieve it
        in the future.
      </p>
      <p className="text-red-600 mb-2">
        Please type ( DELETE ) in the box below to continue.
      </p>

      <div className="mb-4">
        <input ref={r}
          type="text"
          className="p-2 rounded-full w-full shadow-xl bg-slate-50"
          placeholder="...."
        />
      </div>
      <div className="mb-4">
        Yes, please delete my account.
        <div class="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <label
            for="link-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="bg-gray-600 text-white py-2 px-4 rounded">
          Cancel
        </button>
        <button className="bg-red-600 text-white py-2 px-4 rounded">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
