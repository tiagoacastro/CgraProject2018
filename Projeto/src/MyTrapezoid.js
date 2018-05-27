/**
 * MyTrapezoid
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTrapezoid extends CGFobject {

    constructor(scene, height, topWidth, baseWidth, topDepth, baseDepth, planeDivs) {
        super(scene);
        this.height = height || 1;
        this.topWidth = topWidth || 1;
        this.baseWidth = baseWidth || 1;
        this.topDepth = topDepth || 1;
        this.baseDepth = baseDepth || 1;
        this.planeDivs = planeDivs || 20;

        //angles used to calculate normals

        this.angleWidthFront = 0;
        this.angleWidthBack = 0;
        this.angleDepthRight = 0;
        this.angleDepthLeft = 0;

        if (this.topWidth <= this.baseWidth) {
            this.angleWidthFront = ((90 * Math.PI)/180) - Math.atan(this.height/((this.baseWidth-this.topWidth)/2));
            this.angleWidthBack = Math.PI - ((90 * Math.PI)/180) - Math.atan(this.height/((this.baseWidth-this.topWidth)/2));
        } else {
            this.angleWidthFront = -(((90 * Math.PI)/180) - Math.atan(this.height/((this.topWidth-this.baseWidth)/2)));
            this.angleWidthBack = -Math.PI + (((90 * Math.PI)/180) - Math.atan(this.height/((this.topWidth-this.baseWidth)/2)));
        }

        if (this.topDepth <= this.baseDepth) {
            this.angleDepthRight = ((90 * Math.PI)/180) - Math.atan(this.height/((this.baseDepth-this.topDepth)/2));
            this.angleDepthLeft = Math.PI - ((90 * Math.PI)/180) - Math.atan(this.height/((this.baseDepth-this.topDepth)/2));
        } else {
            this.angleDepthRight = -(((90 * Math.PI)/180) - Math.atan(this.height/((this.topDepth-this.baseDepth)/2)));
            this.angleDepthLeft = -Math.PI + (((90 * Math.PI)/180) - Math.atan(this.height/((this.topDepth-this.baseDepth)/2)));
        }

        this.xWidthFront = Math.cos(this.angleWidthFront);
        this.yWidthFront = Math.sin(this.angleWidthFront);
        this.xWidthBack = Math.cos(this.angleWidthBack);
        this.yWidthBack = Math.sin(this.angleWidthBack);
        this.zDepthRight = Math.cos(this.angleDepthRight);
        this.yDepthRight = Math.sin(this.angleDepthRight);
        this.zDepthLeft = Math.cos(this.angleDepthLeft);
        this.yDepthLeft = Math.sin(this.angleDepthLeft);



        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [];
        this.normals = [];
        this.texCoords = [];
        this.indices = [];

        //each vertex is shared by three faces, hence the duplicates

        this.vertices = [
            -this.topWidth/2, this.height/2, this.topDepth/2, //0 -> 0
            -this.topWidth/2, this.height/2, this.topDepth/2, //1 -> 0
            -this.topWidth/2, this.height/2, this.topDepth/2, //2 -> 0

            this.topWidth/2, this.height/2, this.topDepth/2, //3 -> 1
            this.topWidth/2, this.height/2, this.topDepth/2, //4 -> 1
            this.topWidth/2, this.height/2, this.topDepth/2, //5 -> 1

            this.baseWidth/2, -this.height/2, this.baseDepth/2, //6 -> 2
            this.baseWidth/2, -this.height/2, this.baseDepth/2, //7 -> 2
            this.baseWidth/2, -this.height/2, this.baseDepth/2, //8 -> 2

            -this.baseWidth/2, -this.height/2, this.baseDepth/2, //9 -> 3
            -this.baseWidth/2, -this.height/2, this.baseDepth/2, //10 -> 3
            -this.baseWidth/2, -this.height/2, this.baseDepth/2, //11 -> 3

            -this.topWidth/2, this.height/2, -this.topDepth/2, //12 -> 4
            -this.topWidth/2, this.height/2, -this.topDepth/2, //13 -> 4
            -this.topWidth/2, this.height/2, -this.topDepth/2, //14 -> 4

            this.topWidth/2, this.height/2, -this.topDepth/2, //15 -> 5
            this.topWidth/2, this.height/2, -this.topDepth/2, //16 -> 5
            this.topWidth/2, this.height/2, -this.topDepth/2, //17 -> 5

            this.baseWidth/2, -this.height/2, -this.baseDepth/2, //18 -> 6
            this.baseWidth/2, -this.height/2, -this.baseDepth/2, //19 -> 6
            this.baseWidth/2, -this.height/2, -this.baseDepth/2, //20 -> 6

            -this.baseWidth/2, -this.height/2, -this.baseDepth/2, //21 -> 7
            -this.baseWidth/2, -this.height/2, -this.baseDepth/2, //22 -> 7
            -this.baseWidth/2, -this.height/2, -this.baseDepth/2 //23 -> 7
        ];

        this.normals = [
            -this.xWidthBack, this.yWidthBack, 0, //0
            0, 1, 0, //1
            0, this.yDepthLeft, this.zDepthLeft, //2
            this.xWidthFront, this.yWidthFront, 0, //3
            0, 1, 0, //4
            0, this.yDepthLeft, this.zDepthLeft, //5
            this.xWidthFront, this.yWidthFront, 0, //6
            0, -1, 0, //7

            0, this.yDepthLeft, this.zDepthLeft, //8
            -this.xWidthFront, this.yWidthBack, 0, //9
            0, -1, 0, //10
            0, this.yDepthLeft, this.zDepthLeft, //11
            -this.xWidthBack, this.yWidthBack, 0, //12
            0, 1, 0, //13
            0, this.yDepthRight, -this.zDepthRight, //14
            this.xWidthFront, this.yWidthFront, 0, //15

            0, 1, 0, //16
            0, this.yDepthRight, -this.zDepthRight, //17
            this.xWidthFront, this.yWidthFront, 0, //18
            0, -1, 0, //19
            0, this.yDepthRight, -this.zDepthRight, //20
            -this.xWidthBack, this.yWidthBack, 0, //21
            0, -1, 0, //22
            0, this.yDepthRight, -this.zDepthRight //23
        ];

        this.indices = [
            //front
            3,6,18,
            3,18,15,

            //back
            21,9,0,
            12,21,0,

            //top
            1,4,16,
            1,16,13,

            //base
            19,7,10,
            22,19,10,

            //left
            2,8,5,
            11,8,2,

            //right
            17,20,14,
            14,20,23
        ];

        this.texCoords = [
            1,0, //0 -> 0
            0,0, //1
            0,0, //2
            0,0, //3 -> 1
            0,1, //4
            1,0, //5
            0,1, //6 -> 2
            1,0, //7 X
            1,1, //8
            1,1, //9 -> 3
            1,1, //10 X
            0,1, //11
            0,0, //12 -> 4
            1,0, //13
            1,0, //14
            1,0, //15 -> 5
            1,1, //16
            0,0, //17
            1,1, //18 -> 6
            0,0, //19 X
            0,1, //20
            0,1, //21 -> 7
            0,1, //22 X
            1,1 //23
        ];

        this.primitiveType=this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}