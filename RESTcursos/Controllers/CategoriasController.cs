using Microsoft.AspNetCore.Mvc;
using RESTcursos.Entities;

namespace RESTcursos.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        // GET: api/Categorias
        [Authorize]
        [HttpGet("categorias")]
        public IActionResult  Get()
        {
            return Ok(new Categoria[] {
                new Categoria { id = 1, nombre = "Programación"},
                new Categoria { id = 2, nombre = "Matemáticas"},
                new Categoria { id = 3, nombre = "Biología"}
            });
        }



    }
}
