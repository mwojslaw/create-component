import * as React from 'react';
import {CreateComponent} from './@create-component';

type ButtonProps = {
    variant: 'primary' | 'secondary';
};

export const Button: CreateComponent<ButtonProps> = ({className, children, Component, variant, root}) => {
    const css = `
        ${root} {
            color: ${variant === 'primary' ? 'red' : 'blue'};
        }
    `;

    return (
        <Component>
            <style scoped lang="scss">
                {css}
            </style>
            <div className={className({variant})}>{children}</div>
        </Component>
    );
};
