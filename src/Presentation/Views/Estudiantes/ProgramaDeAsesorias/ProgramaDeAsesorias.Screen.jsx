import React from "react";
import { Helmet } from "react-helmet";

import TecBanner from "@Components/General/TecBanner";
//Capa de utilidades
import { generateTitle } from "@Utility/Layout.Helper";

export default function ProgramaDeAsesoriasScreen() {
  return (
    <div>
      <Helmet>
        <title>{generateTitle("Programa de Asesorías")}</title>
      </Helmet>
      <TecBanner text="Programa de Asesorías" />

      <div className="container">
        <div className="col-12">
          <div className="row text-center marge-principal">
            <h1 className="col-12 margen-direct">
              Ingeniería en Sistemas Computacionales{" "}
            </h1>
          </div>
        </div>
        <table className="table">
          <thead className="bg-tec text-white">
            <tr>
              <th className="bg-tec text-white" scope="col">
                Docente
              </th>
              <th className="bg-tec text-white" scope="col">
                Lunes
              </th>
              <th className="bg-tec text-white" scope="col">
                Martes
              </th>
              <th className="bg-tec text-white" scope="col">
                Miércoles
              </th>
              <th className="bg-tec text-white" scope="col">
                Jueves
              </th>
              <th className="bg-tec text-white" scope="col">
                Viernes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left w-25">Díaz Ortiz Sofía Irene</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> 12:00 - 14:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">García Soto Gerardo</td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Gómez Carrasco Jesús Rey</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> 09:00 - 10:00 </td>
              <td className="text-right w-10"> 09:00 - 10:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">González Miranda Víctor Manuel</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Holguín Negrete Yamel Yadira</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 08:00 - 10:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Lizarraga Velarde Leticia</td>
              <td className="text-right w-10"> 13:00 - 15:00 </td>
              <td className="text-right w-10"> 13:00 - 15:00 </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Rodríguez Ríos Sandra</td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Valtiérrez Angel David Arnoldo</td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> 15:00 - 16:00 </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
            </tr>
          </tbody>
        </table>

        <div className="col-12">
          <div className="row text-center marge-principal">
            <h1 className="col-12 margen-direct">
              Ciencias Económico - Administrativas{" "}
            </h1>
          </div>
        </div>
        <table className="table">
          <thead className="bg-tec text-white">
            <tr>
              <th className="bg-tec text-white" scope="col">
                Docente
              </th>
              <th className="bg-tec text-white" scope="col">
                Lunes
              </th>
              <th className="bg-tec text-white" scope="col">
                Martes
              </th>
              <th className="bg-tec text-white" scope="col">
                Miércoles
              </th>
              <th className="bg-tec text-white" scope="col">
                Jueves
              </th>
              <th className="bg-tec text-white" scope="col">
                Viernes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left w-25">Alba Aldaz Jorge Luis</td>
              <td className="text-right w-10"> 14:00 - 15:00 </td>
              <td className="text-right w-10"> 14:00 - 15:00 </td>
              <td className="text-right w-10"> 14:00 - 15:00 </td>
              <td className="text-right w-10"> 14:00 - 15:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Estrada Valles Dora Elia </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Franco Díaz Laura Imelda </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">
                Granados Gómez María de Lourdes{" "}
              </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Maese Ávila Jaime </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Quiroz Guzmán Tamara </td>
              <td className="text-right w-10"> 09:00 - 10:00 </td>
              <td className="text-right w-10"> 09:00 - 10:00 </td>
              <td className="text-right w-10"> 09:00 - 10:00 </td>
              <td className="text-right w-10"> 09:00 - 10:00 </td>
              <td className="text-right w-10"> 08:00 - 09:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Trejo Lara Rosa Hilda </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 15:00 - 17:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Uribe Avalos Carlos Alejandro </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
            </tr>
          </tbody>
        </table>

        <div className="col-12">
          <div className="row text-center marge-principal">
            <h1 className="col-12 margen-direct">Metal Mecánica </h1>
          </div>
        </div>
        <table className="table">
          <thead className="bg-tec text-white">
            <tr>
              <th className="bg-tec text-white" scope="col">
                Docente
              </th>
              <th className="bg-tec text-white" scope="col">
                Lunes
              </th>
              <th className="bg-tec text-white" scope="col">
                Martes
              </th>
              <th className="bg-tec text-white" scope="col">
                Miércoles
              </th>
              <th className="bg-tec text-white" scope="col">
                Jueves
              </th>
              <th className="bg-tec text-white" scope="col">
                Viernes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left w-25">Carrillo Modesto Sandra Isabel</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 09:00 - 10:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Hinojosa Gómez Jesús</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Lara Salvador</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 12:00 - 13:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Sánchez Rivera Jaime</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Sandoval Moreno Juan Carlos</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 17:00 - 18:00 </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Urita Chavarría David </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 08:00 - 09:00 </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
            </tr>
          </tbody>
        </table>

        <div className="col-12">
          <div className="row text-center marge-principal">
            <h1 className="col-12 margen-direct">Ciencias Básicas </h1>
          </div>
        </div>
        <table className="table">
          <thead className="bg-tec text-white">
            <tr>
              <th className="bg-tec text-white" scope="col">
                Docente
              </th>
              <th className="bg-tec text-white" scope="col">
                Lunes
              </th>
              <th className="bg-tec text-white" scope="col">
                Martes
              </th>
              <th className="bg-tec text-white" scope="col">
                Miércoles
              </th>
              <th className="bg-tec text-white" scope="col">
                Jueves
              </th>
              <th className="bg-tec text-white" scope="col">
                Viernes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left w-25">Acosta Rodríguez Mirna Araceli</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">
                Mata Sáenz María de los Ángeles
              </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> 10:00 - 11:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Mata Sáenz Elia Margarita</td>
              <td className="text-right w-10"> 12:00 - 13:00 </td>
              <td className="text-right w-10"> 12:00 - 13:00 </td>
              <td className="text-right w-10"> 12:00 - 13:00 </td>
              <td className="text-right w-10"> 12:00 - 13:00 </td>
              <td className="text-right w-10"> 12:00 - 13:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Salinas Pérez Martín Alejandro</td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
              <td className="text-right w-10"> 11:00 - 12:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Corral Mendoza Horacio</td>
              <td className="text-right w-10"> 18:00 - 19:00 </td>
              <td className="text-right w-10"> 18:00 - 19:00 </td>
              <td className="text-right w-10"> 18:00 - 19:00 </td>
              <td className="text-right w-10"> 18:00 - 19:00 </td>
              <td className="text-right w-10"> 18:00 - 19:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Porras Armendáriz Elizardo </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 08:00 - 09:00 </td>
              <td className="text-right w-10"> 08:00 - 09:00 </td>
            </tr>
          </tbody>
        </table>

        <div className="col-12">
          <div className="row text-center marge-principal">
            <h1 className="col-12 margen-direct">Ingeniería Industrial </h1>
          </div>
        </div>
        <table className="table">
          <thead className="bg-tec text-white">
            <tr>
              <th className="bg-tec text-white" scope="col">
                Docente
              </th>
              <th className="bg-tec text-white" scope="col">
                Lunes
              </th>
              <th className="bg-tec text-white" scope="col">
                Martes
              </th>
              <th className="bg-tec text-white" scope="col">
                Miércoles
              </th>
              <th className="bg-tec text-white" scope="col">
                Jueves
              </th>
              <th className="bg-tec text-white" scope="col">
                Viernes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left w-25">Chavarría Ortiz Julio César</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 14:00 - 16:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Chávez Pineda Jesús Arturo</td>
              <td className="text-right w-10"> 14:00 - 15:00 </td>
              <td className="text-right w-10"> 14:00 - 15:00 </td>
              <td className="text-right w-10"> 14:00 - 15:00 </td>
              <td className="text-right w-10"> 14:00 - 15:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Delgado Martínez Martha Lilia</td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Díaz Cázares Martín Eduardo</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 12:00 - 14:00 </td>
            </tr>
            <tr>
              <td className="text-left w-25">Escobedo Rodríguez Evaristo</td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10">
                {" "}
                13:00 - 14:00 y 15:00 - 16:00{" "}
              </td>
            </tr>
            <tr>
              <td className="text-left w-25">Méndez Tarango Reyes </td>
              <td className="text-right w-10"> 13:00 - 14:00 </td>
              <td className="text-right w-10"> 12:00 - 13:00 </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Morales Aguilar José Socorro</td>
              <td className="text-right w-10"> 18:00 - 19:00 </td>
              <td className="text-right w-10"> 18:00 - 19:00 </td>
              <td className="text-right w-10"> 18:00 - 19:00 </td>
              <td className="text-right w-10"> - </td>
              <td className="text-right w-10"> - </td>
            </tr>
            <tr>
              <td className="text-left w-25">Núñez Jesús Armando</td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> 16:00 - 17:00 </td>
              <td className="text-right w-10"> - </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
