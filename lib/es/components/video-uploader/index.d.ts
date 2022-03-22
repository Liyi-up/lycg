/// <reference types="react" />
import './video-uploader.less';
export type { VideoUploaderProps } from './video-uploader';
declare const _default: import("react").FC<import("./video-uploader").VideoUploaderProps> & {
    Dialog: (props: {
        url: string;
        title?: string | undefined;
    }) => void;
};
export default _default;
