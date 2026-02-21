import type { PluginInitializerContext } from '@kbn/core/server';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export async function plugin(initializerContext: PluginInitializerContext) {
  const { HelloWorldPlugin } = await import('./plugin');
  return new HelloWorldPlugin(initializerContext);
}

export type { HelloWorldPluginSetup, HelloWorldPluginStart } from './types';
