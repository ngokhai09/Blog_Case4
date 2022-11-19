declare class AccountService {
    addAccount: (account: any) => Promise<import("mongoose").Document<unknown, any, import("../model/account").IAccount> & import("../model/account").IAccount & Required<{
        _id: number;
    }>>;
}
declare const _default: AccountService;
export default _default;
