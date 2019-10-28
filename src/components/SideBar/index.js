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

  const customizeToggle = (array, i) => {
    console.log(i);
    if (i === 0) return [true, ...new Array(array.length - 1).fill(false)];

    if (i === array.length - 1)
      return [...new Array(array.length - 1).fill(false), true];

    return [
      ...new Array(i).fill(false),
      true,
      ...new Array(array.length - 1 - i).fill(false)
    ];
  };

  return (
    <div>
      {Constants.SideBarItems.map((val, i) => (
        <SideBarItem>
          <ItemContainer
            onClick={() => {
              setToggleStatus(customizeToggle(toggleStatus, i));
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
