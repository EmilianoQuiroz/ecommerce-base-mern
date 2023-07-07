import Layout from "@/components/Layout"
import { useState } from "react"


export default function NewProduct() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
  
    return (
    <Layout>
        <h1>Agregar producto</h1>

        <label>Nombre del producto</label>
        <input 
            type="text" 
            placeholder="product name" 
            value={title} 
            onChange={ev => setTitle(ev.target.value)}
        />

        <label>Descripcion del producto</label>
        <textarea placeholder="description"></textarea>

        <label>Precio</label>
        <input type="number" placeholder="price" />

        <button className="btn-primary">Guardar</button>
    </Layout>
  )
}
