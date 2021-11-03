import Link from './Link'

const Card = ({ title, description, href, linkTitle }) => (
  <div className="p-4 md:w-full md">
    <div className="grid grid-cols-4">
      <section className="col-span-1">
        <h2 className="mb-0 text-1xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            {linkTitle}
          </Link>
        )}
      </section>
      <p className="mb-3 col-span-3 prose text-gray-500 max-w-full dark:text-gray-400">
        {description}
      </p>
    </div>
  </div>
)

export default Card
