import { Button } from 'semantic-ui-react';
const button = (props) => (
    <div>
        <input
            type="file"
            onChange={props.changed}
            ref={fileInput=>this.fileInput=fileInput}
        />
        <Button
            circular
            icon="add"
            onClick={()=>this.fileInput.click()}
             />
    </div>

)
export default button;