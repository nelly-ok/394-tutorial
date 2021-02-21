import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import CourseList from '../components/CourseList'
import UserContext from '../utils/UserContext';


const schedule = {
  "title": "CS Courses for 2018-2019",
  "courses": [
    {
      "id": "F101",
      "title": "Computer Science: Concepts, Philosophy, and Connections",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F110",
      "title": "Intro Programming for non-majors",
      "meets": "MWF 10:00-10:50"
    },
    {
      "id": "F111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 13:00-13:50"
    },
    {
      "id": "F211",
      "title": "Fundamentals of Computer Programming II",
      "meets": "TuTh 12:30-13:50"
    }
  ]
};

const ScheculeScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';
  const [schedule, setSchedule] = useState({ title: '', courses: [] });

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json)
    }
    fetchSchedule();
  }, [])

  const view = (course) => {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view}/>
    </SafeAreaView>
  );
}

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>
    {title || '[loading...]'}
  </Text>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingToop: 20
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  }
});

export default ScheculeScreen;