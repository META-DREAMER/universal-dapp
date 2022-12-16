import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { styled } from 'nativewind';

const StyledSvg = styled(Svg);
export default function MenuIcon(props: React.ComponentProps<typeof Svg>) {
  return (
    <StyledSvg className="h-5 w-5 fill-current" viewBox="0 0 20 20" {...props}>
      {/*<title>Menu</title>*/}
      <Path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </StyledSvg>
    // <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
    //   <Circle
    //     cx="50"
    //     cy="50"
    //     r="45"
    //     stroke="blue"
    //     strokeWidth="2.5"
    //     fill="green"
    //   />
    //   <Rect
    //     x="15"
    //     y="15"
    //     width="70"
    //     height="70"
    //     stroke="red"
    //     strokeWidth="2"
    //     fill="yellow"
    //   />
    // </Svg>
  );
}
