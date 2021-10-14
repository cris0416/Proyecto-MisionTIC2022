import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <main>
      <Formulario action="">
        <label htmlFor="">Producto</label>
        <input type="text" placeholder="producto" />
        <p>lorem ipsum</p>
      </Formulario>
    </main>
  );
}

const Formulario = styled.form`
    background: #ccc;
`;//backgroud del formulario

export default App;