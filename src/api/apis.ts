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

export async function enviarCorreo(req: Request, res: Response) {
  const url = `${BASE_URL}/mail`;

  const correoData = {
    correo: ['destinatario1@example.com', 'destinatario2@example.com'],
    mensaje: 'Contenido del mensaje',
    asunto: 'Asunto del correo',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(correoData),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: `Error al enviar el correo: ${error.message}` });
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
