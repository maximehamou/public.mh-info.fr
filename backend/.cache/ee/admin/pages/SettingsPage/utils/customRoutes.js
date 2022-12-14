const ssoRoutes = strapi.features.isEnabled(strapi.features.SSO)
  ? [
      {
        async Component() {
          const component = await import(
            /* webpackChunkName: "sso-settings-page" */ '../SingleSignOn'
          );

          return component;
        },
        to: '/settings/single-sign-on',
        exact: true,
      },
    ]
  : [];

const customRoutes = [...ssoRoutes];

export default customRoutes;
