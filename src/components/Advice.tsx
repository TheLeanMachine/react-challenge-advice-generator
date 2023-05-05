import React, { Component } from 'react';

type AdviceProps = {
    adviceId: string,
    message: string
};

type AdviceState = {
    adviceId: string,
    message: string
};

export class Advice extends Component<AdviceProps, AdviceState> {
    constructor(props: AdviceProps) {        
        super(props);
    }

    render(): any {
        return (
            <>
                <h1 className="uppercase text-teal-300 py-5">Advice #{this.props.adviceId}</h1>
                <div className="p-5 text-white font-bold">
                    &quot;{this.props.message}&quot;
                </div>
            </>
        )
    }
}