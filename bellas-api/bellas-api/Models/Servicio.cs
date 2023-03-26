using System;
using System.Collections.Generic;

namespace bellas_api.Models;

public partial class Servicio
{
    public Guid Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public double Costo { get; set; }

    public double TiempoEstimado { get; set; }

}
