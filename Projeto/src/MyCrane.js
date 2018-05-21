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

		this.base = new MyCylinder(this.scene,30,1);
		this.first = new MyPrism(this.scene,4,1);
	};

  	display() {

  	    this.scene.pushMatrix();
        this.scene.translate(5,1,-10);
		this.scene.rotate(Math.PI/2.0,1,0,0);
        this.base.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,5,-10);
        this.scene.rotate(Math.PI /2.0, 1,0,0);
        this.scene.scale(0.5,0.5,5);
        this.first.display();
        this.scene.popMatrix();
  	}
}
