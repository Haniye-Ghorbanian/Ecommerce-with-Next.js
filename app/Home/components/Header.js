import Filters from "./filters"
import WelcomeBanner from "./welcomeBanner"
import Search from "./search"
import Profile from "./profile"



export default function Header() {
    return(

        <div className="fixed top-0 w-full">

            <Profile />
            <WelcomeBanner />
            <Search />
            <Filters />
        </div>
    )
}