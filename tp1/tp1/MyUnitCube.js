/**
* MyUnitCube
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
      0, 1, 2,
      3, 2, 1,

      6, 5, 4,
      5, 6 , 7,

      2, 7, 6,
      2, 3, 7,

      4, 5, 0,
      5, 1, 0,

      5, 7, 1,
      7, 3, 1,

      0, 6, 4,
      0, 2, 6
    ];

    this.primitiveType=this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  };
};
