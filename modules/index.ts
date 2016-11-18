import Link, { LinkProps } from './lib/Link'
import Match, { MatchProps } from './lib/Match'
import Miss, { MissProps } from './lib/Miss'
import NavigationPrompt, { NavigationPromptProps } from './lib/NavigationPrompt'
import Redirect, { RedirectProps } from './lib/Redirect'

// High-level wrappers
import BrowserRouter, { BrowserRouterProps } from './lib/BrowserRouter'
import HashRouter, { HashRouterProps } from './lib/HashRouter'
import MemoryRouter, { MemoryRouterProps } from './lib/MemoryRouter'
import ServerRouter, { ServerRouterProps } from './lib/ServerRouter'

// Low-level building block
import StaticRouter, { StaticRouterProps } from './lib/StaticRouter'

// Util for server rendering "pre-render match"
import matchPattern from './lib/matchPattern'

// Util for server rendering context
import createServerRenderContext from './lib/createServerRenderContext'

// React PropTypes for all Components
import * as PropTypes from './lib/PropTypes'


export {
    Link,
    LinkProps,
    Match,
    MatchProps,
    Miss,
    MissProps,
    NavigationPrompt,
    NavigationPromptProps,
    Redirect,
    RedirectProps,
    BrowserRouter,
    BrowserRouterProps,
    HashRouter,
    HashRouterProps,
    MemoryRouter,
    MemoryRouterProps,
    ServerRouter,
    ServerRouterProps,
    StaticRouter,
    StaticRouterProps,
    matchPattern,
    createServerRenderContext,
    PropTypes
}
