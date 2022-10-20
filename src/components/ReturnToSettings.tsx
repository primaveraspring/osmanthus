import { Button, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';

function ReturnToSettings({ setIsActive }: { setIsActive: Function }) {
  return (
    <Block paddingTop="25px">
      <Button size={SIZE.compact} onClick={() => setIsActive(false)}>
        {'Change settings'}
      </Button>
    </Block>
  );
}

export default ReturnToSettings;
