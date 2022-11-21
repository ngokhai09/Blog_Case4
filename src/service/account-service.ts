import {Account} from "../model/account";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET_KEY} from "../middleware/auth-middleware";

class AccountService {
    addAccount = async (account) => {
        account.password = await bcrypt.hash(account.password, 10);
        return await Account.create(account);
    }
    getToken = async (account) => {
        const accountFind = await Account.findOne({username : account.username});
        if(!accountFind) {
            return "Fail";
        } else {
            const comparePassword = await bcrypt.compare(account.password , accountFind.password);
            if(!comparePassword){
                return "Fail";
            } else {
                const payload = {
                    username: accountFind.username,
                    id: accountFind._id,
                }
                return await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: 36000
                })
            }
        }
    }
}

export default new AccountService();