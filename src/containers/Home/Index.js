import { React, Component } from 'react';
import { home } from '../../data';
import AddButton from '../../components/AddButton/AddButton';
import SwitchTab from '../../components/UI/SwitchTab/SwitchTab';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Aux from '../../hoc/MyAux/MyAux';
import List from '../../components/Uploads/Uploads';
class Home extends Component{
    state = {
        data: [],
        activeIndex: 0
    }

    componentDidMount() {
        const updatedData = home.map(list => {
            return {
                ...list
            }
        });
        this.setState({ data: updatedData });
    }

    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex: activeIndex });

    render() {

        return (
            <div>
                <Aux>
                    <Wrapper content="Home"/>
                        <SwitchTab
                            content="Home"
                            data={this.state.data}
                            activeIndex={this.activeIndex}
                            handleTabChange={this.handleTabChange} />
                        <List data={this.state.data}/>
                        <AddButton className="addbutton"/>
                </Aux>
            </div>
        );
    }
}
export default Home; 