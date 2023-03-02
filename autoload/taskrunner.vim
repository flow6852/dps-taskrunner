function! taskrunner#build(arg) abort
    return denops#request('taskrunner', 'build', [a:arg])
endfunction

let g:taskrunner#logfile = ''
let g:taskrunner#enable = v:true
let g:taskrunner#event = 'BufWritePost'
let g:taskrunner#task = ['echo', 'test']

function! taskrunner#doTask()
    if g:taskrunner#enable
        call taskrunner#build(g:taskrunner#task)
    endif
endfunction
