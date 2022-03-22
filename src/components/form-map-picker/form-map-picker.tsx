import React, { useState, useEffect, useRef } from 'react';
import { RightOutline } from 'antd-mobile-icons';
import { Dialog } from 'antd-mobile';
import { getAddressName, getLocation } from '../../utils/amap';
import isEmpty from 'lodash/isEmpty';

const classPrefix = `ly-form-map-picker`;

export type LocationType = {
  lng?: string;
  lat?: string;
};

export type FormMapPickerProps = {
  placeholder?: string;
  title?: string;
  zoom?: number;

  value?: LocationType;
  onChange?(values: LocationType): void;
};

export const FormMapPicker: React.FC<FormMapPickerProps> = (props) => {
  const { placeholder = '请选择', title = '选择您的点位', value = {}, onChange, zoom = 16 } = props;
  const [text, setText] = useState(placeholder);
  const locationRef = useRef<LocationType>(value);

  useEffect(() => {
    if (isEmpty(value)) {
      getLocation().then((res) => {
        locationRef.current = res;
      });
    } else {
      getAddressName(value as Required<LocationType>).then((res) => {
        setText(res);
      });
    }
  }, [value]);

  const drawMap = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker: any) {
      const map = new AMap.Map('container', {
        zoom,
        scrollWheel: false,
        center: [locationRef.current.lng, locationRef.current.lat],
      });

      const positionPicker = new PositionPicker({
        mode: 'dragMarker',
        map: map,
      });

      positionPicker.on('success', function (result: { address: string; position: LocationType }) {
        map.setCenter(result.position);
        locationRef.current = { lng: result.position.lng, lat: result.position.lat };
      });

      positionPicker.start();
      map.panBy(0, 1);

      map.addControl(
        new AMap.ToolBar({
          liteStyle: true,
        }),
      );
    });
  };

  const DialogContent = () => {
    useEffect(() => {
      drawMap();
    }, []);

    return (
      <>
        <div className={`${classPrefix}-subtitle`}>拖动图标，选择您的点位</div>
        <div id="container" className={`${classPrefix}-dialog`}></div>
      </>
    );
  };

  const handleClick = () => {
    Dialog.confirm({
      title,
      content: <DialogContent />,
      onConfirm: async () => {
        getAddressName(locationRef.current as Required<LocationType>).then((res) => {
          setText(res);
        });
        onChange?.(locationRef.current);
      },
    });
  };

  return (
    <div className={`${classPrefix}`} onClick={() => handleClick()}>
      <div className={`${classPrefix}-content`}>
        <div className={`${classPrefix}-text`}>{text}</div>
        <RightOutline className={`${classPrefix}-icon`} color="var(--adm-color-weak)" />
      </div>
    </div>
  );
};
