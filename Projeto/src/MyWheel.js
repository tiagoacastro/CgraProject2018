/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWheel extends CGFobject
{
	constructor(scene)
	{
		super(scene);

		this.initBuffers();
	};

  	initBuffers()
	{

    this.cylinder = new MyCylinder(this.scene, 30, 1);
    this.cylinder.initBuffers();

    this.materialDefault = new CGFappearance(this.scene);

    this.circle = new MyCircle(this.scene,30);
    this.circle.initBuffers();

	this.wheelAppearance = new CGFappearance(this.scene);
    this.wheelAppearance.loadTexture("../resources/images/wheel.jpg");
	this.wheelAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
    this.wheelAppearance.setAmbient(0.3,0.3,0.3,1);
	this.wheelAppearance.setDiffuse(0.6,0.6,0.6,1);
	this.wheelAppearance.setSpecular(0,0.2,0.8,1);
	this.wheelAppearance.setShininess(120);

	this.tireAppearance = new CGFappearance(this.scene);
    this.tireAppearance.loadTexture("../resources/images/tire.jpg");
	this.tireAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
    this.tireAppearance.setAmbient(0.3,0.3,0.3,1);
		this.tireAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.tireAppearance.setSpecular(0,0.2,0.8,1);
		this.tireAppearance.setShininess(120);

 };

 display()
 {
   this.scene.pushMatrix();
   this.materialDefault.apply();
   this.scene.scale(0.5,0.5,0.5);
	 this.tireAppearance.apply();
   this.cylinder.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.rotate(3.14,1,0,0);
   this.scene.scale(0.5,0.5,0.5);
	 this.wheelAppearance.apply();
   this.circle.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.scale(0.5,0.5,0.5);
   this.scene.translate(0, 0, 1);
	 this.wheelAppearance.apply();
   this.circle.display();
   this.scene.popMatrix();



 };
}
