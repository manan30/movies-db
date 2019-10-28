import React, { useState } from 'react';

import {
  SideBarItem,
  ItemActiveTick,
  ItemContainer,
  ItemIcon,
  ItemText
} from './styled';

import Constants from '../../utils/Constants';

function SideBar() {
  const [toggleStatus, setToggleStatus] = useState(
    new Array(Constants.SideBarItems.length).fill(false)
  );

  return (
    <div>
      {Constants.SideBarItems.map((val, i) => (
        <SideBarItem>
          <ItemContainer
            onClick={() => {
              setToggleStatus(status => {
                return status.map((s, idx) => i === idx);
              });
            }}>
            <ItemActiveTick />
            <ItemIcon />
            <ItemText color={toggleStatus[i] && 'red'}>{val.text}</ItemText>
          </ItemContainer>
        </SideBarItem>
      ))}
    </div>
  );
}

export default SideBar;
