export default function loadSound(src) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', src, true);
    xhr.onload = () => {
      resolve(xhr.response)
    };
    xhr.send();
  })
}
