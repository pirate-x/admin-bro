import React from 'react'
import styled from 'styled-components'

import { Box, H2, H5, H4, Text, Illustration, IllustrationProps, Button } from '../design-system'
import { useTranslation } from '../../hooks'

const pageHeaderHeight = 284
const pageHeaderPaddingY = 74
const pageHeaderPaddingX = 250

const DashboardHeader = () => {
  const { translateMessage } = useTranslation()
  return (
    <Box position="relative" overflow="hidden">
      <Box position="absolute" top={50} left={-10}>
        <Illustration variant="Rocket" />
      </Box>
      <Box position="absolute" top={-70} right={-15}>
        <Illustration variant="Moon" />
      </Box>
      <Box
        bg="black"
        height={pageHeaderHeight}
        py={pageHeaderPaddingY}
        px={pageHeaderPaddingX}
      >
        <Text textAlign="center" color="white">
          <H2>{translateMessage('welcomeOnBoard_title')}</H2>
          <Text opacity="0.8">
            {translateMessage('welcomeOnBoard_subtitle')}
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

const boxes = ({ translateLabel }) => [{
  variant: 'Planet',
  title: translateLabel('addingResources_title'),
  subtitle: translateLabel('addingResources_subtitle'),
  href: 'https://softwarebrothers.github.io/admin-bro-dev/tutorial-03-passing-resources.html',
}, {
  variant: 'DocumentCheck',
  title: translateLabel('customizeResources_title'),
  subtitle: translateLabel('customizeResources_subtitle'),
  href: 'https://softwarebrothers.github.io/admin-bro-dev/tutorial-04-customizing-resources.html',
}, {
  variant: 'DocumentSearch',
  title: translateLabel('customizeActions_title'),
  subtitle: translateLabel('customizeActions_subtitle'),
  href: 'https://softwarebrothers.github.io/admin-bro-dev/tutorial-05-actions.html',
}, {
  variant: 'FlagInCog',
  title: translateLabel('writeOwnComponents_title'),
  subtitle: translateLabel('writeOwnComponents_subtitle'),
  href: 'https://softwarebrothers.github.io/admin-bro-dev/tutorial-06-writing-react-components.html',
}, {
  variant: 'Folders',
  title: translateLabel('customDashboard_title'),
  subtitle: translateLabel('customDashboard_subtitle'),
  href: 'https://softwarebrothers.github.io/admin-bro-dev/tutorial-07-custom-dashboard.html',
}, {
  variant: 'Astronaut',
  title: translateLabel('roleBasedAccess_title'),
  subtitle: translateLabel('roleBasedAccess_subtitle'),
  href: 'https://softwarebrothers.github.io/admin-bro-dev/tutorial-08-rbac.html',
}]

const Card = styled(Box)`
  display: ${({ flex }): string => (flex ? 'flex' : 'block')};
  color: ${({ theme }): string => theme.colors.black};
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${({ theme }): string => theme.colors.bluePrimary};
    box-shadow: ${({ theme }): string => theme.shadows.cardHover};
  }
`

Card.defaultProps = {
  variant: 'white',
  boxShadow: 'card',
}

const Dashboard: React.FC = () => {
  const { translateMessage, translateLabel, translateButton } = useTranslation()
  return (
    <Box>
      <DashboardHeader />
      <Box
        mt={['xl', 'xl', '-100px']}
        mb="xl"
        mx={[0, 0, 0, 'auto']}
        px={['default', 'lg', 'xxl', 'auto']}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={[1, 1, 1, 1024]}
      >
        {boxes({ translateLabel }).map(box => (
          <Box width={[1, 1, 1 / 2, 1 / 3]} p="lg">
            <Card as="a" href={box.href}>
              <Text textAlign="center">
                <Illustration
                  variant={box.variant as IllustrationProps['variant']}
                  width={100}
                  height={70}
                />
                <H5 mt="lg">{box.title}</H5>
                <Text>{box.subtitle}</Text>
              </Text>
            </Card>
          </Box>
        ))}
        <Box width={[1, 1, 1 / 2]} p="lg">
          <Card as="a" flex href="https://softwarebrothers.co/blog/">
            <Box flexShrink={0}><Illustration variant="AdminBroLogo" /></Box>
            <Box ml="xl">
              <H4>{translateLabel('checkoutBlog_title')}</H4>
              <Text>{translateLabel('checkoutBlog_subtitle')}</Text>
            </Box>
          </Card>
        </Box>
        <Box width={[1, 1, 1 / 2]} p="lg">
          <Card as="a" flex href="https://github.com/SoftwareBrothers/admin-bro/issues">
            <Box flexShrink={0}><Illustration variant="GithubLogo" /></Box>
            <Box ml="xl">
              <H4>{translateLabel('foundBug_title')}</H4>
              <Text>{translateLabel('foundBug_subtitle')}</Text>
            </Box>
          </Card>
        </Box>
        <Box variant="white" boxShadow="card" width={1} m="lg">
          <Text textAlign="center">
            <Illustration variant="SoftwareBrothersLogo" />
            <H4>{translateLabel('needMoreSolutions_title')}</H4>
            <Text>{translateLabel('needMoreSolutions_subtitle')}</Text>
            <Text mt="xxl">
              <Button
                as="a"
                size="sm"
                variant="primary"
                href="https://softwarebrothers.co/services"
              >
                {translateButton('contactUs')}
              </Button>
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard


// <Box>
//         <Box>
//           <ul>
//             <li><a href="https://softwarebrothers.github.io/admin-bro-dev/tutorial-03-passing-resources.html">Adding Resources</a></li>
//             <li><a href="https://softwarebrothers.github.io/admin-bro-dev/tutorial-04-customizing-resources.html">Customizing resources</a></li>
//             <li><a href="https://softwarebrothers.github.io/admin-bro-dev/tutorial-05-actions.html">Customizing Actions</a></li>
//           </ul>
//         </Box>
//         <Box>
//           <ul>
//             <li><a href="https://softwarebrothers.github.io/admin-bro-dev/tutorial-06-writing-react-components.html">Writing your own components</a></li>
//             <li><a href="https://softwarebrothers.github.io/admin-bro-dev/tutorial-07-custom-dashboard.html">Customizing Dashboard</a></li>
//           </ul>
//         </Box>
//       </Box>
//       <p>
//         In case you found any errors,
//         <a href="https://github.com/SoftwareBrothers/admin-bro/issues"> raise an issue </a>
//         on our GitHub account.
//       </p>
//       <p>
//         For the latest information about AdminBro and more -
//         <a href="https://softwarebrothers.co/blog/"> check out our blog.</a>
//       </p>
//       <SoftwareBrothers>
//         <img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" alt="SoftwareBrothers" />
//         <p>
//           Want to add advanced fields like Google Maps,
//           enrich interface with custom graphs or simply look for professional help? You can always
//           <a href="https://softwarebrothers.co/services"> work with us!</a>
//         </p>
//       </SoftwareBrothers>
