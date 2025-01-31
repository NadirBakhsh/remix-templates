import type { MetaFunction } from '@remix-run/node'
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
				<div className="relative flex-1 container mx-auto flex items-center ">
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
			</header>

			<section className="bg-white dark:bg-black">
				<div className="mx-auto grid  px-4 py-8 text-center lg:py-16">
					<div className="mx-auto place-self-center">
						<h1 className="mb-4  text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
							Remix Enterprise Boilerplate
						</h1>
						<p className="mb-6 max-w-4xl mt-8 font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
							high-performance Remix boilerplate! Experience rapid UI development, fast
							by default, with config optimized for performance. Tailwind CSS and more
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
