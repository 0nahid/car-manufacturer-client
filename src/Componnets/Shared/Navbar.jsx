import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { BsGrid } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    toast.success(`Thank you, ${user?.displayName} to stay with us!`, {
      position: "bottom-right",
      autoClose: 5000,
    });
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  const Navmenu = (
    <>
      <li className="py-1 lg:py-0 lg:mr-2">
        <NavLink to="/" className="uppercase font-bold">
          Home
        </NavLink>
      </li>
      <li className="py-1 lg:py-0 lg:mr-2">
        <NavLink to="/shop" className="uppercase font-bold">
          Shop
        </NavLink>
      </li>
      <li className="py-1 lg:py-0 lg:mr-2">
        <NavLink to="/blogs" className="uppercase font-bold">
          Blogs
        </NavLink>
      </li>
      {/* {
                user && <Link to="/portfolio">Portfolio</Link>
            } */}
      <li className="py-1 lg:py-0 lg:mr-2">
        <NavLink to="/contact" className="uppercase font-bold">
          Contact
        </NavLink>
      </li>
      {user && (
        <li className="py-1 lg:py-0 lg:mr-2">
          <Link to="/dashboard" className="uppercase font-bold bg-secondary text-white">
            Dashboard
          </Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <section className="bg-base-300 sticky top-0 z-50 border-b">
        <div className="navbar bg-base-300 backdrop-blur-2xl transition-colors duration-500 container mx-auto py-3 md:py-4"
        style={
          pathname.includes("dashboard")
            ? { display: "none" }
            : { display: "flex" }
        }
        >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <BsGrid className="text-3xl" />
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl border-l-2 border-primary bg-base-100 rounded-box w-52"
              >
                {Navmenu}
              </ul>
            </div>
            <Link
              className="btn btn-ghost normal-case text-xl flex gap-2 items-center"
              to="/"
            >
              <span className="text-xl md:text-2xl lg:text-3xl">Car Parts</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 gap-3">{Navmenu}</ul>
          </div>
          <div className="navbar-end gap-3">
            {!user && (
              <NavLink
                to="/login"
                className="btn flex gap-2 items-center btn-primary"
              >
                <BiLogInCircle /> Login
              </NavLink>
            )}
            {user && (
              <div className="flex-none gap-2 mr-3">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      style={{ display: "grid" }}
                      className="w-10 h-10 rounded-full border bg-base-300 grid place-items-center ring ring-primary ring-offset-base-100 ring-offset-2"
                    >
                      {auth?.currentUser?.photoURL ? (
                        <img src={auth?.currentUser?.photoURL} alt="avatar" />
                      ) : (
                        <img
                          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                          alt="profile"
                        />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <button onClick={logout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
