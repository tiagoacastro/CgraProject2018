/**
* myFloor
* @param gl {WebGLRenderingContext}
* @constructor
*/

class myFloor extends CGFobject
{
  constructor(scene) {
    super(scene);
    this.quad=new MyUnitCubeQuad(this.scene);
    this.quad.initBuffers();
  };

  display(){
    this.scene.pushMatrix();

    this.scene.scale(8,0.1,6);
    this.scene.translate(0.5,0.5,0.5);

    this.quad.display();

    this.scene.popMatrix();
  }


};
