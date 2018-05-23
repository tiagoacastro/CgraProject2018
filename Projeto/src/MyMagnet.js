class MyMagnet extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);

		this.secCylinder = new MyWheel(this.scene,0);
		this.wire = new MyCylinder(this.scene, 20,1);
		this.metal = new MyWheel(this.scene,0);
		this.tube = new MyUnitCubeQuad(this.scene);

		this.rotateV = 0;

	};

	setRotateV(rotateV) {
		this.rotateV = rotateV;
	}


	display() {

		this.scene.pushMatrix();
		this.scene.rotate(this.rotateV,0,0,1);

		this.scene.pushMatrix();
       
		this.secCylinder.display();
        this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.translate(2.2,0,0.25);
        this.scene.scale(3.5,0.6,0.6);
        this.tube.display();
        this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(4,-0,0.25);
	    this.scene.rotate(-this.rotateV,0,0,1);
	    this.scene.rotate(Math.PI/2.0,1,0,0);
	   	
	    this.scene.pushMatrix();
	    this.scene.translate(0,0,1);
	    this.scene.scale(2,2,0.5);
	    this.metal.display();
	    this.scene.popMatrix();

	    
	    this.scene.scale(0.05,0.05,1);
	    this.wire.display();
	    this.scene.popMatrix();

	    this.scene.popMatrix();

	}
}
