import { Request, Response } from 'express';

export class loannovedades {
  public static createNovedad = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body para registrar un reporte de novedad asociado a un equipo o ambiente y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro del reporte de novedad/incidencia todavía no está implementado.'
    });
  };

  public static getNovedades = (req: Request, res: Response): void => {
    // TODO: tomar los filtros de req.query, llamar al servicio y responder con el historial completo de incidencias reportadas.
    res.status(501).json({
      success: false,
      message: 'La consulta del historial de novedades e incidencias todavía no está implementada.'
    });
  };

  public static getNovedadById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id a la operación de consulta y responder con el detalle de la novedad.
    res.status(501).json({
      success: false,
      message: `La consulta de la novedad ${id} todavía no está implementada.`
    });
  };

  public static patchEstadoNovedad = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: actualizar parcialmente el estado de una novedad (ej. cambiar de "pendiente" a "en proceso" o "resuelto") mediante req.body.
    res.status(501).json({
      success: false,
      message: `La actualización del estado de la novedad ${id} todavía no está implementada.`
    });
  };
}
