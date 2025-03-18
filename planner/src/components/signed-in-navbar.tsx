"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const SignedInNavBar = () => {
    return (
        <div className="border-b w-full">
            <nav className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/">
                            <Image src="globe.svg" alt="logo" width={60} height={10}/>
                        </Link>

                        {/**
                         * @todo
                         * Link each button to the appropriate page
                         */}

                        <Button variant="ghost">
                            <Link href={"/sign-up"}>Dashboard</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href={"/sign-up"}>Periods</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href={"/sign-up"}>Classes</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href={"/sign-up"}>Tasks</Link>
                        </Button>
                    </div>

                    <div className="flex-shrink-0">
                        {/**
                         * @todo
                         * Add the user button/dropdown
                         * Add the user profile picture
                         */}
                    </div>
                </div>
            </nav>
        </div>
    );
};