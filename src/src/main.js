// Node class for the scenegraph
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
let floor = new Node(-15, 0, 0, 0, 0, 0);
let wall_1 = new Node(-60.5, 0, 0, 0, 0, 0);
let wall_2 = new Node(0, 0, 50.5, 0, 0, 0);
let roof = new Node(0, 68, 0, 0, 0, 0);
floor.add_child(wall_1);
floor.add_child(wall_2);
floor.add_child(roof);
w_node.add_child(floor);




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



let sofa = new Node(-50, 2, -30, 0, 20, 0);
let sofa_b_l_leg = new Node(-19, -2, -6.5, 0, 0, 0);
let sofa_b_r_leg = new Node(19, -2, -6.5, 0, 0, 0);
let sofa_f_l_leg = new Node(-19, -2, 6.5, 0, 0, 0);
let sofa_f_r_leg = new Node(19, -2, 6.5, 0, 0, 0);
sofa.add_child(sofa_b_l_leg);
sofa.add_child(sofa_b_r_leg);
sofa.add_child(sofa_f_l_leg);
sofa.add_child(sofa_f_r_leg);
let sofa_m_cushion = new Node(0,6,0,0,0,0);
let sofa_r_cushion = new Node(13.5,6,0,0,0,0);
let sofa_l_cushion = new Node(-13.5,6,0,0,0,0);
sofa.add_child(sofa_m_cushion);
sofa.add_child(sofa_r_cushion);
sofa.add_child(sofa_l_cushion);
let sofa_back = new Node(0, 10, -7.5, -10, 0, 0);
sofa.add_child(sofa_back);
let sofa_left_arm = new Node(-20, 10, 0, 0, 0, 0);
let sofa_right_arm = new Node(20, 10, 0, 0, 0, 0);
sofa.add_child(sofa_left_arm);
sofa.add_child(sofa_right_arm);
w_node.add_child(sofa);

let drawers = new Node(-50, 2, 41.5, 0, 180, 0);
let drawers_l_panel = new Node(-18.5, -2, 0, 0, 0, 0);
let drawers_r_panel = new Node(18.5, -2, 0, 0, 0, 0);
drawers.add_child(drawers_l_panel);
drawers.add_child(drawers_r_panel);
let drawers_b_panel = new Node(0, -2, -7.5, 0, 0, 0);
drawers.add_child(drawers_b_panel);
let drawers_t_panel = new Node(0, 13, 0, 0, 0, 0);
drawers.add_child(drawers_t_panel);
let drawers_f_panel = new Node(0, 2, 5.5, 0, 0, 0);
drawers.add_child(drawers_f_panel);
let t_l_drawer = new Node(-9.5, 7, 1.5, 0, 0, 0);
let t_l_drawer_hndl = new Node(0, 1.5, 0.75, 0, 0, 0);
t_l_drawer.add_child(t_l_drawer_hndl);
drawers_f_panel.add_child(t_l_drawer);
let t_r_drawer = new Node(9.5, 7, 1.5, 0, 0, 0);
let t_r_drawer_hndl = new Node(0, 1.5, 0.75, 0, 0, 0);
t_r_drawer.add_child(t_r_drawer_hndl);
drawers_f_panel.add_child(t_r_drawer);
let b_l_drawer = new Node(-9.5, 1, 1.5, 0, 0, 0);
let b_l_drawer_hndl = new Node(0, 1.5, 0.75, 0, 0, 0);
b_l_drawer.add_child(b_l_drawer_hndl);
drawers_f_panel.add_child(b_l_drawer);
let b_r_drawer = new Node(9.5, 1, 1.5, 0, 0, 0);
let b_r_drawer_hndl = new Node(0, 1.5, 0.75, 0, 0, 0);
b_r_drawer.add_child(b_r_drawer_hndl);
drawers_f_panel.add_child(b_r_drawer);
w_node.add_child(drawers);


let tv = new Node(-37,22,41.5,0,180,0);
let tv_l_bezel = new Node(-10.5, 0, 0.25, 0, 0, 0);
let tv_r_bezel = new Node(10.5, 0, 0.25, 0, 0, 0);
let tv_b_bezel = new Node(0, -1, 0.25, 0, 0, 0);
let tv_t_bezel = new Node(0, 11.25, 0.25, 0, 0, 0);
tv.add_child(tv_l_bezel);
tv.add_child(tv_r_bezel);
tv.add_child(tv_b_bezel);
tv.add_child(tv_t_bezel);
let tv_stand_sup = new Node(0, -3, 0, 0, 0, 0);
tv_b_bezel.add_child(tv_stand_sup);
let tv_stand_plate = new Node(0, -1, 0, 0, 0, 0);
tv_stand_sup.add_child(tv_stand_plate);
w_node.add_child(tv);

let lamp = new Node(-65, 17, 41.5, 0, 0, 0);
let lamp_stand = new Node(0, 4, 0, 0, 0, 0);
lamp.add_child(lamp_stand);
let lamp_light = new Node(0, 4, 0, 0, 0, 0);
lamp_stand.add_child(lamp_light);
let shade_l1 = new Node(0, 1, 0, 0, 0, 0);
lamp_light.add_child(shade_l1);
let shade_l2 = new Node(0, 1, 0, 0, 0, 0);
shade_l1.add_child(shade_l2);
let shade_l3 = new Node(0, 1, 0, 0, 0, 0);
shade_l2.add_child(shade_l3);
let shade_l4 = new Node(0, 1, 0, 0, 0, 0);
shade_l3.add_child(shade_l4);
let shade_l5 = new Node(0, 1, 0, 0, 0, 0);
shade_l4.add_child(shade_l5);
w_node.add_child(lamp);

let fan = new Node(-50, 65, 0, 0, 0, 0);
let fan_spinner = new Node(0, -1, 0, 0, 0, 0);
fan.add_child(fan_spinner);
let fan_hold = new Node(0, -3, 0, 0, 0, 0);
fan_spinner.add_child(fan_hold);
let fan_r_attach = new Node(2, 1, 0, 0, 0, 0);
fan_hold.add_child(fan_r_attach);
let fan_r_blade = new Node(5.5, 0.25, 0, 0, 0, 0);
fan_r_attach.add_child(fan_r_blade);
let fan_l_attach = new Node(-2, 1, 0, 0, 0, 0);
fan_hold.add_child(fan_l_attach);
let fan_l_blade = new Node(-5.5, 0.25, 0, 0, 0, 0);
fan_l_attach.add_child(fan_l_blade);
let fan_b_attach = new Node(0, 1, -2, 0, 0, 0);
fan_hold.add_child(fan_b_attach);
let fan_b_blade = new Node(0, 0.25, -5.5, 0, 0, 0);
fan_b_attach.add_child(fan_b_blade);
let fan_f_attach = new Node(0, 1, 2, 0, 0, 0);
fan_hold.add_child(fan_f_attach);
let fan_f_blade = new Node(0, 0.25, 5.5, 0, 0, 0);
fan_f_attach.add_child(fan_f_blade);
w_node.add_child(fan);

let cei_lamp = new Node(0, 65, 0, 0, 0, 0);
let cei_t_stalk = new Node(0, -4, 0, 0, 0, 0);
cei_lamp.add_child(cei_t_stalk);
let cei_t_plate = new Node(0, -0.5, 0, 0, 0, 0);
cei_t_stalk.add_child(cei_t_plate);
let cei_b_stalk = new Node(0, -2, 0, 0, 0, 0);
cei_t_plate.add_child(cei_b_stalk);
let cei_bulb = new Node(0, -2, 0, 0, 0, 0);
cei_b_stalk.add_child(cei_bulb);
let cei_l_plate = new Node(-2.25, -8, 0, 0, 0, 0);
let cei_r_plate = new Node(2.25, -8, 0, 0, 0, 0);
cei_t_plate.add_child(cei_l_plate);
cei_t_plate.add_child(cei_r_plate);
let cei_b_plate = new Node(0, -8, -2.25, 0, 0, 0);
let cei_f_plate = new Node(0, -8, 2.25, 0, 0, 0);
cei_t_plate.add_child(cei_b_plate);
cei_t_plate.add_child(cei_f_plate);
w_node.add_child(cei_lamp);


// Vertex shader program
 var VSHADER_SOURCE =
   'attribute vec4 a_Position;\n' +
   'attribute vec4 a_Color;\n' +
   'attribute vec4 a_Normal;\n' +
   'uniform mat4 u_MvpMatrix;\n' +
   'uniform mat4 u_ModelMatrix;\n' +    // Model matrix
   'uniform mat4 u_NormalMatrix;\n' +   // Transformation matrix of the normal
   'varying vec4 v_Color;\n' +
   'varying vec3 v_Normal;\n' +
   'varying vec3 v_Position;\n' +
   'void main() {\n' +
   '  gl_Position = u_MvpMatrix * a_Position;\n' +
      // Calculate the vertex position in the world coordinate
   '  v_Position = vec3(u_ModelMatrix * a_Position);\n' +
   '  v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));\n' +
   '  v_Color = a_Color;\n' + 
   '}\n';


// Fragment shader program
 var FSHADER_SOURCE =
   '#ifdef GL_ES\n' +
   'precision mediump float;\n' +
   '#endif\n' +
   'uniform vec3 u_LightColor;\n' +     // Light color
   'uniform vec3 u_LightPosition;\n' +  // Position of the light source
   'uniform vec3 u_AmbientLight;\n' +   // Ambient light color
   'varying vec3 v_Normal;\n' +
   'varying vec3 v_Position;\n' +
   'uniform vec4 u_Color;\n' +
   'uniform sampler2D u_Sampler;\n' +
   'void main() {\n' +
      // Normalize the normal because it is interpolated and not 1.0 in length any more
   '  vec3 normal = normalize(v_Normal);\n' +
      // Calculate the light direction and make its length 1.
   '  vec3 lightDirection = normalize(u_LightPosition - v_Position);\n' +
      // The dot product of the light direction and the orientation of a surface (the normal)
   '  float nDotL = max(dot(lightDirection, normal), 0.0);\n' +
      // Calculate the final color from diffuse reflection and ambient reflection
   '  vec3 diffuse;\n' +
   '  diffuse = u_LightColor * u_Color.rgb * nDotL;\n' +
   '  vec3 ambient = u_AmbientLight * u_Color.rgb;\n' +
   '  gl_FragColor = vec4(diffuse + ambient, u_Color.a);\n' +
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
   var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
   var u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
   var u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');
   var u_LightColor = gl.getUniformLocation(gl.program, 'u_LightColor');
   var u_LightPosition = gl.getUniformLocation(gl.program, 'u_LightPosition');
   var u_AmbientLight = gl.getUniformLocation(gl.program, 'u_AmbientLight');
   var u_BoxColor = gl.getUniformLocation(gl.program, 'u_Color');
   if (!u_ModelMatrix || !u_MvpMatrix || !u_NormalMatrix || !u_LightColor || !u_LightPosition　|| !u_AmbientLight || !u_BoxColor) {
     console.log('Failed to get the storage location');
     return;
   }
  // set colour of point light hanging from ceiling
  gl.uniform3f(u_LightColor, 0.98, 0.93, 0.64);
  // set point light pos to a nice position
  // this is not the position of the lamp model as the shadows caset from there look ugly
  gl.uniform3f(u_LightPosition, 2, 5, 2);
  // Set the ambient light
  gl.uniform3f(u_AmbientLight, 0.3, 0.3, 0.3);
  // set default colour
  gl.uniform4f(u_BoxColor, 1.0, 0.4,0.0,1.0);
  // Calculate the view projection matrix
  var viewProjMatrix = new Matrix4();
  viewProjMatrix.setPerspective(50.0, canvas.width / canvas.height, 1.0, 1000.0);
  viewProjMatrix.lookAt(0.0, 50.0, 150.0, 0.0, 0.0, -125.0, 0.0, 1.0, 0.0);
  viewProjMatrix.rotate(-100, 0, 1, 0);

  // Register the event handler to be called on key press
  document.onkeydown = function(ev){ keydown(ev, gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, w_node); };

  table_l_panel.setDraw(() => {
    drawBox(gl, n, 15, 2, 20, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.79, 0.64, 0.44, 1, u_BoxColor);
  });
  table_base.setDraw(()=> {
    drawBox(gl, n, 5, 15, 20, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.79, 0.64, 0.44, 1, u_BoxColor);
  });

  table_r_panel.setDraw(() => {
    drawBox(gl, n, 15, 2, 20, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.79, 0.64, 0.44, 1, u_BoxColor);
  });

  draw_chairs(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.15, 0.10, 0.05, 1, u_BoxColor);
  draw_sofa(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.57, 0.13, 0.1, 1, u_BoxColor);
  draw_drawers(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.58, 0.47, 0.28, 1, u_BoxColor);
  draw_tv(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.15, 0.15, 0.15, 1, u_BoxColor);
  draw_lamp(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.3, 0, 0.13, 1, u_BoxColor);
  draw_fan(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.75, 0.75, 0.75, 1, u_BoxColor);
  draw_cei_lamp(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 1, 1, 1, 1, u_BoxColor);
  


  floor.setDraw(() => {
    drawBox(gl, n, 120, -1, 100, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.44, 0.5, 0.56, 1, u_BoxColor);
  });
  wall_1.setDraw(() => {
    drawBox(gl, n, 1, 69, 100, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.9, 0.9, 0.9, 1, u_BoxColor)
  });
  wall_2.setDraw(() => {
    drawBox(gl, n, 120, 69, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.9, 0.9, 0.9, 1, u_BoxColor)
  });
  roof.setDraw(() => {
    drawBox(gl, n, 120, 1, 100, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.9, 0.9, 0.9, 1, u_BoxColor)
  });

  //This is where we render world
　draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, w_node);

  window.setInterval(() => {
    fan_spinner._y_rot = (fan_spinner._y_rot - 3) % 360;
  　draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, w_node);
  }, 0.1)

}


function draw_chairs(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor){
  let chair_base = () => {
    drawBox(gl, n, 10, 2, 10, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let chair_leg = () => {
    drawBox(gl, n, 1, 7.5, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let chair_post = () => {
    drawBox(gl, n, 1, 10, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let chair_back = () => {
    drawBox(gl, n, 8, 3, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
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


function draw_sofa(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor){
  let sofa_base = () => {
    drawBox(gl, n, 40, 6, 15, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let sofa_leg = () => {
    drawBox(gl, n, 2, 2, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.2, 0.2, 0.2, alpha, u_BoxColor);
  };
  let sofa_back_draw = () => {
    drawBox(gl, n, 40, 16, 4, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let sofa_arm = () => {
    drawBox(gl, n, 4, 6, 15, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let sofa_cushion = () => {
    drawBox(gl, n, 13, 4, 15, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  
  sofa.setDraw(sofa_base);
  sofa_b_l_leg.setDraw(sofa_leg);
  sofa_b_r_leg.setDraw(sofa_leg);
  sofa_f_l_leg.setDraw(sofa_leg);
  sofa_f_r_leg.setDraw(sofa_leg);
  sofa_m_cushion.setDraw(sofa_cushion);
  sofa_r_cushion.setDraw(sofa_cushion);
  sofa_l_cushion.setDraw(sofa_cushion);
  sofa_back.setDraw(sofa_back_draw);
  sofa_left_arm.setDraw(sofa_arm);
  sofa_right_arm.setDraw(sofa_arm);

}


function draw_drawers(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor){
  let drawers_base = () => {
    drawBox(gl, n, 35, 2, 13, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let drawers_side = () => {
    drawBox(gl, n, 2, 15, 13, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let drawers_back = () => {
    drawBox(gl, n, 39, 17, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let drawers_top = () => {
    drawBox(gl, n, 39, 2, 14, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let drawers_front = () => {
    drawBox(gl, n, 35, 13, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let drawer_panel = () => {
    drawBox(gl, n, 15, 4, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let drawer_handle = () => {
    drawBox(gl, n, 3, 1, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.4, 0.2, 0, alpha, u_BoxColor);
  };

  drawers.setDraw(drawers_base);
  drawers_l_panel.setDraw(drawers_side);
  drawers_r_panel.setDraw(drawers_side);
  drawers_b_panel.setDraw(drawers_back);
  drawers_t_panel.setDraw(drawers_top);
  drawers_f_panel.setDraw(drawers_front);
  t_l_drawer.setDraw(drawer_panel);
  t_l_drawer_hndl.setDraw(drawer_handle);
  t_r_drawer.setDraw(drawer_panel);
  t_r_drawer_hndl.setDraw(drawer_handle);
  b_l_drawer.setDraw(drawer_panel);
  b_l_drawer_hndl.setDraw(drawer_handle);
  b_r_drawer.setDraw(drawer_panel);
  b_r_drawer_hndl.setDraw(drawer_handle);
}


function draw_tv(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor){
  let tv_screen = () =>{
    drawBox(gl, n, 20, 11.25, 1.5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let tv_side_bezel = () => {
    drawBox(gl, n, 1, 11.25, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let tv_top_bezel = () => {
    drawBox(gl, n, 22, 0.5, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let tv_bottom_bezel = () => {
    drawBox(gl, n, 22, 1, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.66, 0.66, 0.66, alpha, u_BoxColor);
  };
  let tv_support = () => {
    drawBox(gl, n, 2, 3, 1.5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let tv_plate = () => {
    drawBox(gl, n, 8, 1, 5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };

  tv.setDraw(tv_screen);
  tv_l_bezel.setDraw(tv_side_bezel);
  tv_r_bezel.setDraw(tv_side_bezel);
  tv_b_bezel.setDraw(tv_bottom_bezel);
  tv_t_bezel.setDraw(tv_top_bezel);
  tv_stand_sup.setDraw(tv_support);
  tv_stand_plate.setDraw(tv_plate);
}


function draw_lamp(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor){
  let lamp_base = () => {
    drawBox(gl, n, 4, 4, 4, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let lamp_stand_draw = () => {
    drawBox(gl, n, 1, 4, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.15, 0.15, 0.15, 1, u_BoxColor);
  };
  let lamp_light_draw = () => {
    drawBox(gl, n, 4, 1, 4, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.98, 0.93, 0.64, alpha, u_BoxColor);
  };
  let shade_l1_draw = () => {
    drawBox(gl, n, 5, 1, 5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0, 0.81, 0.82, alpha, u_BoxColor);
  };
  let shade_l2_draw = () => {
    drawBox(gl, n, 4, 1, 4, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0, 0.81, 0.82, alpha, u_BoxColor);
  };
  let shade_l3_draw = () => {
    drawBox(gl, n, 3, 1, 3, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0, 0.81, 0.82, alpha, u_BoxColor);
  };
  let shade_l4_draw = () => {
    drawBox(gl, n, 2, 1, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0, 0.81, 0.82, alpha, u_BoxColor);
  };
  let shade_l5_draw = () => {
    drawBox(gl, n, 1, 1, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0, 0.81, 0.82, alpha, u_BoxColor);
  };

  
  lamp.setDraw(lamp_base);
  lamp_stand.setDraw(lamp_stand_draw);
  lamp_light.setDraw(lamp_light_draw);
  shade_l1.setDraw(shade_l1_draw);
  shade_l2.setDraw(shade_l2_draw);
  shade_l3.setDraw(shade_l3_draw);
  shade_l4.setDraw(shade_l4_draw);
  shade_l5.setDraw(shade_l5_draw);
}

function draw_fan(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor){
  let fan_fix_draw = () => {
    drawBox(gl, n, 2, 3, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let fan_spin_draw = () => {
    drawBox(gl, n, 0.5, 1, 0.5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let fan_holder_draw = () => {
    drawBox(gl, n, 3, 3, 3, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 1, 1, 1, alpha, u_BoxColor);
  };
  let fan_lr_attach = () => {
    drawBox(gl, n, 1, 0.5, 0.5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let fan_lr_blade = () => {
    drawBox(gl, n, 10, 1, 3, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let fan_fb_attach = () => {
    drawBox(gl, n, 0.5, 0.5, 1, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let fan_fb_blade = () => {
    drawBox(gl, n, 3, 1, 10, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };

  fan.setDraw(fan_fix_draw);
  fan_spinner.setDraw(fan_spin_draw);
  fan_hold.setDraw(fan_holder_draw);
  fan_l_attach.setDraw(fan_lr_attach);
  fan_r_attach.setDraw(fan_lr_attach);
  fan_l_blade.setDraw(fan_lr_blade);
  fan_r_blade.setDraw(fan_lr_blade);
  fan_b_attach.setDraw(fan_fb_attach);
  fan_f_attach.setDraw(fan_fb_attach);
  fan_b_blade.setDraw(fan_fb_blade);
  fan_f_blade.setDraw(fan_fb_blade);


}

function draw_cei_lamp(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor){
  let cei_fix_draw = () => {
    drawBox(gl, n, 3, 2, 3, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let cei_t_stalk_draw = () => {
    drawBox(gl, n, 0.5, 6, 0.5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let cei_t_plate_draw = () => {
    drawBox(gl, n, 4, 0.5, 4, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.75, 0.75, 0.75, alpha, u_BoxColor)
  }
  let cei_b_stalk_draw = () => {
    drawBox(gl, n, 0.5, 2, 0.5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor);
  };
  let cei_bulb_draw = () => {
    drawBox(gl, n, 2, 2, 2, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.98, 0.93, 0.64, alpha, u_BoxColor);
  };
  let cei_lr_plate = () => {
    drawBox(gl, n, 0.5, 8, 4, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.46, 0.53, 0.6, 0.6, u_BoxColor);
  };
  let cei_bf_plate = () => {
    drawBox(gl, n, 4, 8, 0.5, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, 0.46, 0.53, 0.6, 0.6, u_BoxColor);
  };

  cei_lamp.setDraw(cei_fix_draw);
  cei_t_stalk.setDraw(cei_t_stalk_draw);
  cei_t_plate.setDraw(cei_t_plate_draw);
  cei_b_stalk.setDraw(cei_b_stalk_draw);
  cei_bulb.setDraw(cei_bulb_draw);
  cei_l_plate.setDraw(cei_lr_plate);
  cei_r_plate.setDraw(cei_lr_plate);
  cei_b_plate.setDraw(cei_bf_plate);
  cei_f_plate.setDraw(cei_bf_plate);

}


function keydown(ev, gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, world_node) {
  switch(ev.keyCode){
    case 65:
      viewProjMatrix.rotate(3,0,1,0);
      break;
    case 68:
      viewProjMatrix.rotate(-3,0,1,0);
      break;
    default:
      return;
  }
  draw(gl, n, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, world_node);
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
  // start rendering objects starting from root of scenegraph
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
function drawBox(gl, n, width, height, depth, viewProjMatrix, u_MvpMatrix, u_NormalMatrix, red, green, blue, alpha, u_BoxColor) {
    // set colour
    gl.uniform4f(u_BoxColor, red, green, blue, alpha);
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
