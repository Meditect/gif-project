import {
    Alert, AlertIcon,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

function ErrorAlert() {

    const { t, i18n } = useTranslation();

    return (
        <div style={alertDiv}>
            <Alert status='error'>
                <AlertIcon />
                {t("http-error")}
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