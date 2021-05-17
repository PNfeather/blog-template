module.exports = {
	publicPath: './',
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '这是标题'
    }
  },
}
