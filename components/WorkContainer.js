import Card from '@/components/Card'

const WorkContainer = ({ mainTitle, linkTitle, data }) => {
  return (
    <div className="container py-7">
      <h3 className="text-2xl font-normal pb-8 sm:text-3xl md:text-4xl">{mainTitle}</h3>
      <div className="flex flex-wrap -m-4">
        {data.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            description={d.description}
            href={d.href}
            linkTitle={linkTitle}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkContainer
