import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResposeType = InferResponseType<typeof client.api.auth.signin["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.signin["$post"]>;

export const useSignin = () => {
    const mutation = useMutation<
        ResposeType,
        Error,
        RequestType
    >({
        mutationFn: async ({ json }) => {
            const response = await client.api.auth.signin["$post"]({ json });
            return await response.json();
        },
    });

    return mutation;
};