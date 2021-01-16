// Component Updating LifeCycle Methods

import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentUpdating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Shikshya',
    };
    this.changeState = this.changeState.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('GetDerivedStateFromProps A');
    return null;
  }

  shouldComponentUpdate() {
    console.log('ShouldComponentUpdate A');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate A');
    return null;
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate A');
  }

  changeState() {
    this.setState({
      name: 'CodeEvolution',
    });
  }

  render() {
    console.log('Render Method A');

    return (
      <div>
        Component Updating : A
        <div>
          <button onClick={this.changeState}>ChangeState</button>;
        </div>
        <ComponentB></ComponentB>
      </div>
    );
  }
}

export default ComponentUpdating;
