import { Request, Response } from 'express';

const BASE_URL = 'https://proyecto-backend-sgbienestar.onrender.com';

export async function obtenerImplementoPorCategoria(req: Request, res: Response) {
  const { id } = req.params;
  const url = `${BASE_URL}/implementos/categoria/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: `Error al obtener los implementos: ${error.message}` });
  }
}


export async function obtenerProgramaDeFormacion(req: Request, res: Response) {
  const url = `${BASE_URL}/programa/programa`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: `Error al obtener el programa de formación: ${error.message}` });
  }
}



export async function categoria() {
  const url = 'https://proyecto-backend-sgbienestar.onrender.com/categoria'

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`No se pudo obtener : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`no se pueden: ${error.message}, ${error.status}`);
  }

}



export async function obtener_inplemeto_id(id) {
  const url = `https://proyecto-backend-sgbienestar.onrender.com/implementos/categoria/${id}`

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`No se pudo obtener la lista de implemento. Estado de respuesta: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`no se pueden cargar los datos de los implemento: ${error.message}, ${error.status}`);
  }

}



const API = 'https://proyecto-backend-sgbienestar.onrender.com/tipo-informe';

export const informes = async () => {
  try {
    const response = await fetch(API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // Si la respuesta no es exitosa, arrojamos un error con detalles del servidor
      const errorDetails = await response.json();
      throw new Error('Error en la solicitud. Detalles: ' + JSON.stringify(errorDetails));
    }

    const data = await response.json();

    // Aquí puedes realizar más validaciones específicas de tu aplicación

    return data;
  } catch (error) {
    console.error('Error en la función informes:', error);

    // Devolvemos un objeto de error con el mensaje de la excepción
    return { error: 'Error al obtener los informes', details: error.message };
  }
};

export async function buscar_prestamos() {
  const url = 'https://proyecto-backend-sgbienestar.onrender.com/prestamos'

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`No se pudo obtener la lista de implemento. Estado de respuesta: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`no se pueden cargar los datos de los implemento: ${error.message}, ${error.status}`);
  }

}
const API2= 'https://proyecto-backend-sgbienestar.onrender.com/sanciones';

interface Sancion {
  usuario: string;
  description: string;
  estado: boolean;
  duracion: number;
}

export const Sancionar = (sancion: Sancion) =>
  fetch(API2, {
    method: 'POST',
    body: JSON.stringify(sancion),
    headers: {
      'Content-Type': 'application/json',
    },
  });



interface sancion {
  correo: string
}

export const buscar_sancionado = async (usuario: sancion) => {
  try {
    const encodedCorreo = encodeURIComponent(usuario.correo);
    const response = await fetch(`${API}${encodedCorreo}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    console.log('buscar_sancionado response:', response); // Add this line to log the response

    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      console.error('Error al buscar el usuario:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error en la solicitud de búsqueda:', error);
    return null;
  }
};
