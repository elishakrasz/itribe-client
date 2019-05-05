import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './contributions/CheckoutForm'
import Globe from './maps/Globe';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import LoginModal from './login/LoginModal';
import SignUpModal from './signup/SignUpModal';
import ReactPlayer from 'react-player'


const itribeIcon = "../../itribe.png"
const itribeVideo = "https://www.youtube.com/watch?v=YnHcvwOXQIo"
const itribeCourse = "https://www.youtube.com/watch?v=I3zlHtFE8kw"
const courseVideo = "https://vimeo.com/252044405"
const pashtunChildren = "../../Pashtun/children.jpg"
const theologicalInst = "../../ext.jpg"
const land = "../../land.jpg"
const shinto = "../../Shinto/IMG_1833.JPG"
const outback = "../../Pashtun/Pashtun copy.jpg"
const tracing = "../../Tracing.jpg"

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ 
              minHeight: 1000,
              maxHeight: 1200, 
              padding: '1em 0em',
              backgroundColor: '#C1CDD4'
            }}
            vertical
          >
            <Menu
              // fixed={fixed ? 'top' : null}
              fixed='top'
              inverted={!fixed}
              pointing={!fixed}
              // secondary={!fixed}
              size='large'
              style={{
                backgroundColor: '#004D8A'
              }}
            >
              <Container>
              <Menu.Item as='a' header>
              <Image size='small' src={itribeIcon} style={{ marginRight: '2em' }} />
              Mapping the Return
            </Menu.Item>
            <Menu.Item as='a' header>Home</Menu.Item>
                <Menu.Item position='right'>
                  <LoginModal />
                  <SignUpModal />
                </Menu.Item>
              </Container>
            </Menu>
            <Segment style={{ padding: '8em 0em',  backgroundColor: 'white' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h1' style={{ fontSize: '3em', marginTop: '50px' }}>
              The Lost Tribes are Coming Home
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              iTribe is in th process of activating a newtork of individuals and communities whose members identity as being from an ancient people of Israel
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button success size='huge'>Welcome!!</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
            <Globe />
          </Segment>
          
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const LayoutView = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={7}>
            <Header as='h3' style={{ fontSize: '3em' }}>
              This is a Global Story
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Regardless of your heritage you will find your story in this epic narrative.
            </p>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
              The Lost Tribes of Israel
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Discover the past, present and future of the world's most dispersed people
            </p>
            <div style={{
              textAlign: 'center'
            }}>
            <Button size='huge'>Check Them Out</Button>
            </div>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Image bordered size='big' src={pashtunChildren} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em', height: '100%' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Column width={8}>
        <Grid.Row textAlign='center'>
        <ReactPlayer 
          url={courseVideo} 
          playing
          loop
          muted
          width='100%'
          />
        </Grid.Row>
        </Grid.Column>
        <Grid.Column style={{ 
            padding: '50px',
            // backgroundImage: 'url("../../lost-tribe-map-1.jpg")'
            
            }} width={7}>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
            Welcome to The Lost Tribes of Israel Course!!
            </Header>
            <p style={{ fontSize: '1.3em' }}>
            This online course is hosted by the Theological Research Institute [TRI], accredited by The National College Credit Recommendation Services [NCCRS]. Together with STAT Academy, an educational platform hosted by Amar'e Stoudemire, TRI and STAT academy conduct an overview of the past, present, and future of humanity based on teachings from the Tanach (Hebrew Bible).
            <br />
            <br />
            <b>Course Host: Amar'e Stoudemire </b>
            <br />
            <b>Course Administrator: Rabbi Harry Rozenberg</b>
            </p>
            {/* <Header as='h3' style={{ fontSize: '2.5em' }}>
              The Lost Tribes of Israel
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Discover the past, present and future of the world's most dispersed people
            </p> */}
            <div style={{
              textAlign: 'center'
            }}>
            <Button primary size='huge' style={{
              marginTop: '20px'
            }}>Register Now</Button>
            </div>
          </Grid.Column>
    </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={7}>
            <Header as='h3' style={{ fontSize: '3em' }}>
              This is a Global Story
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Regardless of your heritage you will find your story in this epic narrative.
            </p>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
              The Lost Tribes of Israel
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Discover the past, present and future of the world's most dispersed people
            </p>
            <div style={{
              textAlign: 'center'
            }}>
            <Button size='huge'>Check Them Out</Button>
            </div>
          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Image bordered size='big' src={tracing} style={{
            marginLeft: '50px',  
            width: '125%'
          }}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '5em' }} vertical>
    <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        </Container>
    </Segment>
    <Segment style={{ padding: '5em' }}>
    <div>
    <Divider hidden />
    <Image.Group size='medium'>
      <Image src={courseVideo} />
      <Image src={land} />
      <Image src={shinto} />
      <Image src={outback} />
    </Image.Group>
    </div>
    </Segment>
    <Segment style={{ padding: '0em', height: '100%' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
        <Grid.Column width={8}>
        <Grid.Row textAlign='center'>
        <ReactPlayer 
          url={itribeCourse} 
          playing
          loop
          muted
          width='100%'
          />
        </Grid.Row>
        </Grid.Column>
        <Grid.Column style={{ 
            padding: '50px',
            // backgroundImage: 'url("../../lost-tribe-map-1.jpg")'
            
            }} width={7}>
            <Header as='h3' style={{ fontSize: '2.5em' }}>
            Welcome to The Lost Tribes of Israel Course!!
            </Header>
            <p style={{ fontSize: '1.3em' }}>
            This online course is hosted by the Theological Research Institute [TRI], accredited by The National College Credit Recommendation Services [NCCRS]. Together with STAT Academy, an educational platform hosted by Amar'e Stoudemire, TRI and STAT academy conduct an overview of the past, present, and future of humanity based on teachings from the Tanach (Hebrew Bible).
            <br />
            <br />
            <b>Course Host: Amar'e Stoudemire </b>
            <br />
            <b>Course Administrator: Rabbi Harry Rozenberg</b>
            </p>
            {/* <Header as='h3' style={{ fontSize: '2.5em' }}>
              The Lost Tribes of Israel
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Discover the past, present and future of the world's most dispersed people
            </p> */}
            <div style={{
              textAlign: 'center'
            }}>
            <Button primary size='huge' style={{
              marginTop: '20px'
            }}>Register Now</Button>
            </div>
          </Grid.Column>
    </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          Case Studies
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
        <StripeProvider apiKey="pk_test_mp6cvDiBhAJ7FdAkH3UgbIKD007CXU4pqV">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      </Container>
      <Widget 
        title='iTribe Welcomes You'
        subtitle="Tell us your story? or ask a question..."
        titleAvatar={itribeIcon}
      />
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#004D8A' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default LayoutView