import * as React from 'react';
import {RenderProps, StyleProps, createComponent} from './@create-component';
import {Button} from './button';

type CounterProps = {};

type CounterStyleProps = {value: number};

const Render: React.FC<RenderProps<CounterProps, CounterStyleProps>> = ({className}) => {
    const [counter, setCounter] = React.useState(0);

    const increment = React.useCallback(() => setCounter(counter + 1), [counter]);

    return (
        <div className={className({value: counter})}>
            <div className="counter-value">{counter}</div>
            <Button onClick={increment} variant="primary">
                +
            </Button>
        </div>
    );
};

const Style: React.FC<StyleProps<CounterProps, CounterStyleProps>> = ({root, value}) => {
    const css = `
        ${root} {
            .counter-value: ${value > 10 ? 'red' : 'black'}; 
        }
    `;

    return (
        <style scoped lang="scss">
            {css}
        </style>
    );
};

export const Counter = createComponent({
    Render,
    Style,
});
