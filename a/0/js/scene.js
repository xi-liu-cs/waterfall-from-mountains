function main()
{
    let canvas = document.getElementById('canvas'),
    gl = canvas.getContext('webgl'),
    vertex_size = 16;
    lib(gl, vertex_size, 'glsl/0.vert', 'glsl/0.frag');
    gl.clearColor(0.0, 0.0, 0.0, 0.4);
    gl.clear(gl.COLOR_BUFFER_BIT);
}