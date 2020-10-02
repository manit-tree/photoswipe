(function(){
    var openPhotoSwipe = function (items,idx) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        var v_options = {
            history: true,
            focus: false,
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
            escKey: true,
            index: idx
        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, v_options);

        gallery.listen('imageLoadComplete', function (i, item) {
            var img = $(item.container).find('img').first();
            var nw = img[0].naturalWidth;
            var nh = img[0].naturalHeight;
            var invalidated = false;

            if (item.w !== nw) {
                item.w = nw;
                invalidated = true;
            }

            if (item.h !== nh) {
                item.h = nh;
                invalidated = true;
            }

            if (invalidated) {
                gallery.updateSize(true);
            }
        });

        gallery.init();
    };

    $('#btn1').click(function(){
        var items = [
            {
                src: 'images/01.jpg',
                w: 1080,
                h: 1349,
                title: 'PHOTO-1'
            },
            {
                src: 'images/02.jpg',
                w: 1027,
                h: 1283,
                title: 'PHOTO-2' 
            },
            {
                src: 'images/03.jpg',
                w: 1080,
                h: 1350,
                title: 'PHOTO-3' 
            },
            {
                src: 'images/04.jpg',
                w: 1080,
                h: 1350,
                title: 'PHOTO-4' 
            },
            {
                src: 'images/05.jpg',
                w: 1080,
                h: 1350,
                title: 'PHOTO-5' 
            },
            {
                src: 'images/06.jpg',
                w: 1080,
                h: 1350,
                title: 'PHOTO-6' 
            },
            {
                src: 'images/07.jpg',
                w: 1080,
                h: 1350,
                title: 'PHOTO-7' 
            },
            {
                src: 'images/08.jpg',
                w: 1080,
                h: 1350,
                title: 'PHOTO-8' 
            },
        ]

        openPhotoSwipe(items, 0);
    });

    $('#btn2').click(function(){
        var items = [
            {
                html: '<div class="wrapper"><div class="video-wrapper"><iframe class="pswp__video" width="960" height="640" src="https://www.youtube-nocookie.com/embed/iP2JGliTdvw?rel=0" frameborder="0" allowfullscreen></iframe></div></div>',
                title: 'YOUTUBE'
            }
        ];

        openPhotoSwipe(items,0);
    });

    $('#btn3').click(function(){
        var items = [
            {
                html: '<div class="wrapper"><div class="video-wrapper"><iframe class="pswp__video" src="https://player.vimeo.com/video/121436114?title=0&byline=0&portrait=0" width="960" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>',
                title: 'VIMEO'
            }
        ];

        openPhotoSwipe(items,0);
    });

})()
