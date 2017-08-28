/* @flow */
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import Loader from '@boldr/ui/Loader';
// internal
import { showHeader } from '@boldr/core';
import { Footer, Container } from '@boldr/ui/Layout';
import Profile from '../../scenes/Profile';
import LoginContainer from '../../scenes/Account/Login';
import SignupContainer from '../../scenes/Account/Signup';
import AccountContainer from '../../scenes/Account';
import BlogContainer from '../../scenes/Blog';
import { logout } from '../../scenes/Account/state/actions';
import Home from '../Home';
import About from '../About';
import Navigation from './components/Navigation';
import View from '../../components/View';
// graphql

import MENU_QUERY from './gql/getMenu.graphql';

export type Props = {
  location: Object,
  me?: User,
  auth: Object,
  showHeader: () => void,
  logout: Function,
  data: Object,
};

const ContentWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding-top: 70px;
  padding-bottom: 70px;
`;

export class Page extends React.Component<Props, *> {
  componentDidMount() {
    this.props.showHeader();
  }
  handleLogoutClick = () => {
    this.props.logout();
  };

  props: Props;
  render() {
    const { data: { loading, getMenuById }, auth, currentUser, location } = this.props;
    return (
      <View>
        {loading
          ? <Loader />
          : <Navigation
              location={location}
              onLogout={this.handleLogoutClick}
              auth={auth}
              currentUser={currentUser}
              menu={getMenuById}
            />}
        <ContentWrapper>
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/account" component={AccountContainer} />
            <Route path="/profiles/:username" component={Profile} />
            <Route path="/blog" component={BlogContainer} />
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
        </ContentWrapper>
        <Footer id="footer">
          <Container>Footer</Container>
        </Footer>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    currentUser: state.auth.info,
  };
};

const PageComponentWithData = graphql(MENU_QUERY, {
  options: () => ({
    variables: {
      id: 1,
    },
  }),
})(Page);

export default connect(mapStateToProps, { showHeader, logout })(PageComponentWithData);
