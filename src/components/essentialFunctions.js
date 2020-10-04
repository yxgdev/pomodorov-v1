import { Howl } from 'howler';
import clockSound from '../audio/old-clock.wav';
function playAudio() {
  var sound = new Howl({
    src: [clockSound],
  });
  sound.play();
  console.log('clicked');
}

export default playAudio;
