import React from 'react';
import Image from 'next/image';
import Box from '@sweatpants/box';
import styled from 'styled-components';
import css from '@styled-system/css';
import ScreenReaderOnly from '@components/ScreenReaderOnly';

const StyledButton = styled.button<{ $isActive: boolean }>`
  display: block;
  position: relative;
  background: transparent;
  border: none;
  overflow: hidden;

  height: 90px;
  width: 90px;

  border: ${({ $isActive }) => ($isActive ? '3px solid black' : '3px solid transparent')};
  transition: 0.15s;

  ${css({
    borderRadius: 200,
  })}

  &:hover {
    cursor: pointer;
  }
`;

type GalleryProps = {
  images?: {
    node: {
      alt?: string;
      width?: string;
      height?: string;
      url: string;
    };
  }[];
};

function Gallery(props: GalleryProps): JSX.Element | null {
  const { images } = props;
  const [index, setIndex] = React.useState(0);

  if (!images) {
    return null;
  }

  const activeImage = images[index];

  return (
    <>
      <Box display="grid" gridTemplateColumns="90px 4fr" gridGap="500">
        <Box display="grid" gridGap="500" height="fit-content">
          {images &&
            images.map(({ node }, i: number) => {
              const isActive = i === index;
              return (
                <StyledButton
                  key={i}
                  onClick={() => {
                    setIndex(i);
                  }}
                  $isActive={isActive}
                >
                  <Box
                    display=""
                    position="absolute"
                    top="50%"
                    left="50%"
                    style={{ transform: 'translate(-50%, -50%)' }}
                    height="110%"
                    width="110%"
                  >
                    <Image
                      src={node.url}
                      alt={node.alt || ''}
                      width={node.width}
                      height={node.height}
                    />
                    <ScreenReaderOnly>View Image</ScreenReaderOnly>
                  </Box>
                </StyledButton>
              );
            })}
        </Box>
        <Box flex="1">
          <Box borderRadius={['400', null, null, '800']} overflow="hidden">
            <Image
              src={activeImage.node.url}
              alt={activeImage.node.alt || ''}
              width={activeImage.node.width}
              height={activeImage.node.height}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Gallery;
