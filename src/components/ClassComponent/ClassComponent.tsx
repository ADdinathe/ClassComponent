import * as React from 'react';

interface IWelcomeDefaultProps {
  name?: string;
}

interface IWelcomeProps extends IWelcomeDefaultProps {
  children: React.ReactNode;
}

interface IState {
  count: number;
  timer: number;
}

type DefaultProps = Readonly<IWelcomeDefaultProps>;
type Props = Readonly<IWelcomeProps>;

class Welcome extends React.Component<Props, IState> {
  public static readonly defaultProps: DefaultProps = {
    name: 'defaultName',
  };
  private timefunc: NodeJS.Timer | null;

  constructor(props: Props) {
    super(props);

    this.timefunc = null;
    this.state = {
      count: 0,
      timer: 0,
    };
    this.func2 = this.func2.bind(this);
    console.log('constructor');
  }

  // Increment = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  Increment = () => {
    this.setState(
      (prevState): IState => {
        return {
          count: prevState.count + 1,
          timer: prevState.timer,
        };
      },
      () => {
        console.log('Increment');
      }
    );
  };
  func() {
    console.log('this', this);
  }
  func2() {
    console.log('this', this);
  }

  Decrement = () => {
    console.log('this', this);
    this.setState({ count: this.state.count - 1 });
  };
  // Decrement = () => {
  //   // eslint-disable-next-line react/no-direct-mutation-state
  //   this.state = {
  //     count: this.state.count + 1,
  //     timer: this.state.timer,
  //   };
  // };

  Timer = () => {
    this.setState((prevState): IState => {
      return {
        count: prevState.count,
        timer: prevState.timer + 1,
      };
    });
  };
  Stop = () => {
    if (this.timefunc) {
      clearInterval(this.timefunc);
    }
  };

  componentWillMount() {
    console.log('componentWillMount');
  }

  // запускаем таймер при первом маунте приложения
  componentDidMount() {
    console.log('componentDidMount');
    this.timefunc = setInterval(this.Timer, 1000);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate', this.state);
  }

  // просто отследиваем обновления приложения
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state);
  }

  // уничтожаем объект интервала, при анмаунте компонента
  componentWillUnMount() {
    console.log('componentWillUnMount', this.state);
    if (this.timefunc) {
      clearInterval(this.timefunc);
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: IState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillReceiveProps(nextProps: Props) {
    console.log('componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate и getDerivedStateFromProps я не смотрел там шото сложна

  render(): React.ReactNode {
    console.log('render');
    return (
      <>
        <h1>{this.props.children}</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.Increment();
            this.Increment();
          }}
        >
          ++count
        </button>
        <button onClick={this.Decrement}>--count</button>
        <button onClick={this.Stop}>Stop</button>
        <button onClick={this.func}>context undefined</button>
        <button onClick={this.func.bind(this)}>context this</button>
        <button onClick={this.func2}>binded in constructor</button>
        <h1>{this.state.timer}</h1>
      </>
    );
  }
}

export default React.memo(Welcome);
export { IWelcomeProps };
