import { FC } from 'react';
import { Box } from '@chakra-ui/react';

export type SkeletonAvatarProps = {
    width: string;
    height: string;
    wave: boolean;
    bg: string;
}
export const SkeletonAvatar: FC<SkeletonAvatarProps> = ({
  width, height, bg, wave,
}) => (
  <Box w={width} h={height} bg={bg} />
);
