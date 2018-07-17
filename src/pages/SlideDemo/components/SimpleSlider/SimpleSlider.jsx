import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Slider } from '@icedesign/base';
/* eslint-disable global-require */
const slides = [
  {
    url: require('./images/31.jpg'),
    text: '手机淘宝皮肤征集',
  },
  {
    url: require('./images/31.jpg'),
    text: '阿里公益T恤设计大概',
  },
  {
    url: require('./images/31.jpg'),
    text: '淘公仔设计大赛',
  },
  {
    url: require('./images/31.jpg'),
    text: '磁带播放器换肤设计大赛',
  },
];
/* eslint-enable global-require */
export default class SimpleSlider extends Component {
  static displayName = 'SimpleSlider';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <Slider>
          {slides.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt={item.text} style={styles.itemImg} />
            </div>
          ))}
        </Slider>
      </IceContainer>
    );
  }
}

const styles = {
  itemImg: {
    width: '100%',
  },
};
