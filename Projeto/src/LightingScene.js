var degToRad = Math.PI / 180.0;

class LightingScene extends CGFscene
{
	constructor()
	{
		super();
	};

	checkKeys() {
		var text="Keys pressed: ";
		var keysPressed=false;
		if (this.gui.isKeyPressed("KeyW")){
			text+=" W ";
			keysPressed=true;
			this.vehicle.moveForward();
		}
		if (this.gui.isKeyPressed("KeyS")){
			text+=" S ";
			keysPressed=true;
			this.vehicle.moveBackward();
		}
		if (this.gui.isKeyPressed("KeyA")){
			text+=" A ";
			keysPressed=true;
			console.log(this.vehicle.x);

			this.vehicle.moveLeft();
		}
		if (this.gui.isKeyPressed("KeyD")){
			text+=" D ";
			keysPressed=true;
			this.vehicle.moveRight();
			console.log(this.vehicle.z);
		}
		if (this.gui.isKeyPressed("KeyG")){
			text+=" G ";
			keysPressed=true;
			if (this.vehicle.x >= -1 && this.vehicle.x <=1 && this.vehicle.z <= -8 && this.vehicle.z >=-10){ {}
			this.crane.animate(this.vehicle);
			this.vehicleGrab = 1;
			} else console.log("The car is not in the right position");
		}
		if (this.gui.isKeyPressed("KeyJ")){
			text+=" J ";
			keysPressed=true;
			this.crane.rotateDown();
		}
		if (keysPressed)
			console.log(text);
		};

	init(application)
	{
		super.init(application);

		this.initCameras();

		this.initLights();

		this.enableTextures(true);

		//this.option1=true; this.option2=false; this.speed=3;

		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		// Materials
		this.materialDefault = new CGFappearance(this);

		this.bodyAppearance = new CGFappearance(this);
   		this.bodyAppearance.loadTexture("../resources/images/stoneBrickMinecraft.png");
		this.bodyAppearance.setTextureWrap("REPEAT", "REPEAT");
		this.bodyAppearance.setAmbient(0.3,0.3,0.3,1);
		this.bodyAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.bodyAppearance.setSpecular(0,0.2,0.8,1);
		this.bodyAppearance.setShininess(120);

		this.fireAppearance = new CGFappearance(this);
   		this.fireAppearance.loadTexture("../resources/images/fire.png");
		//this.fireAppearance.setTextureWrap("REPEAT", "REPEAT");
		this.fireAppearance.setAmbient(0.3,0.3,0.3,1);
		this.fireAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.fireAppearance.setSpecular(0,0.2,0.8,1);
		this.fireAppearance.setShininess(120);

		this.vehicle = new MyVehicle(this);
		this.vehicleGrab = 0;
		this.terrain = new MyTerrain(this);
		this.crane = new MyCrane(this);

		this.light0 = true;
		this.light1= true;
		this.light2 = true;
		this.light3 = true;

		this.axisOn = false;

		this.vehicleAppearances = [this.materialDefault,this.bodyAppearance, this.fireAppearance];
		this.currVehicleAppearance = 0;

		this.axisDisplay = function(){
		this.axisOn = !(this.axisOn);
		};

		this.setUpdatePeriod(100);
	};

	initCameras()
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights()
	{
		this.setGlobalAmbientLight(0.5,0.5,0.5, 1.0);

		// Positions for four lights
		this.lights[0].setPosition(4, 6, 1, 1);
		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1,1,0,0);
		this.lights[0].enable();

		this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1,1,0,0);
		this.lights[1].enable();

		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1,1,0,0);
		this.lights[2].enable();

		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1,1,0,0);
		this.lights[3].enable();
	};

	update(currTime) {
		this.checkKeys();
		this.vehicle.update();
		this.crane.update();
		this.terrain.update();
	}

	updateLights()
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}

	setVehicle(vehicle){
		this.vehicle = vehicle;
		this.vehicleGrab = 0;
	}

	display()
	{
		if(this.light0)
			this.lights[0].enable();
		else
			this.lights[0].disable();

		if(this.light1)
			this.lights[1].enable();
		else
			this.lights[1].disable();

		if(this.light2)
			this.lights[2].enable();
		else
			this.lights[2].disable();

		if(this.light3)
			this.lights[3].enable();
		else
			this.lights[3].disable();
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();
		this.update();

		// Draw axis
		if (this.axisOn)
		this.axis.display();

		this.pushMatrix();
		this.crane.display();
		this.popMatrix();

		if (this.vehicleGrab == 0) {
		this.pushMatrix();
		this.translate(0,1.2,0);
		this.vehicle.setAppearance(this.currVehicleAppearance);
		this.vehicle.display();
		this.popMatrix();
		}

		this.pushMatrix();
		this.rotate(-1.57,1,0,0);
		this.scale(50,50,1);
		this.terrain.display();
		this.popMatrix();

		this.materialDefault.apply();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section



		// ---- END Scene drawing section
	};
};
