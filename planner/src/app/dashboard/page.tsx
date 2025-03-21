"use client"

import { SignedInNavBar } from "@/components/signed-in-navbar";
// import { Button } from "@/components/ui/button";
// import { useCurrent } from "@/features/auth/api/use-current";
// import { useSignout } from "@/features/auth/api/use-sign-out";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const DashboardPage = () => {
    // const router = useRouter();
    // const { data, isLoading } = useCurrent();
    // const { mutate } = useSignout();

    // useEffect(() => {
    //     if (!data && !isLoading) {
    //         router.push("/sign-in");
    //     }
    // }, [data, isLoading, router]);

    return (
        <div>
            <div>
                <SignedInNavBar />
            </div>
            {/* <Button
                onClick={() => mutate()}
            >
                Sign Out
            </Button> */}
        </div>
    )
};

export default DashboardPage;