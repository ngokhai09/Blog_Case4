import {Account} from "../model/account";
import bcrypt from 'bcrypt';

class AccountService {
    addAccount = async (account) => {
        account.password = await bcrypt.hash(account.password, 10);
        return await Account.create(account);
    }
}

export default new AccountService();