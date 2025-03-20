"use client"

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useSignout } from "@/features/auth/api/use-sign-out";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
    const router = useRouter();
    const { data, isLoading } = useCurrent();
    const { mutate } = useSignout();

    useEffect(() => {
        if (!data && !isLoading) {
            router.push("/sign-in");
        }
    }, [data]);

    return (
        <div>
            Dashboard
            <Button
                onClick={() => mutate()}
            >
                Sign Out
            </Button>
        </div>
    )
};

export default DashboardPage;