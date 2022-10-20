import styled, {keyframes, css} from 'styled-components';


interface FadeProps {
  visible: boolean;
  delay: string;
}

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

interface FadingAnimationProps {
    visible: boolean;
    delay: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FadingAnimation = css<FadingAnimationProps>`
    animation: 
      ${(p) => (p.visible ? fadeIn : fadeOut)} 
      ${(p) => p.delay}
      1 forwards;
`;

const Fade = styled.div<FadeProps>`
  opacity: ${(props) => (props.visible ? 1 : 0)};

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: visibility ${(props) => props.delay} linear, opacity ${(props) =>
  props.delay} linear;

`;

export default Fade;