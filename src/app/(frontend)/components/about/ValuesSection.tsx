const values = [
    {
        title: 'Integrity',
        description: 'Standing by work quality and honest communication in every project we undertake.'
    },
    {
        title: 'Attention to Detail',
        description: 'Committing to thorough workmanship and finishing tasks to the highest standard.'
    },
    {
        title: 'Reliability',
        description:
            'Completing projects on time and within budget, with a two-year general defects guarantee for peace of mind.'
    },
    {
        title: 'Client-Focused',
        description:
            'Tailoring solutions and maintaining a personal approach, ensuring each project meets your unique needs.'
    }
];

export default function ValuesSection() {
    return (
        <section className='py-32'>
            {/* Section Header */}
            <div className='mb-16 text-center'>
                <h1 className='mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl'>Our Values</h1>
                <p className='mx-auto max-w-3xl text-lg text-primary md:text-xl'>
                    The principles that guide every project and define our commitment to excellence.
                </p>
            </div>

            {/* Values Grid */}
            <div className='grid gap-8 md:grid-cols-2 lg:gap-12'>
                {values.map((value, index) => (
                    <div
                        key={index}
                        className='group rounded-lg border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-gray-200 hover:shadow-lg'>
                        <div className='mb-6'>
                            <h3 className='text-xl font-semibold text-primary md:text-2xl'>{value.title}</h3>
                        </div>
                        <p className='text-lg leading-relaxed text-gray-700'>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
