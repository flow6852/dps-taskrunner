# dps-taskrunner

Asynchronous task runner
    
# Required

## denops.vim

https://github.com/vim-denops/denops.vim

# Example

```
augroup taskrunner
    autocmd BufWritePost *.md call taskrunner#doTask("pandoc " . expand('%') . " -o " . expand('%:r') . '.pdf')
    autocmd BufWritePost *.c call taskrunner#doTask("gcc -o " . expand('%:r') . " " . expand('%'))
augroup END
```
