import Routes from '../routes'
import Header from './components/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Routes />
            </main>
            <footer>Footer</footer>
        </>
    )
}

export default Layout