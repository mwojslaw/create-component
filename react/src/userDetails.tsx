import * as React from 'react';
import {RenderProps, StyleProps, createComponent} from './@create-component';

type User = {
    name: string;
    age: number;
};

type UserDetailsProps = {
    user: User;
};

const Render: React.FC<RenderProps<UserDetailsProps>> = ({className, user}) => {
    return (
        <div className={className({user})}>
            <div className="user-name">{user.name}</div>
            <div className="user-age">{user.age}</div>
        </div>
    );
};

const Style: React.FC<StyleProps<UserDetailsProps>> = ({root}) => {
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
        <style scoped lang="scss">
            {css}
        </style>
    );
};

export const UserDetails = createComponent({
    Render,
    Style,
});
