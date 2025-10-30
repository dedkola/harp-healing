import {Navbar4} from '@/app/ui/Navbar4'
import Hero_new3 from '@/app/ui/Hero_new3'
export default function Page() {
    return (
        <div className="min-h-screen bg-[#F2EAE0]">
            {/* Page wrapper to limit the page/body width to max 1000px only for this page */}
            <Navbar4 />
            <Hero_new3 />
        </div>
    )
}