import Image from 'next/image'

import { NavBar as Nav } from '@thegametools/utils'

const links = [
  { url: '/', render: 'Home' },
  {
    url: '/world',
    className: 'hidden',
    render: (
      <>
        World <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
      </>
    ),
  },
  {
    url: '/person',
    className: 'hidden',
    render: (
      <>
        Person <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
      </>
    ),
  },
  {
    url: '/boonscomps',
    className: 'hidden',
    render: (
      <>
        Boon / Comp <span className="md:pl-1 md:not-sr-only sr-only">Gen</span>
      </>
    ),
  },
]

const NavBar = () => (
  <Nav
    image={Image}
    subText="For Fluxfall Horizon"
    links={links}
    className="bg-white h-20 py-1 px-4"
  />
)

export default NavBar
