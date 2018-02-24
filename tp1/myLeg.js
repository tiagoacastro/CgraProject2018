/**
* myLeg
* @param gl {WebGLRenderingContext}
* @constructor
*/

class myLeg extends CGFobject
{
  constructor(scene) {
    super(scene);
    this.quad=new MyUnitCubeQuad(this.scene);
    this.quad.initBuffers();
  };

  display(){
    this.scene.pushMatrix();
   
    this.scene.scale(0.3,3.5,0.3);
    this.scene.translate(0.5,0.5,0.5);
   
    this.quad.display();

    this.scene.popMatrix();
  }


};
