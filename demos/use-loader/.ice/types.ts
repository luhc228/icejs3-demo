import type { AppConfig, GetAppData, RouteConfig as DefaultRouteConfig } from '@ice/runtime';

type ExtendsRouteConfig = {};
type PageConfig = DefaultRouteConfig<ExtendsRouteConfig>;

export type {
  AppConfig,
  GetAppData,
  PageConfig,
};