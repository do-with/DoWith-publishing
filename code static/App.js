/**
 * 첫 로딩화면(splash 화면 만들때 혹시나 도움 될까..!)
 */

import Root from './screen/RootNavigator';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'; /** 추가 **/

const App  = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide(); /** 추가 **/
      }, 2000); /** 스플래시 시간 조절 (2초) **/
    } catch(e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });
  
  return (
    <Root/>
  );
};

export default App;


/**
 * 설치
 *    npm i react-native-splash-screen --save
 * 
 * android/app/src/main/ 맨 하단에 있는 MainActivity.java 수정하기
 *    import org.devio.rn.splashscreen.SplashScreen; 추가
 *    SplashScreen.show(this, R.style.SplashScreenTheme); MainActivity class에 onCreate 함수에 추가 추가
 * 
 * splash 이미지 만들기
 * react-native set-splash --path [path-to-image] --resize [contain|cover|center] --background ["background-color"]
 *      npm install --save-dev @bam.tech/react-native-make
 *      react-native set-splash --path ./src/Assets/images/splash.jpg --resize center --background "#E4EEF8"
 */