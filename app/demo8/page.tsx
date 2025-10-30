import {Navbar4} from '@/app/ui/Navbar4'
import Hero_new4 from '@/app/ui/Hero_new4'
export default function Page() {
    return (
        <div className="min-h-screen bg-[#F2EAE0]">
            {/* Page wrapper to limit the page/body width to max 1000px only for this page */}
            <Navbar4 />
            <Hero_new4 />
        </div>
    )
}