import React, {useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

function Question() {
  const {goBack} = useNavigation();
  const {question} = useSelector(({questions}) => ({
    question: questions.question,
  }));

  useEffect(() => {
    console.log(question);
  }, [question]);

  const renderAnswersItem = useCallback(
    ({item}) => (
      <View
        style={[styles.itemWrapper, styles.shadowStyle]}
        key={item.number.toString()}
        disabled={!item.url}>
        <Text style={styles.answerText}>
          {item.number}. {item.answer}
        </Text>
      </View>
    ),
    [],
  );

  const renderEmptyList = useCallback(
    () => (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" />
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goBack()}
        style={[styles.backButton, styles.shadowStyle]}>
        <Text style={styles.question}>Back</Text>
      </TouchableOpacity>
      {!question || !question.answers ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <View style={[styles.questionWrapper, styles.shadowStyle]}>
            <Text style={styles.question}>{question.question}</Text>
          </View>
          <FlatList
            data={question.answers.sort((a, b) => a.number - b.number)}
            renderItem={renderAnswersItem}
            ListEmptyComponent={renderEmptyList}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  questionWrapper: {
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: 'white',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  answerText: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemWrapper: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 20,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: 'white',
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Question;
