---
tags:
  - Epidemiology
publish: true
created: 2025-11-03T00:04
modified: 2025-11-03T23:57
---
Both "effect modification" and "interaction" are terms used in [[epidemiology]] and statistics to describe **situations where the effect of a primary exposure on an outcome varies by levels of another variable.**
= related to outcome, not exposure

|                | [[Confounders]]                                                                                        | Effect modifier                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **What?**      | Factor that influences both the dependent and independent variable = **distorts the true association** | Basically a confounder with different effects in different strata = **modifies the strength/direction of association** |
| **When?**      | RR identical across strata                                                                             | RR different across strata                                                                                             |
| **Importance** | = nuisance<br>→ simply need to be eliminated to prevent distortion of results                          | ≠ nuisance<br>→ provides important information                                                                         |
| **Reporting**  | Should also be reported                                                                                | One should report the differential effects separately                                                                  |

> [!ATTENTION] Qualitative vs quantitative interaction
> 

# Example

| Scenario | Crude effect | Effect in stratum 1 | Effect in stratum 2 | Adjusted effect | Interpretation                            |
| -------- | ------------ | ------------------- | ------------------- | --------------- | ----------------------------------------- |
| **1**    | 2.0          | 2.0                 | 2.0                 | 2.0             | No confounding & no effect modifier       |
| **2**    | 4.0          | 3.0                 | 3.0                 | 3.0             | Negative confounding & no effect modifier |
| **3**    | 1.53         | 2.0                 | 2.0                 | 2.0             | Positive confounding & no effect modifier |
| **4**    | 4.0          | 3.8                 | 4.3                 | NA*             | Effect modifier                           |
there will be two adjusted effects reported*

Testing for Interaction:
- Use chi-square test for homogeneity
- If p-value < 0.05, report stratum-specific results
- If p-value ≥ 0.05, can report overall adjusted estimate