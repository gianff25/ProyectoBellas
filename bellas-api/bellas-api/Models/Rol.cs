using System;
using System.Collections.Generic;

namespace bellas_api.Models;

public partial class Rol
{
    public Guid Id { get; set; }

    public string Nombre { get; set; } = null!;

    //public virtual ICollection<Usuario> Usuarios { get; } = new List<Usuario>();
}
