Scape - A portfolio theme for Ghost
===

Theme name:      Scape
Version:         1.1.0
Release date:    April 3, 2014
Contact:         [Themeforest](http://themeforest.net/user/layoutcake)
Demo:            [Scape](http://demo.janniskev.in/ghost/scape)
License:         [Split license](http://support.envato.com/index.php?/Knowledgebase/Article/View/428)


# Version history

Here you can find an overview of the history of this theme.

- 1.1.0: Oktober 10, 2014
    - Updated theme to work with Ghost 0.5.2
    - Added author pages
- 1.0.1: May 21, 2014
    - Added server setup section to Readme
- 1.0.0: April 3, 2014
    - Initial release


# Introduction

First of all I would like to thank you for purchasing this theme and I hope it suits your needs.

If anything is unclear or not specified in this documentation, you would like to see new features added
or have improvements for this theme then get in touch with me so I can add this.
We both benefit from a better theme!


# Getting started

## Installation

1. Move the extracted 'scape' folder to your Ghost installation and place it at: 'content/themes/'.
2. Login to your Ghost admin panel and click on 'Settings'.
3. Scroll all the way to the bottom and select 'scape' as your theme.
4. Congratulations, you have installed this theme!

## Server setup

This theme uses ajax to load the menu and posts into view. Because of this you need to make sure your server url is set correctly.

To correctly set the url you will to edit the 'config.js' file located in the root of your Ghost installation. If there is no 'config.js' file then you will need to copy 'config.example.js' to 'config.js' and carry on from there.

Look for the following line:

    development: {
      url: 'http://my-ghost-blog.com'

or

    production: {
      url: 'http://my-ghost-blog.com'

and update 'http://my-ghost-blog.com' to match your server location. In case you need help with this please leave a comment on Themeforest and I will help you as fast as possible!

## Menu setup

If you would like a menu in your blog then you can easily edit this.
The menu is defined in 'scape/partials/menu.hbs'.

Each link in the menu is added like the following:

    <a href="URL TO PAGE">MENU ITEM NAME</a>

Update 'URL TO PAGE' to the page you would like, and change 'MENU ITEM NAME' to the caption of the menu item.
You can add more than 3 links if you want. Or less, whatever suits your needs.

Note: if you don't want a menu, simply remove all content in 'scape/partials/menu.hbs'.
Do not remove this file, as removing it will break the theme.

## Analytics setup

Most sites would like to track the visits they get on their site.
If you do not want analytics in your site, simply ignore this section and move on to the next one.

You can do this as well by adding your analytics code (Google or other) in the file located at: 'scape/partials/analytics.hbs'. This code will automatically be added to the bottom of each page, so you can be sure that you track every visited page.

## Disquss setup

There is an ability built in to use disquss in this theme. The code is already added in 'scape/partials/disquss.hbs'. The only thing you need to do is set the disquss_shortname variable. Replace ### with your forum shortname to enable disquss.

Note: if you don't want to use disquss, remove all content in 'scape/partials/disquss.hbs'.
Do not remove this file, as removing it will break the theme.


# Content guidelines

I would like to take this opportunity to inform you about some content guidelines. This way you can be sure your theme will look the best possible way.

## Post previews and header images

You can create thumbnail on the homepage with and without a preview image. Be aware that when you select a preview image it will also be placed in the header on the detail of the page or post.

It is recommended that you upload images that are at least 1280x960 in size, to be sure that the header images will look good and not blurry or pixelated on large screens.

An image can be added with the following code in markdown:

    ![DESCRIPTION](LINK TO IMAGE)


# Third party assets

There are several assets linked in this theme which come from third party vendors.
These assets are listed and linked below.

## Fonts

- [Oswald](https://www.google.com/fonts/specimen/Oswald)
- [Source Sans Pro](http://www.google.com/fonts/specimen/Source+Sans+Pro)

## Javascript Plugins

- [HighlightJS](http://www.highlightjs.org/)
- [Fitvids](https://www.github.com/davatron5000/FitVids.js/)
- [Skrollr](http://prinzhorn.github.io/skrollr/)
- [Moment](http://www.momentjs.com)
