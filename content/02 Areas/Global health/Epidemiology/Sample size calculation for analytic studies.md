---
tags:
  - Epidemiology
publish: true
created: 2025-11-01T22:55
modified: 2025-12-01T16:05
---
# Why [[sampling]]?
- more efficient than including everyone in the target population
- allows investigator to draw inferences about a large population

> [!ATTENTION] CAVE
> - introduces error
> - findings may not generalize to target population 

# Ingredients for sample size calculations for analytic studies
## Hypothesis
- null hypothesis
- alternative hypothesis
	- one-sided (when f.e. studying a more mature research question)
	- two-sided

## Choice of statistical test

| **Predictor / Outcome variable** | Dichotomous | Continuous  |
| -------------------------------- | ----------- | ----------- |
| **Dichotomous**                  | Chi-squared | T-test      |
| **Continuous**                   | T-test      | Correlation |

## Effect size
= how big an effect you anticipate seeing?
- relative risk (OR, RR…)
- absolute risk

> [!INFO] How to decide the “right” effect size? 
> **= smallest effect size that makes the intervention meaningful**
> - literature
> - pilot data
> - feasability/affordability

> [!ATTENTION] The smaller the effect size, the bigger the sample size

## Variance
- built in if variables are dichotomous (or if both are continuous)
- otherwise → need to be estimated using t-test

> [!ATTENTION] The bigger the variance, the bigger the sample size
## Power
= 1-B
= chance of finding something (= effect size or greater) in your sample if it’s really going on in the population
- usually set at 80% or 90% (90% for equivalency trials)

> [!ATTENTION] The bigger the power, the bigger the sample size

## Alpha
= probability that an observed effect is real and not due to chance alone
= if we assume the null hypothesis is true, how likely is it that the observed results could have occured