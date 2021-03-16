import { Component } from 'react';
import {uploads} from '../../data';
import List from '../../components/Uploads/Uploads';
import AddButton from '../../components/AddButton/AddButton';
import TabExampleActiveIndex from '../../components/UI/SwitchTab/SwitchTab'
class Upload extends Component {
    state = {
        data: [],
        activeIndex:0
    }

    componentDidMount() {
        const updatedData = uploads.map(list => {
            return {
                ...list
            }
        });
        this.setState({ data: updatedData });
    }
    handleTabChange = (e, { activeIndex }) =>this.setState({ activeIndex: activeIndex });
    
    render() {
        const lists = this.state.data.map(list => {
            return (
                <List
                    key={list.id}
                    imgSrc={list.image}
                    category={list.category} />
            );
        });
        return (
            <div>
                <TabExampleActiveIndex/>
                {lists}
                <AddButton />
            </div>
        );
    
    }
}




export default Upload;