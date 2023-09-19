
import { MenuBar } from '@/components/Layout/MenuBar/MenuBar';
import { BasicLayout } from '@/layouts/BasicLayout/BasicLayout';
import React, { useState } from 'react';

export default function HomePage() {
  const [menuVisible, setMenuVisible] = useState(true);
  return (
    <div>
      <MenuBar menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
      <BasicLayout menuVisible={menuVisible}/>
    </div>
  )
}
