class MyWindShield extends CGFobject
{

	constructor(scene)
	{
		super(scene);

		this.glass = new MyQuad(scene);
		this.triangle = new MyTriangle(scene, 0, 1, 0, 1, 0);
		this.triangle2 = new MyTriangle(scene, 0, 1, 0, 1, 1);
		//this.prism = new MyPrism(scene, 3, 1);

	};

	display() {

		/*this.scene.pushMatrix();
   	this.prism.display();
   	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.1,1.4);
		this.scene.scale(0,0.4,1);
		this.triangle.display();
   	this.scene.popMatrix();*/

		this.scene.pushMatrix();
		this.scene.scale(2,0.8,1.8);
    this.scene.rotate(-Math.PI/6,1,0,0);
    this.scene.translate(0,0.8,1);
   	this.glass.display();
   	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(0.8,0.63,0.8);
    this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.rotate(Math.PI,0,1,0);
    this.scene.translate(0.5,1.05,1.25);
		this.triangle.display();
   	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(-0.8,0.63,0.8);
    this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.rotate(Math.PI,0,1,0);
    this.scene.translate(0.5,1.05,1.25);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.scale(-1,1,1);
		this.triangle2.display();
   	this.scene.popMatrix();

	}
}
