/**
* myTable
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyTable extends CGFobject
{
  constructor(scene) {
    super(scene);

    this.materialC = new CGFappearance(this.scene);
	//this.materialC.setAmbient(0.1,0.1,0.1,1);
	this.materialC.setDiffuse(0.627,0.322,0.176,1);
	this.materialC.setSpecular(0.1,0.03,0.03,1);
	this.materialC.setShininess(30);

	this.materialD = new CGFappearance(this.scene);
    //	this.materialD.setAmbient(0.1,1,1,1);
	this.materialD.setDiffuse(.678,.698,.741,1);
    this.materialD.setSpecular(1,1,1,1);
	this.materialD.setShininess(1);


    this.quad=new MyUnitCubeQuad(this.scene);
    this.leg=new myLeg(this.scene);
    this.quad.initBuffers();
    this.leg.initBuffers();
  };

  display(){
    this.scene.pushMatrix();
    this.materialD.apply();
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
    this.materialC.apply();
    this.quad.display();

    this.scene.popMatrix();
  }


};
