import styles from "./BasicLayout.module.scss";
import { Container} from "semantic-ui-react";



export  function BasicLayout({ menuVisible }) {
  
  const contentClass = menuVisible ? styles.contentExpanded : styles.contentCollapsed;

  
  return (
    <div className={`${styles.content} ${contentClass}`}>
      {/* Contenido de la página seleccionada */}
      jdjdkjpfkmsdkfmksdmfldsmkfmksdmfksdmkfmsdkmfkdmsk
    </div>
  )
}
