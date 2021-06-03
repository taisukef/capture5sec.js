import { html2image } from "https://taisukef.github.io/html2canvas/es/html2image.js";
import { HME } from "https://taisukef.github.io/h264-mp4-encoder.es/h264-mp4-encoder.es.js";
import { downloadFile } from "https://js.sabae.cc/downloadFile.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

let capturing = false;

const capture5sec = async (delay = 100) => {
  const fps = 1000 / delay;
  if (capturing) {
    console.log("already capturing...")
    return;
  }
  console.log("start capturing");
  capturing = true;
  const encoder = await HME.createH264MP4Encoder();
  const img = await html2image(document.body);
  // w & h must be a multiple of 2.
  const w = img.width & ~1;
  const h = img.height & ~1;
  console.log(w, h);
  encoder.width = w;
  encoder.height = h;
  encoder.frameRate = fps;
  encoder.initialize();
  for (let i = 0; i < 5000 / delay; i++) {
    const img = await html2image(document.body, w, h);
    encoder.addFrameRgba(img.data);
    await sleep(delay);
  }
  encoder.finalize();
  const mp4 = encoder.FS.readFile(encoder.outputFilename);
  downloadFile("screenshot.mp4", mp4);
  capturing = false;
  console.log("capturing finished");
};

export { capture5sec };
