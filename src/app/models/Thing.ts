export interface Thing {
    id?: number,
    taskId?: number;
    profileTaskId: number;
    pictureLink?: string;
    description?: string;
    archived: boolean;
    removed: boolean;
    addDate?: string;
    amountCollections?: number;
}