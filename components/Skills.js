const Skills = ({ skillCategoryData }) => {
  return (
    <div className="prose dark:prose-dark lg:prose-xl">
      <div className="space-y divide-y divide-gray-200 dark:divide-gray-700">
        {skillCategoryData.map((category) => (
          <div key={category.name}>
            <h4>{category.name}</h4>
            <div className="grid grid-cols-3">
              {category?.skills?.map((skill) => (
                <ul className="space-y-4" key={skill}>
                  <div className="flex items-center text-base font-medium">
                    <span className="ml-2 text-gray-500 dark:text-gray-400">{skill}</span>
                  </div>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
