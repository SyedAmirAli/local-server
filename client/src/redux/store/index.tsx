import {
    configureStore,
    EnhancedStore,
    StoreEnhancer,
    ThunkDispatch,
    Tuple,
    UnknownAction,
} from "@reduxjs/toolkit";
// import apiSlice from "../api/apiSlice";
import socketMiddleware from "../socket/middleware";
import messageReducer, { MessageStateTypes } from "../message/messageSlice";
import headerReducer, { HeadersStateTypes } from "../header/headerSlice";

const store: EnhancedStore<
    {
        messages: MessageStateTypes;
        headers: HeadersStateTypes;
    },
    UnknownAction,
    Tuple<
        [
            StoreEnhancer<{
                dispatch: ThunkDispatch<
                    {
                        messages: MessageStateTypes;
                        headers: HeadersStateTypes;
                    },
                    undefined,
                    UnknownAction
                >;
            }>,
            StoreEnhancer
        ]
    >
> = configureStore({
    reducer: {
        messages: messageReducer,
        headers: headerReducer,
        // [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares()
            // .concat(apiSlice.middleware)
            .concat(socketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
