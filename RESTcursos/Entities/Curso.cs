using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RESTcursos.Entities
{
    public class Curso
    {
        public long id { get; set; }
        public string titulo { get; set; }
        public string descripcion { get; set; }
        public string url { get; set; }
        public string thumbnail { get; set; }

    }
}
