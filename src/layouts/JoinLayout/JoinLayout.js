import Link from "next/link"
import {Icon, Image} from "semantic-ui-react"
import styles from "./JoinLayout.module.scss";
import { Login } from  '@/components/Layout/Login/Login';
import { HeaderLogo } from '@/components/Layout/HeaderLogo/HeaderLogo';

export  function JoinLayout(props) {
    const { children } = props;
  return (
    <div>
        <div >  
          <HeaderLogo/>
          <Login/>
        </div>
    </div>
  )
}
