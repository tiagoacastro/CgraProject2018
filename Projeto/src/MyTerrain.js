class MyTerrain extends Plane
{
	constructor(scene)
	{
		super(scene,8,0,10,0,10);

		this.terrainAppearance = new CGFappearance(this.scene);
    	this.terrainAppearance.loadTexture("../resources/images/grassMinecraft.png");
		//this.terrainAppearance.setTextureWrap("REPEAT", "REPEAT");

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
		[ 0.0 , 0.0 , 2.0, 4.0, 2.5, 2.4, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 2.0, 4.0, 3.5, 2.4, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , -2.0, -4.0, -2.5, -2.4, 0.0, 0.0 ],
		[ -2.0 , -3.0 , -2.0, -1.0, -2.5, -2.4, -2.3, -1.3 ]
		];

		this.applyAltimetry();
	};

	display() {

		this.scene.pushMatrix();
		this.terrainAppearance.apply();
		this.scene.translate(this.x, this.y, this.z);
		super.display();
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
