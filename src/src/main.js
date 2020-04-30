// MultiJointModel.js (c) 2012 matsuda and itami

class Node {
  constructor(x, y, z, x_rot, y_rot, z_rot) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._x_rot = x_rot;
    this._y_rot = y_rot;
    this._z_rot = z_rot;
    // empty children array
    this._children = [];
    // default empty draw function
    this.draw = function() {
      return;
    }
  }

  render(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix) {
    pushMatrix(g_modelMatrix)
      g_modelMatrix.translate(this._x, this._y, this._z);
      g_modelMatrix.rotate(this._x_rot, 1.0, 0.0, 0.0);
      g_modelMatrix.rotate(this._y_rot, 0.0, 1.0, 0.0);
      g_modelMatrix.rotate(this._z_rot, 0.0, 0.0, 1.0);
        pushMatrix(g_modelMatrix)
          this.draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
        g_modelMatrix = popMatrix();
      for(n of this._children){
        n.render(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
      }
    g_modelMatrix = popMatrix();
      
  }


  add_child(node){
    this._children.push(node);
  }


  setDraw(func){
    this.draw = func;
  }
}


let w_node = new Node(0, 0, 0, 0, 0, 0);
//let floor = new Node(0, 0, 0, 0, 0, 0);
//w_node.add_child(floor);
//let back_wall = new Node(0, 0, -250, 0, 0, 0);
//w_node.add_child(back_wall);



let table = new Node(0, 0, 0, 0, 0, 0);
w_node.add_child(table);
let table_base = new Node(0, 0, 0, 0, 0, 0);
table.add_child(table_base);
let table_r_panel = new Node(10, 13, 0, 0, 0, 0);
table_base.add_child(table_r_panel);
let table_l_panel = new Node(-10, 13, 0, 0, 0, 0);
table_base.add_child(table_l_panel);


let chair1 = new Node(11, 7.5, -10,0,0,0);
let chair1_b_l_leg = new Node(-4.5, -7.5, -4.5, 0, 0, 0);
let chair1_b_r_leg = new Node(4.5, -7.5, -4.5, 0, 0, 0);
let chair1_f_l_leg = new Node(-4.5, -7.5, 4.5, 0, 0 , 0);
let chair1_f_r_leg = new Node(4.5, -7.5, 4.5, 0, 0, 0);
chair1.add_child(chair1_b_l_leg);
chair1.add_child(chair1_b_r_leg);
chair1.add_child(chair1_f_l_leg);
chair1.add_child(chair1_f_r_leg);
let chair1_l_post = new Node(-4.5, 2, -4.5, 0, 0, 0);
let chair1_r_post = new Node(4.5, 2, -4.5, 0, 0, 0);
chair1.add_child(chair1_l_post);
chair1.add_child(chair1_r_post);
let chair1_back = new Node(4.5, 5, 0, 0, 0, 0);
chair1_l_post.add_child(chair1_back);
w_node.add_child(chair1);



let chair2 = new Node(-11, 7.5, -10,0,10,0);
let chair2_b_l_leg = new Node(-4.5, -7.5, -4.5, 0, 0, 0);
let chair2_b_r_leg = new Node(4.5, -7.5, -4.5, 0, 0, 0);
let chair2_f_l_leg = new Node(-4.5, -7.5, 4.5, 0, 0 , 0);
let chair2_f_r_leg = new Node(4.5, -7.5, 4.5, 0, 0, 0);
chair2.add_child(chair2_b_l_leg);
chair2.add_child(chair2_b_r_leg);
chair2.add_child(chair2_f_l_leg);
chair2.add_child(chair2_f_r_leg);
let chair2_l_post = new Node(-4.5, 2, -4.5, 0, 0, 0);
let chair2_r_post = new Node(4.5, 2, -4.5, 0, 0, 0);
chair2.add_child(chair2_l_post);
chair2.add_child(chair2_r_post);
let chair2_back = new Node(4.5, 5, 0, 0, 0, 0);
chair2_l_post.add_child(chair2_back);
w_node.add_child(chair2);



let chair3 = new Node(15, 7.5, 10,0,180,0);
let chair3_b_l_leg = new Node(-4.5, -7.5, -4.5, 0, 0, 0);
let chair3_b_r_leg = new Node(4.5, -7.5, -4.5, 0, 0, 0);
let chair3_f_l_leg = new Node(-4.5, -7.5, 4.5, 0, 0 , 0);
let chair3_f_r_leg = new Node(4.5, -7.5, 4.5, 0, 0, 0);
chair3.add_child(chair3_b_l_leg);
chair3.add_child(chair3_b_r_leg);
chair3.add_child(chair3_f_l_leg);
chair3.add_child(chair3_f_r_leg);
let chair3_l_post = new Node(-4.5, 2, -4.5, 0, 0, 0);
let chair3_r_post = new Node(4.5, 2, -4.5, 0, 0, 0);
chair3.add_child(chair3_l_post);
chair3.add_child(chair3_r_post);
let chair3_back = new Node(4.5, 5, 0, 0, 0, 0);
chair3_l_post.add_child(chair3_back);
w_node.add_child(chair3);



let chair4 = new Node(-10, 7.5, 10,0,190,0);
let chair4_b_l_leg = new Node(-4.5, -7.5, -4.5, 0, 0, 0);
let chair4_b_r_leg = new Node(4.5, -7.5, -4.5, 0, 0, 0);
let chair4_f_l_leg = new Node(-4.5, -7.5, 4.5, 0, 0 , 0);
let chair4_f_r_leg = new Node(4.5, -7.5, 4.5, 0, 0, 0);
chair4.add_child(chair4_b_l_leg);
chair4.add_child(chair4_b_r_leg);
chair4.add_child(chair4_f_l_leg);
chair4.add_child(chair4_f_r_leg);
let chair4_l_post = new Node(-4.5, 2, -4.5, 0, 0, 0);
let chair4_r_post = new Node(4.5, 2, -4.5, 0, 0, 0);
chair4.add_child(chair4_l_post);
chair4.add_child(chair4_r_post);
let chair4_back = new Node(4.5, 5, 0, 0, 0, 0);
chair4_l_post.add_child(chair4_back);
w_node.add_child(chair4);



// Vertex shader program
var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'attribute vec4 a_Normal;\n' +
  'uniform mat4 u_MvpMatrix;\n' +
  'uniform mat4 u_NormalMatrix;\n' +
  'varying vec4 v_Color;\n' +
  'void main() {\n' +
  '  gl_Position = u_MvpMatrix * a_Position;\n' +
  // Shading calculation to make the arm look three-dimensional
  '  vec3 lightDirection = normalize(vec3(0.0, 0.5, 0.7));\n' + // Light direction
  '  vec4 color = vec4(1.0, 0.4, 0.0, 1.0);\n' +  // Robot color
  '  vec3 normal = normalize((u_NormalMatrix * a_Normal).xyz);\n' +
  '  float nDotL = max(dot(normal, lightDirection), 0.0);\n' +
  '  v_Color = vec4(color.rgb * nDotL + vec3(0.1), color.a);\n' +
  '}\n';

// Fragment shader program
var FSHADER_SOURCE =
  '#ifdef GL_ES\n' +
  'precision mediump float;\n' +
  '#endif\n' +
  'varying vec4 v_Color;\n' +
  'void main() {\n' +
  '  gl_FragColor = v_Color;\n' +
  '}\n';


function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // Set the vertex information
  var n = initVertexBuffers(gl);
  if (n < 0) {
    console.log('Failed to set the vertex information');
    return;
  }

  // Set the clear color and enable the depth test
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);

  // Get the storage locations of uniform variables
  var u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
  var u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');
  if (!u_MvpMatrix || !u_NormalMatrix) {
    console.log('Failed to get the storage location');
    return;
  }

  // Calculate the view projection matrix
  var viewProjMatrix = new Matrix4();
  viewProjMatrix.setPerspective(50.0, canvas.width / canvas.height, 1.0, 1000.0);
  viewProjMatrix.lookAt(0.0, 50.0, 150.0, 0.0, 0.0, -125.0, 0.0, 1.0, 0.0);

  // Register the event handler to be called on key press
  document.onkeydown = function(ev){ keydown(ev, gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, w_node); };


  //floor.setDraw(() => {
    //drawBox(gl, n, 500, -1, 500, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
  //});

  //back_wall.setDraw(() => {
    //drawBox(gl, n, 500, 500, -1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
  //});


  // geometry for table base
  table_l_panel.setDraw(() => {
    drawBox(gl, n, 15, 2, 20, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
  });
  table_base.setDraw(()=> {
    drawBox(gl, n, 5, 15, 20, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
  });

  table_r_panel.setDraw(() => {
    drawBox(gl, n, 15, 2, 20, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
  });

  draw_chairs(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);






  //This is where we render world
　draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, w_node);
}


function draw_chairs(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix){
  let chair_base = () => {
    drawBox(gl, n, 10, 2, 10, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
  };
  let chair_leg = () => {
    drawBox(gl, n, 1, 7.5, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
  };
  let chair_post = () => {
    drawBox(gl, n, 1, 10, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
  };
  let chair_back = () => {
    drawBox(gl, n, 8, 3, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix)
  };

  chair1.setDraw(chair_base);
  chair1_b_l_leg.setDraw(chair_leg);
  chair1_b_r_leg.setDraw(chair_leg);
  chair1_f_l_leg.setDraw(chair_leg);
  chair1_f_r_leg.setDraw(chair_leg);
  chair1_l_post.setDraw(chair_post);
  chair1_r_post.setDraw(chair_post);
  chair1_back.setDraw(chair_back);


  chair2.setDraw(chair_base);
  chair2_b_l_leg.setDraw(chair_leg);
  chair2_b_r_leg.setDraw(chair_leg);
  chair2_f_l_leg.setDraw(chair_leg);
  chair2_f_r_leg.setDraw(chair_leg);
  chair2_l_post.setDraw(chair_post);
  chair2_r_post.setDraw(chair_post);
  chair2_back.setDraw(chair_back);


  chair3.setDraw(chair_base);
  chair3_b_l_leg.setDraw(chair_leg);
  chair3_b_r_leg.setDraw(chair_leg);
  chair3_f_l_leg.setDraw(chair_leg);
  chair3_f_r_leg.setDraw(chair_leg);
  chair3_l_post.setDraw(chair_post);
  chair3_r_post.setDraw(chair_post);
  chair3_back.setDraw(chair_back);


  chair4.setDraw(chair_base);
  chair4_b_l_leg.setDraw(chair_leg);
  chair4_b_r_leg.setDraw(chair_leg);
  chair4_f_l_leg.setDraw(chair_leg);
  chair4_f_r_leg.setDraw(chair_leg);
  chair4_l_post.setDraw(chair_post);
  chair4_r_post.setDraw(chair_post);
  chair4_back.setDraw(chair_back);
}


//var ANGLE_STEP = 3.0;     // The increments of rotation angle (degrees)
//var g_arm1Angle = 90.0;   // The rotation angle of arm1 (degrees)
//var g_joint1Angle = 45.0; // The rotation angle of joint1 (degrees)
//var g_joint2Angle = 0.0;  // The rotation angle of joint2 (degrees)
//var g_joint3Angle = 0.0;  // The rotation angle of joint3 (degrees)

function keydown(ev, gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, world_node) {
  //draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, world_node);
}

function initVertexBuffers(gl) {
  // Coordinates（Cube which length of one side is 1 with the origin on the center of the bottom)
  var vertices = new Float32Array([
    0.5, 1.0, 0.5, -0.5, 1.0, 0.5, -0.5, 0.0, 0.5,  0.5, 0.0, 0.5, // v0-v1-v2-v3 front
    0.5, 1.0, 0.5,  0.5, 0.0, 0.5,  0.5, 0.0,-0.5,  0.5, 1.0,-0.5, // v0-v3-v4-v5 right
    0.5, 1.0, 0.5,  0.5, 1.0,-0.5, -0.5, 1.0,-0.5, -0.5, 1.0, 0.5, // v0-v5-v6-v1 up
   -0.5, 1.0, 0.5, -0.5, 1.0,-0.5, -0.5, 0.0,-0.5, -0.5, 0.0, 0.5, // v1-v6-v7-v2 left
   -0.5, 0.0,-0.5,  0.5, 0.0,-0.5,  0.5, 0.0, 0.5, -0.5, 0.0, 0.5, // v7-v4-v3-v2 down
    0.5, 0.0,-0.5, -0.5, 0.0,-0.5, -0.5, 1.0,-0.5,  0.5, 1.0,-0.5  // v4-v7-v6-v5 back
  ]);

  // Normal
  var normals = new Float32Array([
    0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0,  0.0, 0.0, 1.0, // v0-v1-v2-v3 front
    1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0,  1.0, 0.0, 0.0, // v0-v3-v4-v5 right
    0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0, // v0-v5-v6-v1 up
   -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, // v1-v6-v7-v2 left
    0.0,-1.0, 0.0,  0.0,-1.0, 0.0,  0.0,-1.0, 0.0,  0.0,-1.0, 0.0, // v7-v4-v3-v2 down
    0.0, 0.0,-1.0,  0.0, 0.0,-1.0,  0.0, 0.0,-1.0,  0.0, 0.0,-1.0  // v4-v7-v6-v5 back
  ]);

  // Indices of the vertices
  var indices = new Uint8Array([
     0, 1, 2,   0, 2, 3,    // front
     4, 5, 6,   4, 6, 7,    // right
     8, 9,10,   8,10,11,    // up
    12,13,14,  12,14,15,    // left
    16,17,18,  16,18,19,    // down
    20,21,22,  20,22,23     // back
  ]);

  // Write the vertex property to buffers (coordinates and normals)
  if (!initArrayBuffer(gl, 'a_Position', vertices, gl.FLOAT, 3)) return -1;
  if (!initArrayBuffer(gl, 'a_Normal', normals, gl.FLOAT, 3)) return -1;

  // Unbind the buffer object
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  // Write the indices to the buffer object
  var indexBuffer = gl.createBuffer();
  if (!indexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

  return indices.length;
}

function initArrayBuffer(gl, attribute, data, type, num) {
  // Create a buffer object
  var buffer = gl.createBuffer();
  if (!buffer) {
    console.log('Failed to create the buffer object');
    return false;
  }
  // Write date into the buffer object
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  // Assign the buffer object to the attribute variable
  var a_attribute = gl.getAttribLocation(gl.program, attribute);
  if (a_attribute < 0) {
    console.log('Failed to get the storage location of ' + attribute);
    return false;
  }
  gl.vertexAttribPointer(a_attribute, num, type, false, 0, 0);
  // Enable the assignment of the buffer object to the attribute variable
  gl.enableVertexAttribArray(a_attribute);

  return true;
}

// Coordinate transformation matrix
var g_modelMatrix = new Matrix4(), g_mvpMatrix = new Matrix4();

function draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, world_node) {
  // Clear color and depth buffer
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  console.log('cleared');
  world_node.render(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix);
}

var g_matrixStack = []; // Array for storing a matrix
function pushMatrix(m) { // Store the specified matrix to the array
  var m2 = new Matrix4(m);
  g_matrixStack.push(m2);
}

function popMatrix() { // Retrieve the matrix from the array
  return g_matrixStack.pop();
}

var g_normalMatrix = new Matrix4();  // Coordinate transformation matrix for normals

// Draw rectangular solid
function drawBox(gl, n, width, height, depth, viewProjMatrix, u_MvpMatrix, u_NormalMatrix) {
    // Scale a cube and draw
    g_modelMatrix.scale(width, height, depth);
    // Calculate the model view project matrix and pass it to u_MvpMatrix
    g_mvpMatrix.set(viewProjMatrix);
    g_mvpMatrix.multiply(g_modelMatrix);
    gl.uniformMatrix4fv(u_MvpMatrix, false, g_mvpMatrix.elements);
    // Calculate the normal transformation matrix and pass it to u_NormalMatrix
    g_normalMatrix.setInverseOf(g_modelMatrix);
    g_normalMatrix.transpose();
    gl.uniformMatrix4fv(u_NormalMatrix, false, g_normalMatrix.elements);
    // Draw
    gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
}