import siteMetadata from '@/data/siteMetadata'
import { projectsData, fossData } from '@/data/workData'
import { PageSEO } from '@/components/SEO'
import WorkContainer from '@/components/WorkContainer'

export default function Work() {
  return (
    <>
      <PageSEO title={`Work - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Work
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A POC of my technical skills!
          </p> */}
        </div>
        <WorkContainer mainTitle="Projects" linkTitle="find more" data={projectsData} />
        <WorkContainer mainTitle="FOSS Contributions" linkTitle="find more" data={fossData} />
      </div>
    </>
  )
}
