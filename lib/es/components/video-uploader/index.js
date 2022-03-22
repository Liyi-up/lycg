import "./video-uploader.css";
import { VideoUploader } from './video-uploader';
import Dialog from './video-player-dialog';
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component';
export default attachPropertiesToComponent(VideoUploader, {
  Dialog: Dialog
});