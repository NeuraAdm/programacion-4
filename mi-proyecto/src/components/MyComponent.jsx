function MyComponent({ titulo, descripcion, activo = false }) {
  return (
    <div className={`tarjeta ${activo ? 'activa' : ''}`}>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      {activo && (
        <span className="badge">Destacado</span>
      )}
    </div>
  );
}
 export default MyComponent