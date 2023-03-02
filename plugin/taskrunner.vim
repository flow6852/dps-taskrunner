if exists('g:loaded_dps_taskrunner')
    finish
endif

let g:loaded_dps_taskrunner = 1

function! TaskRunnerToggle()
    let g:taskrunner#enable = !g:taskrunner#enable
endfunction
