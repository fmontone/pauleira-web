import { useState, useLayoutEffect } from 'react';
import mojs from 'mo-js';

export default function useButtonFeedback(node) {
  const [animationTimeline, setAnimationTimeline] = useState(
    () => new mojs.Timeline()
  );

  useLayoutEffect(() => {
    if (!node) return;

    const scale = new mojs.Html({
      el: node.current,
      duration: 280,
      x: '-50%',
      y: '-50%',
      scale: { 0: 5 },
      opacity: { 1: 0 },
      isShowEnd: true,
    });

    const newAnimationTimeline = animationTimeline.add([scale]);

    setAnimationTimeline(newAnimationTimeline);
  }, [node, animationTimeline]);

  return animationTimeline;
}
