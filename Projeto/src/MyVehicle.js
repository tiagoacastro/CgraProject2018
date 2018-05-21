class MyVehicle extends CGFobject
{

	initLights()
	{
		this.lights = [];
		this.lights.push(new CGFlight(this.scene,21));

		// Positions for headlights
		this.lights[0].setPosition(4, 6, 1, 1);
		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1,1,0,0);
		this.lights[0].setVisible(true);
		this.lights[0].enable();
	};

	constructor(scene)
	{
		super(scene);
		this.scene = scene;
		//Body constructor
		this.body = new MyUnitCubeQuad(scene, 0, 1, 0, 1);
		this.frontWheel = new MyWheel(scene);
		this.backWheel = new MyWheel(scene);
		this.windShield = new MyWindShield(scene);
		this.lamp = new MyLamp(scene,60,10);

		this.glassAppearance = new CGFappearance(this.scene);
    	this.glassAppearance.loadTexture("../resources/images/frosted_glass.jpg");
		this.glassAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
    	this.glassAppearance.setAmbient(0.3,0.3,0.3,1);
		this.glassAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.glassAppearance.setSpecular(0,0.2,0.8,1);
		this.glassAppearance.setShininess(120);

		this.appearance;

		this.x = 0;
		this.y =0;
		this.z = 0;

		this.speed = 0;
		this.rotateWheel = 0;
		this.wheelAngle = 0;

		this.carOrientation = 0;

		this.initLights();
	};

	setAppearance(appearance) {
		this.appearance = appearance;
	}

	update () {
	this.z = this.z + this.speed* Math.cos(this.carOrientation);
	this.x = this.x + this.speed* Math.sin(this.carOrientation);
	this.rotateWheel = this.rotateWheel + 2*this.speed;
	this.frontWheel.setRotateWheel(this.rotateWheel);
	this.backWheel.setRotateWheel(this.rotateWheel);

	if (this.wheelAngle > 0)
	this.wheelAngle -= 0.01;
	else if (this.wheelAngle < 0)
	this.wheelAngle += 0.01;

	this.frontWheel.setAngle(this.wheelAngle);
	this.last = this.carOrientation;
	this.carOrientation = this.carOrientation + (this.speed * this.wheelAngle)/5.0;
	};

	moveForward(){
		if (this.speed <0.75)
		this.speed = this.speed + 0.0125;
	}

	moveBackward(){
		if (this.speed > -0.75)
	this.speed = this.speed - 0.0125;
	}

	moveLeft(){
		if (this.wheelAngle+0.1 <= 1.04 && this.wheelAngle+0.1 >= -1.04){ //60 degrees
	this.wheelAngle = this.wheelAngle + 0.1;
	this.frontWheel.setAngle(this.wheelAngle);
		}
	}

	moveRight(){
		if (this.wheelAngle-0.1 <= 1.04 && this.wheelAngle-0.1 >= -1.04){ //60 degrees
	this.wheelAngle = this.wheelAngle - 0.1;
	this.frontWheel.setAngle(this.wheelAngle);
		}
	}

	display() {

		this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
		this.scene.rotate(this.carOrientation,0,1,0);
		
		this.scene.pushMatrix();
		this.scene.scale(0.25,0.25,0.23);
		this.scene.translate(2.5,1,8);
		this.lamp.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(0.25,0.25,0.23);
		this.scene.translate(-2.5,1,8);
		this.lamp.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
    	this.scene.scale(2.5,1.5,4);
		this.scene.vehicleAppearances[this.appearance].apply();
   		this.body.display();
    	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(1,-0.68,1);
		this.scene.rotate(1.57,0,1,0);
    	this.frontWheel.display();
    	this.scene.popMatrix();

    	this.scene.pushMatrix();
		this.scene.translate(-1.5,-0.68,1);
		this.scene.rotate(1.57,0,1,0);
   		this.frontWheel.display();
    	this.scene.popMatrix();

    	this.scene.pushMatrix();
		this.scene.translate(1,-0.68,-1);
		this.scene.rotate(1.57,0,1,0);
    	this.backWheel.display();
    	this.scene.popMatrix();

     	this.scene.pushMatrix();
		this.scene.translate(-1.5,-0.68,-1);
		this.scene.rotate(1.57,0,1,0);
    	this.backWheel.display();
    	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0,0.2);
		this.scene.scale(1,1.3,1);
		this.scene.translate(0,-0.2,0);
    	this.glassAppearance.apply();
   		this.windShield.display();
   		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(1,1.3,1);
		this.scene.translate(0,-0.2,0);
   	 	this.scene.scale(2,0.87,2);
		this.scene.translate(0,1,-0.2);
		this.scene.vehicleAppearances[this.appearance].apply();
   		this.body.display();
    	this.scene.popMatrix();

		this.scene.popMatrix();

	}
}
