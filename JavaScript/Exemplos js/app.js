function() {
    const API_KEY = "AIzaSyCZENTwJq_Hreia9ZT1FKvSs_KTB22xzeE";
    const CANNHEL_ID = "UCt_4wzTQqmcUvemNkeO0plA";

    const renderVideos = data => {
        const $container = document.getElementById('videos')

        const content = data.items.map(item => {
            console.log('item', item)
            return `
                <figure>
                <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.description}" />
                <figcaption>${item.snippet.description}</figcaption>
                </figure>
                <iframe width= 560 height= 315 src= www youtube com embed i84wDdH 2Wo frameborder= 0 allowfulls></iframe>
                `
        }).join(' ')
        $container.innerHTML = content;
    };
    fetch(
       `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
     &part=snippet,contentDetails,statistics,status`
    )
    .then(res => res.json())
    .then(res => renderVideos(res));
})();