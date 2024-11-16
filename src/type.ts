export interface RubricCompound {
    id: number,
    title: string,
    url: string,
    count: number,
}


export interface Rubric {
    children: [ RubricCompound ],
    count: number,
    id: number,
    title: string,
    url: string,
}


export interface ApiResponse {
    data: Rubric[];
    statusText: string,
}