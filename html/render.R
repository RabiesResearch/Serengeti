rmd_files <- list.files(path="Serengeti/html/",pattern="Rmd")

# print(rmd_files)

sapply(rmd_files, function(x)rmarkdown::render(paste("Serengeti/html/",x,sep="")))
