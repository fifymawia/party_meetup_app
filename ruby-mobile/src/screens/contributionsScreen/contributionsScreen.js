import React, { Component } from 'react';
import {  Button } from 'native-base';
import { GetMembers } from '../../../constants/Apis';
// import styles from '../home/components/styles/MyContributionsList';
// new
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const getMembers = new GetMembers();

export default class contributionsScreen extends Component {

    static defaultProps = {
        getMembers,
    }
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Name', 'Contact', 'Verify Payment'],
          tableData: [],
          loading: false,
          groupmembers: [],
        }
      }


  async componentDidMount() {
    this.setState({ loading: true });
    const members = await this.props.getMembers.fetchGroupMembers();
    this.setState({ loading: false,groupmembers: members.members });
    // console.log(this.state.groupmembers);

  // AsyncStorage.getItem('token')
//  .then(console.log)
  // .catch(console.log)
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index.name}`);
  }

  render() {
    const state = this.state;
    const element = (index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Paid</Text>
        </View>
      </TouchableOpacity>
    );
// map group.members.name and group.members.phoneNumber
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.groupmembers.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
              {
              //   rowData.map((cellData, cellIndex) => (
                  <Cell key={rowData._id} data={index === state.groupmembers.length ? element(rowData, index) : [rowData.name]} textStyle={styles.text}/>
              //   ))
              }
              {
              //   rowData.map((cellData, cellIndex) => (
                  <Cell key={rowData._id} data={index === state.groupmembers.length ? element(rowData, index) : [rowData.phoneNumber]} textStyle={styles.text}/>
              //   ))
              }
              {
              //   rowData.map((cellData, cellIndex) => (
                  <Cell key={rowData._id} data={index === index ? element(rowData, index) : []} textStyle={styles.text}/>
              //   ))
              }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});

