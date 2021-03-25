using Microsoft.AspNetCore.Mvc;
using RESTcursos.Entities;

namespace RESTcursos.Controllers
{
    [Route("[controller]")]
    
    [ApiController]
    public class AutoresController : ControllerBase
    {
        // GET: api/Autores
        [Authorize]
        [HttpGet("autores")]
        public IActionResult  Get()
        {

            return Ok(new Autor[] {
                new Autor { DNI = "12345678A", nombre = "Ndelle Labarns", calificacion = 5, thumbnail =""},
                new Autor { DNI = "12345679B", nombre = "Megan Griffiths ", calificacion = 4, thumbnail =""},
                new Autor { DNI = "12345671C", nombre = "Erik Adars", calificacion = 4, thumbnail =""}
            });
        }

        
    }
}
