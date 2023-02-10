import {
    Alert, AlertIcon,
} from '@chakra-ui/react'

import { Spinner } from '@chakra-ui/react';

function ErrorAlert() {

    return (
        <div style={alertDiv}>
            <Alert status='error'>
                <AlertIcon />
                Error while loading data
            </Alert>
        </div>
    );
};

const alertDiv = {
    backgroundColor: "red",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50
};

export default ErrorAlert;