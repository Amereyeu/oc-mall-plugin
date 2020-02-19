(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{232:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("The plugin can be found on the official "),a("a",{attrs:{href:"https://octobercms.com/plugin/offline-mall",target:"_blank",rel:"noopener noreferrer"}},[e._v("October CMS Marketplace"),a("OutboundLink")],1),e._v(". You\ncan install it via the Projects feature of the Marketplace itself or via your installation's backend settings.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("OFFLINE.Mall")]),e._v(" plugin depends on "),a("code",[e._v("RainLab.User")]),e._v(", "),a("code",[e._v("RainLab.Location")]),e._v("\nand "),a("code",[e._v("RainLab.Translate")]),e._v(".")]),e._v(" "),a("p",[e._v("The easiest way to get you started is by using the command line:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan plugin:install rainlab.user\nphp artisan plugin:install rainlab.location\nphp artisan plugin:install rainlab.translate\nphp artisan plugin:install offline.mall\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("If you plan to use our "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-theme",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo theme"),a("OutboundLink")],1),e._v(" make sure to also\ninstall "),a("code",[e._v("RainLab.Pages")]),e._v(". These are dependencies of the demo theme, not the plugin itself.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# For the demo theme only!")]),e._v("\nphp artisan plugin:install rainlab.pages\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"check-your-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-your-installation"}},[e._v("#")]),e._v(" Check your installation")]),e._v(" "),a("p",[e._v("After the plugin has been successfully installed you can run the "),a("code",[e._v("mall:check")]),e._v(" command to validate your installation.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan mall:check\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can run this command at any time in the future to make sure everything is set up correctly.")])]),e._v(" "),a("p",[a("strong",[e._v("Don't panic!")]),e._v(" After the initial installation there will be some items that are marked as "),a("code",[e._v("FAIL")]),e._v(". This is because\nwe didn't configure the plugin yet.")]),e._v(" "),a("h2",{attrs:{id:"demo-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-data"}},[e._v("#")]),e._v(" Demo data")]),e._v(" "),a("p",[e._v("To get a feeling for how "),a("code",[e._v("oc-mall")]),e._v(" works, you can run the following command to pre-populate your installation with\ndemo data.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan mall:seed-demo\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This will erase all shop data and reset all settings! Do not run this command if you have already configured your\ninstallation.")])]),e._v(" "),a("p",[e._v("You can always revert back to a blank installation by running")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan plugin:refresh offline.mall\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"demo-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-theme"}},[e._v("#")]),e._v(" Demo theme")]),e._v(" "),a("p",[e._v("To make getting started with "),a("code",[e._v("oc-mall")]),e._v("as easy as possible, you can find a demo implementation of a shop\ntheme on GitHub: "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-theme",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/OFFLINE-GmbH/oc-mall-theme"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v('If you use the demo theme you should still apply the steps mentioned in the "Configuration" section.')])]),e._v(" "),a("ul",[a("li",[a("p",[a("input",{attrs:{type:"checkbox"}}),e._v(" Simply clone the theme to "),a("code",[e._v("<your installation>/themes/mall")]),e._v(" and select it as your active theme.")])]),e._v(" "),a("li",[a("p",[a("input",{attrs:{type:"checkbox"}}),e._v(" The demo theme requires "),a("code",[e._v("RainLab.Translate")]),e._v(" and "),a("code",[e._v("RainLab.Pages")]),e._v(" to be installed. Make sure\nthese plugins are available as well.")])])]),e._v(" "),a("p",[e._v("If you want to start with a blank slate just follow the instructions on this and the "),a("RouterLink",{attrs:{to:"/getting-started/theme-setup.html"}},[e._v("Theme Setup")]),e._v("\npage to get everything up and running.")],1),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("Once your installation is complete, follow the configuration steps below.")]),e._v(" "),a("h3",{attrs:{id:"locations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#locations"}},[e._v("#")]),e._v(" Locations")]),e._v(" "),a("p",[e._v("Visit "),a("code",[e._v("Backend settings -> Location -> Countries & States")]),e._v(". Make sure that\nonly countries you are shipping to are enabled. Disable every other\ncountry in the list.")]),e._v(" "),a("h3",{attrs:{id:"pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages"}},[e._v("#")]),e._v(" Pages")]),e._v(" "),a("p",[a("code",[e._v("oc-mall")]),e._v(" expects your website to have a few predefined pages to show\nproduct, account or order details. These pages have to be\nselected via the backend settings page.")]),e._v(" "),a("h4",{attrs:{id:"create-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-pages"}},[e._v("#")]),e._v(" Create pages")]),e._v(" "),a("p",[e._v("First, create the following CMS pages in your theme. You can name them as you wish, just make sure to include the same\nURL parameters as shown below.")]),e._v(" "),a("p",[e._v("You can create them without any additional markup. We will populate\nthem in the upcomming "),a("RouterLink",{attrs:{to:"/getting-started/theme-setup.html"}},[e._v("Theme Setup")]),e._v(" step.")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("File")]),e._v(" "),a("th",[e._v("Url")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("product.htm")])]),e._v(" "),a("td",[a("code",[e._v("/product/:slug/:variant?")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("category.htm")])]),e._v(" "),a("td",[a("code",[e._v("/category/:slug*")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("address.htm")])]),e._v(" "),a("td",[a("code",[e._v("/address/:address?/:redirect?/:set?")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("checkout.htm")])]),e._v(" "),a("td",[a("code",[e._v("/checkout/:step?")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("myaccount.htm")])]),e._v(" "),a("td",[a("code",[e._v("/account/:page?")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("cart.htm")])]),e._v(" "),a("td",[a("code",[e._v("/cart")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("login.htm")])]),e._v(" "),a("td",[a("code",[e._v("/login")])])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can find example contents for each of these pages in the\n"),a("RouterLink",{attrs:{to:"/getting-started/theme-setup.html"}},[e._v("Theme Setup")]),e._v(" section.")],1)]),e._v(" "),a("h4",{attrs:{id:"link-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-pages"}},[e._v("#")]),e._v(" Link pages")]),e._v(" "),a("p",[e._v("Once you have created all pages, go to "),a("code",[e._v("Backend settings -> Mall: General -> General settings")]),e._v(" and select them\nin the respective dropdown field.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you are not sure on how to create these pages take a look at the\n"),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-theme",target:"_blank",rel:"noopener noreferrer"}},[e._v("oc-mall-theme"),a("OutboundLink")],1),e._v(" for reference.")])]),e._v(" "),a("h3",{attrs:{id:"currencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#currencies"}},[e._v("#")]),e._v(" Currencies")]),e._v(" "),a("p",[e._v("Visit "),a("code",[e._v("Backend settings -> Mall: General -> Currencies")]),e._v(". Here you find a list of all currencies your installation\nsupports. Create, edit or delete them as you need.")]),e._v(" "),a("p",[e._v("You can find detailed documentation on currencies in the "),a("RouterLink",{attrs:{to:"/digging-deeper/currencies.html"}},[e._v("Currencies Section")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"taxes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taxes"}},[e._v("#")]),e._v(" Taxes")]),e._v(" "),a("p",[e._v("Visit "),a("code",[e._v("Backend settings -> Mall: General -> Taxes")]),e._v(". Here you find a list of all available tax rates.\nCreate, edit or delete them as you need.")]),e._v(" "),a("p",[e._v("You can find detailed documentation on taxes in the "),a("RouterLink",{attrs:{to:"/digging-deeper/taxes.html"}},[e._v("Taxes Section")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);