import { JSX, FuchsiaFactory, FuchsiaApplication } from '@fuchsiajs/core';
import { AppController } from './App.controller';
import { TemplateRenderer } from '@fuchsiajs/template'

const main = async () => {
  const app: FuchsiaApplication = await FuchsiaFactory.create({
    controllers: [<AppController />],
  });
  await app.setTemplateEngine('html',TemplateRenderer)
  await app.listen();
};

main();
