import React from "react";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario de contacto enviado");
  };

  return (
    <section id="contacto" className="border-4 border-t-gold">
      <div className="max-w-4xl mx-auto px-8 pt-4 flex flex-col md:flex-row items-center xs:px-4">
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <h2 className="font-cinzel text-2xl text-gold font-bold mb-6">
            ¡Contáctanos!
          </h2>
          <p className="text-gold text-roboto xs:text-justify px-2 xl:text-lg xl:pr-8">
            ¿Deseas compartir tus pensamientos o descubrir más sobre los
            misterios que aguardan en{" "}
            <strong className="text-gold font-cinzel">
              {" "}
              "Caminos de la Aurora"
            </strong>
            ? ¡Haznos llegar tus mensajes y dudas!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="glass shadow-md rounded-lg p-6 w-full md:w-1/2 md:ml-4 mt-4 mb-12"
        >
          <div className="mb-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              required
              className="input-form w-full font-roboto font-sm font-light  px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryD"
            />
          </div>
          <textarea
            id="message"
            name="message"
            rows="1"
            placeholder="Escribe tu mensaje aquí"
            required
            className="input-form font-roboto font-sm font-light w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primaryD resize-none mb-2"
          />
          <button type="submit" className="btn btn-warning font-cinzel w-full">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
