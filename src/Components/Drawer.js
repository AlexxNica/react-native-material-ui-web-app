import { View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import { Avatar, Drawer, Toolbar } from 'react-native-material-ui'
import Container from './Container'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 260,
    elevation: 4,
    backgroundColor: 'white',
  },
})

const propTypes = {}

class DrawerSpec extends Component {
  render() {
    const {history, onClose} = this.props

    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => {
            if (history && history.length) {
              history.goBack()
            }
            else
            {
              onClose()
            }
          }}
          centerElement={'Drawer'}
        />
        <View style={styles.container}>
          <Drawer>
            <Drawer.Header>
              <Drawer.Header.Account
                avatar={<Avatar text={'A'} />}
                accounts={[
                  { avatar: <Avatar text="B" /> },
                  { avatar: <Avatar text="C" /> },
                ]}
                footer={{
                  dense: true,
                  centerElement: {
                    primaryText: 'Reservio',
                    secondaryText: 'business@email.com',
                  },
                  rightElement: 'arrow-drop-down',
                }}
              />
            </Drawer.Header>
            <Drawer.Section
              divider
              items={[
                { icon: 'bookmark-border', value: 'Notifications' },
                { icon: 'today', value: 'Calendar', active: true },
                { icon: 'people', value: 'Clients' },
              ]}
            />
            <Drawer.Section
              title="Personal"
              items={[
                { icon: 'info', value: 'Info' },
                { icon: 'settings', value: 'Settings' },
              ]}
            />
          </Drawer>
        </View>
      </Container>
    )
  }
}

DrawerSpec.propTypes = propTypes

export default DrawerSpec
