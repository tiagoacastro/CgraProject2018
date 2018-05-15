class MyVehicle extends CGFobject
{
	constructor(scene)
	{
		super(scene);

		//Body constructor
		this.body = new MyUnitCubeQuad(scene);
		this.wheel = new MyWheel(scene);

		this.initBuffers();
	};

  initBuffers()
	{

	};

	display() {

	this.scene.pushMatrix();
    this.scene.scale(2.5,1.5,4);
    this.body.display();
    this.scene.popMatrix();
	
	this.scene.pushMatrix();
	this.scene.translate(1,-0.75,1);
	this.scene.rotate(1.57,0,1,0)
    this.wheel.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
	this.scene.translate(1,-0.75,-1);
	this.scene.rotate(1.57,0,1,0)
    this.wheel.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
	this.scene.translate(-1.5,-0.75,1);
	this.scene.rotate(1.57,0,1,0)
    this.wheel.display();
    this.scene.popMatrix();

     this.scene.pushMatrix();
	this.scene.translate(-1.5,-0.75,-1);
	this.scene.rotate(1.57,0,1,0)
    this.wheel.display();
    this.scene.popMatrix();

	}
}
