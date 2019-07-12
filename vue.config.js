var path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: "./",
    chainWebpack: config => {
        // key,value自行定义，比如.set('@', resolve('src/components'))
        config.resolve.alias
            .set("@", resolve("src/assets"))
            .set("#", resolve("src/components"))
            .set("~", resolve("src/views"));
    },
    devServer: {
        open: true,
        port: 82
    },
};
