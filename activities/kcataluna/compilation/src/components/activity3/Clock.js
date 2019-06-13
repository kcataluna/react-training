import React from 'react';

import Moment from 'moment';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {datetime: this.getDatetime()};
    }

    getDatetime = () => {
        return Moment().format('h:mm:ss A [·] dddd, D MMMM YYYY');
    }

    render = () => {
        const style = {fontSize: 'calc(10px + 2vmin)'};
        return (
            <h4 className="text-white text-center" style={style}>
                {this.state.datetime}
            </h4>
        );
    }

    componentDidMount = () => {
        this.interval = setInterval(() => {
            let datetime = this.getDatetime();
            this.setState({datetime})
        }, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
}

export default Clock;