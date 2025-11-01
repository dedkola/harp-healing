import {Navbar4hg2} from '@/app/ui/Navbar4hg2'
import Herohg3 from '@/app/ui/Hero_new4hg3'

export default function Page() {
    return (
        <>
        <div className=" ">
            {/* Page wrapper to limit the page/body width to max 1000px only for this page */}
            <Navbar4hg2 />
            <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

            
        </div>
        <Herohg3 />
    </>
    )
}