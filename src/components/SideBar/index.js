import React, { useState } from 'react';

import {
  SideBarTitle,
  SideBarItem,
  ItemActiveTick,
  ItemContainer,
  ItemIcon,
  ItemText
} from './styled';

import Constants from '../../utils/Constants';

function SideBar({ handler }) {
  const [toggleStatus, setToggleStatus] = useState(
    new Array(Constants.SideBarItems.length).fill(false)
  );

  return (
    <>
      <SideBarTitle>MovieTracker</SideBarTitle>
      {Constants.SideBarItems.map((val, i) => {
        const key = i;
        return (
          <SideBarItem key={key}>
            <ItemContainer
              onClick={() => {
                handler(val.text);
                setToggleStatus(status => {
                  return status.map((s, idx) => i === idx);
                });
              }}>
              <ItemActiveTick bg={toggleStatus[i] && '#3CE7F5'} />
              <ItemIcon />
              <ItemText color={(toggleStatus[i] && '#A1A3B2') || undefined}>
                {val.text}
              </ItemText>
            </ItemContainer>
          </SideBarItem>
        );
      })}
    </>
  );
}

export default SideBar;
