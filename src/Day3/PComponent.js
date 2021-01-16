import React, { PureComponent } from 'react';
import PureComp from './PureComp';
import RegComponent from './RegComponent';

export class PComponent extends PureComponent {
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
    console.log('******PComponent******');
    return (
      <div>
        Parent Component
        <RegComponent name={this.props.name}></RegComponent>
        <PureComp name={this.props.name}></PureComp>
      </div>
    );
  }
}

export default PComponent;
