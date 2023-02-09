const About = () => (
  <div>
    <div style={{ textAlign: 'center' }}>
      <h3>Dadaísmo en TypeScript</h3>
      <p>
        <b>Presentado por: </b>
        Carla Corpeño
      </p>
      <p>
        <b>Agradecimientos a: </b>
        Gerson Mayer
      </p>
    </div>
    <p>
      El Dadaísmo es un movimiento artístico y literario de vanguardia, surgido
      a inicios del siglo XX, durante la Primera Guerra Mundial. Los dadaístas
      se oponían a la guerra, por lo que intentaron proclamar esta máxima a
      través de una nueva poesía que tenía por principio tres elementos: el
      absurdo, la espontaneidad y la irracionalidad. A esta poesía se la llamó
      "poesía dada".
    </p>
    <p>
      Los poemas dada usan palabras que, racionalmente, carecen de sentido. Esto
      tiene como objetivo hacer que el lector se cuestione qué es, en realidad,
      eso que está leyendo y, de este modo, poder darle un significado personal
      al "poema".
    </p>
    <p>
      Entre los principales referentes del dadaísmo están Hugo Ball, Tristán
      Tzara y Marcel Duchamp.
    </p>
    <p>
      El método de Tristán Tzara para hacer un poema dada es el más conocido:
    </p>
    <p>1. Tome un periódico.</p>
    <p>2. Tome un par de tijeras.</p>
    <p>
      3. Escoja un artículo con la extensión de palabras que usted desea que
      tenga su poema.
    </p>
    <p>4. Recorte el artículo.</p>
    <p>
      5. Recorte cada una de las palabras que componen el artículo y métalas en
      una funda.
    </p>
    <p>6. Agite la funda.</p>
    <p>7. Saque una por una las palabras de la funda.</p>
    <p>
      8. Tome un papel y copie las palabras sin alterar el orden en el salieron
      de la funda.
    </p>
    <p>9. El poema que obtenga se parecerá a usted.</p>
    <p>
      10. Y es usted un escritor infinitamente original y de una sensibilidad
      hechizante, aunque incomprendido por el vulgo.
    </p>
    <p>
      <b>¿En qué consiste el proyecto?</b>
    </p>
    <p>
      Gracias a la inspiración suscitada por la literatura de vanguardia y en
      especial, por el componente del azar en el dadaísmo, en un primer lugar se
      concibió la creación de un "generador de poemas dada".
    </p>
    <p>
      Sin embargo, la idea rápidamente evolucionó a su versión final: un
      “generador de palabras en español”, las cuales se le presentan al usuario
      y es él quien debe ir eligiéndolas a voluntad, para crear, finalmente, un
      poema, en esencia inspirado por el dadaísmo.
    </p>
    <p>
      El componente del azar en este caso es dictado por el generador, pero el
      usuario puede modificar el orden de las palabras que escoja para que su
      poema tenga alguna especie de sentido. Y, de esta forma, el usuario se
      convertirá en "un escritor infinitamente original y de una sensibilidad
      hechizante, aunque incomprendido por el vulgo".
    </p>
    <p>
      A pesar de que las palabras efectivamente las decide una aplicación, es en
      esencia un ejercicio de escritura creativo, pues el usuario (o más bien,
      el poeta), quien decide, modifica y finalmente crea un poema totalmente
      original.
    </p>
    <p>
      <b>¿Cómo funciona?</b>
    </p>
    <p>
      A nivel técnico, el proyecto consiste en una aplicación web que genera una
      lista de 10 palabras que se actualiza cada 7 segundos. El usuario puede
      escoger una o varias de las 10 palabras que se le presentan, como también
      puede no escoger ninguna y esperar a que la aplicación le proponga 10
      palabras nuevas pasados los 7 segundos. Esto puede repetirse
      indefinidamente hasta que el usuario se sienta conforme con las palabras
      que ha escogido. La selección de palabras puede visualizarse en una caja,
      las cuales puede arrastrar con el cursor para cambiar el orden en el que e
      encuentran o incluso eliminar de la lista. Finalmente, el usuario puede
      guardar su poema y escoger un seudónimo bajo el cual su poema quedará
      guardado dentro de la plataforma para que otros usuarios puedan
      visualizarlo.
    </p>
    <p>
      La aplicación web ha sido desarrollada en el lenguaje programación
      TypeScript. Para esto, se usó una librería, que es un conjunto de
      herramientas prediseñadas para facilitar el desarrollo de una aplicación a
      través de un lenguaje de programación. En este caso, React es la librería
      en la cual se apoyó este proyecto. React es una librería desarrollada por
      Meta (ex Facebook).
    </p>
    <p>
      La lista de palabras que se utiliza aquí consta de más 600,000 palabras en
      español, la cual proviene de una plataforma de repositorios de software
      llamado GitHub, en la cual se comparte código <i>open-source.</i>
    </p>
    <p>
      <b>Características de los nuevos medios relacionadas al proyecto </b>
    </p>
    <p>
      <b>· Interactividad (Deuze).</b> El usuario no es un mero espectador, todo
      lo contrario: la esencia del proyecto se basa en que el usuario interactúe
      y pueda concretar un ejercicio de escritura creativa.
    </p>
    <p>
      <b>·Variabilidad (Manovich).</b>Tener la posibilidad de ver cómo
      evoluciona la interfaz según las sugerencias o los datos recopilados del
      uso los usuarios con los poemas que estos vayan generando y queden
      almacenados en la aplicación.
    </p>
    <br />
    <br />
    <br />
    
  </div>
);

export default About;
