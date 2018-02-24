/**
* myTable
* @param gl {WebGLRenderingContext}
* @constructor
*/

class myTable extends CGFobject
{
  constructor(scene) {
    super(scene);
    this.quad=new MyUnitCubeQuad(this.scene);
    this.leg=new myLeg(this.scene);
    this.quad.initBuffers();
    this.leg.initBuffers();
  };

  display(){
    this.scene.pushMatrix();

    this.scene.translate(4.7,0,0);
    this.leg.display();

    this.scene.translate(0,0,2.7);
    this.leg.display();

    this.scene.translate(-4.7,0,0);
    this.leg.display();

    this.scene.translate(0,0,-2.7);
    this.leg.display();
    
    this.scene.scale(5,0.3,3);
    this.scene.translate(0.5,12.15,0.5);

    this.quad.display();

    this.scene.popMatrix();
  }


};
