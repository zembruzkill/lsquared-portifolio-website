import Header from '@/components/layout/headers/Header'
import ContactComponent from '@/components/ContactComponent'
import ContactFormComponent from '@/components/ContactFormComponent'

export default function Contato() {
    return (
        <>
            <div className="bg-blackground items-center justify-center">
                <Header backgroundColor="transparent" />
                <ContactComponent textColor="white" maxWidth="max-w-380" />
            </div>
            <div className="bg-white">
                <ContactFormComponent textColor="black" maxWidth="max-w-380" />
            </div>
        </>
    )
}
