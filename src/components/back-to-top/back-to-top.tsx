import React, { useState, useEffect } from 'react';
import useScroll from 'ahooks/es/useScroll';
import useDebounceFn from 'ahooks/es/useDebounceFn';
import { animated, useSpring } from 'react-spring';
import Top from '../../assets/top.svg';
import { mergeProps, NativeProps, withNativeProps } from '../../utils/props';

const classPrefix = `ly-back-to-top`;

export type BackToTopProps = {
  /** 在页面高度为多少时展示返回顶部 */
  height?: number;
  /** 滚动超时时间 */
  time?: number;
  /** 滚动的容器 */
  scrollRef?: React.MutableRefObject<HTMLElement | null>;
  /** 文案的文字 */
  text?: string;
} & NativeProps<'--font-size'>;

const defaultProps = {
  height: 200,
  time: 500,
  text: '顶部',
};

export const BackToTop: React.FC<BackToTopProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const { height, time, scrollRef, text } = props;
  const [show, setShow] = useState(false);

  const scroll = useScroll(scrollRef?.current ? scrollRef.current : document);

  const { run } = useDebounceFn(
    () => {
      if (!scroll) {
        return;
      }
      if (scroll.top > height) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
    {
      wait: time,
    },
  );

  useEffect(() => {
    run();
  }, [run, scroll]);

  const handleBackToTop = () => {
    if (scrollRef?.current) {
      scrollRef?.current?.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
    // 标准模式
    if (window?.top?.document?.compatMode === 'CSS1Compat') {
      document.documentElement.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    }
    // 怪异模式
    if (window?.top?.document?.compatMode === 'CSS1Compat') {
      document.body.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const spring = useSpring({
    from: { opacity: 0, display: 'none' },
    to: show ? { opacity: 1, display: 'inline' } : { opacity: 0 },
    delay: 200,
    reverse: !show,
  });

  return (
    <animated.div style={spring}>
      {withNativeProps(
        props,
        <div className={`${classPrefix}`} onClick={handleBackToTop}>
          <img className={`${classPrefix}-icon`} src={Top} alt="top" />
          <div className={`${classPrefix}-text`}>{text}</div>
        </div>,
      )}
    </animated.div>
  );
};
