import { ChakraProvider } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import { SkeletonAvatar } from '../../components/Skeleton';
import type { SkeletonAvatarProps } from '../../components/Skeleton';
import theme from '../../theme';

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
