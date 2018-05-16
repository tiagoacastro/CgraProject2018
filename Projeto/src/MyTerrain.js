class MyTerrain extends Plane
{
	constructor(scene)
	{
		super(scene,50,0,10,0,10);

		this.terrainAppearance = new CGFappearance(this.scene);
    this.terrainAppearance.loadTexture("../resources/images/grassMinecraft.png");
		this.terrainAppearance.setTextureWrap("REPEAT", "REPEAT");

    this.terrainAppearance.setAmbient(0.3,0.3,0.3,1);
		this.terrainAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.terrainAppearance.setSpecular(0,0.2,0.8,1);
		this.terrainAppearance.setShininess(120);



		this.x = 0;
		this.y = 0;
		this.z = 0;

	};

	display() {

		this.scene.pushMatrix();
		this.terrainAppearance.apply();
		this.scene.translate(this.x, this.y, this.z);
		super.display();
		this.scene.popMatrix();
	}
}
