import { HelloWorldPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new HelloWorldPlugin();
}
export type { HelloWorldPluginSetup, HelloWorldPluginStart } from './types';
