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
        description: 'Completing projects on time and within budget, with a two-year general defects guarantee for peace of mind.'
    },
    {
        title: 'Client-Focused',
        description: 'Tailoring solutions and maintaining a personal approach, ensuring each project meets your unique needs.'
    }
];

export default function ValuesSection() {
    return (
        <section id='our-values' className='container mx-auto my-12 lg:max-w-6xl'>
            <h2 className='mb-4 text-2xl font-semibold'>Our Values</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {values.map((value, index) => (
                    <div key={index} className='flex h-full flex-col bg-secondary p-4 shadow-md xl:min-h-28'>
                        <h3 className='mb-2 text-center font-semibold'>{value.title}</h3>
                        <p className='flex-grow text-center text-lg'>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
