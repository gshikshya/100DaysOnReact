import React, { Component } from 'react';

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Shikshya',
    };
    console.log('LifeCycleB Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB getDerivedStatesFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleB ComponentDidMount');
  }

  render() {
    console.log('LifeCycleB Render');
    return <div>LifecycleB</div>;
  }
}

export default LifeCycleB;
