export const handleYoutubeAudio = (youtube_id: string, element_id: string) => {
  var vid = youtube_id,
    audio_streams: any = {},
    audio_tag: any = document.getElementById(element_id);

  fetch(
    'https://images' +
      ~~(Math.random() * 33) +
      '-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=' +
      encodeURIComponent('https://www.youtube.com/watch?v=' + vid),
  ).then((response) => {
    if (response.ok) {
      response.text().then((data: any) => {
        var regex =
          /(?:ytplayer\.config\s*=\s*|ytInitialPlayerResponse\s?=\s?)(.+?)(?:;var|;\(function|\)?;\s*if|;\s*if|;\s*ytplayer\.|;\s*<\/script)/gmsu;

        data = data.split('window.getPageData')[0];
        data = data.replace('ytInitialPlayerResponse = null', '');
        data = data.replace(
          'ytInitialPlayerResponse=window.ytInitialPlayerResponse',
          '',
        );
        data = data.replace(
          'ytplayer.config={args:{raw_player_response:ytInitialPlayerResponse}};',
          '',
        );

        var matches = regex.exec(data);
        data = matches && matches.length > 1 ? JSON.parse(matches[1]) : false;

        console.log(data);

        var streams: any[] = [],
          result = {};

        if (data.streamingData) {
          if (data.streamingData.adaptiveFormats) {
            streams = streams.concat(data.streamingData.adaptiveFormats);
          }

          if (data.streamingData.formats) {
            streams = streams.concat(data.streamingData.formats);
          }
        } else {
          return false;
        }

        streams.forEach(function (stream, n) {
          var itag = stream.itag * 1,
            quality: any = false;
          console.log(stream);
          switch (itag) {
            case 139:
              quality = '48kbps';
              break;
            case 140:
              quality = '128kbps';
              break;
            case 141:
              quality = '256kbps';
              break;
            case 249:
              quality = 'webm_l';
              break;
            case 250:
              quality = 'webm_m';
              break;
            case 251:
              quality = 'webm_h';
              break;
          }
          if (quality) (audio_streams as any)[quality] = stream.url;
        });

        console.log(audio_streams);

        (audio_tag as any).src =
          audio_streams['256kbps'] ||
          audio_streams['128kbps'] ||
          audio_streams['48kbps'];
      });
    }
  });
};
