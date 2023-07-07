import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    async function createProduct(ev){
        ev.preventDefault();
        const data = {title,description,price};
        await axios.post('/api/products', data)
    }
  
    return (
    <Layout>
        <form onSubmit={createProduct}>
            <h1>Agregar producto</h1>

            <label>Nombre del producto</label>
            <input 
                type="text" 
                placeholder="product name" 
                value={title} 
                onChange={ev => setTitle(ev.target.value)}
            />

            <label>Descripcion del producto</label>
            <textarea 
                placeholder="description" 
                value={description}    
                onChange={ev => setDescription(ev.target.value)}
            />

            <label>Precio</label>
            <input 
                type="number" 
                placeholder="price" 
                value={price}
                onChange={ev => setPrice(ev.target.value)}
                />

            <button 
                type="submit" 
                className="btn-primary">
                Guardar
            </button>
        </form>
    </Layout>
  )
}
