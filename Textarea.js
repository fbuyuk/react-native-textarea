/**
 * Textarea
 * Created by xinlc on 20/03/2018.
 * @flow
 */
import React, { PureComponent } from 'react';
import { 
  StyleSheet,
  View,
  Text, 
  TextInput,
} from 'react-native';

type Props = {
  containerStyle: View.propTypes.style,
  maxLength: number,
  onChangeText: (text: string) => void,
};

type State = {
  count: number,
};

export default class Textarea extends PureComponent<Props, State> {
  static defaultProps = {
    maxLength: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  _onChangeText = (text) => {
    const { onChangeText, } = this.props;

    this.setState({ count: text.length });

    if (onChangeText) onChangeText(text);
  }

  _renderCount() {
    const { maxLength, } = this.props;
    const { count, } = this.state;

    if (!maxLength) return null;

    return (
      <Text style={styles.count}>
        {`${count}/${maxLength}`}
      </Text>
    );
  }

  render() {
    const { containerStyle, maxLength, ...rest } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput multiline {...rest} onChangeText={this._onChangeText} />
        {this._renderCount()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
  },
  count: {
    position: 'absolute', 
    bottom: 8,
    right: 2,
    fontSize: 14,
    color: '#ccc',
  }
});