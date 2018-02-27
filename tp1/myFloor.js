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

    //Floor located on the origin where it is suposed to be
    this.scene.scale(8,0.1,6);

    this.quad.display();

    this.scene.popMatrix();
  }


};
