import {
    Alert,
} from '@chakra-ui/react'

import { Spinner } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

function LoadingAlert() {

    const { t, i18n } = useTranslation();

    return (
        <div style={alertDiv}>
            <Alert status='info'>
                <Spinner color='blue.500' marginRight={3} />
                {t("http-loading")}
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