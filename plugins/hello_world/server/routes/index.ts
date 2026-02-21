import type { IRouter } from '@kbn/core/server';

export function defineRoutes(router: IRouter) {
  router.get(
    {
      path: '/api/hello_world/example',
      validate: false,
      security: {
        authz: {
          enabled: false,
          reason: 'This route is opted out from authorization (hello world example).',
        },
      },
    },
    async (context, request, response) => {
      return response.ok({
        body: {
          time: new Date().toISOString(),
        },
      });
    }
  );
}
