//Funcion de traslacionTHREE.
function traslacion(vt){
    var matrizT = new THREE.Matrix4();    
    matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);

            return matrizT;       //Retornar la matriz  de traslacion
}

//Funcion escalado 
function escalado(obj,vt, posini){
    trasO=[-posini[0],-posini[1],-posini[2]]; 
    obj.applyMatrix( traslacion(trasO));  //Llevar objeto al origen   
    var matrizS = new THREE.Matrix4();
    matrizS.set(vt[0],    0,     0, 0,
                    0,vt[1],     0, 0,
                    0,    0, vt[2], 0,
                    0,    0,     0, 1); 

    obj.applyMatrix(matrizS);          //aplicar escalado
    tr1=[posini[0],posini[1],posini[2]];  
    obj.applyMatrix( traslacion(tr1)); //Devolver a su posicion 
    return obj
}

//Funcion de rotacion  que contiene rotacion para los ejes de acuerdo al eje que se le llame en la funcion 
function rotacion(angulo, eje){
    var matrizR = new THREE.Matrix4();  
    var alpha = (angulo*Math.PI)/180;   //Transformacion de grados a radianes      
    if(eje=='x'){//Condicion que determina el eje en el que se va a rotar
        matrizR.set(  1,  0,  0, 0,
                      0, Math.cos(alpha),-Math.sin(alpha), 0, 
                      0, Math.sin(alpha),Math.cos(alpha), 0,
                      0,  0,  0, 1);    

            return(matrizR);            

    }else
        if(eje=='y'){//Condicion que determina el eje en el que se va a rotar
        matrizR.set( Math.cos(alpha),  0, Math.sin(alpha), 0,
                      0,  1,  0, 0, 
                    -Math.sin(alpha),  0, Math.cos(alpha), 0,
                      0,  0,  0, 1);    

            return(matrizR);            
        }else{//Condicion que determina el eje en el que se va a rotar
        matrizR.set( Math.cos(alpha),-Math.sin(alpha),  0, 0,
        Math.sin(alpha),Math.cos(alpha),  0, 0, 
                      0,  0,  1, 0,
                      0,  0,  0, 1);    

            return(matrizR);            //Establecimiento y retorno de matriz Z
    }}

    function rotacionReal(obj, angulo, eje, posini){
        var matrizR = new THREE.Matrix4();
        var alpha = (angulo*Math.PI)/180;
        trasO=[-posini[0],-posini[1],-posini[2]]; 
        obj.applyMatrix( traslacion( trasO));       //Llevar objeto al origen  
        if(eje=='x'){//Condicion que determina el eje en el que se va a rotar
            matrizR.set(  1,  0,  0, 0,
                          0,Math.cos(alpha),-Math.sin(alpha), 0, 
                          0, Math.sin(alpha), Math.cos(alpha), 0,
                          0,  0,  0, 1);    
          obj.applyMatrix(matrizR);   //ROTACION EN X
                
    
        }else
            if(eje=='y'){//Condicion que determina el eje en el que se va a rotar
            matrizR.set(Math.cos(alpha),  0, Math.sin(alpha), 0,
                          0,  1,  0, 0, 
                        -Math.sin(alpha),  0, Math.cos(alpha), 0,
                          0,  0,  0, 1);    
                    obj.applyMatrix(matrizR);  //ROTACION EN Y
                    
                
            }else{//Condicion que determina el eje en el que se va a rotar
            matrizR.set( Math.cos(alpha),-Math.sin(alpha),  0, 0,
                         Math.sin(alpha), Math.cos(alpha),  0, 0, 
                          0,  0,  1, 0,
                          0,  0,  0, 1);    
    
                obj.applyMatrix(matrizR);  //ROTACION EN Z
                
        }
        tr1=[posini[0],posini[1],posini[2]];  
        obj.applyMatrix( traslacion(tr1));     //Devolvemos el objeto a su posicion de inicio
        return obj;  //RETORNAR EL OBJETO DESPUES DE LAS TRANSFORMACIONES
    }

//Define una funcion que construye una geometria en THREE.JS y la retorna
//vx= Arreglo de vertices
    function Geometria(ver){
        geo=new THREE.Geometry();
        for (i = 0; i < ver.length; i++) {
            x = ver[i][0];
            y = ver[i][1];
            z = ver[i][2];
            vector = new THREE.Vector3(x, y, z);
            geo.vertices.push(vector);
        }
        return geo;
    }