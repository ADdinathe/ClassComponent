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
  }

  state = {
    count: 0,
    timer: 0,
  };

  Increment = () => {
    this.setState((prevState): IState => {
      return {
        count: prevState.count + 1,
        timer: prevState.timer,
      };
    });
  };

  Decrement = () => {
    this.setState((prevState): IState => {
      return {
        count: prevState.count - 1,
        timer: prevState.timer,
      };
    });
  };

  Timer = () => {
    this.setState((prevState): IState => {
      return {
        count: prevState.count,
        timer: prevState.timer + 1,
      };
    });
  };

  // запускаем таймер при первом маунте приложения
  componentDidMount() {
    console.log('componentDidMount');
    this.timefunc = setInterval(this.Timer, 1000);
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

  // shouldComponentUpdate и getDerivedStateFromProps я не смотрел там шото сложна

  render(): React.ReactNode {
    return (
      <>
        <h1>{this.props.children}</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>++count</button>
        <button onClick={this.Decrement}>--count</button>
        <h1>{this.state.timer}</h1>
      </>
    );
  }
}

export default React.memo(Welcome);
export { IWelcomeProps };
