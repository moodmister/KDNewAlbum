const progressBar = $('#new-album-announced');
const progress = $('#new-album-announced .progress');
const process = $('#process');
const progressFunc = (widthVar, textString) => {
  progress.css('width', widthVar);
  process.text(textString);
};

const loopThis = () => {
  setTimeout(() => progressFunc('10%', 'Hyping fans'), 2000);
  setTimeout(() => progressFunc('20%', 'Writing lyrics'), 4000);
  setTimeout(() => progressFunc('50%', 'Renting recording studio'), 6000);
  setTimeout(() => progressFunc('75%', 'Showing record to recording companies'), 10000);
  setTimeout(() => progressFunc('95%', 'Issuing record deal'), 12000);
  setTimeout(() => progressFunc('0%', 'Deal is off starting over'), 15000);
  setInterval(loopThis, 16000);
}
loopThis();
