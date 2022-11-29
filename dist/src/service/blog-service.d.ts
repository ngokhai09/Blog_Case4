declare class BlogService {
    addBlog: (blog: any) => Promise<import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>>;
    findAll: (limit: any, offset: any) => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>, never>[]>;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>>;
    findByUser: (userId: any) => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>, never>[]>;
    updateBlog: (id: any, newBlog: any) => Promise<import("mongodb").UpdateResult>;
    delete: (id: any) => Promise<boolean>;
    findTop4: () => Promise<(import("mongoose").Document<unknown, any, import("../model/blog").IBlog> & import("../model/blog").IBlog & Required<{
        _id: number;
    }>)[]>;
}
declare const _default: BlogService;
export default _default;
