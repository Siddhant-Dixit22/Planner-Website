"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuItem 
} from "@radix-ui/react-dropdown-menu";
import { Switch } from "./ui/switch";
import { useRouter } from "next/navigation";
import { useCurrent } from "@/features/auth/api/use-current";
import { useSignout } from "@/features/auth/api/use-sign-out";
import { useEffect } from "react";

export const SignedInNavBar = () => {
    const router = useRouter();
    const { data, isLoading } = useCurrent();
    const { mutate } = useSignout();

    useEffect(() => {
        if (!data && !isLoading) {
            router.push("/sign-in");
        }
    }, [data, isLoading, router]);

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
                            <Link href={"/dashboard"}>Dashboard</Link>
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
                    <div className="flex items-center space-x-5">
                        <Switch
                            onCheckedChange={(c) => {
                                if (c) {
                                    document.documentElement.classList.add("dark");
                                } else {
                                    document.documentElement.classList.remove("dark");
                                }
                            }}
                        />
                        {/**
                         * @todo
                         * Add the user profile picture
                         */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    User Menu
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-48 bg-white dark:bg-gray-800 shadow-md rounded-md p-2">
                                <DropdownMenuLabel className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="my-1 border-t border-gray-200 dark:border-gray-700" />
                                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                                    Billing
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                                    Team
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                                    Subscription
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="my-1 border-t border-gray-200 dark:border-gray-700" />
                                <DropdownMenuItem 
                                    className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                                    onClick={() => mutate()}
                                >
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
        </div>
    );
};