window.onload = function()
{
    let canvas = document.getElementById('canvas'),
    gl = canvas.getContext('webgl2'),
    wave1 = new wave(gl, canvas, gl.TRIANGLES);
    wave1.gen();
    wave1.draw_mesh();

    document.getElementById('default_amplitude').onclick =
    function()
    {
        window.location.reload();
    };

    document.getElementById('front_input').onchange =
    function()
    {
        wave1.camera.front();
    };
    
    document.getElementById('back_input').onchange =
    function()
    {
        wave1.camera.back();
    };

    document.getElementById('left_input').onchange =
    function()
    {
        wave1.camera.left();
    };

    document.getElementById('right_input').onchange =
    function()
    {
        wave1.camera.right();
    };

    document.getElementById('top_input').onchange =
    function()
    {
        wave1.camera.top();
    };

    document.getElementById('down_input').onchange =
    function()
    {
        wave1.camera.down();
    };

    document.getElementById('color_input').onchange =
    function()
    {
        wave1.color();
    };

    document.getElementById('default_color').onclick =
    function()
    {
        wave1.default_color();
    };
};