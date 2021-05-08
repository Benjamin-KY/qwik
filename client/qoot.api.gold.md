## API Report File for "qoot"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { QRL as QRL_2 } from 'client/import/qrl.js';

// @public
export class Component<PROPS, STATE> {
    $host: Element;
    $init(): Promise<void> | void;
    // (undocumented)
    static $new<COMP extends Component<any, any>>(this: {
        $templateQRL: QRL;
        new (...args: any[]): COMP;
    }, hostElement: Element): Promise<COMP>;
    $newState(props: PROPS): Promise<STATE> | STATE;
    $props: PROPS;
    $state: STATE;
    static $templateQRL: QRL;
    constructor(hostElement: Element, props: PROPS, state: STATE | null);
}

// @public
export interface ComponentConstructor<COMP extends Component<any, any>> {
    // (undocumented)
    $templateQRL: QRL;
    // (undocumented)
    new (hostElement: Element, props: ComponentPropsOf<COMP>, state: ComponentStateOf<COMP> | null): COMP;
}

// @public
export type ComponentPropsOf<SERVICE extends Component<any, any>> = SERVICE extends Component<infer PROPS, any> ? PROPS : never;

// @public
export type ComponentStateOf<SERVICE extends Component<any, any>> = SERVICE extends Component<any, infer STATE> ? STATE : never;

// @public
export interface ConcreteType<T, ARGS extends any[] = [...any]> extends Function {
    // (undocumented)
    new (...args: ARGS): T;
}

// @public
export function dirname(path: string): string;

// @public
export function emitEvent(element: HTMLElement, event: Event, url: URL): Promise<any>;

// @public (undocumented)
export interface EventHandler<SELF, ARGS extends any[], RET> {
    // (undocumented)
    $delegate: InjectedFunction<SELF, ARGS, [], RET>;
    // (undocumented)
    (element: HTMLElement, event: Event, url: URL): Promise<RET>;
}

// @public
export class EventService extends Service<any, any> {
    // (undocumented)
    static $props: string[];
    // (undocumented)
    static $qrl: QRL;
    // (undocumented)
    static $type: string;
    constructor(element: Element, event: Event, url: URL, props: Props);
    event: Event;
    // (undocumented)
    static KEY: ServiceKey<EventService>;
    props: Props;
    url: URL;
}

// @public
export function getInjector(element: Element): Injector;

// @public (undocumented)
export function getInjector(element: Element, create: false): Injector | null;

// @public
export function Host(): JSXNode<any>;

// @public
export type HostElements = Element[];

// @public
export interface InjectedFunction<SELF, ARGS extends any[], REST extends any[], RET> {
    $debugStack?: Error;
    $inject: Providers<ARGS>;
    $thisType: ConcreteType<SELF> | null;
    (this: SELF, ...args: [...ARGS, ...REST]): RET;
}

// @public
export function injectEventHandler<SELF, ARGS extends any[], RET>(...args: [
    {
        $templateQRL: QRL;
        new (hostElement: Element, props: any, state: any): SELF;
    } | null,
    ...ARGS,
    (this: SELF, ...args: [...ProviderReturns<ARGS>]) => RET
]): EventHandler<SELF, ARGS, RET>;

// @public
export function injectFunction<ARGS extends any[], REST extends any[], RET>(...args: [...ARGS, (...args: [...ProviderReturns<ARGS>, ...REST]) => RET]): InjectedFunction<null, ARGS, REST, RET>;

// @public
export function injectMethod<SELF, ARGS extends any[], REST extends any[], RET>(...args: [
    ConcreteType<SELF>,
    ...ARGS,
    (this: SELF, ...args: [...ProviderReturns<ARGS>, ...REST]) => RET
]): InjectedFunction<SELF, ARGS, REST, RET>;

// @public
export interface Injector {
    readonly element: Element;
    elementProps: Props;
    getComponent<COMP extends Component<any, any>>(componentType: ComponentConstructor<COMP>): Promise<COMP>;
    getParent(): Injector | null;
    getService<SERVICE extends Service<any, any>>(serviceKey: ServiceKey<SERVICE>, state?: ServiceStateOf<SERVICE>, serviceType?: ServiceConstructor<SERVICE>): ServicePromise<SERVICE>;
    getServiceState<SERVICE extends Service<any, any>>(propsOrKey: ServicePropsOf<SERVICE> | ServiceKey<SERVICE>): Promise<ServiceStateOf<SERVICE>>;
    invoke<SELF, PROVIDERS extends any[], REST extends any[], RET>(fn: InjectedFunction<SELF, PROVIDERS, REST, RET>, self?: SELF | null, ...rest: REST): Promise<RET>;
    releaseService(key: ServiceKey): void;
    serialize(): void;
}

// Warning: (ae-forgotten-export) The symbol "JSXBase" needs to be exported by the entry point index.d.ts
//
// @public
export function jsxDeclareComponent<P>(componentTemplateQrl: QRL, tagName?: string, hostProps?: {
    [property: string]: string | QRL;
}): (props: P & JSXBase) => JSXNode<string>;

// @public (undocumented)
export type JSXFactory = (props: Props) => JSXNode<unknown>;

// @public
export function jsxFactory<T extends string | null | JSXFactory | unknown>(tag: T, props: Props, ...children: any[]): JSXNode<T>;

// @public (undocumented)
export interface JSXNode<T extends string | null | JSXFactory | unknown> {
    // (undocumented)
    children: Array<any>;
    // (undocumented)
    props: Props;
    // (undocumented)
    tag: T;
}

// @public
export function jsxRender(host: Element | Document, jsxNode: JSXNode<unknown>, overrideDocument?: Document): Promise<HostElements>;

// @public
export function markDirty(componentServiceOrElement: Component<any, any> | Service<any, any> | Element): Promise<HostElements>;

// @public
export interface Props {
    // (undocumented)
    [key: string]: string;
}

// @public
export function provideComponentProp(name: string): Provider<string>;

// @public
export function provideComponentProps<T>(): Provider<T>;

// @public
export function provideComponentState<S>(throwIfNotFound: false): Provider<S | undefined>;

// @public (undocumented)
export function provideComponentState<S>(throwIfNotFound?: boolean): Provider<S>;

// @public
export function provideElement(): Provider<Element>;

// @public
export function provideEvent(): Provider<Event>;

// @public
export function provideInjector(): Provider<Injector>;

// @public
export function provideProviderOf<T>(provider: Provider<T>): Provider<() => Promise<T>>;

// @public
export function provideQrlExp<T>(parameterName: string): Provider<T>;

// @public
export type Provider<T> = (injector: Injector) => T | Promise<T>;

// @public
export type ProviderReturns<ARGS extends any[]> = {
    [K in keyof ARGS]: ARGS[K] extends Provider<infer U> ? U : never;
};

// @public
export type Providers<ARGS extends any[]> = {
    [K in keyof ARGS]: Provider<ARGS[K]>;
};

// @public
export function provideService<SERVICE extends Service<any, any>>(id: ServiceKey<SERVICE> | Provider<ServiceKey<SERVICE>>): Provider<SERVICE>;

// @public
export function provideServiceState<SERVICE extends Service<any, any>>(id: ServiceKey<SERVICE> | Provider<ServiceKey<SERVICE>>): Provider<ServiceStateOf<SERVICE>>;

// @public
export function provideUrlProp(parameterName: string): Provider<string | null>;

// @public
export interface QConfig {
    baseURI: string;
    // (undocumented)
    protocol: QRLProtocolMap;
}

// @public
export function qImport<T>(base: Element | Document | string | QConfig, url: string | QRL<T> | URL): T | Promise<T>;

// @public
export function QRL<T = any>(messageParts: TemplateStringsArray, ...expressions: readonly any[]): QRL<T>;

// @public
export interface QRL<T = any> {
    // (undocumented)
    __brand__: 'QRL';
    // (undocumented)
    __brand__T__: T;
}

// @public
export interface QRLProtocolMap {
    // (undocumented)
    [protocol: string]: string;
}

// @public
export function serializeState(element: Element | Document): void;

// @public
export class Service<PROPS, STATE> {
    static $attachService<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, element: Element): void;
    static $attachServiceState<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, host: Element, propsOrKey: ServicePropsOf<SERVICE> | ServiceKey, state: ServiceStateOf<SERVICE> | null): void;
    // (undocumented)
    readonly $element: Element;
    static $hydrate<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, element: Element, propsOrKey: ServicePropsOf<SERVICE> | ServiceKey, state?: ServiceStateOf<SERVICE>): ServicePromise<SERVICE>;
    $init(): Promise<void>;
    $invokeQRL<ARGS extends any[], RET>(qrl: QRL<(...args: ARGS) => RET>, ...args: ARGS): Promise<RET>;
    // (undocumented)
    readonly $key: ServiceKey<any>;
    static $keyProps: string[];
    static $keyToProps<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, key: ServiceKey): ServicePropsOf<SERVICE>;
    $newState(keyProps: PROPS): Promise<STATE>;
    // (undocumented)
    readonly $props: PROPS;
    static $propsToKey<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, props: ServicePropsOf<SERVICE>): ServiceKey;
    static $qrl: QRL;
    $release(): void;
    // (undocumented)
    readonly $state: STATE;
    static get $type(): string;
    static set $type(name: string);
    constructor(element: Element, props: PROPS, state: STATE | null);
}

// @public
export interface ServiceConstructor<SERVICE extends Service<any, any> = any> {
    $attachService<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, element: Element): void;
    $attachServiceState<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, host: Element, propsOrKey: ServicePropsOf<SERVICE> | ServiceKey, state: ServiceStateOf<SERVICE> | null): void;
    $hydrate<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, element: Element, propsOrKey: ServicePropsOf<SERVICE> | ServiceKey, state?: ServiceStateOf<SERVICE>): ServicePromise<SERVICE>;
    readonly $keyProps: string[];
    $keyToProps<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, key: ServiceKey<SERVICE>): ServicePropsOf<SERVICE>;
    $propsToKey<SERVICE extends Service<any, any>>(this: {
        new (...args: any[]): SERVICE;
    }, props: ServicePropsOf<SERVICE>): ServiceKey;
    readonly $qrl: QRL;
    readonly $type: string;
    // (undocumented)
    new (hostElement: Element, props: any, // TODO: should be: ServicePropsOf<SERVICE>,
    state: any): SERVICE;
}

// @public
export interface ServiceKey<SERVICE = Service<any, any>> {
    // (undocumented)
    __brand__: SERVICE;
}

// @public
export interface ServicePromise<SERVICE extends Service<any, any>> extends Promise<SERVICE> {
    $key: ServiceKey<SERVICE>;
}

// @public
export type ServicePropsOf<SERVICE extends Service<any, any>> = SERVICE extends Service<infer PROPS, any> ? PROPS : never;

// @public
export function serviceStateKey<SERVICE extends Service<any, any>>(value: SERVICE | ServiceStateOf<SERVICE>): ServiceKey<SERVICE>;

// @public
export type ServiceStateOf<SERVICE extends Service<any, any>> = SERVICE extends Service<any, infer STATE> ? STATE : never;

// @public
export function setConfig(config: QConfig): void;

// @public
export function toServiceKey<SERVICE extends Service<any, any>>(key: string): ServiceKey<SERVICE>;


// (No @packageDocumentation comment for this package)

```