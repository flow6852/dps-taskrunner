let g:taskrunner#logfile = ''
let g:taskrunner#enable = v:true
let g:taskrunner#task = ['echo', 'test']

function! taskrunner#run(arg) abort
    return denops#request('taskrunner', 'run', [{'cmdstr': a:arg,
                                                \'enable': g:taskrunner#enable,
                                                \'logfile': g:taskrunner#logfile}])
endfunction
