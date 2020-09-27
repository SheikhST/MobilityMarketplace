import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return <div><Menu pointing secondary>
   <Link href="/">
   <Menu.Item
    name='home'
    active={true}
  />
   </Link>
   <Link href="/find-ride">
  <Menu.Item
    name="Find and Ride"
  />
</Link>
<Link href="/about">
  <Menu.Item
    name='About'
    
  />
</Link>

 
 
</Menu><Component {...pageProps} /></div>
}

export default MyApp
