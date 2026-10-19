import { Request, Response } from 'express';

export class loandashboard {
  public static getResumenDashboard = (req: Request, res: Response): void => {
    // TODO: consultar y consolidar contadores globales de usuarios, ambientes activos, equipos operativos y novedades críticas sin resolver.
    res.status(501).json({
      success: false,
      message: 'La consulta del resumen consolidado del dashboard todavía no está implementada.'
    });
  };

  public static getMetricasAnalitica = (req: Request, res: Response): void => {
    // TODO: generar estadísticas detalladas para el panel de control y analítica de administración.
    res.status(501).json({
      success: false,
      message: 'La consulta de métricas de analítica todavía no está implementada.'
    });
  };
}
