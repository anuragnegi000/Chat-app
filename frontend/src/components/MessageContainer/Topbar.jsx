import { EllipsisVertical, LogOut } from "lucide-react";
import React from "react";
import useLogout from "../../hooks/useLogout";

const Topbar = () => {
  const {loading,logout}=useLogout();
  return (
    <div className="p-[0.6rem] bg-gray-100 flex">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/115611556?v=4"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="ml-2">
          <p className=" font-semibold text-lg">Anurag</p>
          <p>typing...</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <LogOut className="hover:cursor-pointer" />
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm!</h3>
              <p className="py-4">Are you sure you want to log out?</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}

                  <div className="flex justify-end gap-4">
                    <button onClick={logout} className="btn bg-orange-500 text-white">Yes</button>
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_1").close()
                      }
                    >
                      No
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
          <EllipsisVertical className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
