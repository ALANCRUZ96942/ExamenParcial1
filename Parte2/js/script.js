      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */


      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */



      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */

       let buttonMayusq = document.getElementById('btn_mayusculas');
      let  buttonAge = document.getElementById('btn_añoshumano');
      let  btnMuestra = document.getElementById('btn_muestra');


       function toMayusq(e){
        e.preventDefault();
        var names = document.getElementById('txt_may').value.split(',');
        for (var i=0; i < names.length; i++) {
          console.log(names[i] = names[i].toLowerCase());
        } 
        document.getElementById('txt_may').value = names;
       }


       function calculateDogAge(e){
        e.preventDefault();
        var human_age = document.getElementById('edad_humano').value;
        var dog_age = human_age*7;
        document.getElementById('edad_perro').value = dog_age;
       }




       function register (e){
        e.preventDefault();

        var Pokemon
        function Pokemon (nombre,especie,atque,defensa){
          this.nombre = nombre;
          this.especie = especie;
          this.atque = atque;
          this.defensa = defensa;
       }

        var Pokemon1 = new Pokemon('Pikachu','Eléctrico',100,80);
        var Pokemon2 = new Pokemon('Chikorita','Planta',80,55);

       document.getElementById('nombre_poke1').value = Pokemon1.nombre ;
       document.getElementById('especie_poke1').value =  Pokemon1.especie;
       document.getElementById('ataque_poke1').value =  Pokemon1.atque;
       document.getElementById('defensa_poke1').value =  Pokemon1.defensa;


       document.getElementById('nombre_poke2').value = Pokemon2.nombre ;
       document.getElementById('especie_poke2').value =  Pokemon2.especie;
       document.getElementById('ataque_poke2').value =  Pokemon2.atque;
       document.getElementById('defensa_poke2').value =  Pokemon2.defensa;

       }

       buttonMayusq.addEventListener("click",toMayusq);       
       buttonAge.addEventListener("click",calculateDogAge);
       btnMuestra.addEventListener("click",register);