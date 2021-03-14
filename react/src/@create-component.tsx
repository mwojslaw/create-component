import * as React from 'react';
export type ClassName = (variables: Record<string, unknown>) => string;

export type RenderProps<T> = {
    className: ClassName;
} & T;

export type StyleProps<T> = {
    root: string;
} & T;

type CreateComponentConfig = {
    Render: React.ComponentType<any>;
    Style: React.ComponentType<any>;
};

export const createComponent = (config: CreateComponentConfig): React.ComponentType => {
    return null;
};

export type CreateComponent<T> = React.ComponentType<RenderProps<T> & StyleProps<T> & {Component: React.ComponentType}>;
