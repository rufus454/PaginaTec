# Instituto Tecnológico de Delicias (React)

Este proyecto se realizó con React utilizando la herramienta de desarrollo Vite. La página fue construida tomando de referencia el proyecto anterior en NetCore.

Se utiliza como framework de estilizado Bootstrap, al igual que se utilizaba anteriormente, la versión de Bootstrap es 5.

El proyecto está construido siguiendo las reglas de clean architecture, módulos css para el estilizado de vistas y styled-components para los estilos de componentes.

Recomendaciones a considerar para dar su respectivo mantenimiento y escalar el proyecto en algún punto:

- Modularizar correctamente las carpetas de ficheros, las imágenes que se utilizan en el módulo de estudiantes se encontraban en el folder de "institucion", considerar una correcta separación para no generar conflictos en un futuro, separar correctamente imágenes/documentos escalables en el tiempo como puede ser el ejemplo ejemplo: 2024 -> 01 (Enero de 2024) esto por si se requieren importes dinámicos no tener problemas al nombrar los imports. Manejar en un 100% números y no letras, esto aplica únicamente cuando sea un folder relacionado a tiempo como puede ser años, meses, contadores, etc.

- Nombrar archivos sin acentos, por favor evitar nombramiento de imágenes con acentos o archivos pdf/doc.

- Comprimir las imágenes más pesadas, el proyecto utilizaba imágenes que llegaban a pesar 5mb, esto al momento de cargar afecta mucho en el consumo de su red de los usuarios más si éstos están utilizando datos móviles, si la imagen a utilizar ya es pesada por favor considerar utilizar la siguiente herramienta para comprimir su peso: [iloveimg](https://www.iloveimg.com/compress-image "iloveimg")

- Modularizar el estilado, se implementa css modules ya que esto permite separar el estilizado de cada elemento JSX. Anteriormente se utilizaban las mismas clases custom en varias vistas/componentes y estas al modificarse rompen el comportamiento en otras vistas. Si se va a hacer un estilo específico, por favor utilizarlo en el módulo respectivo de la vista, si es un componente se está utilizando styled-components para estilos que no afecten a otros componentes, si se va realizar un estilo global agregarlo en el archivo Styles/App.css.

- Evitar utilizar css o clases defensivas, algunas vistas o componentes se utilizaban como el código presentado en la parte posterior. Por si solo flex nos puede ayudar a hacerle un wrap a los elementos, al declarar el espaciado en el componente Col podemos evitar utilizar rows dentro de rows.

```
<div class="row">
    <div class="d-flex row">
        ...
    </div>
</div>
```

- El proyecto buscar automatizar la mayor cantidad de código, para eso cada elemento iterable se registró en un json, ejemplo: Todos los elementos de navegación de la navbar se encuentra en la capa Data -> Layout -> navigation, se separó por módulos. Se realizó de esta manera para evitar escribir código innecesario y en caso que en algún punto escale esta información no sea complejo agregar una opción nueva, también para estar preparado por si en algún punto se consumen todos los datos desde un API y es necesario un repositorio para recuperar esta información.

- La capa de utility busca registrar todas las funciones puras e impuras por si en algún punto se requiere hacer unit testing.
