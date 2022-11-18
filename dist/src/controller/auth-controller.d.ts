declare class AuthController {
    login(req: any, res: any, next: any): Promise<any>;
    register(req: any, res: any, next: any): Promise<void>;
}
declare const _default: AuthController;
export default _default;
