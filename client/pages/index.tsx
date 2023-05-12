import Head from 'next/head'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import List from './components/List'

export default function Home() {
	return (
		<div className='bg-[#bdd0b9] snap-y snap-mandatory overflow-scroll h-screen'>
			<Head>
				<title>Web3 плате</title>
			</Head>

			<Menu />

			<div className='snap-center'>
				<LandingPage />
			</div>

			<div className='snap-center'>
				<List />
			</div>
		</div>
	)
}
