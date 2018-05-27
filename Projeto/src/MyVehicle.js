class MyVehicle extends CGFobject
{

	constructor(scene)
	{
		super(scene);
		this.scene = scene;

		//Body constructor
		this.body = new MyUnitCubeQuad(scene, 0, 1, 0, 1);
		this.frontWheel = new MyWheel(scene,1);
		this.backWheel = new MyWheel(scene,1);
		this.windShield = new MyWindShield(scene);
		this.lamp = new MyLamp(scene,60,10);
		this.trap = new MyTrapezoid(scene,0.5,0.1,0.4,1,1.2,10);
		this.licPlate = new MyQuad(scene);

		this.glassAppearance = new CGFappearance(this.scene);
    	this.glassAppearance.loadTexture("../resources/images/frosted_glass.jpg");
		this.glassAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
    	this.glassAppearance.setAmbient(0.3,0.3,0.3,1);
		this.glassAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.glassAppearance.setSpecular(0,0.2,0.8,1);
		this.glassAppearance.setShininess(120);

		this.plateAppearance = new CGFappearance(this.scene);
    	this.plateAppearance.loadTexture("../resources/images/licPlate.jpg");
		this.plateAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
    	this.plateAppearance.setAmbient(0.3,0.3,0.3,1);
		this.plateAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.plateAppearance.setSpecular(0,0.2,0.8,1);
		this.plateAppearance.setShininess(120);
		this.x = 0;
		this.y =0;
		this.z = 0;

		this.speed = 0;
		this.rotateWheel = 0;
		this.wheelAngle = 0;

		this.carOrientation = 0;
	};

	setAppearance(appearance) {
		this.appearance = appearance;
	}
	setY(y){
		this.y = y;
	}

	update () {
	this.z = this.z + this.speed* Math.cos(this.carOrientation);
	this.x = this.x + this.speed* Math.sin(this.carOrientation);
	this.rotateWheel = this.rotateWheel + 2*this.speed;
	this.frontWheel.setRotateWheel(this.rotateWheel);
	this.backWheel.setRotateWheel(this.rotateWheel);

	if (this.wheelAngle > 0)
	this.wheelAngle -= Math.PI/300.0;
	else if (this.wheelAngle < 0)
	this.wheelAngle += Math.PI/300.0;

	this.frontWheel.setAngle(this.wheelAngle);
	this.carOrientation = this.carOrientation + (this.speed * this.wheelAngle)/5.0;
	};

	moveForward(){
		if (this.speed <0.5)
			this.speed = this.speed + 50/10000;
	}

	moveBackward(){
		if (this.speed > -0.5)
			this.speed = this.speed - 50/10000;
	}

	moveLeft(){
		if (this.wheelAngle+ Math.PI/30.0  <= Math.PI/3.0 && this.wheelAngle + Math.PI/30.0 >= -Math.PI/3.0 ){ //60 degrees
	this.wheelAngle = this.wheelAngle + Math.PI/30.0;
	this.frontWheel.setAngle(this.wheelAngle);
		}
	}

	moveRight(){
		if (this.wheelAngle - Math.PI/30.0 <= Math.PI/3.0 && this.wheelAngle - Math.PI/30.0 >= - Math.PI/3.0){ //60 degrees
	this.wheelAngle = this.wheelAngle - Math.PI/30.0;
	this.frontWheel.setAngle(this.wheelAngle);
		}
	}

	display() {

		this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
		this.scene.rotate(this.carOrientation,0,1,0);
		
		this.scene.pushMatrix();
		this.scene.scale(0.25,0.25,0.22);
		this.scene.translate(2.5,-0.4,11);
		this.lamp.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(0.25,0.25,0.22);
		this.scene.translate(-2.5,-0.4,11);
		this.lamp.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
    	this.scene.scale(2.5,1,5.0);
    	this.scene.translate(0,-0.2,0);
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
		this.scene.scale(1,1.15,1);
		this.scene.translate(0,-0.2,0);
		this.scene.translate(0,-0.2,0);
    	this.glassAppearance.apply();
   		this.windShield.display();
   		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(1,1.3,1);
		this.scene.translate(0,-0.2,0);
   	 	this.scene.scale(2,0.75,2);
		this.scene.translate(0,1,-0.2);
		this.scene.translate(0,-0.2,0);
		this.scene.vehicleAppearances[this.appearance].apply();
   		this.body.display();
    	this.scene.popMatrix();
		
		this.scene.pushMatrix();
			this.scene.translate(1.3,0.3,1.5);
			this.scene.scale(0.1,0.05,0.05);
			this.body.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(-1.3,0.3,1.5);
			this.scene.scale(0.1,0.05,0.05);
			this.body.display();
		this.scene.popMatrix();

    	this.scene.pushMatrix();
    		this.scene.translate(1.5,0.4,1.5);
    		this.scene.rotate(Math.PI/2.0,0,1,0);
    		this.scene.scale(0.3,0.5,0.3);
    		this.glassAppearance.apply();
    		this.trap.display();
    	this.scene.popMatrix();

    	this.scene.pushMatrix();
    		this.scene.translate(-1.5,0.4,1.5);
    		this.scene.rotate(Math.PI/2.0,0,1,0);
    		this.scene.scale(0.3,0.5,0.3);
    		this.glassAppearance.apply();
    		this.trap.display();
    	this.scene.popMatrix();

    	this.scene.pushMatrix();
    		this.scene.translate(0,-0.1,-2.6);
    		this.scene.rotate(Math.PI,0,1,0);
    		this.scene.scale(1,0.5,1);
    		this.plateAppearance.apply();
    		this.licPlate.display();
    	this.scene.popMatrix();

		this.scene.popMatrix();

	}
}
