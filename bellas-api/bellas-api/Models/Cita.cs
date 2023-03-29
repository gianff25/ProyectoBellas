using System;
using System.Collections.Generic;

namespace bellas_api.Models;

public partial class Cita
{
    public Guid Id { get; set; }

    public DateTime Fecha { get; set; }

    public string UsuarioId { get; set; } = null!;

    public string ServicioId { get; set; } = null!;

    public bool? Activo { get; set; }

    //public virtual Servicio Servicio { get; set; } = null!;

    //public virtual Usuario Usuario { get; set; } = null!;
}
