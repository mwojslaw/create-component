import * as React from 'react';
import {RenderProps, StyleProps, createComponent} from './@create-component';

type ButtonProps = {
    variant: 'primary' | 'secondary';
};

const Render: React.FC<RenderProps<ButtonProps>> = ({className, children, variant}) => {
    return <div className={className({variant})}>{children}</div>;
};

const Style: React.FC<StyleProps<ButtonProps>> = ({variant, root}) => {
    const css = `
        ${root} {
            color: ${variant === 'primary' ? 'red' : 'blue'};
        }
    `;

    return (
        <style scoped lang="scss">
            {css}
        </style>
    );
};

export const Button = createComponent({
    Render,
    Style,
});
