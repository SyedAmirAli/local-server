import {
    BaseQueryFn,
    EndpointBuilder,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import apiSlice from "../api/apiSlice";
const messageApi = apiSlice.injectEndpoints({
    endpoints: (
        builder: EndpointBuilder<
            BaseQueryFn<
                string | FetchArgs,
                unknown,
                FetchBaseQueryError,
                {},
                FetchBaseQueryMeta
            >,
            never,
            string
        >
    ) => ({
        getMessages: builder.query({
            query: () => "/message/get",
        }),
        storeMessage: builder.mutation({
            query: (body: FormData) => ({
                url: "/message/store",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useGetMessagesQuery, useStoreMessageMutation } = messageApi;
