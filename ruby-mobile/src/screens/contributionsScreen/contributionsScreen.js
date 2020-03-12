import React, { Component } from 'react';
import { Button } from 'native-base';
import { GetMembers, addContribution } from '../../../constants/Apis';
// import styles from '../home/components/styles/MyContributionsList';
// new
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';

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
            addpaidMembers: [],
            groupMembers: [],
        }
    }


    async componentDidMount() {
        console.log(this.props)
        const { params } = this.props.route;
        const groupId = params ? params.groupId : null;
        console.log(groupId);
        this.setState({ loading: true });
        const members = await this.props.getMembers.fetchGroupMembers(groupId);
        this.setState({ loading: false, groupMembers: members.members });
        // console.log(this.state.groupmembers);

    }


    _alertIndex(index) {
        Alert.alert(`This is row ${index.name}`);
    }

    Paid = (rowData) => {
        let memberPaid = this.state.addpaidMembers.find(x => x.phone === rowData.phoneNumber);
        // console.log(memberPaid);
        if (memberPaid) {
            return true;
        } else {
            return false;
        }

    }


    render() {

        const state = this.state;
        const element = (rowData, index) => (
            <TouchableOpacity onPress={e => {

                const addpaidMember = { name: rowData.name, phone: rowData.phoneNumber };
                let addpaidMembers = [];
                let memberPaid = state.addpaidMembers.find(x => x.phone === addpaidMember.phone);
                if (memberPaid) {
                    addpaidMembers = state.addpaidMembers.filter(m => m.name !== addpaidMember.name);
                } else {
                    addpaidMembers = [...state.addpaidMembers, addpaidMember];
                }

                this.setState({ addpaidMembers });
                console.log(this.state.addpaidMembers);
                // pressed = {Paid(groupmembers, {name: rowData.name, phoneNumber.number})
            }}>

                <View style={styles.btn}>
                    <Text style={styles.btnText}>{this.Paid(rowData) ? "Paid" : "Not Paid"}</Text>
                </View>
            </TouchableOpacity>
        );
        // map group.members.name and group.members.phoneNumber
        return (

            <View style={{ marginBottom: 20, flex: 1 }}>

                <Text style={{ marginTop: 15, marginLeft: 60, fontSize: 20, color: '#BF2500', }}>Verify Members Contributions</Text>
                <ScrollView><View>

                    <View>

                        <Table borderStyle={{ borderColor: 'transparent' }}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            {
                                state.groupMembers.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.row}>
                                        {
                                            //   map name
                                            <Cell data={index === state.groupMembers.length ? element(rowData, index) : [rowData.name]} textStyle={styles.text} />
                                            //   ))
                                        }
                                        {
                                            //   map phone number
                                            <Cell data={index === state.groupMembers.length ? element(rowData, index) : [rowData.phoneNumber]} textStyle={styles.text} />
                                            //   ))
                                        }
                                        {
                                            //   touchableopacity
                                            <Cell data={index === index ? element(rowData, index) : []} textStyle={styles.text} />
                                            //   ))
                                        }
                                    </TableWrapper>
                                ))
                            }
                        </Table>

                    </View>



                    <View>
                        <Button block danger
                            onPress={async e => {
                                const chosenMembers = this.state.addpaidMembers.map(addpaidMember => ({
                                    name: addpaidMember.name,
                                    phoneNumber: addpaidMember.phoneNumber
                                }));
                                const results = await Promise.all(chosenMembers.map(m => addContribution({
                                    ...m,
                                    groupId: this.props.route.params.groupId
                                })));
                                if (results) {
                                    this.props.navigation.navigate('Home');
                                } else {
                                    if (results.message) {
                                        Alert.alert(
                                            'oopps'
                                        );
                                    }

                                }



                            }}>
                            <Text>Submit</Text>
                        </Button>

                    </View>
                </View></ScrollView></View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#384259' },
    text: { margin: 6 },
    row: { flexDirection: 'row' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});

