import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export default function Index() {
	return (
		<div className="flex h-screen">
			<header className="flex ">
				<div>
					<img
						src="/logo-light.png"
						alt="Remix"
						className="block w-full dark:hidden"
					/>
					<img
						src="/logo-dark.png"
						alt="Remix"
						className="hidden w-full dark:block"
					/>
				</div>
			</header>
		</div>
	)
}

