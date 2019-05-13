import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Globe from "./maps/Globe";
import {
  Widget
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";
import ReactPlayer from "react-player";
// import PageBreak from "./Carousel/PageBreak";
import CarouselTest from "./Carousel/CarouselTest";
import { DropZoneTest } from "../modules/shared/DropZone";


const itribeIcon = "../../itribe.png";
// const itribeVideo = "https://www.youtube.com/watch?v=YnHcvwOXQIo";
// const itribeCourse = "https://www.youtube.com/watch?v=I3zlHtFE8kw";
const courseVideo = "https://vimeo.com/252044405";
const pashtunChildren = "../../Pashtun/children.jpg";
const tracing = "../../Tracing.jpg";
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  componentDidMount() {
    console.log(process.env.REACT_APP_SERVER_KEY)
  }
  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign="center"
            style={{
              minHeight: 1200,
              maxHeight: 1300,
              padding: "1em 0em",
              backgroundColor: "#C1CDD4"
            }}
            vertical
          >
            <Menu
              fixed="top"
              inverted="true"
              pointing={!fixed}
              size="large"
              style={{
                backgroundColor: "#004D8A"
              }}
            >
              <Container>
                <Menu.Item as="a" header>
                  <Image
                    size="small"
                    src={itribeIcon}
                    style={{ marginRight: "2em" }}
                  />
                  Mapping the Return
                </Menu.Item>
                <Menu.Item as="a" header>
                  Home
                </Menu.Item>
                <Menu.Item position="right">
                  <Button color="teal" as={Link} to="/login">
                    Log In
                  </Button>
                  <span
                    style={{
                      paddingRight: "10px"
                    }}
                  />
                  <Button color="teal" as={Link} to="/signup">
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Segment
              style={{ padding: "8em 0em", backgroundColor: "white" }}
              vertical
            >
              <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Header
                      as="h1"
                      style={{ fontSize: "3em", marginTop: "50px" }}
                    >
                      The Lost Tribes are Coming Home
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      iTribe is in the process of activating a newtork of
                      individuals and communities whose members identity as
                      being from an ancient people of Israel
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Button color='teal' size="huge">
                      Welcome!
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Globe />
            {/* <ChloroGlobe /> */}
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
        style={{
          backgroundColor: "#004D8A"
        }}
      >
        <Sidebar
          as={Menu}
          animation="push"
          // inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            // inverted
            textAlign="center"
            style={{ minHeight: 300, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <Segment
              style={{ padding: "8em 0em", backgroundColor: "white" }}
              vertical
            >
              <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Header
                      as="h1"
                      style={{ fontSize: "3em", marginTop: "50px" }}
                    >
                      The Lost Tribes are Coming Home
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      iTribe is in the process of activating a newtork of
                      individuals and communities whose members identity as
                      being from an ancient people of Israel
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Button color='teal' size="huge">
                      Welcome!
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Globe />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const LayoutView = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row centered>
          <Grid.Column width={7}>
            <Header as="h3" style={{ fontSize: "3em" }}>
              This is a Global Story
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Regardless of your heritage you will find your story in this epic
              narrative.
            </p>
            <Header as="h3" style={{ fontSize: "2.5em" }}>
              The Lost Tribes of Israel
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Discover the past, present and future of the world's most
              dispersed people
            </p>
            <div
              style={{
                textAlign: "center"
              }}
            >
              <Button color='teal' size="huge">iTribe Project</Button>
            </div>
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Image bordered size="big" src={pashtunChildren} />
            <DropZoneTest />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em", height: "100%" }} vertical>
      <Grid celled="internally" columns="equal" stackable centered>
        <Grid.Column width={8}>
          <Grid.Row textAlign="center">
            <ReactPlayer url={courseVideo} playing loop muted width="100%" />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column
          style={{
            padding: "50px", textAlign: "center"
            // backgroundImage: 'url("../../lost-tribe-map-1.jpg")'
          }}
          width={7}
        >
          <Header as="h3" style={{ fontSize: "2.5em" }}>
            Welcome to The Lost Tribes of Israel Course!!
          </Header>
          <p style={{ fontSize: "1.3em" }}>
            This online course is hosted by the Theological Research Institute
            [TRI], accredited by The National College Credit Recommendation
            Services [NCCRS]. Together with STAT Academy, an educational
            platform hosted by Amar'e Stoudemire, TRI and STAT academy conduct
            an overview of the past, present, and future of humanity based on
            teachings from the Tanach (Hebrew Bible).
            <br />
            <br />
            <b>Course Host: Amar'e Stoudemire </b>
            <br />
            <b>Course Administrator: Rabbi Harry Rozenberg</b>
          </p>
          <div
            style={{
              textAlign: "center"
            }}
          >
            <Button
              color='teal'
              size="huge"
              style={{
                marginTop: "20px"
              }}
            >
              Register Now
            </Button>
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment style={{ padding: "4em 0em" }} vertical>
      <Grid container stackable>
        <Grid.Row centered>
          <Grid.Column width={7}
              style={{
                marginTop: '50px'
              }}
          >
            <Header as="h3" style={{ fontSize: "3em" }}>
              From Exile to Return
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Journey from Ancient Israel, across the Silk Road, Sub Saharan
              Africa, the Far East, and North America and learn facts, culture
              and legends of the lost tribes of Israel.
            </p>
            <div
              style={{
                textAlign: "left"
              }}
            >
              <Button size="huge" color="teal">Sign Up To Learn More</Button>
            </div>
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Image
              bordered
              centered
              size="big"
              src={tracing}
              style={{
                marginLeft: "125px",
                width: "125%"
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "5em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2.5em", textAlign: "center" }}>
          About Us
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Digital social network mapping out the exiled remnants of the ancient
          people of Israel. Our purpose is to weave the past, present, and
          future of the House of Israel leading up to the next great movement,
          the global Israelite commonwealth, and the great decentralization.
        </p>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <Button size="huge" color="teal">Contact Us</Button>
        </div>
      </Container>
    </Segment>
    <Segment style={{ padding: "0em", height: "100%" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Column width={7}
              style={{
                marginTop: '50px',
                marginLeft: '100px'
              }}
          >
            <Header as="h3" style={{ fontSize: "2.5em" }}>
              Rabbi Harry Rozenberg
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Co-founder of @The STAT Academy - Theological Research Institute habs been on a mission for over  10 years to unite the tribes of Israel scattered and found in all different religions.
              <br />
              <br />
              Rabbi Harry lectures all over the world and has created a college accredited course on the Lost Tribes of Israels. Engaging maps, compelling source material and a powerful narrative that chronicles the Israeli Exile and the return of the tribes of Israel from the four corners of the world.
            </p>
            <div
              style={{
                textAlign: "left",
                marginTop: '100px'
              }}
            >
              <Button size="huge" color="teal">Sign Up To Learn More</Button>
            </div>
          </Grid.Column>

        <Grid.Column
          style={{
            padding: "50px"
          }}
          width={7}
        >
          <CarouselTest showThumbs={false} />
          <div
            style={{
              textAlign: "center"
            }}
          >
            {/* <Button
              color="teal"
              size="huge"
              style={{
                marginTop: "20px"
              }}
            >
              Register Now
            </Button> */}
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
    <Widget
      title="iTribe Welcomes You"
      subtitle="Tell us your story? or ask a question..."
      titleAvatar={itribeIcon}
    />
    <Segment
      inverted
      vertical
      style={{ padding: "3em 0em", backgroundColor: "#004D8A" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">About Us</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Rabbi Harry Blog</List.Item>
                <List.Item as="a">Lost Tribes of Israel Class</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Check it Out" />
              <List link inverted>
                <List.Item as="a">Rabbi Harry Timeline</List.Item>
                <List.Item as="a">Lost Tribe Statistics</List.Item>
                <List.Item as="a">Jewish Atlas</List.Item>
                <List.Item as="a">Newsletter</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <div
                style={{
                  textAlign: "center"
                }}
              >
                <Button
                  size="massive"
                  color="teal"
                  style={{
                    marginTop: "20px",
                    paddingRight: "50px",
                    paddingLeft: "50px"
                  }}
                >
                  Contribute
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default LayoutView;
