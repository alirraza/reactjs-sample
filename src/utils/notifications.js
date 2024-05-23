import { message } from 'antd';

const openNotification = (type, content, duration = 3) => {
  message.open({
    type,
    content,
    duration
  });
};

export const successNotification = (content, duration) => {
  openNotification('success', content, duration);
};

export const errorNotification = (content, duration) => {
  openNotification('error', content, duration);
};

export const infoNotification = (content, duration) => {
  openNotification('info', content, duration);
};

export const warningNotification = (content, duration) => {
  openNotification('warning', content, duration);
};
