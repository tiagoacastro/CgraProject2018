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
		this.secCylinder = new MyWheel(this.scene,0);
		this.first = new MyPrism(this.scene,4,1);
		this.iman = new MyIman(this.scene);

		this.rotateH = 0;
		this.rotateV = 0;
	};

	rotateOtherSide() {
		this.rotateH += 0.1;
	}

	rotateDown(){
		this.rotateV += 0.1;
	}

	update() {
		this.iman.setRotateV(this.rotateV);
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
        this.scene.translate(5,1,-10);
        this.scene.rotate(-Math.PI /2.0, 1,0,0);
        this.scene.rotate(Math.PI /8.0, 0,1,0);
        this.scene.scale(0.3,0.3,5);
        this.first.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
       	this.scene.translate(7,6,-10.2);
		this.secCylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(7.3,5.7,-10.2);
        this.iman.display();
        this.scene.popMatrix();

		this.scene.popMatrix();

  	}
}
