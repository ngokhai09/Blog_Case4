declare class BlogCategoryService {
    findAll: () => Promise<Omit<Omit<import("mongoose").Document<unknown, any, import("../model/blog-category").IBlogCategory> & import("../model/blog-category").IBlogCategory & Required<{
        _id: number;
    }>, never>, never>[]>;
    save: (category: any) => Promise<import("mongoose").Document<unknown, any, import("../model/blog-category").IBlogCategory> & import("../model/blog-category").IBlogCategory & Required<{
        _id: number;
    }>>;
}
declare const _default: BlogCategoryService;
export default _default;
