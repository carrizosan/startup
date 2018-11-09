import React from 'react';
import { Text, View, Image, Button} from 'react-native';
import styles from '../styles/mystyle.js';

export default class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.article}>
        <Text style={styles.articleTitle}>  
          {this.props.title}
        </Text>
        <Text style={styles.articleAuthor}>
          <Text style={{color: 'black'}}>by </Text>
          {this.props.author}{"\n"}
        </Text>
        <Text style={styles.articleContent}>
          {this.props.content}{"\n"} 
        </Text>
        <Image 
          source={{uri: this.props.image}} 
          style={styles.articleImage}
        />

      </View>
    );
  }
}
