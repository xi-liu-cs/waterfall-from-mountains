class sky
{
    constructor(gl, n)
    {
        this.lib = new lib(gl);
        this.gl = gl;
        this.program = gl.createProgram();
        this.idx_buf = gl.createBuffer();
        this.vert_buf = gl.createBuffer();
        this.n = n;
        this.u_sky_color = [0.35, 0.2, 1.0];
        this.lib.gl_start.call(this, "sky.vert", "sky.frag", 0);
    }
    
    gen()
    {
        let vertex_array = 
        [
            -1, 1, 0, 0, 0,
            1, 1, 0, 0, 0,
            -1, -1, 0, 0, 0,

            -1, -1, 0, 0, 0,
            1, 1, 0, 0, 0,
            1, -1, 0, 0, 0,

            -1, -1, 0, 0, 0,
            -1, -1, 0, 0, 0
            -1, 1, 0, 0, 0
        ];
        this.index_array = [0, 1, 2, 3, 4, 5];
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vert_buf);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertex_array), this.gl.STATIC_DRAW);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.idx_buf);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(this.index_array), this.gl.STATIC_DRAW);
    }

    color()
    {
        let a = 1 - 0.1 * color_input.value,
        c = Math.cos(a),
        s = Math.sin(a);
        this.u_sky_color = [0.6 * (s + 0.2), 0.6 * (c - 0.5), 0.6 * (c + 0.3)];
    }

    default_color()
    {
        this.u_sky_color = [0.35, 0.2, 1.0];
    }

    draw_mesh(u_project, u_view)
    {
        let vertex_n = 5,
        bpe = Float32Array.BYTES_PER_ELEMENT;
        this.gl.useProgram(this.program);
        this.gl.uniformMatrix4fv(this.program.u_project, false, u_project);
        this.gl.uniformMatrix4fv(this.program.u_view, false, u_view);
        this.gl.uniform3fv(this.program.u_sky_color, this.u_sky_color);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vert_buf);
        this.gl.enableVertexAttribArray(this.program.a_pos);
        this.gl.vertexAttribPointer(this.program.a_pos, 3, this.gl.FLOAT, false, vertex_n * bpe, 0);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.idx_buf);
        this.gl.drawElements(this.gl.TRIANGLES, this.index_array.length, this.gl.UNSIGNED_BYTE, 0);
    }
}