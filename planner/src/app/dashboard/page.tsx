import { SignedInNavBar } from "@/components/signed-in-navbar";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const user = await getCurrent();

    if (!user) {
        redirect("/sign-in");
    }

    return (
        <div>
            <div>
                <SignedInNavBar />
            </div>
        </div>
    )
};