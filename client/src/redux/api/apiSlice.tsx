import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reducerPath: string = "api/apiSlice";
const baseQuery = fetchBaseQuery({
    baseUrl: window.apiUrl,
    prepareHeaders: function (headers, {}) {
        return headers;
    },
});

const apiSlice = createApi({
    reducerPath,
    baseQuery,
    endpoints: () => ({}),
});

export default apiSlice;
export const {} = apiSlice;
