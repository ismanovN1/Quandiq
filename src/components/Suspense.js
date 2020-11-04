import React, {Suspense} from "react";
import {Spinner} from "react-bootstrap";


const SuspenseContainer = (Container) =>{
    const SuspenseXXX = () => {
        return <Suspense fallback={<Spinner animation="border" variant="primary" />}>
            <Container/>
        </Suspense>
    }
    return SuspenseXXX
}

export default SuspenseContainer