const progressBar = $('#new-album-announced');
const progress = $('#new-album-announced .progress');
const process = $('#process');
const progressFunc = (widthVar, textString) => {
  progress.css('width', widthVar);
  process.text(textString);
};

const steps = [
  { msg: 'Deal is off starting over', timeout: 15000, percent: '0%'},
  { msg: 'Issuing record deal', timeout: 12000, percent: '95%'},
  { msg: 'Showing record to recording companies', timeout: 10000, percent: '75%'},
  { msg: 'Renting recording studio', timeout: 6000, percent: '50%'},
  { msg: 'Writing lyrics', timeout: 4000, percent: '20%'},
  { msg: 'Hyping fans', timeout: 2000, percent: '10%'}
];

const loopThis = () => {
  if (steps.length == 0) return;

  const { msg, timeout, percent } = steps.pop();

  progressFunc(percent, msg);

  setTimeout(loopThis, timeout);
}
loopThis();
