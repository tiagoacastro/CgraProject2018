class MyVehicle extends CGFobject
{

	constructor(scene)
	{
		super(scene);

		//Body constructor
		this.body = new MyUnitCubeQuad(scene, 0, 1, 0, 1);
		this.wheel = new MyWheel(scene);
		this.windShield = new MyWindShield(scene);

		this.bodyAppearance = new CGFappearance(this.scene);
   	this.bodyAppearance.loadTexture("../resources/images/stoneBrickMinecraft.png");
		this.bodyAppearance.setTextureWrap("REPEAT", "REPEAT");
		this.bodyAppearance.setAmbient(0.3,0.3,0.3,1);
		this.bodyAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.bodyAppearance.setSpecular(0,0.2,0.8,1);
		this.bodyAppearance.setShininess(120);

		this.glassAppearance = new CGFappearance(this.scene);
    this.glassAppearance.loadTexture("../resources/images/frosted_glass.jpg");
		this.glassAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
    this.glassAppearance.setAmbient(0.3,0.3,0.3,1);
		this.glassAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.glassAppearance.setSpecular(0,0.2,0.8,1);
		this.glassAppearance.setShininess(120);

		this.x = 0;
		this.y =0;
		this.z = 0;

		this.rotateWheel = 0;
	};

	update (speed) {

	this.z = this.z + speed;

	this.rotateWheel = this.rotateWheel + 2*speed;

	};

	display() {

		this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);

		this.scene.pushMatrix();
    	this.scene.scale(2.5,1.5,4);
		this.bodyAppearance.apply();
   		this.body.display();
    	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1,-0.75,1);
		this.scene.rotate(1.57,0,1,0);
		this.scene.rotate(this.rotateWheel,0,0,1);
    	this.wheel.display();
    	this.scene.popMatrix();

    	this.scene.pushMatrix();
		this.scene.translate(1,-0.75,-1);
		this.scene.rotate(1.57,0,1,0);
		this.scene.rotate(this.rotateWheel,0,0,1);
    	this.wheel.display();
    	this.scene.popMatrix();

    	this.scene.pushMatrix();
		this.scene.translate(-1.5,-0.75,1);
		this.scene.rotate(1.57,0,1,0);
		this.scene.rotate(this.rotateWheel,0,0,1);
   		this.wheel.display();
    	this.scene.popMatrix();

     	this.scene.pushMatrix();
		this.scene.translate(-1.5,-0.75,-1);
		this.scene.rotate(1.57,0,1,0);
		this.scene.rotate(this.rotateWheel,0,0,1);
    	this.wheel.display();
    	this.scene.popMatrix();

		this.scene.pushMatrix();
		/*this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.scale(0.8,1.2,2);
		this.scene.translate(1,0.2,-0.5);*/
		/*this.scene.scale(2,0.8,1.8);
    this.scene.rotate(-Math.PI/6,1,0,0);
    this.scene.translate(0,0.8,1);*/
    this.glassAppearance.apply();
   	this.windShield.display();
   	this.scene.popMatrix();

		this.scene.popMatrix();

	}
}
