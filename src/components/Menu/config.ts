import { MenuEntry } from '@pancakeswap-libs/uikit'

const farmUrl = 'https://app.blueswap.finance'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: farmUrl,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${farmUrl}/farms`,
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: `${farmUrl}/pools`,
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'TokenInfo',
        href: 'https://pancakeswap.info/token/0x111B750C3aBf9835d8c4631DdE0FC7ECd1A60f20',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Palette-Finance/',
      },
      {
        label: 'Docs',
        href: 'https://docs.blueswap.finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@palettefinance/',
      },
    ],
  },
]

export default config
