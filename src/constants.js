import {Dimensions} from 'react-native';
export const API_BASE_URL = 'http://localhost:8080/api';
// export const API_BASE_URL = 'http://10.0.2.2:8080/api';
export const ucsdEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@ucsd\.edu$/;

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');
