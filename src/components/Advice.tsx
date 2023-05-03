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

    componentWillMount(): void {
        this.setState({
            adviceId: this.props.adviceId,
            message: this.props.message
        });
    }

    render(): any {
        return (
            <>
                <h1 className="uppercase text-teal-300 py-5">Advice #{this.state.adviceId}</h1>
                <div className="p-5 text-white font-bold">
                    &quot;{this.state.message}&quot;
                </div>
            </>
        )
    }
}