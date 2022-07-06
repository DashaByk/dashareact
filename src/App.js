import React from "react";

import FormUser from "./forms/Form.user";
import {useForm} from "react-hook-form";
import axios from "axios";
import FormComments from "./forms/Form.comments";

function App() {


    return (
        <div>
            <div>
                <FormUser/>
            </div>
            <div>
                <FormComments/>
            </div>
        </div>
    );
}

export default App;
