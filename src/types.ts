import { State as RouteState, Router as Router5, Route } from 'router5';
import { DeepReadonly } from 'ts-essentials';

export interface SharedRouterValue<Deps = unknown, Routes = unknown> {
  router5: Router5<Deps>,
  routes: Routes,
}

export interface RouterContextValue {
  getRoute(): RouteState,

  /**
   * Often you only need to listen to changes in the route name, instead of the
   * entire route. Also splits the route into its components for you.
   */
  getRouteName(): string[],

  /**
   * Use this to make your own custom 'Link', buttons, navigation, etc.
   */
  router: SharedRouterValue,
}

export type RoutesLike<Deps> = DeepReadonly<Route<Deps>[]> ;
