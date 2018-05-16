/**
* MyUnitCubeQuad
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyUnitCubeQuad extends CGFobject
{
  constructor(scene, minS, maxS, minT, maxT) {
    super(scene);
    this.quad=new MyQuad(this.scene, minS, maxS, minT, maxT);
    this.quad.initBuffers();
  };

  display(){

    this.scene.translate(0,0,0.5);
    this.quad.display();

    this.scene.translate(0,0,-1);
    this.scene.rotate(180*Math.PI/180.0,1,0,0);
    this.quad.display();

    this.scene.rotate(90*Math.PI/180.0,1,0,0); //occore mudança dos referenciais, passa a (vermelho, azul, -verde), azul = verde, verde = azul negativo
    this.scene.translate(0,-0.5,0.5);
    this.quad.display();

    this.scene.rotate(180*Math.PI/180.0,0,1,0);
    this.scene.translate(0,0,1);
    this.quad.display();

    this.scene.rotate(90*Math.PI/180.0,0,1,0); //occore mudança dos referenciais, passa a (azul, -vermelho, -verde), vermelho = azul, azul = vermelho negativo
    this.scene.translate(0.5,0,0.5);
    this.quad.display();

    this.scene.rotate(180*Math.PI/180.0,0,1,0);
    this.scene.translate(0,0,1);
    this.quad.display();
  }

};
