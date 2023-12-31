import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spinner from "./Spinner";
import useClima from "../hooks/useClima";

export default function AppClima() {
    const {resultado, cargando, noResultado} = useClima()
  return (
      <>
          <main className="dos-columnas">
              <Formulario />
              {cargando ? <Spinner/> :
                  resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : <p>El clima se va a mostrar aquí</p>}
          </main>
      </>
  )
}
