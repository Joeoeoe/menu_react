import React from 'react';

export interface IRoute{
    path: string;
    component: React.FC<any>;
    exact?: boolean;
}

export interface Config{
    path:string;
    exact?:boolean;
    component:React.FC<any>
}
