class MyIman extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);

		this.wire = new MyCylinder(this.scene, 20,1);
		this.metal = new MyWheel(this.scene,0);
		this.tube = new MyPrism(this.scene,4,1);

		this.rotateV = 0;

	};

	setRotateV(rotateV) {
		this.rotateV = rotateV;
	}


	display() {

		this.scene.pushMatrix();
		this.scene.rotate(this.rotateV,0,0,1);
		
		this.scene.pushMatrix();
        this.scene.rotate(Math.PI /2.0, 1,0,0);
        this.scene.rotate(Math.PI /4.0, 0,1,0);
        this.scene.scale(0.3,0.3,2);
        this.tube.display();
        this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(1.5,-1.2,0);
	    this.scene.rotate(Math.PI/2.0,1,0,0);
	   	this.scene.scale(0.05,0.05,1.5);
	    this.wire.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(1.5,-2.5,0)
	    this.scene.rotate(Math.PI/2.0,1,0,0);
	    this.scene.scale(1,1,0.5);
	    this.metal.display();
	    this.scene.popMatrix();

	}
}
