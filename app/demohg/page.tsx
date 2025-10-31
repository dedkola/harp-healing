import {Navbar4} from '@/app/ui/Navbar4'
import Heronew4hg from '@/app/ui/Hero_new4hg'

export default function Page() {
    return (
        <>
        <div className=" ">
            {/* Page wrapper to limit the page/body width to max 1000px only for this page */}
            <Navbar4 />
            <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

            
        </div>
        <Heronew4hg />
    </>
    )
}