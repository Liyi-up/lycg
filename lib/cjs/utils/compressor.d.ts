/**
 * 图片压缩，添加水印，手机端拍照图片回正
 * @param file 处理的 File 文件
 * @param watermark 添加的水印文字
 * @param quality 压缩图片的质量 默认为 0.8
 * @returns Blob 格式的文件
 */
export declare function compress(file: File, watermark: string, quality: number): Promise<File>;
