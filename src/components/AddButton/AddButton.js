import React from "react";
import { Button } from "semantic-ui-react";
import Classes from "./AddButton.module.css";

export default function AddButton() {
   return (
      <div>
         <Button className={Classes.Button} content="Primary" />
         <Button content="Secondary" secondary />
      </div>
   );
}
