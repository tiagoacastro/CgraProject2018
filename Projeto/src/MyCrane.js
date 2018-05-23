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
		this.first = new MyPrism(this.scene,4,1);
		this.magnet = new MyMagnet(this.scene);
		this.vehicle = 0;
		
		this.rotateCar = 0;
		this.rotateH = 0;
		this.rotateV = 0;
		this.currState = 0;
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
		if(this.rotateV >= -Math.PI/3.0)
		this.rotateV -= Math.PI/90.0;
		else this.currState = 3;
	}

	animate(vehicle){
		this.vehicle = vehicle;
		this.currState = 1;
	}

	vehicleToMagnet() {
		this.vehicle.setY(2.8);
		this.vehicle.carOrientation = Math.PI/2.0;

		this.currState = 4;
	}

	vehicleToGround() {
		this.vehicle.setY(0);
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
    			this.scene.setVehicle(this.vehicle);
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
        this.scene.translate(4.95,0.8,-10);
        this.scene.rotate(-Math.PI /2.0, 1,0,0);
        this.scene.rotate(Math.PI /8.0, 0,1,0);
        this.scene.scale(0.3,0.3,7);
        this.first.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(7.8,7.6,-10.2);
        this.magnet.display();
        this.scene.popMatrix();
		
		if(this.vehicle != 0){

			if(this.currState == 3) {
				this.scene.popMatrix();
				this.scene.pushMatrix();
				this.scene.translate(5,1,-10);
				this.scene.rotate(this.rotateCar,0,1,0);
				this.scene.translate(-5,-1,10);
				this.vehicle.display();
        	} else {
        		this.scene.popMatrix();
        		this.scene.pushMatrix();
				this.scene.translate(0,1.2,0);
				this.scene.translate(5,1,-10);
				this.scene.rotate(this.rotateCar,0,1,0);
				this.scene.translate(-5,-1,10);
				this.vehicle.display();
        	}	
  		}
	this.scene.popMatrix();
  	}
}
