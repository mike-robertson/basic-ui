declare module 'react-jss' {
  declare type StatelessComponent<P> = (props: P) => ?React$Element<any>;


  declare type Classes<CSS> = {
    [classname: $Keys<CSS>]: string,
  };

  declare type AddedProps<CSS> = {
    classes: Classes<CSS>,
    sheet: {
      attached: boolean,
      classes: Classes<CSS>,
      deployed: boolean,
      linked: boolean,
      options: Object,
      renderer: mixed,
      rules: mixed,
    },
  };


  declare type Injector<P, Def, S, CSS> = {
    (component: StatelessComponent<P>): Class<React$Component<void, $Diff<P, AddedProps<CSS>>, void>>;
    <Def, St>(component: Class<React$Component<Def, P, St>>): Class<React$Component<void, $Diff<P, AddedProps<CSS>>, void>>;
  };

  declare function injectSheet<OP, Def, S, CSS>(
    CSS: CSS
  ): Injector<OP, Def, S, CSS>;

  declare module.exports: typeof injectSheet;
}
