import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import styles from './styles.scss';

const MiniPlayerButton = props => {
  return(
    <Button icon
      className={styles.mini_player_button}
      {...props}
    >
      <Icon name='compress'/>
    </Button>
  );
};

export default MiniPlayerButton;
