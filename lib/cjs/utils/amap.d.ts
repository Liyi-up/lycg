declare type LocationType = {
    lng: string;
    lat: string;
};
export declare function getLocation(): Promise<LocationType>;
/**
 * 经纬度逆地址解析，获取地址信息
 * @param location { lng: string, lat: string }
 */
export declare function getAddressName(location: LocationType): Promise<string>;
export {};
