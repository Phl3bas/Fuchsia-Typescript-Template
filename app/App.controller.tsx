import { JSX } from '@fuchsiajs/core';
import { Controller, Route, Request } from '@fuchsiajs/common';

export const AppController = () => {
  const HelloWorld = async (): Promise<any> => {
    return { title: "FuchsiaJS" };
  };

  return (
    <Controller path='/'>
      <Route render="index" method='get' path='/' callback={HelloWorld} />
    </Controller>
  );
};
