import { Request, Response } from 'express';

export class loanequipos {
  public static createEquipo = (req: Request, res: Response): void => {
    // TODO: registrar un nuevo equipo vinculado a un ambiente de laboratorio (req.body) y responder 201 con el equipo creado.
    res.status(501).json({
      success: false,
      message: 'El registro de equipos de cómputo/hardware todavía no está implementado.'
    });
  };

  public static getEquipos = (req: Request, res: Response): void => {
    // TODO: tomar los filtros (ej. ambienteId) de req.query, llamar al servicio y responder con los resultados.
    res.status(501).json({
      success: false,
      message: 'La consulta y filtrado de equipos todavía no está implementada.'
    });
  };

  public static getEquipoById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id a la operación de consulta y responder con el equipo encontrado.
    res.status(501).json({
      success: false,
      message: `La consulta del equipo ${id} todavía no está implementada.`
    });
  };

  public static patchEstadoEquipo = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: actualizar parcialmente el estado técnico del equipo (ej. "en mantenimiento") o cambiar su ubicación usando req.body.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del estado del equipo ${id} todavía no está implementada.`
    });
  };
}
