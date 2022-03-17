import type { NextPage } from 'next';
import {
  Stack, VStack, Text, Container,
} from '@chakra-ui/react';
import { useState } from 'react';
import { CustomSkeleton } from '../components/Skeleton/CustomSkeleton';

const Home: NextPage<void> = () => {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => setLoaded(true), 5000);

  return (
    <VStack p="20px">
      <Text fontSize="24px">気になるUIをいっぱいおいてくよ</Text>
      <Container w="800px">
        <Stack>
          <CustomSkeleton variant="text" />
          <CustomSkeleton variant="text" wave />
          <CustomSkeleton variant="text" wave fadeDuration={0.5} />
          <CustomSkeleton variant="text" isLoaded={loaded}>
            読み込んだよ！
          </CustomSkeleton>
          <CustomSkeleton variant="circular" w="40px" h="40px" />
          <CustomSkeleton variant="circular" w="40px" h="40px" wave />
          <CustomSkeleton variant="circular" w="40px" h="40px" wave fadeDuration={0.5} />
          <CustomSkeleton variant="circular" w="40px" h="40px" isLoaded={loaded}>
            読み込んだよ！
          </CustomSkeleton>
          <CustomSkeleton variant="rectangular" />
          <CustomSkeleton variant="rectangular" wave />
          <CustomSkeleton variant="rectangular" wave fadeDuration={0.5} />
          <CustomSkeleton variant="rectangular" isLoaded={loaded}>
            読み込んだよ！
          </CustomSkeleton>
        </Stack>
      </Container>
    </VStack>
  );
};

export default Home;
