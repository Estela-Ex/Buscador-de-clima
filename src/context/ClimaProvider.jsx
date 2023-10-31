import { useState, createContext } from 'react';

const ClimaContext = createContext()

const ClimaProvider = ({ children }) => {
    console.log(import.meta.env.VITE_API_KEY)

    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: ""
    })

    function datosBusqueda(e) {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    function consultarClima(datos) {
        console.log(datos)
    }
    return (
      <ClimaContext.Provider
        value={{
          busqueda,
          datosBusqueda,
          consultarClima,
        }}
      >
        {children}
      </ClimaContext.Provider>
    );
}
export {
    ClimaProvider, ClimaContext
}