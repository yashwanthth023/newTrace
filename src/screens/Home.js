import React, { useState } from 'react'
import ProtoTypeModal from '../components/ProtoTypeModal';
const Home = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            Home
            <button onClick={() => setShowModal(true)}>open Modal</button>
            <ProtoTypeModal setShowModal={setShowModal} showModal={showModal} />
        </div>
    )
}

export default Home