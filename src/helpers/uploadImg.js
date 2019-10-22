import axios from 'axios';

export default function uploadImg(img) {
    const fd = new FormData();
    fd.append('upload_preset', 'qzlyjodo');
    fd.append('tags', 'browser_upload');
    fd.append('file', img);
    return axios.post('https://api.cloudinary.com/v1_1/df9pnnowd/upload', fd, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
}