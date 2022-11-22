export declare let ID_USER: any;
declare class AccountService {
    addAccount: (account: any) => Promise<import("mongoose").Document<unknown, any, import("../model/account").IAccount> & import("../model/account").IAccount & Required<{
        _id: number;
    }>>;
    getToken: (account: any) => Promise<any>;
    findUser: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/account").IAccount> & import("../model/account").IAccount & Required<{
        _id: number;
    }>>;
}
declare const _default: AccountService;
export default _default;
