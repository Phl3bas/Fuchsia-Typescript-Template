import { h } from '@fuchsiajs/core';
import { Controller, Route, Request } from '@fuchsiajs/common';

export const AppController = () => {
  const HelloWorld = async (): Promise<string> => {
    return '<h1>Hello World</h1>';
  };

  return (
    <Controller path='/'>
      <Route method='get' path='/' callback={HelloWorld} />
    </Controller>
  );
};
