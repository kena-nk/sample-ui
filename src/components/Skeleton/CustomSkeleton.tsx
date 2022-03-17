import { FC, ReactNode } from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

export type CustomSkeletonProps = {
  variant: 'text' | 'circular' | 'rectangular';
  w?: string;
  h?: string;
  wave?: boolean;
  bg?: string;
  radii?: string;
  fadeDuration?: number;
  children?: ReactNode;
  isLoaded?: boolean;
}

const pulseKeyframe = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
`;

const waveKeyframe = keyframes`
  0% {
    translateX(-100%);
  }

  50%, 100% {
    transform: translateX(100%);
  }
`;

const AnimationPulse = (fadeDuration: number) => `${pulseKeyframe} ${fadeDuration}s linear 0.5s infinite`;
const AnimationWave = (fadeDuration: number) => `${waveKeyframe} ${fadeDuration}s linear 0.5s infinite`;

type BaseCustomSkeletonType = Omit<CustomSkeletonProps, 'variant'>
const BaseCustomSkeleton: FC<BaseCustomSkeletonType> = ({
  w = '100%',
  h = '24px',
  bg = 'gray.300',
  wave = false,
  radii = '4px',
  fadeDuration = 1.6,
  children,
  isLoaded = false,
}) => {
  if (wave) {
    return (
      <>
        <Box
          display={isLoaded ? 'none' : undefined}
          pos="relative"
          w={w}
          h={h}
          bg={bg}
          borderRadius={radii}
          _after={{
            animation: AnimationWave(fadeDuration),
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
            content: '""',
            position: 'absolute',
            transform: 'translateX(-100%)',
            top: '0',
            left: '0',
            height: h,
            width: '100%',
          }}
        />
        { isLoaded && children }
      </>
    );
  }
  return (
    <>
      <Box
        display={isLoaded ? 'none' : undefined}
        pos="relative"
        w={w}
        h={h}
        bg={bg}
        borderRadius={radii}
        animation={AnimationPulse(fadeDuration)}
      />
      { isLoaded && children }
    </>
  );
};

export const CustomSkeleton: FC<CustomSkeletonProps> = ({
  variant, w, h, bg, radii, wave, fadeDuration, isLoaded, children,
}) => {
  if (variant === 'text') {
    return (
      <BaseCustomSkeleton
        w={w}
        h={h}
        bg={bg}
        wave={wave}
        radii={radii}
        fadeDuration={fadeDuration}
        isLoaded={isLoaded}
      >
        { children }
      </BaseCustomSkeleton>
    );
  }
  if (variant === 'circular') {
    return (
      <BaseCustomSkeleton
        w={w || '24px'}
        h={h}
        bg={bg}
        wave={wave}
        radii={radii || '50%'}
        fadeDuration={fadeDuration}
        isLoaded={isLoaded}
      >
        { children }
      </BaseCustomSkeleton>
    );
  }
  if (variant === 'rectangular') {
    return (
      <BaseCustomSkeleton
        w={w}
        h={h || '200px'}
        bg={bg}
        wave={wave}
        radii={radii || '0px'}
        fadeDuration={fadeDuration}
        isLoaded={isLoaded}
      >
        { children }
      </BaseCustomSkeleton>
    );
  }
  return null;
};
