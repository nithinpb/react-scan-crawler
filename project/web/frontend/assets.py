from flask_assets import Environment, Bundle

#: application css bundle
css_app = Bundle("less/app.less", filters="less", output="css/app.css", debug=False)

#: consolidated css bundle
css_all = Bundle("css/bootstrap.min.css",
                 "css/angular-loading-bar.css",
                 css_app,
                 filters="cssmin", output="css/app.min.css")

#: vendor js bundle
js_vendor = Bundle("js/vendor/jquery-2.1.1.min.js",
                   "js/vendor/angular.min.js",
                   "js/vendor/angular-route.min.js",
                   "js/vendor/angular-loading-bar.js",
                   filters="jsmin", output="js/vendor.min.js")

#: application js bundle
js_main = Bundle("js/app/app.js",
                 "js/app/services/*.js",
                 "js/app/crawl/*.js",
                 filters="jsmin", output="js/app.min.js")


def init_app(app):
    webassets = Environment(app)
    webassets.register('css_all', css_all)
    webassets.register('js_vendor', js_vendor)
    webassets.register('js_main', js_main)
    webassets.manifest = 'cache' if not app.debug else False
    webassets.cache = not app.debug
    webassets.debug = app.debug

