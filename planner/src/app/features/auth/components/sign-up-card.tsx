import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle,
    CardDescription 
} from "@/components/ui/card";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, 
} from "@/components/ui/form";
import { DottedSeparator } from "@/components/dotted-seperator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters"),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
});


export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <Card className="w-full h-full md:w-[487px] justify-center border-none shadow-none">
            <CardHeader className="flex flex-col items-center justify-center text-center py-2"> 
                <CardTitle className="text-2xl">
                    Welcome!
                </CardTitle>
                <CardDescription className="py-2">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="space-y-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            name="name" 
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="name"
                                            placeholder="Enter your name"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email" 
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control} 
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Enter your password"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button disabled={false} size="lg" className="w-full">
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="py-4 space-y-4">
                <Button
                    disabled={false}
                    size="lg"
                    variant="secondary"
                    className="w-full"
                >
                    <FcGoogle/>
                    Sign up with Google
                </Button>
                <Button
                    disabled={false}
                    size="lg"
                    variant="secondary"
                    className="w-full"
                >
                    <FaGithub/>
                    Sign up with Github
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex items-center justify-center">
                <p className="text-sm space-x-2">
                    <span>Already have an account?</span>
                    <Link href="/sign-in">
                        <span className="text-orange-600">Sign In!</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}