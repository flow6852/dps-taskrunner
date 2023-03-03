if exists('g:loaded_dps_taskrunner')
    finish
endif

let g:loaded_dps_taskrunner = 1

command TaskRunnerToggle let g:taskrunner#enable = !g:taskrunner#enable
command TaskRunnerRun call denops#request('taskrunner', 'run', [{'cmdstr': g:taskrunner#task, 'enable': v:true}])
