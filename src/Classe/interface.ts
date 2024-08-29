

export interface Author {
    name : string;
    birthdate : string;
    gender : string
}

export interface Book { 
    title : string;
    author : Author;
    pages : number;
    isAvailable : boolean;

}