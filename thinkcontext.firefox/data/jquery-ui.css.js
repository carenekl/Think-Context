var subvcss = document.createElement("style");
subvcss.type = "text/css";
subvcss.rel = "stylesheet";
subvcss.innerHTML = '\
.subv-ui-helper-hidden { display: none; } \
.subv-ui-helper-hidden-accessible { position: absolute !important; clip: rect(1px 1px 1px 1px); clip: rect(1px,1px,1px,1px); } \
.subv-ui-helper-reset { margin: 0; padding: 0; border: 0; outline: 0; line-height: 1.3; text-decoration: none; font-size: 100%; list-style: none; } \
.subv-ui-helper-clearfix:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; } \
.subv-ui-helper-clearfix { display: inline-block; } \
* html .subv-ui-helper-clearfix { height:1%; } \
.subv-ui-helper-clearfix { display:block; } \
.subv-ui-helper-zfix { width: 100%; height: 100%; top: 0; left: 0; position: absolute; opacity: 0; filter:Alpha(Opacity=0); } \
.subv-ui-state-disabled { cursor: default !important; } \
.subv-ui-icon { display: block; text-indent: -99999px; overflow: hidden; background-repeat: no-repeat; } \
.subv-ui-widget-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } \
.subv-ui-widget { font-family: Trebuchet MS, Tahoma, Verdana, Arial, sans-serif; font-size: 11px; text-align: left;} \
.subv-ui-widget .subv-ui-widget { font-size: 1em; } \
.subv-ui-widget input, .subv-ui-widget select, .subv-ui-widget textarea, .subv-ui-widget button { font-family: Trebuchet MS, Tahoma, Verdana, Arial, sans-serif; font-size: 11px; } \
.subv-ui-widget-content { border: 1px solid #dddddd; background: #eeeeee url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-bg_highlight-soft_100_eeeeee_1x100.png) 50% top repeat-x; color: #333333; } \
.subv-ui-widget-content a { color: #333333; } \
.subv-ui-widget-header { border: 1px solid #e78f08; background: #f6a828 url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-bg_gloss-wave_35_f6a828_500x100.png) 50% 50% repeat-x; color: #ffffff; font-weight: bold; } \
.subv-ui-widget-header a { color: #ffffff; } \
.subv-ui-state-default, .subv-ui-widget-content .subv-ui-state-default, .subv-ui-widget-header .subv-ui-state-default { border: 1px solid #cccccc; background: #f6f6f6 url(images/ui-bg_glass_100_f6f6f6_1x400.png) 50% 50% repeat-x; font-weight: bold; color: #1c94c4; } \
.subv-ui-state-default a, .subv-ui-state-default a:link, .subv-ui-state-default a:visited { color: #1c94c4; text-decoration: none; } \
.subv-ui-state-hover, .subv-ui-widget-content .subv-ui-state-hover, .subv-ui-widget-header .subv-ui-state-hover, .subv-ui-state-focus, .subv-ui-widget-content .subv-ui-state-focus, .subv-ui-widget-header .subv-ui-state-focus { border: 1px solid #fbcb09; background: #fdf5ce url(images/ui-bg_glass_100_fdf5ce_1x400.png) 50% 50% repeat-x; font-weight: bold; color: #c77405; } \
.subv-ui-state-hover a, .subv-ui-state-hover a:hover { color: #c77405; text-decoration: none; } \
.subv-ui-state-active, .subv-ui-widget-content .subv-ui-state-active, .subv-ui-widget-header .subv-ui-state-active { border: 1px solid #fbd850; background: #ffffff url(images/ui-bg_glass_65_ffffff_1x400.png) 50% 50% repeat-x; font-weight: bold; color: #eb8f00; } \
.subv-ui-state-active a, .subv-ui-state-active a:link, .subv-ui-state-active a:visited { color: #eb8f00; text-decoration: none; } \
.subv-ui-widget :active { outline: none; } \
.subv-ui-state-highlight, .subv-ui-widget-content .subv-ui-state-highlight, .subv-ui-widget-header .subv-ui-state-highlight  {border: 1px solid #fed22f; background: #ffe45c url(images/ui-bg_highlight-soft_75_ffe45c_1x100.png) 50% top repeat-x; color: #363636; } \
.subv-ui-state-highlight a, .subv-ui-widget-content .subv-ui-state-highlight a,.subv-ui-widget-header .subv-ui-state-highlight a { color: #363636; } \
.subv-ui-state-error, .subv-ui-widget-content .subv-ui-state-error, .subv-ui-widget-header .subv-ui-state-error {border: 1px solid #cd0a0a; background: #b81900 url(images/ui-bg_diagonals-thick_18_b81900_40x40.png) 50% 50% repeat; color: #ffffff; } \
.subv-ui-state-error a, .subv-ui-widget-content .subv-ui-state-error a, .subv-ui-widget-header .subv-ui-state-error a { color: #ffffff; } \
.subv-ui-state-error-text, .subv-ui-widget-content .subv-ui-state-error-text, .subv-ui-widget-header .subv-ui-state-error-text { color: #ffffff; } \
.subv-ui-priority-primary, .subv-ui-widget-content .subv-ui-priority-primary, .subv-ui-widget-header .subv-ui-priority-primary { font-weight: bold; } \
.subv-ui-priority-secondary, .subv-ui-widget-content .subv-ui-priority-secondary,  .subv-ui-widget-header .subv-ui-priority-secondary { opacity: .7; filter:Alpha(Opacity=70); font-weight: normal; } \
.subv-ui-state-disabled, .subv-ui-widget-content .subv-ui-state-disabled, .subv-ui-widget-header .subv-ui-state-disabled { opacity: .35; filter:Alpha(Opacity=35); background-image: none; } \
.subv-ui-icon { width: 16px; height: 16px; background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-icons_222222_256x240.png); } \
.subv-ui-widget-content .subv-ui-icon {background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-icons_222222_256x240.png); } \
.subv-ui-widget-header .subv-ui-icon {background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-icons_ffffff_256x240.png); } \
.subv-ui-state-default .subv-ui-icon { background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-icons_ef8c08_256x240.png); } \
.subv-ui-state-hover .subv-ui-icon, .subv-ui-state-focus .subv-ui-icon {background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-icons_ef8c08_256x240.png); } \
.subv-ui-state-active .subv-ui-icon {background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-icons_ef8c08_256x240.png); } \
.subv-ui-state-highlight .subv-ui-icon {background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-icons_228ef1_256x240.png); } \
.subv-ui-state-error .subv-ui-icon, .subv-ui-state-error-text .subv-ui-icon {background-image: url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-icons_ffd27a_256x240.png); } \
.subv-ui-icon-carat-1-n { background-position: 0 0; } \
.subv-ui-icon-carat-1-ne { background-position: -16px 0; } \
.subv-ui-icon-carat-1-e { background-position: -32px 0; } \
.subv-ui-icon-carat-1-se { background-position: -48px 0; } \
.subv-ui-icon-carat-1-s { background-position: -64px 0; } \
.subv-ui-icon-carat-1-sw { background-position: -80px 0; } \
.subv-ui-icon-carat-1-w { background-position: -96px 0; } \
.subv-ui-icon-carat-1-nw { background-position: -112px 0; } \
.subv-ui-icon-carat-2-n-s { background-position: -128px 0; } \
.subv-ui-icon-carat-2-e-w { background-position: -144px 0; } \
.subv-ui-icon-triangle-1-n { background-position: 0 -16px; } \
.subv-ui-icon-triangle-1-ne { background-position: -16px -16px; } \
.subv-ui-icon-triangle-1-e { background-position: -32px -16px; } \
.subv-ui-icon-triangle-1-se { background-position: -48px -16px; } \
.subv-ui-icon-triangle-1-s { background-position: -64px -16px; } \
.subv-ui-icon-triangle-1-sw { background-position: -80px -16px; } \
.subv-ui-icon-triangle-1-w { background-position: -96px -16px; } \
.subv-ui-icon-triangle-1-nw { background-position: -112px -16px; } \
.subv-ui-icon-triangle-2-n-s { background-position: -128px -16px; } \
.subv-ui-icon-triangle-2-e-w { background-position: -144px -16px; } \
.subv-ui-icon-arrow-1-n { background-position: 0 -32px; } \
.subv-ui-icon-arrow-1-ne { background-position: -16px -32px; } \
.subv-ui-icon-arrow-1-e { background-position: -32px -32px; } \
.subv-ui-icon-arrow-1-se { background-position: -48px -32px; } \
.subv-ui-icon-arrow-1-s { background-position: -64px -32px; } \
.subv-ui-icon-arrow-1-sw { background-position: -80px -32px; } \
.subv-ui-icon-arrow-1-w { background-position: -96px -32px; } \
.subv-ui-icon-arrow-1-nw { background-position: -112px -32px; } \
.subv-ui-icon-arrow-2-n-s { background-position: -128px -32px; } \
.subv-ui-icon-arrow-2-ne-sw { background-position: -144px -32px; } \
.subv-ui-icon-arrow-2-e-w { background-position: -160px -32px; } \
.subv-ui-icon-arrow-2-se-nw { background-position: -176px -32px; } \
.subv-ui-icon-arrowstop-1-n { background-position: -192px -32px; } \
.subv-ui-icon-arrowstop-1-e { background-position: -208px -32px; } \
.subv-ui-icon-arrowstop-1-s { background-position: -224px -32px; } \
.subv-ui-icon-arrowstop-1-w { background-position: -240px -32px; } \
.subv-ui-icon-arrowthick-1-n { background-position: 0 -48px; } \
.subv-ui-icon-arrowthick-1-ne { background-position: -16px -48px; } \
.subv-ui-icon-arrowthick-1-e { background-position: -32px -48px; } \
.subv-ui-icon-arrowthick-1-se { background-position: -48px -48px; } \
.subv-ui-icon-arrowthick-1-s { background-position: -64px -48px; } \
.subv-ui-icon-arrowthick-1-sw { background-position: -80px -48px; } \
.subv-ui-icon-arrowthick-1-w { background-position: -96px -48px; } \
.subv-ui-icon-arrowthick-1-nw { background-position: -112px -48px; } \
.subv-ui-icon-arrowthick-2-n-s { background-position: -128px -48px; } \
.subv-ui-icon-arrowthick-2-ne-sw { background-position: -144px -48px; } \
.subv-ui-icon-arrowthick-2-e-w { background-position: -160px -48px; } \
.subv-ui-icon-arrowthick-2-se-nw { background-position: -176px -48px; } \
.subv-ui-icon-arrowthickstop-1-n { background-position: -192px -48px; } \
.subv-ui-icon-arrowthickstop-1-e { background-position: -208px -48px; } \
.subv-ui-icon-arrowthickstop-1-s { background-position: -224px -48px; } \
.subv-ui-icon-arrowthickstop-1-w { background-position: -240px -48px; } \
.subv-ui-icon-arrowreturnthick-1-w { background-position: 0 -64px; } \
.subv-ui-icon-arrowreturnthick-1-n { background-position: -16px -64px; } \
.subv-ui-icon-arrowreturnthick-1-e { background-position: -32px -64px; } \
.subv-ui-icon-arrowreturnthick-1-s { background-position: -48px -64px; } \
.subv-ui-icon-arrowreturn-1-w { background-position: -64px -64px; } \
.subv-ui-icon-arrowreturn-1-n { background-position: -80px -64px; } \
.subv-ui-icon-arrowreturn-1-e { background-position: -96px -64px; } \
.subv-ui-icon-arrowreturn-1-s { background-position: -112px -64px; } \
.subv-ui-icon-arrowrefresh-1-w { background-position: -128px -64px; } \
.subv-ui-icon-arrowrefresh-1-n { background-position: -144px -64px; } \
.subv-ui-icon-arrowrefresh-1-e { background-position: -160px -64px; } \
.subv-ui-icon-arrowrefresh-1-s { background-position: -176px -64px; } \
.subv-ui-icon-arrow-4 { background-position: 0 -80px; } \
.subv-ui-icon-arrow-4-diag { background-position: -16px -80px; } \
.subv-ui-icon-extlink { background-position: -32px -80px; } \
.subv-ui-icon-newwin { background-position: -48px -80px; } \
.subv-ui-icon-refresh { background-position: -64px -80px; } \
.subv-ui-icon-shuffle { background-position: -80px -80px; } \
.subv-ui-icon-transfer-e-w { background-position: -96px -80px; } \
.subv-ui-icon-transferthick-e-w { background-position: -112px -80px; } \
.subv-ui-icon-folder-collapsed { background-position: 0 -96px; } \
.subv-ui-icon-folder-open { background-position: -16px -96px; } \
.subv-ui-icon-document { background-position: -32px -96px; } \
.subv-ui-icon-document-b { background-position: -48px -96px; } \
.subv-ui-icon-note { background-position: -64px -96px; } \
.subv-ui-icon-mail-closed { background-position: -80px -96px; } \
.subv-ui-icon-mail-open { background-position: -96px -96px; } \
.subv-ui-icon-suitcase { background-position: -112px -96px; } \
.subv-ui-icon-comment { background-position: -128px -96px; } \
.subv-ui-icon-person { background-position: -144px -96px; } \
.subv-ui-icon-print { background-position: -160px -96px; } \
.subv-ui-icon-trash { background-position: -176px -96px; } \
.subv-ui-icon-locked { background-position: -192px -96px; } \
.subv-ui-icon-unlocked { background-position: -208px -96px; } \
.subv-ui-icon-bookmark { background-position: -224px -96px; } \
.subv-ui-icon-tag { background-position: -240px -96px; } \
.subv-ui-icon-home { background-position: 0 -112px; } \
.subv-ui-icon-flag { background-position: -16px -112px; } \
.subv-ui-icon-calendar { background-position: -32px -112px; } \
.subv-ui-icon-cart { background-position: -48px -112px; } \
.subv-ui-icon-pencil { background-position: -64px -112px; } \
.subv-ui-icon-clock { background-position: -80px -112px; } \
.subv-ui-icon-disk { background-position: -96px -112px; } \
.subv-ui-icon-calculator { background-position: -112px -112px; } \
.subv-ui-icon-zoomin { background-position: -128px -112px; } \
.subv-ui-icon-zoomout { background-position: -144px -112px; } \
.subv-ui-icon-search { background-position: -160px -112px; } \
.subv-ui-icon-wrench { background-position: -176px -112px; } \
.subv-ui-icon-gear { background-position: -192px -112px; } \
.subv-ui-icon-heart { background-position: -208px -112px; } \
.subv-ui-icon-star { background-position: -224px -112px; } \
.subv-ui-icon-link { background-position: -240px -112px; } \
.subv-ui-icon-cancel { background-position: 0 -128px; } \
.subv-ui-icon-plus { background-position: -16px -128px; } \
.subv-ui-icon-plusthick { background-position: -32px -128px; } \
.subv-ui-icon-minus { background-position: -48px -128px; } \
.subv-ui-icon-minusthick { background-position: -64px -128px; } \
.subv-ui-icon-close { background-position: -80px -128px; } \
.subv-ui-icon-closethick { background-position: -96px -128px; } \
.subv-ui-icon-key { background-position: -112px -128px; } \
.subv-ui-icon-lightbulb { background-position: -128px -128px; } \
.subv-ui-icon-scissors { background-position: -144px -128px; } \
.subv-ui-icon-clipboard { background-position: -160px -128px; } \
.subv-ui-icon-copy { background-position: -176px -128px; } \
.subv-ui-icon-contact { background-position: -192px -128px; } \
.subv-ui-icon-image { background-position: -208px -128px; } \
.subv-ui-icon-video { background-position: -224px -128px; } \
.subv-ui-icon-script { background-position: -240px -128px; } \
.subv-ui-icon-alert { background-position: 0 -144px; } \
.subv-ui-icon-info { background-position: -16px -144px; } \
.subv-ui-icon-notice { background-position: -32px -144px; } \
.subv-ui-icon-help { background-position: -48px -144px; } \
.subv-ui-icon-check { background-position: -64px -144px; } \
.subv-ui-icon-bullet { background-position: -80px -144px; } \
.subv-ui-icon-radio-off { background-position: -96px -144px; } \
.subv-ui-icon-radio-on { background-position: -112px -144px; } \
.subv-ui-icon-pin-w { background-position: -128px -144px; } \
.subv-ui-icon-pin-s { background-position: -144px -144px; } \
.subv-ui-icon-play { background-position: 0 -160px; } \
.subv-ui-icon-pause { background-position: -16px -160px; } \
.subv-ui-icon-seek-next { background-position: -32px -160px; } \
.subv-ui-icon-seek-prev { background-position: -48px -160px; } \
.subv-ui-icon-seek-end { background-position: -64px -160px; } \
.subv-ui-icon-seek-start { background-position: -80px -160px; } \
 \
.subv-ui-icon-seek-first { background-position: -80px -160px; } \
.subv-ui-icon-stop { background-position: -96px -160px; } \
.subv-ui-icon-eject { background-position: -112px -160px; } \
.subv-ui-icon-volume-off { background-position: -128px -160px; } \
.subv-ui-icon-volume-on { background-position: -144px -160px; } \
.subv-ui-icon-power { background-position: 0 -176px; } \
.subv-ui-icon-signal-diag { background-position: -16px -176px; } \
.subv-ui-icon-signal { background-position: -32px -176px; } \
.subv-ui-icon-battery-0 { background-position: -48px -176px; } \
.subv-ui-icon-battery-1 { background-position: -64px -176px; } \
.subv-ui-icon-battery-2 { background-position: -80px -176px; } \
.subv-ui-icon-battery-3 { background-position: -96px -176px; } \
.subv-ui-icon-circle-plus { background-position: 0 -192px; } \
.subv-ui-icon-circle-minus { background-position: -16px -192px; } \
.subv-ui-icon-circle-close { background-position: -32px -192px; } \
.subv-ui-icon-circle-triangle-e { background-position: -48px -192px; } \
.subv-ui-icon-circle-triangle-s { background-position: -64px -192px; } \
.subv-ui-icon-circle-triangle-w { background-position: -80px -192px; } \
.subv-ui-icon-circle-triangle-n { background-position: -96px -192px; } \
.subv-ui-icon-circle-arrow-e { background-position: -112px -192px; } \
.subv-ui-icon-circle-arrow-s { background-position: -128px -192px; } \
.subv-ui-icon-circle-arrow-w { background-position: -144px -192px; } \
.subv-ui-icon-circle-arrow-n { background-position: -160px -192px; } \
.subv-ui-icon-circle-zoomin { background-position: -176px -192px; } \
.subv-ui-icon-circle-zoomout { background-position: -192px -192px; } \
.subv-ui-icon-circle-check { background-position: -208px -192px; } \
.subv-ui-icon-circlesmall-plus { background-position: 0 -208px; } \
.subv-ui-icon-circlesmall-minus { background-position: -16px -208px; } \
.subv-ui-icon-circlesmall-close { background-position: -32px -208px; } \
.subv-ui-icon-squaresmall-plus { background-position: -48px -208px; } \
.subv-ui-icon-squaresmall-minus { background-position: -64px -208px; } \
.subv-ui-icon-squaresmall-close { background-position: -80px -208px; } \
.subv-ui-icon-grip-dotted-vertical { background-position: 0 -224px; } \
.subv-ui-icon-grip-dotted-horizontal { background-position: -16px -224px; } \
.subv-ui-icon-grip-solid-vertical { background-position: -32px -224px; } \
.subv-ui-icon-grip-solid-horizontal { background-position: -48px -224px; } \
.subv-ui-icon-gripsmall-diagonal-se { background-position: -64px -224px; } \
.subv-ui-icon-grip-diagonal-se { background-position: -80px -224px; } \
.subv-ui-corner-all, .subv-ui-corner-top, .subv-ui-corner-left, .subv-ui-corner-tl { -moz-border-radius-topleft: 4px; -webkit-border-top-left-radius: 4px; -khtml-border-top-left-radius: 4px; border-top-left-radius: 4px; } \
.subv-ui-corner-all, .subv-ui-corner-top, .subv-ui-corner-right, .subv-ui-corner-tr { -moz-border-radius-topright: 4px; -webkit-border-top-right-radius: 4px; -khtml-border-top-right-radius: 4px; border-top-right-radius: 4px; } \
.subv-ui-corner-all, .subv-ui-corner-bottom, .subv-ui-corner-left, .subv-ui-corner-bl { -moz-border-radius-bottomleft: 4px; -webkit-border-bottom-left-radius: 4px; -khtml-border-bottom-left-radius: 4px; border-bottom-left-radius: 4px; } \
.subv-ui-corner-all, .subv-ui-corner-bottom, .subv-ui-corner-right, .subv-ui-corner-br { -moz-border-radius-bottomright: 4px; -webkit-border-bottom-right-radius: 4px; -khtml-border-bottom-right-radius: 4px; border-bottom-right-radius: 4px; } \
.subv-ui-widget-overlay { background: #666666 url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-bg_diagonals-thick_20_666666_40x40.png) 50% 50% repeat; opacity: .50;filter:Alpha(Opacity=50); } \
.subv-ui-widget-shadow { margin: -5px 0 0 -5px; padding: 5px; background: #000000 url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/ui-lightness/images/ui-bg_flat_10_000000_40x100.png) 50% 50% repeat-x; opacity: .20;filter:Alpha(Opacity=20); -moz-border-radius: 5px; -khtml-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; } \
.subv-ui-dialog { position: absolute; padding: .2em; width: 300px; overflow: hidden; } \
.subv-ui-dialog .subv-ui-dialog-titlebar { padding: .4em 1em; position: relative;  } \
.subv-ui-dialog .subv-ui-dialog-title { float: left; margin: .1em 16px .1em 0; }  \
.subv-ui-dialog .subv-ui-dialog-titlebar-close { position: absolute; right: .3em; top: 50%; width: 19px; margin: -10px 0 0 0; padding: 1px; height: 18px; } \
.subv-ui-dialog .subv-ui-dialog-titlebar-close span { display: block; margin: 1px; } \
.subv-ui-dialog .subv-ui-dialog-titlebar-close:hover, .subv-ui-dialog .subv-ui-dialog-titlebar-close:focus { padding: 0; } \
.subv-ui-dialog .subv-ui-dialog-content { position: relative; border: 0; padding: .5em 1em; background: none; overflow: auto; zoom: 1; } \
.subv-ui-dialog .subv-ui-dialog-buttonpane { text-align: left; border-width: 1px 0 0 0; background-image: none; margin: .5em 0 0 0; padding: .3em 1em .5em .4em; } \
.subv-ui-dialog .subv-ui-dialog-buttonpane .subv-ui-dialog-buttonset { float: right; } \
.subv-ui-dialog .subv-ui-dialog-buttonpane button { margin: .5em .4em .5em 0; cursor: pointer; } \
.subv-ui-dialog .subv-ui-resizable-se { width: 14px; height: 14px; right: 3px; bottom: 3px; } \
.subv-ui-draggable .subv-ui-dialog-titlebar { cursor: move; } \
';

//subvcss.href = "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.11/themes/base/jquery-ui.css";
//subvcss.href = data.url("jquery-ui.css");
document.getElementsByTagName('head')[0].appendChild(subvcss);