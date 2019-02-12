// Como evitar el scope global.

var global = {};

// De esta forma evitamos las variables global
// funciones para delimitar scope.

(function(local) {

    var estado = {
        nombre : 'Andy', apellido: 'Vazquez'
    }

    local.estado = estado;

})(global);

// funciones para crear modulos
var moduloA = (function () {
    return {
        saludar: function() {
            alert('hola')
        },
        fn2 : function() {
            alert('otra tarea');
        }
    }
})();

/*
moduloA.saludar();
moduloA.fn2();
*/


// funciones como asbtracciones
// Dos niveles de abstraccion
// llamo a una funcion que llama a otra que le paso como argumento.

(function() {

    var hacerTrabajo = function() {
        console.log('trabajo duro como un excalvo !!!');
    }

    // podemos decir que invocar trabajo recibe una inyeccion
    // de dependencia.
    var invocarTrabajo = function(fn) {
        fn();
    }

    invocarTrabajo(hacerTrabajo);
    // invocarTrabajo(() => alert('Hola mundo'));

})();



(function() {
    var cursoAngular = angular.module('CursoAngular', []);
    console.log(cursoAngular);

    cursoAngular.controller('ControladorSuperior', function($scope) {
        console.log('se ejecuta el primer controlador');
        $scope.mensaje = "Gracias por estar ahi";
        $scope.alumnos = [{
            nombre: 'Jaime',
            apellido: 'Rehbein'
        }, {
            nombre: 'Lore',
            apellido: 'Bellon'
        }, {
            nombre: 'Sebastian',
            apellido: 'Apellido no encontrado'
        }];
    });
    cursoAngular.controller('ControladorInferior', function($scope) {
        console.log('se ejecuta el segundo controlador');
        $scope.mensaje = "Espero no se corte la luz";
        $scope.unclick = function() {
            alert($scope.seleccionTurno);
        }
    });
    
})();