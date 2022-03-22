import './video-uploader.less';
import { VideoUploader } from './video-uploader';
export type { VideoUploaderProps } from './video-uploader';
import Dialog from './video-player-dialog';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';

export default attachPropertiesToComponent(VideoUploader, {
  Dialog,
});
