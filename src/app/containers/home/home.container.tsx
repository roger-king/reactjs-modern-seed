import './home.container.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { Login, Titletron, Icon, Footer, Headline, Code } from 'Components';
import { UserGet } from 'Actions';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            user_icon: 'user.svg',
            user_icon_height: 80,
            user_icon_width: 80,
            user: 'Unknown'
        };
    }
    public render() {
        return (
            <div id="home-page">
                <Titletron />

                <section className="page-content content-font">
                    <div className="features">
                        <Headline title="Features" />

                        <div className="features-content-wrapper">
                            <div className="feature-column">
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="tree.svg" height={40} width={40} /> <b>State management</b>
                                    </div>
                                    <div className="feature-item-content">
                                        "Use Redux to take control of your application’s state and keep state mutations manageable.
                                        If you have it, the boilerplate works with the Chrome Redux DevTools extension to allow
                                        you to see, play back, and change your action history!" -
                                        <a href="https://www.reactboilerplate.com/" target="blank"> react-boilerplate </a>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="lab.svg" height={40} width={40} /> <b>Unit Testing & Code Coverage</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Put some extra confidence in your awesome code and supply some unit tests!
                                        Use Jest to simulate how your components should render in production.
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="wrench.svg" height={40} width={40} /> <b>Bundle & Build</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Utilize the most popular build tool for frontend assets... Webpack! From development to production,
                                        webpack will allow you to bundle your frontend assets.
                                    </div>
                                </div>
                            </div>
                            <div className="feature-column">
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="map.svg" height={40} width={40} /> <b>Routing</b>
                                    </div>
                                    <div className="feature-item-content">
                                        "Declarative routing for react" with react-router. Routing made easy.
                                        Create your container, assign to a path (e.g '/home'), and you're done! Build your containers
                                        with your reusable components.
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="clear-formatting.svg" height={40} width={40} /> <b>Next Gen CSS</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Everyone wants to use the latest and greatest. Next Gen CSS allows us to use many tools
                                        and functions that brings our UI to the next level.
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="cogs.svg" height={40} width={40} /> <b>Automation</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Streamline your development with generation of your components and services.
                                        Most importantly have consistent code styling and formatting.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo">
                        <Headline title="Enough Talk..." />
                        <div className="demo-instructions">
                            Let's demostrate with an everyday example. I created this very simple login module where it will:
                            submit an action, determine if you are "authenticated", and set your user and loggedIn status.
                            The demo login credentials are username = <b>admin </b> and password = <b> password</b>.
                        </div>
                        <div className="user-profile">
                            <div className="icon-wrapper">
                                <Icon img={this.state.user_icon} height={this.state.user_icon_height} width={this.state.user_icon_width} />
                            </div>
                        </div>
                        {this.state.user}
                        <Login />
                    </div>

                    <div className="get-started">
                        <Headline title="Getting Started" />

                        <div className="react-gen-container">
                            <Code description="Install reacts.gen CLI tool" codeline="npm install -g reacts.gen" />
                            <Code description="Run reacts.gen" codeline="reacts.gen [ app-title ]" />
                            <Code description="Create a container" codeline="cd [ app-title ] && npm run gen:container " />
                            <Code description="Start application in development" codeline="npm run start:dev" />

                            App will be running on localhost:8000
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

    public componentWillReceiveProps(newProps: any) {
        if (newProps.authentication.loggedIn) {
            const username: any = this.props.getUser().username;
            this.setState({ user: username, user_icon: 'erlich.png', user_icon_height: 170, user_icon_width: 170 });
        }
    }
}

function mapStateToProps({ authentication }) {
    return {
        authentication
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: () => dispatch(UserGet())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
