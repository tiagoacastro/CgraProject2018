/**
 * MyCrane
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCrane extends CGFobject
{
	constructor(scene, slices)
	{
		super(scene);

		this.base = new MyWheel(this.scene,0);
		this.first = new MyUnitCubeQuad(this.scene);
		this.magnet = new MyMagnet(this.scene);
		
		this.rotateCar = 0;
		this.rotateH = 0;
		this.rotateV = 0;
		this.currState = 0;
		this.carInPlace = false;

		this.craneAppearance = new CGFappearance(this.scene);
    	this.craneAppearance.loadTexture("../resources/images/crane.png");
		this.craneAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
    	this.craneAppearance.setAmbient(0.3,0.3,0.3,1);
		this.craneAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.craneAppearance.setSpecular(0,0.2,0.8,1);
		this.craneAppearance.setShininess(120);
	};

	rotatePickedUpCar() {
		
		if(this.rotateCar <= 3.0)
			this.rotateCar -=0.025
	}

	rotateToPickUpSide() {
		this.rotateH = this.rotateH + 0.025;

		if (this.rotateH >= 3.0)
			this.currState = 2;
	}

	rotateBack() {
		this.rotateH = this.rotateH - 0.025;

		this.rotatePickedUpCar();

		if (this.rotateH <= 0.0)
			this.currState = 5;
	}

	rotateDown(){
		if(this.rotateV >= -Math.PI/3.5)
		this.rotateV -= Math.PI/90.0;
		else this.currState = 3;
	}

	rotateUp(){
		if(this.rotateV <= 0)
		this.rotateV += Math.PI/90.0;
		else {
			this.currState = 0;
			this.rotateH = 0;
			this.rotateCar = 0;
			this.carInPlace = false;
		
		}
	}

	animate(vehicle){
		this.scene.vehicle = vehicle;
		this.currState = 1;
	}

	vehicleToMagnet() {
		this.scene.vehicle.setY(1);
		this.currState = 4;
	}

	vehicleToGround() {
		this.scene.vehicle.setY(0);
		if (!this.carInPlace) {
			this.scene.vehicle.carOrientation -= Math.PI;
			this.carInPlace = true;
			this.scene.vehicleGrab = 0;
		}
	}

	update() {
		this.magnet.setRotateV(this.rotateV);
		switch( this.currState ){
			
			case 1:
				this.rotateToPickUpSide();
				break;

			case 2 : 
				this.rotateDown();
    			break;

    		case 3 :
    			this.vehicleToMagnet();
    			break;

    		case 4:
    			this.rotateBack();
    			break;
			case 5:
				this.vehicleToGround();
				this.scene.vehicle.x = (Math.sin((Math.PI/8.0 )*7)+4.5)*2;
    			this.scene.lock = false;
    			this.rotateUp();
    			break;
  			default :
		}
	}

  	display() {
		
		this.scene.pushMatrix();
		this.scene.translate(5,1,-10);
		this.scene.rotate(this.rotateH,0,1,0);
		this.scene.translate(-5,-1,10);

  	    this.scene.pushMatrix();
        this.scene.translate(5,1,-10);
		this.scene.rotate(Math.PI/2.0,1,0,0);
        this.base.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(6.2,4,-10);
        this.scene.rotate(-Math.PI /8.0, 0,0,1);
        this.scene.scale(0.6,7,0.6);
        this.craneAppearance.apply();
        this.first.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(7.8,7.6,-10.2);
        this.magnet.display();
        this.scene.popMatrix();

			if(this.currState == 3) {
				this.scene.popMatrix();
				this.scene.pushMatrix();
				this.scene.translate(5,1,-10);
				this.scene.rotate(this.rotateCar,0,1,0);
				this.scene.translate(-5,-1,10);
				this.scene.vehicle.display();
        	} else if (this.currState != 0 && this.currState !=5) {
        		this.scene.popMatrix();
        		this.scene.pushMatrix();
				this.scene.translate(0,1.2,0);
				this.scene.translate(5,1,-10);
				this.scene.rotate(this.rotateCar,0,1,0);
				this.scene.translate(-5,-1,10);
				this.scene.vehicle.display();
        	}	
	this.scene.popMatrix();
  	}
}
