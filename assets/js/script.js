// 22 Dec 2021

let maniVideo = document.querySelector('.video video');
let videoList = document.querySelectorAll('.video-list .videoThumbnails');
let videoTime = document.querySelectorAll('.video-list .videoThumbnails .duration');
let palyTime = document.querySelectorAll('.palyDuration')[0];
let title = document.querySelector('.video .title');

let mainVideoTime = Math.trunc(maniVideo.duration).toString();
palyTime.innerHTML = mainVideoTime + ' sec';


videoList.forEach((video, i) => {

    let displayListLength = Math.trunc(video.children[0].duration);

    videoTime[i].innerText = displayListLength;

    video.onclick = () => {

        // 1st --> remove selected element/tag
        videoList.forEach(v => v.classList.remove('active'));

        // 2nd --> select clicked element/tag
        video.classList.add('active');

        if (video.classList.contains('active')) {

            let src = video.children[0].getAttribute('src');
            let txt = video.children[1].innerHTML;
            let videoLength = video.children[0].duration;

            maniVideo.src = src;
            title.innerHTML = txt;
            palyTime.innerHTML = `${Math.trunc(videoLength)} sec`;
        }
    }

});
