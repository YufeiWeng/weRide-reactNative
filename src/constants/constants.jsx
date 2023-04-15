import {Dimensions} from 'react-native';
export const API_BASE_URL = 'http://localhost:8080/api';
export const USER_SERVICE_API = API_BASE_URL + '/user-service';

export const ucsdEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@ucsd\.edu$/;

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');
