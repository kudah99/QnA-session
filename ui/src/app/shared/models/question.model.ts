import { UserModel } from "./user.model";

export interface QuestionModel {
    id: number | null;
    title: string;
    user_id: number;
    timeago: string;
}