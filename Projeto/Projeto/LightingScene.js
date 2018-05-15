var degToRad = Math.PI / 180.0;

class LightingScene extends CGFscene
{
	constructor()
	{
		super();
	};
	
	init(application)
	{
		super.init(application);

		this.initCameras();

		this.initLights();

		//this.option1=true; this.option2=false; this.speed=3;

		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		// Materials
		this.materialDefault = new CGFappearance(this);

		this.vehicle = new MyVehicle(this);
		this.terrain = new MyTerrain(this);

		this.light0 = true;
		this.light1= true;
		this.light2 = true;
		this.light3 = true;

		this.axisOn = false;

		this.axisDisplay = function(){
		this.axisOn = !(this.axisOn);
		};
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
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)

		this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)
		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].enable();

		this.lights[0].setSpecular(1,1,0,0);

		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].enable();
	};

	updateLights()
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}

	doSomething() {
		console.log("Doing something...");
	};


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

		// Draw axis
		if (this.axisOn)
		this.axis.display();
		
		this.pushMatrix();
		this.translate(0,1.2,0);
		this.vehicle.display();
		this.popMatrix();
		/*
		this.pushMatrix();
		this.rotate(-1.57,1,0,0);
		this.scale(50,50,1);
		this.terrain.display();
		this.popMatrix();
		*/

		this.materialDefault.apply();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section



		// ---- END Scene drawing section
	};
};
