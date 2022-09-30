SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS informacion;
CREATE DATABASE IF NOT EXISTS informacion DEFAULT CHARACTER SET UTF8MB4;
USE informacion;
CREATE TABLE materias(
id                                INTEGER NOT NULL AUTO_INCREMENT,
nombre                        VARCHAR(40) NOT NULL,
creditos                        INTEGER NOT NULL,
imagen                        VARCHAR(30) NOT NULL,
descripcion                    VARCHAR(300) NOT NULL,
PRIMARY KEY(id)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE comentarios(
id                                INTEGER NOT NULL AUTO_INCREMENT,
correo                        VARCHAR(40) NOT NULL,
imagen                        VARCHAR(30) NOT NULL,
opinion                       VARCHAR(240) NOT NULL,
PRIMARY KEY(id)
)DEFAULT CHARACTER SET UTF8MB4;

INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('MICROPROCESADOR.Y MICROCONTROLAD.(L)',10,'Micros.jpg','Aplicar los conocimientos teórico-prácticos acerca del funcionamiento de los microprocesadores y
microcontroladores, así como su forma de programación para a dar solución a problemas de ingeniería');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Programación web 2',9,'programacion_web_2.jpg','Programar en Javascript para crear y publicar páginas web modernas.');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Redes de computadoras 1 (L)',10,'redes_de_computadoras.png','Comprender los conocimientos y servicios básicos sobre las redes de computadoras, y en particular la
estructura y funcionamiento de las redes de tipo LAN; apoyándose en los modelos de referencia OSI y TCP/IP, para tener una
visión del problema a resolver.');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Sistemas de información',8,'Sistemas_de_informacion.jpg','Desarrollar sistemas de información tomando en cuenta su ciclo de vida y contar con las herramientas
necesarias para tomar buenas decisiones en torno al manejo de las tecnologías de la información.');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Adquisición de datos',8,'adquisicion_de_datos.jpg','Conocer los principios y técnicas para la adquisición, procesamiento y utilización de datos.');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Instrumentación y control',8,'instrumentacionycontrol.png','Comprender los principios fundamentales en la medición y control de variables físicas utilizadas en la ingeniería
en Computación.');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Modelado y Simulación',8,'instrumentacionycontrol.png','Conocer los principales conceptos del modelado de sistemas de diversa naturaleza y realizar aplicaciones para
simularlos.');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Movilidad 2',8,'movilidad.jpg','Conocer y estudiar temas relevantes de la ingeniería en computación o de otra disciplina afín, dentro de la
misma facultad o fuera de ella, para responder a las necesidades del momento.');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Programación de Videojuegos 1',8,'programacion_videojuegos.jpeg','Adquirir los conocimientos y habilidades necesarias para desarrollar proyectos de videojuegos.');
INSERT INTO materias(nombre,creditos,imagen,descripcion) VALUES('Temas Especiales de Computación 2',8,'temas_especiales.jpg','Conocer y actualizarse en temas relevantes de la ingeniería en computación, para responder a las necesidades
del momento.');
