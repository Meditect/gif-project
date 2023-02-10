import {
    Alert,
} from '@chakra-ui/react'

import { Spinner } from '@chakra-ui/react';

function LoadingAlert() {

    return (
        <div style={alertDiv}>
            <Alert status='info'>
                <Spinner color='blue.500' marginRight={3} />
                Loading data
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

export default LoadingAlert;