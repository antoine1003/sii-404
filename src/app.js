import anime from 'animejs/lib/anime.es.js';

const pathCloudOne = anime.path('#path-cloud-1');

anime({
  targets: '#cloud-1',
  translateX: pathCloudOne('x'),
  translateY: pathCloudOne('y'),
  easing: 'linear',
  duration: 35000,
  loop: true
});

const bounceTargets = '#four-1, #four-2'

const tl1 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 500,
  loop: true
});

tl1.add({
    targets: bounceTargets,
    easing: 'easeInBounce',
    translateY: -20
  })
  .add({
    targets: bounceTargets,
    easing: 'easeInSine',
    translateY: 0,
    duration: 200
  });

  // Eye
  const eyeTarget = '#eye'
  const tl2 = anime.timeline({
    easing: 'linear',
    duration: 150,
    loop: true
  });

  tl2.add({
    targets: eyeTarget,
    d: [
      { value: 'M 379.5215 420.7102 a 9 1 0 1 0 18 0 a 9 1 0 1 0 -18 0' }
    ]
  })
  .add({
    targets: eyeTarget,
    d: [
      { value: 'M 379.5215 420.7102 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0' }
    ]
  }).add({
    targets: eyeTarget,
    d: [
      { value: 'M 379.5215 420.7102 a 9 1 0 1 0 18 0 a 9 1 0 1 0 -18 0' }
    ]
  })
  .add({
    targets: eyeTarget,
    d: [
      { value: 'M 379.5215 420.7102 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0' }
    ],
    endDelay: 5000
  }).add({
    targets: eyeTarget,
    d: [
      { value: 'M 379.5215 420.7102 a 9 1 0 1 0 18 0 a 9 1 0 1 0 -18 0' }
    ]
  })
  .add({
    targets: eyeTarget,
    d: [
      { value: 'M 379.5215 420.7102 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0' }
    ],
    endDelay: 8000
  })