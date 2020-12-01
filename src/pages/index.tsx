import { useState } from 'react';

const Home = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <h1>Incrementando: {value}</h1>
            <button onClick={() => setValue(value + 1)}>Incrementar</button>
        </>
    );
};
export default Home;
