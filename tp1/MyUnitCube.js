/**
* MyObject
* @param gl {WebGLRenderingContext}
* @constructor
*/

class MyUnitCube extends CGFobject
{
  constructor(scene) {
    super(scene);
    this.initBuffers();
  };

  initBuffers() {
    this.vertices = [
      -0.5, -0.5, -0.5,
      -0.5, 0.5, -0.5,
      0.5, -0.5, -0.5,
      0.5, 0.5, -0.5,

      -0.5, -0.5, 0.5,
      -0.5, 0.5, 0.5,
      0.5, -0.5, 0.5,
      0.5, 0.5, 0.5,
    ];

    this.indices = [
      2, 1, 0,
      1, 2, 3,

      6, 5, 4,
      5, 6 , 7,

      2, 7, 6,
      2, 3, 7,

      0, 5, 4,
      0, 1, 5

    ];

    this.primitiveType=this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  };
};
