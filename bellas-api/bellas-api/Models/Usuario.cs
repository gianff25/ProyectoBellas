using System;
using System.Collections.Generic;

namespace bellas_api.Models;

public class Usuario
{
    public Guid Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido1 { get; set; } = null!;

    public string? Apellido2 { get; set; }

    public string Telefono { get; set; } = null!;

    public string? Correo { get; set; }

    public string Contraseña { get; set; } = null!;
   
    public Rol Rol { get; set; }

    //public virtual ICollection<Cita> Cita { get; } = new List<Cita>();

    //public virtual Rol Rol { get; set; } = null!;
}
