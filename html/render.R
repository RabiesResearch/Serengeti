rmd_files <- list.files(path=map_path, pattern="Rmd")

# print(rmd_files)

sapply(rmd_files, function(x)rmarkdown::render(paste(map_path, x, sep="")))
