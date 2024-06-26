import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';

const Footer = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    
    return (
        <footer className="mt-16 rounded-2xl m-2 sm:m-10 flex flex-col items-center text-white bg-black">
            <h3 className="mt-16 font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
                Join the Community
            </h3>
            <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base">
                Register to become a part of our community and be the first to know about latest stories and updates!
            </p>

            <div className="flex items-center m-4">
                <ul className="flex space-x-4">
                    <li onClick={() => {
                        signOut(auth);
                        router.push('/user-sign-in');
                    }}
                        className="text-white flex items-center p-2 rounded-md hover:bg-yellow-700 cursor-pointer">
                        <span className='px-2'>Register</span>
                        <span className="text-white-500 px-2 py-2 rounded-md">
                            <button className="text-white-500 rounded-md flex items-center justify-center">
                                <ArrowCircleRightIcon className="h-8 w-8" />
                            </button>
                        </span>
                    </li>
                </ul>
            </div>

            <div className="w-full mt-16 py-6 px-8 border-t border-solid border-light flex items-center justify-center">
                <span className="text-center">
                    &copy;2024 Myriad Concepts & Strategies. All rights reserved.
                </span>
            </div>

        </footer>


    );
}

export default Footer;
