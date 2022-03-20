import { ChakraProvider, Stack } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { CustomSkeleton } from '../../src/components/Skeleton';
import type { CustomSkeletonProps } from '../../src/components/Skeleton';
import theme from '../../src/theme';

export default {
  component: CustomSkeleton,
  title: 'Skeleton/CustomSkeleton',
} as Meta;

const Template: Story<CustomSkeletonProps> = (args) => (
  <ChakraProvider theme={theme}>
    <CustomSkeleton {...args} />
  </ChakraProvider>
);

const VariantsSkelton: Story<CustomSkeletonProps> = () => (
  <ChakraProvider theme={theme}>
    <Stack spacing="10px">
      <CustomSkeleton variant="circular" w="40px" h="40px" />
      <CustomSkeleton variant="text" w="300px" />
      <CustomSkeleton variant="rectangular" w="300px" />
    </Stack>
  </ChakraProvider>
);

const isLoadedSkelton: Story<CustomSkeletonProps> = () => {
  const [loaded, setLoaded] = useState(false);

  setTimeout(() => setLoaded(true), 3000);
  return (
    <ChakraProvider theme={theme}>
      <Stack spacing="10px">
        <CustomSkeleton variant="text" w="300px" isLoaded={loaded}>
          isSuccess!
        </CustomSkeleton>
      </Stack>
    </ChakraProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'text',
  w: '300px',
};

export const Variants = VariantsSkelton.bind({});

export const Wave = Template.bind({});
Wave.args = {
  variant: 'text',
  wave: true,
  w: '300px',
};

export const CustomSpeed = Template.bind({});
CustomSpeed.args = {
  variant: 'text',
  fadeDuration: 2,
  w: '300px',
};

export const isLoaded = isLoadedSkelton.bind({});
isLoaded.args = {};
