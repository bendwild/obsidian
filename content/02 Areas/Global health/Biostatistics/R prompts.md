---
tags:
  - Biostatistics
publish: true
created: 2025-09-17T09:56
modified: 2025-10-01T18:03
---
Basic rule: NAMEFILE$VARIABLE

| Function                                              | Code                                                                                                    | Explanation                                                                                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Current working directory                             | `getwd`                                                                                                 |                                                                                                                                          |
| Change working directory                              | `setwd`                                                                                                 |                                                                                                                                          |
| Import data                                           | `NHANES2015 <- read_excel("NHANES2015.xls", sheet = "data")`<br>                                        |                                                                                                                                          |
| Store number                                          | `<-` ( `my_price<-399.99`)                                                                              |                                                                                                                                          |
| View data frame                                       | `View(NHANES2015[c("gender","age",'hpv')])`                                                             |                                                                                                                                          |
| Frequency table                                       | `table(NHANES2015$age3g)`<br>`table(NHANES2015$race, NHANES2015$hpv)`                                   |                                                                                                                                          |
| Proportional table                                    | `prop.table(table(NHANES2015$age3g))`<br>`prop.table(table(NHANES2015$race, NHANES2015$hpv),1)`         | → 1 means calculate by row, 2 means calculate by column, depends on what your research questions is arch questions is arch questions is` |
| Label numeric coding                                  | `NHANES2015$age3g <-factor(NHANES2015$age3g, levels = c(0,1,2), labels = c("Under 30", "30-39","40+"))` |                                                                                                                                          |
| Calculate the summary of two variables in one command | `sapply`                                                                                                |                                                                                                                                          |


