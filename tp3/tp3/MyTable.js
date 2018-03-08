/**
* myTable
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyTable extends CGFobject
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

    this.scene.translate(2.35,1.75,1.35);
    this.leg.display();

    this.scene.translate(-4.7,0,0);
    this.leg.display();

    this.scene.translate(0,0,-2.7);
    this.leg.display();

    this.scene.translate(4.7,0,0);
    this.leg.display();
    
    this.scene.popMatrix();
    this.scene.pushMatrix();

    
    this.scene.translate(0,3.65,0);
    this.scene.scale(5,0.3,3);

    this.quad.display();
  
    this.scene.popMatrix();
  }


};
