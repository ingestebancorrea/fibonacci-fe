export interface UserState {
    users:          User[];
    mostUsedLetter: string;
    ocurrences:     number;
}

export interface User {
    name:      string;
    gender:    string;
    username:  string;
    password:  string;
    phone:     string;
    cell:      string;
    location:  Location;
    image_url: string;
}

export interface Location {
    city:    string;
    state:   string;
    country: string;
}

export interface ToastState {
    message: string;
}