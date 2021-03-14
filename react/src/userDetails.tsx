import * as React from 'react';
import {CreateComponent} from './@create-component';

type User = {
    name: string;
    age: number;
};

type UserDetailsProps = {
    user: User;
};

export const UserDetails: CreateComponent<UserDetailsProps> = ({className, Component, root, user}) => {
    const css = `
        ${root} {
           margin: 10px;

           .user-name {
               font-weight: bold;
           }

           .user-age { 
               font-size: 20px;
           }
        }
    `;

    return (
        <Component>
            <style scoped lang="scss">
                {css}
            </style>
            <div className={className({user})}>
                <div className="user-name">{user.name}</div>
                <div className="user-age">{user.age}</div>
            </div>
        </Component>
    );
};
