"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export const NavBar = () => {
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
                        <Button variant="default">
                            <Link href={"/sign-up"} className="flex items-center space-x-2">
                                <LogIn />
                                <span>Register Now</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    );
};