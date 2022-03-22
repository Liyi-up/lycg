import React, { useEffect, useRef, useState } from 'react';
import { CloseOutline } from 'antd-mobile-icons';
import styles from './index.less';
import './reset.less';
import provinces from './data.json';

const markerIcon = {
  image: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
  size: [17, 22],
};

const starIcon = {
  image: 'https://vdata.amap.com/icons/b18/1/2.png',
  size: [23, 23],
};

const MarkerPage: React.FC = () => {
  const mapRef = useRef<any>();
  const layerRef = useRef<any>();
  const oldMarkerRef = useRef<any>();

  const [showInfo, setShowInfo] = useState<null | boolean>(null);
  const [info, setInfo] = useState<any>({});

  useEffect(() => {
    mapRef.current = new AMap.Map('container', {
      center: [120.304437, 30.394357],
      zoom: 4,
    });
    getData();
  }, []);

  const getData = () => {
    layerRef.current = new AMap.LabelsLayer({
      collision: false, // 开启之后会有图标聚合的效果
    });

    mapRef.current.add(layerRef.current);

    provinces.forEach((el) => {
      const marker = {
        position: el.center,
        icon: markerIcon,
      };

      const labelMarker = new AMap.LabelMarker(marker);

      labelMarker.setExtData(el); // 把其他的属性放到这里面，比如 id

      labelMarker.on('click', () => {
        markerClick(labelMarker);
      });

      layerRef.current.add(labelMarker);
    });
  };

  const markerClick = (e: any) => {
    const info = e.getExtData();
    if (info.name == oldMarkerRef.current?.getExtData?.()?.name) {
      return;
    }
    if (oldMarkerRef.current) {
      oldMarkerRef.current.setIcon(markerIcon);
    }
    e.setIcon(starIcon);
    getInfo(info);
    oldMarkerRef.current = e;
  };

  /**
   * 这里查询点击到的 marker 详情
   */
  const getInfo = (data: any) => {
    setInfo(data);
    setShowInfo(true);
  };

  const handleClose = () => {
    setShowInfo(false);
    oldMarkerRef.current.setIcon(markerIcon);
    oldMarkerRef.current = null;
  };

  return (
    <div className={styles.page}>
      <div id="container" className={styles.map}></div>
      <div className={`${styles.info} ${showInfo === null ? '' : showInfo ? styles.heighter : styles.smaller}`}>
        <div
          className={styles.close}
          onClick={() => {
            handleClose();
          }}
        >
          <CloseOutline />
        </div>
        <div>
          <div>{info?.name}</div>
          <div>{info?.center}</div>
        </div>
      </div>
    </div>
  );
};
export default MarkerPage;
