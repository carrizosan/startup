import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/mystyle.js';
import Article from './components/article.js';

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Article           
          title="Vestibulum aliquet, mi dictum consequat malesuada."
          author="santiago carrizo"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin tempus ex dignissim euismod mollis. Etiam ultrices enim eu 
          nulla porttitor volutpat. Nullam rutrum sem ut condimentum imperdiet. 
          In hac habitasse platea dictumst. Morbi risus felis, bibendum id 
          arcu ut, hendrerit tincidunt ligula.
          "
          image="https://mbtskoudsalg.com/images/the-letter-a-png-4.png"
          
        />
        <Article          
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin tempus ex dignissim euismod mollis."
          author="santiago carrizo"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin tempus ex dignissim euismod mollis. Etiam ultrices enim eu 
          nulla porttitor volutpat. Nullam rutrum sem ut condimentum imperdiet. 
          In hac habitasse platea dictumst. Morbi risus felis, bibendum id 
          arcu ut, hendrerit tincidunt ligula.
          "
          image="https://mbtskoudsalg.com/images/the-letter-a-png-4.png"
          
        />
      </View>

    );
  }
}


