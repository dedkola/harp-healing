import {Navbar2} from '@/app/ui/Navbar2'
import Hero_new2 from '@/app/ui/Hero_new2'
export default function Page() {
    return (
        <>
            {/* Page wrapper to limit the page/body width to max 1000px only for this page */}

                <div className=" bg-gradient-to-b from-[#e1bc8f] via-[#ecd8ae] to-[#f7e9d2]">
                    <Navbar2 />
                </div>
<Hero_new2 />
        </>
    )
}