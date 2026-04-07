---
tags:
  - Biostatistics
publish: true
created: 2026-04-05T22:02
modified: 2026-04-06T17:26
---
> Descriptive statistics **describes your sample.** It does NOT generate conclusions about underlying phenomena. 

# Categorical variables
- bar plots
- counts

# Continuous variables
- histogram
- mean
- standard deviation
	- measure of the variability of an **individual measurement in our sample** (≠ [[inferential statistics]])
- five-number summary 

> [!important] If the histogram shows: 
> 1. normal distribution (bell curve) → calculate the **mean** and **standard deviation**
> 2. non-normal distribution → five-number summary (minimum, q1, median, q3, maximum)

## Checking normality assumption
1. QQ-Plot
2. Shapiro-Wilk Test

## Parametric vs Non-Parametric Tests

|             | Parametric tests                                           | Non-parametric tests                                                                                           |
| ----------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Assumptions** | - normality<br>- homogeneity of variance<br>- independence | - non-normal distribution<br>- small sample size<br>- ordinal/nominal data<br>- presence of outliers           |
| **Examples**    | - T-tests<br>- ANOVA<br>- Pearson correlation              | - Mann-Whitney U test<br>- Wilcoxon signed-rank test<br>- Kruskal-Wallis test<br>- Spearman’s rank correlation |

![[Pasted image 20260406171906.png]]

## Post-hoc tests
![[Pasted image 20260406161809.png]]

