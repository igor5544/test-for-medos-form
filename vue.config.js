module.exports = {
  publicPath: '/test-for-medos-form/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                  @import "@/styles/styles.scss";
              `
      }
    }
  }
}