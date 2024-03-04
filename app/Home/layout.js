import FooterMenu from "@/components/footer/footerMenu";
import Profile from "@/components/header/profile";

export default function mainLayout({children}) {
    return(
        <div className="relative">
            <Profile />
            {children}
            <FooterMenu />
        </div>
    )
}