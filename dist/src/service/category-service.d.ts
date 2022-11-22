declare class CategoryService {
    findAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/Categories").ICategory> & import("../model/Categories").ICategory & Required<{
        _id: number;
    }>)[]>;
    save: (categories: any) => Promise<import("mongoose").Document<unknown, any, import("../model/Categories").ICategory> & import("../model/Categories").ICategory & Required<{
        _id: number;
    }>>;
}
declare const _default: CategoryService;
export default _default;
