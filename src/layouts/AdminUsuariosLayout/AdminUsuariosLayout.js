import styles from "./AdminUsuariosLayout.module.scss";
import { MenuBar } from "@/components/Layout/MenuBar/MenuBar";
import { ContentAdmin } from "@/components/Layout/Content/ContentAdmin";
import { TopLogo } from "@/components/Layout/TopLogo/TopLogo"
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export function AdminUsuariosLayout() {
  const [menuVisible, setMenuVisible] = useState(true);
  
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div >
      <MenuBar menuVisible={menuVisible} setMenuVisible={setMenuVisible} onSelectOption={handleSelectOption}/>
      <ContentAdmin menuVisible={menuVisible} selectedOption={selectedOption}/>
    </div>
  )
}
