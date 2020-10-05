import { h, FuchsiaFactory, FuchsiaApplication } from '@fuchsiajs/core';
import { AppController } from './App.controller';

const main = async () => {
  const app: FuchsiaApplication = await FuchsiaFactory.create({
    controllers: [<AppController />],
  });

  await app.listen();
};

main();
