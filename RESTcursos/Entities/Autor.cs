using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RESTcursos.Entities
{
    public class Autor
    {
        public string DNI { get; set; }
        public string nombre { get; set; }
        public int calificacion { get; set; }

          public string thumbnail { get; set; }
    }
}
