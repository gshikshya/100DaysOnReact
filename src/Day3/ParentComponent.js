import React, { Component } from 'react';
import MemoComponent from './MemoComponent';
// import PureComp from './PureComp';
// import RegComponent from './RegComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Shikshya',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Shikshya',
      });
    }, 2000);
  }

  render() {
    console.log('******Parent******');
    return (
      <div>
        Parent Component
        {/* <RegComponent name={this.state.name}></RegComponent>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    );
  }
}

export default ParentComponent;
