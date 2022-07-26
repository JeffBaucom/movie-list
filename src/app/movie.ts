export interface Movie {
    title: string;    
    year: string;
    rated: string;
    runtime: string;
    Ratings: Rating[];
    poster: string | URL;

}

interface Rating {
    source: string;
    value: string;
}
