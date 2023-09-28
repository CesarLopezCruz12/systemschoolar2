import { HeaderLogo } from "@/components/Layout";
import { HomePresetation } from "@/components/Layout/HomePresentacion/HomePresentation";


export function HomeLayout () {
    return(
        <div>
            <HeaderLogo/>
            <HomePresetation/>
        </div>
        
    );
}