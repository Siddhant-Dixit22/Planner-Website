"use client";

import { Loader, LogOut } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { useSignout } from "../api/use-sign-out";
import { useCurrent } from "../api/use-current";

export const UserButton = () => {
    const { data: user, isLoading } = useCurrent();
    const { mutate: signout } = useSignout();

    if (isLoading) {
        return (
            <div className="size-10 rounded-full flex items-center justify-center bg-neutral-200 border-neutral-200">
                <Loader className="size-4 animate-spin text-muted-foreground"/>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    const { name, email } = user;
    
    const avatarFallback = name ? name.charAt(0).toUpperCase() : email.charAt(0).toUpperCase() ?? "U";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className="size-10 hover:opacity-75 transition border border-neutral-300">
                    <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white dark:bg-gray-800 shadow-md rounded-md p-2">
                <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-1 bg-white dark:bg-gray-800">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            {name || "User"}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {email}
                        </p>
                    </div>      
                </div>
                <DropdownMenuSeparator className="my-1 border-t border-gray-200 dark:border-gray-700" />
                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                    Add Class/Project
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                    Add Task
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                    Collaboraters
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                    Help/Support
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 border-t border-gray-200 dark:border-gray-700" />
                <DropdownMenuItem 
                    className="px-2 py-1 text-sm text-amber-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                    onClick={() => signout()}
                >
                    <LogOut className="text-amber-700"/>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}