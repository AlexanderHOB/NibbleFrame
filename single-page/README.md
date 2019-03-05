# Arquitectura

Establecer la arquitectura CSS es probablemente una de las cosas más difíciles que tendrás que hacer en la vida de un proyecto. Mantener esa arquitectura consistente y significativa es aún más difícil.

Afortunadamente, uno de los principales beneficios de utilizar un preprocesador CSS es tener la capacidad de dividir el código en varios archivos sin afectar al rendimiento (como haría la directiva `@import` en CSS). Gracias a la directiva `@import` de Sass, es perfectamente seguro (y de hecho recomendable) usar tantos archivos como sean necesarios en el desarrollo, compilándolo todo en una sola hoja de estilo cuando vaya a producción.

Además, también quiero hacer hincapié en la necesidad de utilizar carpetas, incluso para los proyectos a pequeña escala. En casa, no guardas todos tus documentos en el mismo cajón sin más. Utilizas carpetas; una para la casa/apartamento, otra para el banco, otra para las facturas y así sucesivamente. No hay razón para hacer lo contrario cuando se estructura un proyecto CSS. Divide el código en carpetas significativas para que sea sencillo encontrar las cosas más tarde cuando tengas que volver al código de nuevo.

Hay una gran cantidad de [arquitecturas populares - En inglés](http://www.sitepoint.com/look-different-sass-architectures/) para los proyectos CSS: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/) o similare. Todas ellas tienen sus méritos, pros y contras.

Yo utilizo un método que resulta ser bastante similar a [SMACSS](https://smacss.com/) de [Jonathan Snook](http://snook.ca/), que se centra en mantener las cosas simples y evidentes.

<div class="note">
  <p>He aprendido que la arquitectura es, en la mayoría de los casos muy específica para cada proyecto. Siéntete libre de descartar o de adaptar la solución propuesta hasta que encuentres un sistema que se adapte a tus necesidades.</p>
</div>

## Componentes

Hay una gran diferencia entre hacer que algo *funcione* y hacerlo *bien*. De nuevo, CSS es un lenguaje bastante desordenado <sup>[cita requerida]</sup>. Cuánto menos CSS tengamos, mejor. No queremos tener que trabajar con megabytes de código CSS. Para mantener las hojas de estilo cortas y eficientes &mdash;y esto no será ninguna sorpresa para tí&mdash; es una buena idea pensar en una interfaz como en una colección de componentes.

Los componentes pueden ser cualquier cosa, siempre y cuando:

* haga una cosa y sólo una cosa;
* sea reutilizable y se reutilice a lo largo del proyecto;
* sea independiente.

Por ejemplo, un formulario de búsqueda debería ser tratado como un componente. Debería ser reutilizable, en diferentes lugares, en diferentes páginas y en varias situaciones. No debe depender de su posición en el DOM (pie de página, barra lateral, contenido principal…).

La mayor parte de cualquier interfaz puede concebirse en forma de pequeños componentes y te recomiendo encarecidamente que lo hagas. Esto no solo reducirá la cantidad de CSS necesario para todo el proyecto, sino que también resultará más fácil de mantener que un desorden caótico donde todo está hecho un lío.

## Estructura de un componente

Idealmente, los componentes deberían existir dentro de su propia partición Sass (en la carpeta `components/`, como se describe en el patrón [7-1](#el-patron-7-1)), por ejemplo `components/_button.scss`. Los estilos descritos en cada archivo de componentes sólo deben estar relacionados con:

* el propio estilo del componente en sí;
* el estilo de las variantes, modificadores, y/o estados del componente;
* el estilo de los descendientes del componente (por ejemplo, los hijos), si es necesario.

Si quieres que tus componentes puedan ser personalizados externamente (por ejemplo, desde un tema de la carpeta `themes/`), limita las declaraciones a estilos estructurales, como dimensiones (width/height), padding, margins, alignment, entre otros. Evita los estilos del tipo color, sombra, tipografía, fondo, etc.

Un componente puede incluir variables específicas de componentes, *placeholders* e incluso *mixins* y funciones. Ten en cuenta, sin embargo, que debes evitar referenciar (es decir, `@import`-ar) archivos de componentes de otros archivos de componentes, ya que esto puede hacer que la dependencia dentro de tu proyecto sea un completo lío.

Este es un ejemplo del componente de un botón:

{% include snippets/architecture/06/index.html %}

<div class="note">
  <p>Gracias a <a href="https://twitter.com/davidkpiano">David Khourshid</a> por su ayuda y experiencia en esta sección.</p>
</div>

## El Patron 7-1

Volvamos a la arquitectura, ¿de acuerdo? Normalmente suelo trabajar con lo que yo llamo el *patrón 7-1*: 7 carpetas, 1 archivo. Basicamente, tienes todas las partes almacenadas en 7 carpetas diferentes, y un único archivo en el directorio raíz (normalmente llamado `main.scss`) y que importa todas estas partes para luego compilarlas en una hoja de estilo CSS.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `abstracts/`
* `vendors/`

Y por supuesto:

* `main.scss`

<div class="note">
  <p>Si quieres usar el patrón 7-1, aquí hay una <a href="https://github.com/HugoGiraudel/sass-boilerplate">plantilla reutilizable</a> en GitHub. Debería contener todo lo que necesitas para empezar con esta arquitectura.</p>
</div>

{% include images/wallpaper.html %}

Idealmente, podemos llegar a algo como esto:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>Los archivos siguen las mismas convenciones de nomenclatura descritas anteriormente: están delimitadas por guiones.</p>
</div>
