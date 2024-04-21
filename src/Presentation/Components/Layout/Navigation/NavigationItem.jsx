import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const linkClass = "decoration-none navigation-link w-100 h-100";

/**
 * Componente que muestra un item de navegación
 * @param {Object} params Parámetros del componente
 * @param {String} params.href URL del enlace
 * @param {String} params.title Título del enlace
 * @param {Boolean} [params.isTargetBlank] Indica si el enlace se abre en una nueva pestaña
 * @param {Function} [params.onClick] Función que se ejecuta al hacer clic en el enlace
 */
const NavigationItem = ({
  href,
  title,
  isTargetBlank = false,
  onClick = () => {},
}) => {
  const NavigationWithBlank = () => {
    return (
      <NavDropdown.Item
        href={href}
        target={isTargetBlank ? "_blank" : ""}
        rel="noopener noreferrer"
        className={linkClass}
        onClick={onClick}
      >
        {title}
      </NavDropdown.Item>
    );
  };

  const NavigationWithoutBlank = ({ onClick = () => {} }) => {
    return (
      <NavDropdown.Item className="d-flex">
        <Link to={href} className={linkClass} target="_self" onClick={onClick}>
          {title}
        </Link>
      </NavDropdown.Item>
    );
  };

  return isTargetBlank ? <NavigationWithBlank /> : <NavigationWithoutBlank />;
};

export default NavigationItem;
