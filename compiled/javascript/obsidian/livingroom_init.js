$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Living Room Panel");
    content_width = (83 + 5) * 4 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [83, 50],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 4,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-living-room-lights" id="default-living-room-lights"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 3, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-media" id="default-label-media"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-bright" id="default-scene-bright"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-movies" id="default-scene-movies"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-dim" id="default-scene-dim"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-auto-lights" id="default-auto-lights"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-tv" id="default-label-tv"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 7)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-turn-off" id="default-tv-turn-off"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-cast" id="default-tv-cast"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-hdmi-5" id="default-tv-hdmi-5"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-tv-turn-on" id="default-tv-turn-on"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-scenes" id="default-label-scenes"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 10)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-cool" id="default-scene-cool"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-honey" id="default-scene-honey"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 2, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-grass" id="default-scene-grass"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 3, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-scene-warm" id="default-scene-warm"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-house" id="default-label-house"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 1, 1, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-sleep-mode" id="default-sleep-mode"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 1, 14)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-guest-sleep" id="default-guest-sleep"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 2, 4, 14)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-living-room-lights"] = new baselight("default-living-room-lights", "", "obsidian", {'static_css': {'level_up_style': 'color: #888;', 'unit_style': 'color: #888;', 'level_style': 'color: #888;', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'level_down_style': 'color: #888;'}, 'fields': {'level': '', 'title2': '', 'units': '%', 'state_text': '', 'icon_style': '', 'title': 'Lights', 'icon': ''}, 'post_service_inactive': {'entity_id': 'group.living_room_lights', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #f9ff5e;', 'widget_type': 'baselight', 'monitored_entity': 'light.living_room_track_c_1', 'css': {'icon_style_active': 'color: #f9ff5e;', 'icon_style_inactive': 'color: white;'}, 'icon_off': 'fa-lightbulb-o', 'icons': {'icon_on': 'mdi-lightbulb-on', 'icon_off': 'fa-lightbulb-o'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'icon_on': 'mdi-lightbulb-on', 'post_service_active': {'entity_id': 'group.living_room_lights', 'service': 'homeassistant/turn_on'}, 'entity': 'group.living_room_lights', 'icon_style_inactive': 'color: white;'})
    
        widgets["default-label-media"] = new basedisplay("default-label-media", "", "obsidian", {'widget_type': 'basedisplay', 'css': {}, 'fields': {'value': '', 'title2': 'Contols', 'title': 'Media', 'state_text': '', 'unit': ''}, 'icons': [], 'static_icons': [], 'static_css': {'unit_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'value_style': 'color: #00FFFF;'}})
    
        widgets["default-scene-bright"] = new baseswitch("default-scene-bright", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Bright', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'scene.living_room_bright', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #36a7ed;', 'ignore_state': 1, 'state_inactive': 'scening', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #81ef99;'}, 'icon_off': 'mdi-lightbulb', 'icons': {'icon_on': 'mdi-lightbulb', 'icon_off': 'mdi-lightbulb'}, 'static_icons': [], 'icon_on': 'mdi-lightbulb', 'post_service_active': {'entity_id': 'scene.living_room_bright', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.living_room_bright', 'state_active': 'stillscening', 'icon_style_inactive': 'color: #81ef99;'})
    
        widgets["default-scene-movies"] = new baseswitch("default-scene-movies", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Movies', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'scene.plex_late_night', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #36a7ed;', 'ignore_state': 1, 'state_inactive': 'scening', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #81ef99;'}, 'icon_off': 'fa-film', 'icons': {'icon_on': 'fa-film', 'icon_off': 'fa-film'}, 'static_icons': [], 'icon_on': 'fa-film', 'post_service_active': {'entity_id': 'scene.plex_late_night', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.plex_late_night', 'state_active': 'stillscening', 'icon_style_inactive': 'color: #81ef99;'})
    
        widgets["default-scene-dim"] = new baseswitch("default-scene-dim", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Dim', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'scene.living_room_dim', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #36a7ed;', 'ignore_state': 1, 'state_inactive': 'scening', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #81ef99;'}, 'icon_off': 'mdi-lightbulb-outline', 'icons': {'icon_on': 'mdi-lightbulb-outline', 'icon_off': 'mdi-lightbulb-outline'}, 'static_icons': [], 'icon_on': 'mdi-lightbulb-outline', 'post_service_active': {'entity_id': 'scene.living_room_dim', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.living_room_dim', 'state_active': 'stillscening', 'icon_style_inactive': 'color: #81ef99;'})
    
        widgets["default-auto-lights"] = new baseswitch("default-auto-lights", "", "obsidian", {'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Auto Lights', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'input_boolean.tv_auto_lights', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #04f759;', 'state_inactive': 'off', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #04f759;', 'icon_style_inactive': 'color: #c60808;'}, 'icon_off': 'mdi-camcorder-box-off', 'icons': {'icon_on': 'mdi-camcorder-box', 'icon_off': 'mdi-camcorder-box-off'}, 'static_icons': [], 'icon_on': 'mdi-camcorder-box', 'post_service_active': {'entity_id': 'input_boolean.tv_auto_lights', 'service': 'homeassistant/turn_on'}, 'entity': 'input_boolean.tv_auto_lights', 'state_active': 'on', 'icon_style_inactive': 'color: #c60808;'})
    
        widgets["default-label-tv"] = new basedisplay("default-label-tv", "", "obsidian", {'widget_type': 'basedisplay', 'css': {}, 'fields': {'value': '', 'title2': 'Contols', 'title': 'Tv', 'state_text': '', 'unit': ''}, 'icons': [], 'static_icons': [], 'static_css': {'unit_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'value_style': 'color: #00FFFF;'}})
    
        widgets["default-tv-turn-off"] = new baseswitch("default-tv-turn-off", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Tv Turn Off', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'script.tv_turn_off', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #c61a11;', 'ignore_state': 1, 'state_inactive': 'off', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #c61a11;', 'icon_style_inactive': 'color: #82bced;'}, 'icon_off': 'mdi-power', 'icons': {'icon_on': 'mdi-power', 'icon_off': 'mdi-power'}, 'static_icons': [], 'icon_on': 'mdi-power', 'post_service_active': {'entity_id': 'script.tv_turn_off', 'service': 'homeassistant/turn_on'}, 'entity': 'script.tv_turn_off', 'state_active': 'on', 'icon_style_inactive': 'color: #82bced;'})
    
        widgets["default-tv-cast"] = new baseswitch("default-tv-cast", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Cast', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #1e36ed;', 'ignore_state': 1, 'state_inactive': 'off', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #1e36ed;', 'icon_style_inactive': 'color: #82bced;'}, 'icon_off': 'mdi-cast', 'icons': {'icon_on': 'mdi-cast', 'icon_off': 'mdi-cast'}, 'static_icons': [], 'icon_on': 'mdi-cast', 'post_service_active': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_on'}, 'entity': 'script.tv_source_cast', 'state_active': 'on', 'icon_style_inactive': 'color: #82bced;'})
    
        widgets["default-tv-hdmi-5"] = new baseswitch("default-tv-hdmi-5", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Nintento Switch', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #1e36ed;', 'ignore_state': 1, 'state_inactive': 'off', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #1e36ed;', 'icon_style_inactive': 'color: #82bced;'}, 'icon_off': 'mdi-nintendo-switch', 'icons': {'icon_on': 'mdi-nintendo-switch', 'icon_off': 'mdi-nintendo-switch'}, 'static_icons': [], 'icon_on': 'mdi-nintendo-switch', 'post_service_active': {'entity_id': 'script.tv_source_cast', 'service': 'homeassistant/turn_on'}, 'entity': 'script.tv_source_cast', 'state_active': 'on', 'icon_style_inactive': 'color: #82bced;'})
    
        widgets["default-tv-turn-on"] = new baseswitch("default-tv-turn-on", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Tv Turn On', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'script.tv_turn_on', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #efe415;', 'ignore_state': 1, 'state_inactive': 'off', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #efe415;', 'icon_style_inactive': 'color: #82bced;'}, 'icon_off': 'fa-bolt', 'icons': {'icon_on': 'fa-bolt', 'icon_off': 'fa-bolt'}, 'static_icons': [], 'icon_on': 'fa-bolt', 'post_service_active': {'entity_id': 'script.tv_turn_on', 'service': 'homeassistant/turn_on'}, 'entity': 'script.tv_turn_on', 'state_active': 'on', 'icon_style_inactive': 'color: #82bced;'})
    
        widgets["default-label-scenes"] = new basedisplay("default-label-scenes", "", "obsidian", {'widget_type': 'basedisplay', 'css': {}, 'fields': {'value': '', 'title2': 'now with colors!', 'title': 'Scenes', 'state_text': '', 'unit': ''}, 'icons': [], 'static_icons': [], 'static_css': {'unit_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'value_style': 'color: #00FFFF;'}})
    
        widgets["default-scene-cool"] = new baseswitch("default-scene-cool", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Cool', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'scene.living_room_cool', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #36a7ed;', 'ignore_state': 1, 'state_inactive': 'scening', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #ec81ef;'}, 'icon_off': 'mdi-snowflake', 'icons': {'icon_on': 'mdi-snowflake', 'icon_off': 'mdi-snowflake'}, 'static_icons': [], 'icon_on': 'mdi-snowflake', 'post_service_active': {'entity_id': 'scene.living_room_cool', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.living_room_cool', 'state_active': 'stillscening', 'icon_style_inactive': 'color: #ec81ef;'})
    
        widgets["default-scene-honey"] = new baseswitch("default-scene-honey", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Honey', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'scene.living_room_honey', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #f9e01d;', 'ignore_state': 1, 'state_inactive': 'scening', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #f9e01d;', 'icon_style_inactive': 'color: #ec81ef;'}, 'icon_off': 'fa-tint', 'icons': {'icon_on': 'fa-tint', 'icon_off': 'fa-tint'}, 'static_icons': [], 'icon_on': 'fa-tint', 'post_service_active': {'entity_id': 'scene.living_room_honey', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.living_room_honey', 'state_active': 'stillscening', 'icon_style_inactive': 'color: #ec81ef;'})
    
        widgets["default-scene-grass"] = new baseswitch("default-scene-grass", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Grass', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'scene.living_room_grass', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #29d619;', 'ignore_state': 1, 'state_inactive': 'scening', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #29d619;', 'icon_style_inactive': 'color: #ec81ef;'}, 'icon_off': 'fa-leaf', 'icons': {'icon_on': 'fa-leaf', 'icon_off': 'fa-leaf'}, 'static_icons': [], 'icon_on': 'fa-leaf', 'post_service_active': {'entity_id': 'scene.living_room_grass', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.living_room_grass', 'state_active': 'stillscening', 'icon_style_inactive': 'color: #ec81ef;'})
    
        widgets["default-scene-warm"] = new baseswitch("default-scene-warm", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Warm', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'scene.living_room_warm', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #c63c09;', 'ignore_state': 1, 'state_inactive': 'scening', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #c63c09;', 'icon_style_inactive': 'color: #ec81ef;'}, 'icon_off': 'mdi-fire', 'icons': {'icon_on': 'mdi-fire', 'icon_off': 'mdi-fire'}, 'static_icons': [], 'icon_on': 'mdi-fire', 'post_service_active': {'entity_id': 'scene.living_room_warm', 'service': 'homeassistant/turn_on'}, 'entity': 'scene.living_room_warm', 'state_active': 'stillscening', 'icon_style_inactive': 'color: #ec81ef;'})
    
        widgets["default-label-house"] = new basedisplay("default-label-house", "", "obsidian", {'widget_type': 'basedisplay', 'css': {}, 'fields': {'value': '', 'title2': 'Stuff', 'title': 'House', 'state_text': '', 'unit': ''}, 'icons': [], 'static_icons': [], 'static_css': {'unit_style': '', 'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'value_style': 'color: #00FFFF;'}})
    
        widgets["default-sleep-mode"] = new baseswitch("default-sleep-mode", "", "obsidian", {'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Sleep Mode', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'input_boolean.sleep_mode', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #36a7ed;', 'state_inactive': 'off', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #36a7ed;', 'icon_style_inactive': 'color: #c60808;'}, 'icon_off': 'mdi-white-balance-sunny', 'icons': {'icon_on': 'fa-bed', 'icon_off': 'mdi-white-balance-sunny'}, 'static_icons': [], 'icon_on': 'fa-bed', 'post_service_active': {'entity_id': 'input_boolean.sleep_mode', 'service': 'homeassistant/turn_on'}, 'entity': 'input_boolean.sleep_mode', 'state_active': 'on', 'icon_style_inactive': 'color: #c60808;'})
    
        widgets["default-guest-sleep"] = new baseswitch("default-guest-sleep", "", "obsidian", {'momentary': 1000, 'enable': 1, 'static_css': {'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'fields': {'title2': '', 'icon': '', 'title': 'Guest Bed Time', 'state_text': '', 'icon_style': ''}, 'post_service_inactive': {'entity_id': 'script.guest_sleep', 'service': 'homeassistant/turn_off'}, 'icon_style_active': 'color: #8a3cc1;', 'state_inactive': 'off', 'widget_type': 'baseswitch', 'css': {'icon_style_active': 'color: #8a3cc1;', 'icon_style_inactive': 'color: #888;'}, 'icon_off': 'mdi-weather-night', 'icons': {'icon_on': 'fa-bed', 'icon_off': 'mdi-weather-night'}, 'static_icons': [], 'icon_on': 'fa-bed', 'post_service_active': {'entity_id': 'script.guest_sleep', 'service': 'homeassistant/turn_on'}, 'entity': 'script.guest_sleep', 'state_active': 'on', 'ignore_state': 1})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Living Room Panel", widgets);

});