class MyTerrain extends Plane
{
	constructor(scene)
	{
		super(scene,50,0,50,0);
		
		this.grassAppearance = new CGFappearance(this.scene);
    	this.grassAppearance.loadTexture("../resources/images/grass.png");
    
    	this.grassAppearance.setAmbient(0.3,0.3,0.3,1);
		this.grassAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.grassAppearance.setSpecular(0,0.2,0.8,1);
		this.grassAppearance.setShininess(120);

		this.x = 0;
		this.y = 0;
		this.z = 0;
	
	};

	display() {

		this.scene.pushMatrix();
		this.grassAppearance.apply();
		this.scene.translate(this.x, this.y, this.z);
		super.display();
		this.scene.popMatrix();
	}
}
