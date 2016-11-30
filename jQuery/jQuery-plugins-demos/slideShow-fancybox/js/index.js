    $(function() {
        $("#number_slideshow").number_slideshow({
            slideshow_autoplay: 'enable',//enable disable
            slideshow_time_interval: '3000',
            slideshow_transition_speed: 500, //'normal','slow','fast' or numeral
            slideshow_window_background_color: "#ccc",
            slideshow_window_padding: '1',
            slideshow_window_width: '400',
            slideshow_window_height: '249',
            slideshow_border_size: '1',
            slideshow_border_color: 'black',
            slideshow_show_button: 'enable',//enable disable
            slideshow_show_title: 'enable',//enable disable
            slideshow_button_text_color: '#CCC',
            slideshow_button_background_color: '#333',
            slideshow_button_current_background_color: '#666',
            slideshow_button_current_text_color: '#000',
            slideshow_button_border_color: '#000',
            slideshow_loading_gif: 'loading.gif',//loading pic position, you can replace it use youself gif.
            slideshow_button_border_size: '1'
        });
		        
        //fancybox
        
        	$(".fancybox").fancybox({
				openEffect	: 'none',
				closeEffect	: 'none'
			});
});