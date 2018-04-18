/**
 * MyClockHand
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClockHand extends CGFobject
{
	constructor(scene, radius, height)
	{
		super(scene);
    this.radius = radius;
    this.height = height;
    this.angle = 0;
		this.initBuffers();
	};

  	initBuffers()
	{
    this.pointer = new MyCylinder(this.scene,12,6);
    this.pointer.initBuffers();
 };

  setAngle(angle) {
    this.angle = angle;
  };

  getAngle() {
    return this.angle;
  }
  
    display()
    {
      this.scene.pushMatrix();
      this.scene.rotate(3*Math.PI/2,1,0,0);
      this.scene.rotate(this.angle*Math.PI/180,0,1,0);
      this.scene.scale(this.radius, this.radius, this.height);
      this.pointer.display();
      this.scene.popMatrix();
    }
}
