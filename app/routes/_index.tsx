import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { LP_GRID_ITEMS } from 'lp-items'
export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export default function Index() {
	return (
		<div className="relative">
			<header className="w-full h-20 bg-white shadow-sm dark:bg-black flex items-center justify-between border-b border-blue-700 sticky top-0 ">
				<div className="relative flex-1 container mx-auto flex items-center justify-between ">
					<div>
						<img
							width={150}
							src="/logo-light.png"
							alt="Remix"
							className="block  dark:hidden"
						/>
						<img
							width={150}
							src="/logo-dark.png"
							alt="Remix"
							className="hidden  dark:block"
						/>
					</div>
					<Link
						target="_blank"
						to={'https://github.com/NadirBakhsh/remix-templates'}
						rel="noreferrer">
						<svg
							height="32"
							aria-hidden="true"
							viewBox="0 0 24 24"
							version="1.1"
							width="32"
							fill="currentColor"
							data-view-component="true"
							className="octicon octicon-mark-github v-align-middle">
							<path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
						</svg>
					</Link>
				</div>
			</header>

			<section className="bg-white dark:bg-black">
				<div className="mx-auto grid  px-4 py-8 text-center lg:py-16">
					<div className="mx-auto place-self-center">
						<h1 className="mb-4  text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
							Remix Enterprise Boilerplate
						</h1>
						<p className="mb-6 max-w-4xl mt-8 font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
							high-performance{' '}
							<Link
								target="_blank"
								to={'https://github.com/NadirBakhsh/remix-templates'}
								className="font-semibold underline italic hover:text-white"
								rel="noreferrer">
								{' '}
								Remix boilerplate!
							</Link>{' '}
							Experience rapid UI development, fast by default, without config optimized
							for performance. Tailwind CSS and more. This boilerplate! inspired by{' '}
							<br />{' '}
							<Link
								target="_blank"
								className="underline font-semibold hover:text-white"
								to="https://github.com/Blazity/next-enterprise"
								rel="noreferrer">
								next-enterprise repo
							</Link>
						</p>
					</div>
				</div>
			</section>

			<section className="bg-white dark:bg-black">
				<div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6 container">
					<div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
						{LP_GRID_ITEMS.map((singleItem) =>
							singleItem?.isActive ? (
								<div
									key={singleItem.title}
									className="flex flex-col items-center justify-center text-center bg-white shadow-md dark:bg-zinc-800 py-10 px-4 rounded-md">
									<div className="bg-[#dbeafe] dark:bg-[#dbeafe] mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12">
										{singleItem.icon}
									</div>
									<h3 className="mb-2 text-xl font-bold dark:text-white">
										{singleItem.title}
									</h3>
									<p className="text-gray-500 dark:text-gray-400">
										{singleItem.description}
									</p>
								</div>
							) : null
						)}
					</div>
				</div>
			</section>
		</div>
	)
}
