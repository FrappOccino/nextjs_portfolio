import ContactForm  from '@/shared/components/ui/contact-form';

export function ContactSection() {
    return (
        <>
            <div className='w-full'>
                <h4 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold md:text-4xl lg:text-5xl mt-30">
                    Ready to take <span className='text-info'>your</span> Digital presence to the next level?
                </h4>
            </div>
            <div className='w-full flex justify-center'>
                <ContactForm />
            </div>
        </>
    )
}