function! auto_compile#build(arg) abort
    return denops#request('auto_compile', 'build', [a:arg])
endfunction
