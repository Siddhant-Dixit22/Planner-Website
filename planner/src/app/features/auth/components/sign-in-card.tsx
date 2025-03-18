"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "react-hook-form";
import { DottedSeparator } from "@/components/dotted-seperator";

export const SignInCard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-full h-full md:w-[487px] border-none shadow-none">
                <CardHeader className="flex items-center justify-center text-center p-7">
                    <CardTitle className="text-2xl">
                        Welcome Back!
                    </CardTitle>
                </CardHeader>
                <div className="p-4">
                    <DottedSeparator />
                </div>
                <CardContent className="p-7">
                    <div className="items-center justify-center flex flex-col">
                        <Button variant="default" className="flex items-center justify-center gap-x-2">
                            <span>Sign In</span>
                        </Button>
                    </div>
                </CardContent>
                <div className="px-7">
                    <DottedSeparator />
                </div>
                <CardContent className="p-7 flex flex-col gap-y-4">
                    <Button variant="default" className="flex items-center justify-center gap-x-2">
                        <FcGoogle />
                        Sign In with Google
                    </Button>
                    <Button variant="default" className="flex items-center justify-center gap-x-2">
                        <FaGithub />
                        Sign In with Github
                    </Button>
                </CardContent>
                <div className="px-7">
                    <DottedSeparator />
                </div>
                <CardContent className="p-7 flex items-center justify-center">
                    <p>
                        Don't have an account?
                    </p>
                    <Link href="/sign-up">
                    <span className="text-blue-700">Sign Up</span>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}