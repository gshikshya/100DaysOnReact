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
    console.log('GetDerivedStateFromProps B');
    return null;
  }

  shouldComponentUpdate() {
    console.log('ShouldComponentUpdate B');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate B');
    return null;
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate B');
  }

  render() {
    console.log('LifeCycleB Render');
    return <div>LifecycleB</div>;
  }
}

export default LifeCycleB;
