var libro = {
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    añoPublicacion: 1925,
    genero: "Novela",
    paginas: 218,
    estado: "Disponible",
    
    prestar: function(persona) {
      if (this.estado === "Disponible") {
        this.estado = "Prestado a " + persona
        return "El libro ha sido prestado a " + persona
      } else {
        return "El libro no está disponible para préstamo en este momento."
      }
    },
    
    devolver: function() {
      if (this.estado.includes("Prestado")) {
        this.estado = "Disponible"
        return "El libro ha sido devuelto y ahora está disponible para préstamo."
      } else {
        return "El libro no se encuentra prestado en este momento."
      }
    },
    
    informacion: function() {
      return "Título: " + this.titulo + "\n" +
             "Autor: " + this.autor + "\n" +
             "Año de Publicación: " + this.añoPublicacion + "\n" +
             "Género: " + this.genero + "\n" +
             "Páginas: " + this.paginas + "\n" +
             "Estado: " + this.estado
    }
  };
  
  console.log(libro.prestar("Juan"))
  console.log(libro.informacion())
  console.log(libro.devolver())
  