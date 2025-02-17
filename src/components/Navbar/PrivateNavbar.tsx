import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { SiAuthy } from "react-icons/si";
import { logoutAction } from "../../redux/slice/authSlice";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const PrivateNavbar: React.FC = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutAction());
        localStorage.removeItem("userInfo");
    };

    return (
        <Disclosure as="nav" className="bg-white ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-start items-center">
                            <div className="flex justify-center flex-row w-full">
                                <div className="-ml-2 mr-2 flex items-left md:hidden">
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <SiAuthy className="h-8 w-auto text-green-500" />
                                </div>
                                <div className="hidden md:ml-6 md:flex md:space-x-8">
                                    <Link
                                        to="/"
                                        className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                                    >
                                        MasyncTracker
                                    </Link>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:space-x-8">
                                    {[
                                        { path: "/add-transaction", label: "Add Transaction" },
                                        { path: "/add-category", label: "Add Category" },
                                        { path: "/categories", label: "Categories" },
                                        { path: "/profile", label: "Profile" },
                                        { path: "/dashboard", label: "Dashboard" },
                                    ].map(({ path, label }) => (
                                        <Link
                                            key={path}
                                            to={path}
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <button
                                        onClick={logoutHandler}
                                        type="button"
                                        className="relative m-2 inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                    >
                                        <IoLogOutOutline className="h-5 w-5" aria-hidden="true" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default PrivateNavbar;
