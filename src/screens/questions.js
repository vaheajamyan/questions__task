import React, {useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addQuestions, addQuestion} from '../actions/questions';
import {useNavigation} from 'react-navigation-hooks';

function Questions() {
  const dispatchStore = useDispatch();
  const {questions} = useSelector(({questions}) => ({
    questions: questions.questions,
  }));

  const {goBack, navigate} = useNavigation();

  useEffect(() => {
    if (!questions.length) {
      dispatchStore(addQuestions());
    }
  }, [dispatchStore, questions]);

  const renderEmptyList = useCallback(
    () => (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" />
      </View>
    ),
    [],
  );

  const renderItem = useCallback(
    ({item}) => (
      <TouchableOpacity
        style={[styles.itemWrapper, styles.shadowStyle]}
        key={item.title.toString()}
        disabled={!item.url}
        onPress={() => openQuestions(item.url)}>
        <Text style={styles.titleText}>{item.title}</Text>
      </TouchableOpacity>
    ),
    [openQuestions],
  );

  const openQuestions = useCallback(
    url => {
      dispatchStore(addQuestion(url));
      navigate('Question');
    },
    [dispatchStore, navigate],
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goBack()}
        style={[styles.backButton, styles.shadowStyle]}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <FlatList
        data={[
          ...questions.filter(f => !!f.url),
          ...questions.filter(f => !f.url),
        ]}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  itemWrapper: {
    padding: 10,
    minHeight: 70,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
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

export default Questions;
