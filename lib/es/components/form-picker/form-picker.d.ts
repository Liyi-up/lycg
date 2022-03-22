import React from 'react';
import { PickerColumn, PickerProps, PickerValue } from 'antd-mobile/es/components/picker';
export declare type ExtraProps = {
    columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[]);
    value?: PickerValue[];
    onChange?(values: PickerValue[]): void;
};
export declare type FormPickerProps = Omit<PickerProps, 'value' | 'visible' | 'columns' | 'onClose' | 'onConfirm' | 'children'> & ExtraProps;
export declare const FormPicker: React.FC<FormPickerProps>;
