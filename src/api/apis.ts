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

export async function obtenerFichas(req: Request, res: Response) {
  const url = `${BASE_URL}/ficha`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: `Error al obtener las fichas: ${error.message}` });
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

export async function enviarCorreo(req: Request, res: Response) {
  const url = `https://proyecto-backend-sgbienestar.onrender.com/mail`;
  console.log('Datos recibidos:', req.body);
  try {
    const { correo, mensaje, asunto } = req.body;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo,
        mensaje,
        asunto,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: `Error al enviar el correo: ${error.message}` });
  }
}
