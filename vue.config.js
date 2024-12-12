const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  // GitHub Pages 배포를 위한 publicPath 설정 추가
  publicPath: process.env.NODE_ENV === 'production'
    ? '/argos-classroom-vue/'  // GitHub 저장소 이름으로 변경하세요
    : '/',
    
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
  }
});