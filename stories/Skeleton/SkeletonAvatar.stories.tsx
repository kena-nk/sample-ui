import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import { SkeletonAvatar } from '../../src/pages/components/Skeleton';
import type { SkeletonAvatarProps } from '../../src/pages/components/Skeleton';
import theme from '../../src/pages/theme';

export default {
  component: SkeletonAvatar,
  title: 'Skeleton/SkeletonAvatar',
} as Meta;

const Template: Story<SkeletonAvatarProps> = (args) => (
  <ChakraProvider theme={theme}>
    <SkeletonAvatar {...args} />
  </ChakraProvider>
);

export const Default = Template.bind({});
Default.args = {
  width: '100px',
  height: '100px',
  wave: true,
  bg: 'gray.300',
};
