const Skills = ({ skillCategoryData }) => {
  return (
    <div className="prose dark:prose-dark lg:prose-xl">
      <div className="space-y divide-y divide-gray-200 dark:divide-gray-800">
        {skillCategoryData.map((category) => (
          <div key={category.name}>
            <h4>{category.name}</h4>
            <div className="grid grid-cols-3">
              {category?.skills?.map((skill) => (
                <div className="space-y-4" key={skill}>
                  <div className="flex items-center text-base font-medium">
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/black-and-white.png"
                      alt="black-and_white-bullet"
                    />
                    <span className="ml-2">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
