type DefaultStyleProperties = Record<string, unknown>;

export type ClassName<S = DefaultStyleProperties> = (variables: S) => string;

export type RenderProps<T, S = DefaultStyleProperties> = {
    className: ClassName<S>;
} & T &
    S;

export type StyleProps<T, S = DefaultStyleProperties> = {
    root: string;
} & T &
    S;

type CreateComponentConfig<T, S = DefaultStyleProperties> = {
    Render: React.ComponentType<RenderProps<T, S>>;
    Style: React.ComponentType<StyleProps<T, S>>;
};

export const createComponent = <T, S = DefaultStyleProperties>(config: CreateComponentConfig<T, S>): React.ComponentType<T> => {
    return null;
};
