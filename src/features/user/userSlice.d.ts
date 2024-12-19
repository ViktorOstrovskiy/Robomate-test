export interface UserState {
    isLoggedIn: boolean;
    email: string | null;
}
export declare const login: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "user/login">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"user/logout">;
declare const _default: import("redux").Reducer<UserState>;
export default _default;
