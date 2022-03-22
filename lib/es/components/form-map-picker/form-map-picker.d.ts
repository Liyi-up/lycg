import React from 'react';
export declare type LocationType = {
    lng?: string;
    lat?: string;
};
export declare type FormMapPickerProps = {
    placeholder?: string;
    title?: string;
    zoom?: number;
    value?: LocationType;
    onChange?(values: LocationType): void;
};
export declare const FormMapPicker: React.FC<FormMapPickerProps>;
