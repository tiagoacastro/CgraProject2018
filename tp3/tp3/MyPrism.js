/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPrism extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);

    this.slices = slices;
    this.stacks = stacks;

		this.initBuffers();
	};
  /*
  let c = 0;
  for (var j = 0; j <= stacks; j++) {
    this.vertices.push(0, 0, j);
    for (var i = 0; i < slices; i++) {
          this.vertices.push(Math.cos(2 * Math.PI * i / slices), r * Math.sin(2 * Math.PI * i / slices), j);

          this.indices.push(1 + j + j*slices + i);
          c++;
          if(c == 2){
            this.indices.push(j);
            c=0;
          }
    }
  }
*/
	initBuffers()
	{

    this.vertices = [];
    this.indices = [];
    this.normals = [];

    let c = 0;
    for (var j = 0; j <= this.stacks; j++) {
      for (var i = 0; i < this.slices; i++) {
            this.vertices.push(Math.cos(2 * Math.PI * i / this.slices), Math.sin(2 * Math.PI * i / this.slices), j);
            this.vertices.push(Math.cos(2 * Math.PI * (i+1) / this.slices), Math.sin(2 * Math.PI * (i+1) / this.slices), j);

            this.normals.push(Math.cos((2 * Math.PI * i / this.slices + 2 * Math.PI * (i+1) / this.slices)/2), Math.sin((2 * Math.PI * i / this.slices + 2 * Math.PI * (i+1) / this.slices)/2), j);
            this.normals.push(Math.cos((2 * Math.PI * i / this.slices + 2 * Math.PI * (i+1) / this.slices)/2), Math.sin((2 * Math.PI * i / this.slices + 2 * Math.PI * (i+1) / this.slices)/2), j);
    }
  }

  var totalpontos = 2*this.stacks*this.slices;
  for (var i = 0; i < totalpontos ; i++) {
    this.indices.push(i , i + 1, i+1+this.slices*2);
    this.indices.push(i , i+this.slices*2, i+1+this.slices*2);
  }

		this.primitiveType=this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	};
};
