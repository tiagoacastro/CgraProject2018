/**
* MyUnitCubeQuad
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyUnitCubeQuad extends CGFobject
{
  constructor(scene) {
    super(scene);
    this.quad=new MyQuad(this.scene);
    this.quad.initBuffers();
  };

  display(){
    this.scene.translate(0,0,0.5);
    this.quad.display();

    this.scene.translate(0,0,-1);
    this.scene.rotate(180*Math.PI/180.0,1,0,0);
    this.quad.display();

    this.scene.rotate(90*Math.PI/180.0,1,0,0);
    this.scene.translate(0,-0.5,0.5);
    this.quad.display();

    this.scene.rotate(180*Math.PI/180.0,0,1,0);
    this.scene.translate(0,0,1);
    this.quad.display();
  }

};
