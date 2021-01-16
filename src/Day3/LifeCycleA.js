// component Mounting Lifecycle Methods
import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Shikshya',
    };
    console.log('LifeCycleA Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA getDerivedStatesFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleA ComponentDidMount');
  }

  render() {
    console.log('LifeCycleA Render');
    return (
      <div>
        <div> LifecycleA </div>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA;
