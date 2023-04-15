import {Text} from 'react-native';

const setCustomText = () => {
  const TextRender = Text.render;

  let customStyle = {
    fontFamily: 'Poppins',
    color: '#000',
  };

  Text.render = function render(props, ...rest) {
    const mergedProps = {...props, style: [customStyle, props.style]};
    return TextRender.apply(this, [mergedProps, ...rest]);
  };
};

export default setCustomText;
