rmd_files <- list.files(path="rabies_web/html/",pattern="Rmd")

# print(rmd_files)

sapply(rmd_files, function(x)rmarkdown::render(paste("rabies_web/html/",x,sep="")))
