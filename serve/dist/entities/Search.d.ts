import { ClassType } from "class-transformer/ClassTransformer";
import { ValidateError } from "./Types";
export declare class Search {
    key: string;
    page: number;
    size: number;
    total: number;
    /**
     * 对当前对象字段校验返回一个 包含错误信息的数组
     * @param isSkipNull 是否跳过空属性
     */
    validateThis(isSkipNull?: boolean): Promise<ValidateError[]>;
    /**
     * 将一个平面对象转换成指定类型的对象
     * @param clazz 构造函数
     * @param obj   平面对象
     */
    static transformPlainObjToClas<T>(clazz: ClassType<T>, obj: object): T;
}
