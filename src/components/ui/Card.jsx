// Componente Card básico
export default function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}


