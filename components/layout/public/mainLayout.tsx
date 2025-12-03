import PublicFooter from "@/components/layout/public/footer";
import PublicHeader from "@/components/layout/public/header";
import { ReactNode } from "react";


export default function PublicMainLayout({ children }: { children: ReactNode }) {



    return (
        <div className="flex flex-col min-h-screen">
            <PublicHeader />
            <div className="flex-1">
                {children}
            </div>
            <PublicFooter />
        </div>
    )
}
