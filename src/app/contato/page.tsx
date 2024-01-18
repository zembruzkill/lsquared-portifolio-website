import Header from '@/components/layout/headers/Header'
import ContactComponent from '@/components/ContactComponent'
import ContactFormComponent from '@/components/ContactFormComponent'
import ContactTypebotComponent from '@/components/ContactTypebot'

export default function Contato() {
    return (
        <>
            <div className="bg-blackground items-center justify-center">
                <Header backgroundColor="transparent" />
                <ContactComponent textColor="white" maxWidth="max-w-380" />
            </div>
            <div className="bg-white">
                <ContactTypebotComponent
                    textColor="black"
                    maxWidth="max-w-380"
                />
                {/* <ContactFormComponent textColor="black" maxWidth="max-w-380" /> */}
            </div>
        </>
    )
}
