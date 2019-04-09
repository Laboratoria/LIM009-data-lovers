# LatinFeminData

## Índice

* [Preámbulo](#preámbulo)
* [Descripción](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## Preámbulo



### Definición del producto

El desarrollo de esta plataforma web "LatinFemiData", tiene como propósito facilitar el accezo a la base de datos del [Banco Mundial de Desarrollo](https://www.bancomundial.org/), ya que la ruta que debe tomar el usuario en la página de organización mencionada, es muy larga y poco intuitiva  para acceder a los datos estadísticos de los **Indicadores deDesarrollo** de la población femenina.
LatinFeminData esta pensada  para que estudiantes y profesionales(investigadores) que trabajen en temas de género y necesiten data estadística de mujeres de diferentes países de ámerica latina puedan acceder de manera sencilla, intuitiva y rápida a la base base de datos del Banco Mundial de Desarrollo y asi impulsar el desarrollo de la mujer a través de los diferentes sectores( Educación, salud, laboral, etc... ). 

 De esta manera las investigaciones no se verán frenadas por la búsqueda de información.

Para cumplir con los objetivos mencionados, se realizó un prototipo de baja fidelidad, y uno de alta fidelidad.

# Diseño de la Interfaz de Usuario
### Prototipo de baja fidelidad
A continuación se presenta el prototipo de baja fidelidad.

-Pantalla N°1

![LFP_1](https://user-images.githubusercontent.com/47750969/55835359-99716e00-5ae1-11e9-882b-75e4d7bd1982.jpeg)

-Pantalla N°2

![LFP_2](https://user-images.githubusercontent.com/47750969/55835418-bf970e00-5ae1-11e9-93f6-a0286157347f.jpeg)

-Pantalla N°3

![LFP_3](https://user-images.githubusercontent.com/47750969/55835459-d473a180-5ae1-11e9-9653-7e86e94b93eb.jpeg)

### Prototipo de alta fidelidad
Para conocer el prototipo de alta fidelidad del presente proyecto, haz click [aquí](https://www.figma.com/file/UAompxuJC6xsmN3Ce1vtAVTf/latinFemiData?node-id=0%3A1).

-Pantalla N°1

![HFP_1](https://user-images.githubusercontent.com/47750969/55837995-9ded5500-5ae8-11e9-8fd6-59a839c9233a.png)

-Pantalla N°2

![HFP_2](https://user-images.githubusercontent.com/47750969/55838108-f15fa300-5ae8-11e9-9ffc-a87367aaaf00.png)

-Pantalla N°3

![HFP_3](https://user-images.githubusercontent.com/47750969/55838149-13f1bc00-5ae9-11e9-95ac-63523213e07a.png)

### Historias de usuario

Historia de Usuario 1:Yo como usuario quiero visualizar información de la data en una pantalla de inicio para tener noción de la data a revisar.
Definición de terminado:
-Pantalla desplegada en gh-pages.                                                                                                                      -Visualizar pantalla responsive.

Historia de Usuario 2: Yo como usuario quiero visualizar los indicadores de un sector y pais de mi elección en una lista para poder visualizar los datos segun mi elección de búsqueda.
Definicion de terminado:
-Pantalla desplegada en gh-pages.
-Vizualizar pantalla responsive.
-Mostrar la lista de indicadores al seleccionar un sector y un pais.

Historia de Usuario 3: 
Yo como usuario quiero vizualisar la data de un indicador en una tabla para poder ver los años y porcentajes de manera entendible.
Definicion de terminado: 
-Pantalla desplegada en gh-pages.
-Visualizar pantalla responsive.
-Mostrar una tabla de años y porcentajes con la data de un incador seleccionado.

Historia de Usuario 4: Yo como usuario quiero visualizar una tabla con datos estadisticos que contenga el minimo, el maximo y media porcentual para visualizar datos inportantes de la tabla general.
Definicion de terminado:
-Pantalla desplegada en gh-pages.
-visualizar pantalla responsive.
-Mostrar una tabla al lado de la general con los datos estadisticos, minimo, maximo y media porcentual.

Historia de Usuario 5: Yo, como usuario quierover la página web desde distintos dispositivos para tener una mayor visualizacion.
Definicion de terminado:
-El usuario puede visualizar la plataforma web desde diferentes dispositivos móvil, tablet y desktop.




# Pruebas de usabilidad:

Durante las pruebas de usabilidad se observó que la navegación de la página no resultó ser totalmente sencilla de comprender, ya que  iniciando con los prototipos pensamos mostrar en la segunda pantalla todos los sectores y la lista de indicadores segun país, viendose de una manera desordenada y con mucha información, aburriendo al usuario.

Otro detalle que encontramos en las pruebas de usabilidad fue que pensabamos considerar en nuestra lista de menú  ibamos a considerar un item llamado indicadores y otro estadísticas, en el cual se iba mostrar los datos estadisticos en una  y en la  otra los gráficos; considerando el usuario que todo esto se podía unir en solo un boton llamado "Indicadores estaísticos".

Otro detalle que encontramos en las pruebas de usabilidad fue que los datos que mostraba la página en algunos casos tenían muchos decimales, mismos que no eran de utilidad para los usuarios, así que decidimos reducir la cantidad de decimales que se mostrara en la tabla, a únicamente dos.

Se utilizó colores en escala de azules para transmitir confianza, seguridad, y empatizar con la mayoría de los usuarios.

El resultado final del proyecto se puede observar [aquí](https://dajhelyan.github.io/LIM009-data-lovers/).


