import type { NextPage } from 'next';
import {
  Stack, VStack, Text, Container,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MySkeleton } from '../components/Skeleton/MySkeleton';

const Home: NextPage<void> = () => {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => setLoaded(true), 5000);

  return (
    <VStack p="20px">
      <Text fontSize="24px">気になるUIをいっぱいおいてくよ</Text>
      <Container w="800px">
        <Stack>
          <MySkeleton variant="text" />
          <MySkeleton variant="text" wave />
          <MySkeleton variant="text" wave fadeDuration={0.5} />
          <MySkeleton variant="text" isLoaded={loaded}>
            読み込んだよ！
          </MySkeleton>
          <MySkeleton variant="circular" w="40px" h="40px" />
          <MySkeleton variant="circular" w="40px" h="40px" wave />
          <MySkeleton variant="circular" w="40px" h="40px" wave fadeDuration={0.5} />
          <MySkeleton variant="circular" w="40px" h="40px" isLoaded={loaded}>
            読み込んだよ！
          </MySkeleton>
          <MySkeleton variant="rectangular" />
          <MySkeleton variant="rectangular" wave />
          <MySkeleton variant="rectangular" wave fadeDuration={0.5} />
          <MySkeleton variant="rectangular" isLoaded={loaded}>
            読み込んだよ！
          </MySkeleton>
        </Stack>
      </Container>
    </VStack>
  );
};

export default Home;
