import CryptoJS from 'crypto-js';
import { camelCase } from 'lodash';

const { REACT_APP_SECRET_KEY } = process.env;

export const validatePassword = (value) => {
  if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value))) {
    return Promise.reject(new Error('The Password must contain 1 Capital Character, 1 Numeric Character, 1 Special Character, and be 8 Characters Long!'));
  }

  return Promise.resolve();
};

export const validateConfirmPassword = (getFieldValue, value) => {
  if (!value || getFieldValue('password') === value) {
    return Promise.resolve();
  }

  return Promise.reject(new Error('The password that you entered does not match! Password'));
};

export const encryptData = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), REACT_APP_SECRET_KEY);
  return encryptedData.toString();
};

export const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, REACT_APP_SECRET_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

export const convertHeaderToLowerCase = (header) => {
  const mappedHeaders = header.map((column) => camelCase(column.trim()));
  return mappedHeaders;
};

export default {
  convertHeaderToLowerCase,
  validatePassword,
  validateConfirmPassword,
  encryptData,
  decryptData
};
