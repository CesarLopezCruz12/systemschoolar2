import styles from "./EstudianteUsuarioLayout.module.scss";
import { MenuBarEstudiante } from "@/components/Layout/MenuBarEstudiante/MenuBarEstudiante";
import { ContentAdmin } from "@/components/Layout/Content/Content";
import { TopLogo } from "@/components/Layout/TopLogo/TopLogo"
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export function EstudianteUsuarioLayout(){
    const [menuVisible, setMenuVisible] = useState(true);
  
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

    return(
        <div>
            <MenuBarEstudiante menuVisible={menuVisible} setMenuVisible={setMenuVisible} onSelectOption={handleSelectOption}/>
            <ContentAdmin menuVisible={menuVisible} selectedOption={selectedOption}/>
        </div>
    )
}