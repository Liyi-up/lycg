import React from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
export declare type PreviewProps = {
    show: boolean;
    url: string;
    bodyStyle?: React.CSSProperties;
    title?: string;
    onClose?(state: boolean): void;
};
export declare const Preview: React.FC<PreviewProps>;
