import { useState } from 'react'
import { formatoCLP } from '../utils/validaciones.js'

export default function ProductCard({ producto, onAgregar }) {
  const [cantidad, setCantidad] = useState(1)

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0">
        <img src={producto.imagen} className="card-img-top product-img" alt={producto.nombre} />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-success">{producto.id}</span>
            <span className="badge bg-light text-dark border">{producto.categoria}</span>
          </div>
          <h5 className="card-title fw-bold">{producto.nombre}</h5>
          <p className="card-text text-secondary small flex-grow-1">{producto.descripcion}</p>
          <div className="fw-bold text-emerald mb-3">{formatoCLP(producto.precio)} / {producto.unidad}</div>
          <div className="d-flex align-items-center gap-2">
            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="form-control form-control-sm w-25"
            />
            <button className="btn btn-yellow btn-sm flex-grow-1" onClick={() => onAgregar(producto, parseInt(cantidad, 10) || 1)}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
