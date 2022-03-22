import React, { useState } from 'react';
import { PickerColumn, PickerProps, PickerValue } from 'antd-mobile/es/components/picker';
import { RightOutline } from 'antd-mobile-icons';
import { Picker } from 'antd-mobile';

const classPrefix = `ly-form-picker`;

export type ExtraProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[]);

  value?: PickerValue[];
  onChange?(values: PickerValue[]): void;
};

export type FormPickerProps = Omit<
  PickerProps,
  'value' | 'visible' | 'columns' | 'onClose' | 'onConfirm' | 'children'
> &
  ExtraProps;

const FormPickerContent: React.FC = (props) => {
  return (
    <div className={`${classPrefix}-content`}>
      {props.children}
      <RightOutline className={`${classPrefix}-icon`} color="var(--adm-color-weak)" />
    </div>
  );
};

export const FormPicker: React.FC<FormPickerProps> = (props) => {
  const { columns, onChange, value, ...otherProps } = props;
  const [visible, setVisible] = useState(false);
  return (
    <div className={classPrefix} onClick={() => setVisible(true)}>
      <Picker
        {...otherProps}
        value={value}
        visible={visible}
        columns={columns}
        onClose={() => setVisible(false)}
        onConfirm={(item) => {
          onChange?.(item);
        }}
      >
        {(items) => {
          if (items.every((item) => item === null)) {
            return (
              <FormPickerContent>
                <div className={`${classPrefix}-text`}>请选择</div>
              </FormPickerContent>
            );
          } else {
            return (
              <FormPickerContent>
                <div className={`${classPrefix}-text`}>{items.map((item) => item?.label)}</div>
              </FormPickerContent>
            );
          }
        }}
      </Picker>
    </div>
  );
};
