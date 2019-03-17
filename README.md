# Templates for our Projects | NibbleFrame
En este branch se crearan y gestionaran todas los templates de paginas web para nuestros proyectos.

##Buenas Practicas Front End
Cuandlo alguien lea nuestra codigo que paresca que una sola persona lo escribio

### Pracicas HTML
1. Jerarquia de h1-h6

### Practicas CSS
1. Escribe CSS reutilizable DRY (Dont Repeat Yourself)
2. Nomeclatura de clases Kebab Case ejemplo-de-nomenclatura
3. Formula PC-TV en el ordenamiento de los atributos CSS 
    * Posicionamiento: position, z-index, display, float 
    * Caja (Modelo de Caja): width, height, padding, border, margin
    * Texto: font-\*, text-\*
    * Variado: background,  opacity, transition, ...
4. Enfoques 
    * Mobile First - Progressive Enhancement
    
    ```css
    .content {

      @media (min-width: 800px) {
        float: left;
        width: 60%;
      }
    }
    ```

    * Desktop First - Graceful Degration

    ```css
    .content {
      float: left;
      width: 60%;

      @media (max-width: 800px) {
        float: none;
        width: 100%;
      }
    }
    ```

5. Aplicar Responsibe Design a nuestro Responsive Design
    * Responsive Design: Buenas practicas con css
        *  Uso de media queris
        * Todo los elementos que no sean textos flexibles(imagenes, videos)
        * Grid Flexible
    * Responsible Responsive Design: Buenas prácticas de CSS + JS

### Practicas JS
1. Nomeclatura Variables Snake Case / var ejemplo_de_nomenclatura
2. Nomenclatura Constantes del DOM Iniciar con $ y Snake Case / const $ejemplo_de_nomenclatura
3. Clases(POO) Primera letra con Mayuscula
4. Uso de let en for / foreach

### Validacion HTML
![Validation](md-resources/w3c-validation.jpg)

### Placeholders vs Mixins
* Placeholder
![Placeholder](md-resources/placeholder-vs-mixin-1.jpg)
* Mixin
![Mixin](md-resources/placeholder-vs-mixin-2.jpg)