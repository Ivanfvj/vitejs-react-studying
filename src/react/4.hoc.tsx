import React, { ReactElement } from 'react';

export default function ComponentHOC(props: { children: ReactElement }) {
  return (
    <div>
      <ul>
        <li>Can inject props</li>
        <li>Alternative and enhance to mixins</li>
      </ul>
    </div>
  );
}

interface DataSource {}

export function withClass(
  WrappedComponent: ReactElement,
  selectData: (datasource: any, props: any) => void
) {
  // returns anotherComponent
  return class extends React.Component {
    constructor(props: any) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      });
    }

    render() {
      // ... y renderiza el componente envuelto con los datos frescos!
      // Toma nota de que pasamos cualquier prop adicional
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
