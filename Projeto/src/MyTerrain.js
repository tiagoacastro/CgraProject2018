class MyTerrain extends Plane
{
	constructor(scene)
	{
		super(scene,8,0,1,0,1);

		this.terrainAppearance = new CGFappearance(this.scene);
    this.terrainAppearance.loadTexture("../resources/images/terrain.png");
		this.terrainAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");

  	this.terrainAppearance.setAmbient(0.3,0.3,0.3,1);
		this.terrainAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.terrainAppearance.setSpecular(0,0.2,0.8,1);
		this.terrainAppearance.setShininess(120);

		this.x = 0;
		this.y = 0;
		this.z = 0;

		this.altimetry= [[ 2.0 , 3.0 , 2.0, 4.0, 2.5, 2.4, 2.3, 1.3 ],
		[ 2.0 , 3.0 , 2.0, 4.0, 7.5, 6.4, 4.3, 1.3 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 2.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 4.0, 2.0 ],
		[ 4.0 , 0.0 , 0.0, -5.0, 0.0, 0.0, 0.0, 6.0 ],
		[ 8.0 , 6.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]];

		this.water = new Plane(scene, 8, 0, 10, 0, 10);
		this.waterAppearance = new CGFappearance(this.scene);
		this.waterAppearance.loadTexture("../resources/images/water.jpg");
		this.waterAppearance.setTextureWrap("REPEAT", "REPEAT");
		this.waterAppearance.setAmbient(0.3,0.3,0.3,1);
		this.waterAppearance.setDiffuse(0.6,0.6,0.6,1);
		this.waterAppearance.setSpecular(0,0.2,0.8,1);
		this.waterAppearance.setShininess(120);

		this.rotation = 0;

		this.applyAltimetry();
	};

	update(){
		this.rotation = this.rotation + Math.PI/2056;
	}

	display() {

		this.scene.pushMatrix();
		this.terrainAppearance.apply();
		this.scene.translate(this.x, this.y, this.z);
		super.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.waterAppearance.apply();
		this.scene.scale(0.3, 0.3, 1);
		this.scene.translate(0.5, -0.9, -1);
		this.scene.rotate(this.rotation,0,0,1);
		this.water.display();
		this.scene.popMatrix();
	}

	applyAltimetry(){
		let c = 2;
		for (var i = 0; i < this.altimetry.length; i++) {
			for (var j = 0; j < this.altimetry[i].length; j++) {
				this.vertices[c] = this.altimetry[i][j];
				c+=3;
			}
		}
		super.initGLBuffers();
	}
}
