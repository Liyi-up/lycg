import React from 'react';
export declare type LinkSiderBarProps = {
    tabs: tabItem[];
    defaultKey?: string;
    renderItem: (val: tabItem) => React.ReactNode;
};
export declare type tabItem = {
    key: string;
    title: string;
};
declare const _default: React.NamedExoticComponent<LinkSiderBarProps>;
export default _default;
