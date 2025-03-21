import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type ResposeType = InferResponseType<typeof client.api.auth.signup["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.signup["$post"]>;

export const useSignUp = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation<
        ResposeType,
        Error,
        RequestType
    >({
        mutationFn: async ({ json }) => {
            const response = await client.api.auth.signup["$post"]({ json });
            return await response.json();
        },
        onSuccess: () => {
            router.push("/dashboard");
            queryClient.invalidateQueries({ queryKey: ["current"] });
        }
    });

    return mutation;
};