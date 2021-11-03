import siteMetadata from '@/data/siteMetadata'
import skillCategoryData from '@/data/skillData'
import { PageSEO } from '@/components/SEO'
import Skills from '@/components/Skills'

const skills = () => {
  return (
    <>
      <PageSEO title={`Skills - ${siteMetadata.author}`} description="Technical skills" />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Skills
          </h1>
        </div>
        <Skills skillCategoryData={skillCategoryData}></Skills>
      </div>
    </>
  )
}

export default skills
