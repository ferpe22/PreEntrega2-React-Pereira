import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const Checkout = () => {
    
    const datForm = useRef ()
    const { carrito, clearCart, totalPrice } = useCarritoContext()
    
    const consultarForm = (e) => {
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current) //Pasar de un html a un objeto iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de un objeto iterable a un objeto simple
        console.log(cliente)
        e.target.reset() //para resetear el formulario una vez presiono submit
    }

    return (
        <>
            {
                carrito.lenght === 0 ?
                <>
                    <h2>Debe tener productos en el carrito para poder finalizar la compra</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container divForm">
                    <form onSubmit={consultarForm} ref={datForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Repetir Email</label>
                            <input type="email" className="form-control" name="emailRepetido"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input type="number" className="form-control" name="dni"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero de Telefono</label>
                            <input type="number" className="form-control" name="celular|"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    </form>
                </div>
            }
        </>
    )
}
