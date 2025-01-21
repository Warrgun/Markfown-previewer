import { Alert } from "react-bootstrap";
import styles from './alert.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const AlertComponent = ({ state, message }) => {

    return (
        <>
            <Alert show={state} variant="success" className={`d-flex  align-items-center m-0 position-fixed fade ${styles.alert}`}>
                <FontAwesomeIcon icon={faCheckCircle} className={`${styles.margin}`} />
                <div className="d-flex justify-content-end">
                    {message}
                </div>
            </Alert>
        </>
    );
}

export default AlertComponent;