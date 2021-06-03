# capture5sec.js

## how to use

capture 5 sec after pressed F3 or F4
```js
onkeydown = async (e) => {
  if (e.key == "F3") {
    if (!globalThis.capture5sec_gif) {
      globalThis.capture5sec_gif = (await import("https://taisukef.github.io/capture5sec.js/gif-capture5sec.js")).capture5sec;
    }
    capture5sec_gif();
  } else if (e.key == "F4") {
    if (!globalThis.capture5sec_mp4) {
      globalThis.capture5sec_mp4 = (await import("https://taisukef.github.io/capture5sec.js/mp4-capture5sec.js")).capture5sec;
    }
    capture5sec_mp4();
  }
};
```

## sample
https://user-images.githubusercontent.com/1715217/120721862-aba49680-c509-11eb-908a-e172a2fd3b5a.mp4

https://taisukef.github.io/qrdots/  

## dependency
- [html2canvas](https://github.com/taisukef/html2canvas/)
- [h264-mp4-encoder](https://github.com/taisukef/h264-mp4-encoder.es/)
- [GIFEncoder](https://github.com/taisukef/gifencoder/)
