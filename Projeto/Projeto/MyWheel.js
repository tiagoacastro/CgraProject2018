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

 };

 display()
 {
   this.scene.pushMatrix();
   this.materialDefault.apply();
   this.scene.scale(0.5,0.5,0.5);
   this.cylinder.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.rotate(3.14,1,0,0);
   this.scene.scale(0.5,0.5,0.5);
   this.circle.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.scale(0.5,0.5,0.5);
   this.scene.translate(0, 0, 1);
   this.circle.display();
   this.scene.popMatrix();



 };
}
