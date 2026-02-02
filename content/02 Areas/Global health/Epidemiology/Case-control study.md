---
tags:
  - Epidemiology
publish: true
created: 2025-09-21T17:01
modified: 2025-10-21T11:35
---
> [!info] Base question
> Were cases more likely to have been exposed than controls?

# Set-up
![[Pasted image 20251005131231.png]]
1. Identify the **source population**
	1. since cases and controls will be sourced from the same population
2. Identify and enrol all **cases** (with outcome/disease) in the source population
3. Select **controls** from the same source population
	1. art of control selection is to recreate the underlying cohort that would give rise to cases
	2. **MATCHING**
4. Go back in time and determine **what proportion of cases and controls was exposed or not**

> [!Check] Good for rare diseases

## Controls

### Matching
--- start-multi-column: ID_lhsq
```column-settings
Number of Columns: 2
Largest Column: standard
```

**Group matching** = proportion of controls of a characteristic is identical to proportion of cases with the same characteristics
- less detail
- risk for [[bias]]
- easier

--- column-break ---

**Individual matching** = for each case selected a similar control is selected
- more detail
- less risk for [[bias]]
- extremely difficult

--- end-multi-column
### Control selection strategies
- random sample of population registry
- random sample of telephone/mobile registry
	- random digit dialing
- neighborhood
	- door-by-door
- hospital/healthcare setting
	- easy to recruit
	- more likely to have similar quality of medical records
	- common underlying risk?
	- CAVE hospitalized patients represent an ill-defined population that usually cannot be characterized (and therefor generalized)
- friends/neighbors/family
	- easy to recruit
	- more likely to be similar to the cases (SES, demographic, genetically)
	- more likely to have similar behaviors/exposure (CAVE studying outcome)


> [!INFO] Consideration for strategies for selection of controls
> - never perfect
> - balance strengths and weaknesses
> - balance urgency, resources
> - take into account how limitations may affect results

> [!ATTENTION] Who are the right controls?
> - must **represent the population at risk of disease**
> - must not have the disease
> - must **represent background level of exposure** in the population

## Limitations
- sources of cases
	- criteria for eligibility must be carefully specified before the study is begun
- using incident or prevalent cases
	- it is generally **preferable to use incident cases** of disease in case-control studies (any risk factors may be related to survival more than the development/incidence of the disease)
- sources of controls
- Information [[bias]]
- Recall [[bias]]

# Variations
## Case-control studies embedded in a cohort

--- start-multi-column: ID_wojo
```column-settings
Number of Columns: 2
Largest Column: standard
```

### Nested case-control

![[Pasted image 20251005144557.png]]
- controls are a sample of individuals who are **at risk for the disease at the time each case of the disease develops** (time-matched!)
- possibility of recall [[bias]] is eliminated (data on exposure is obtained before the disease develops)
- additionally [[confounders]] such as improvements in diagnostics are eliminated

--- column-break ---

### Case-[[cohort study]]
![[Pasted image 20251005193432.png]]
- randomly selecting controls **not matched on time at risk/time of diagnosis**

--- end-multi-column
## Case cross-over
- each subject serves as **own control**
- good for studying **acute outcomes** (fe [[ACS]])

![[Pasted image 20251005145005.png]]
--- start-multi-column: ID_lg2x
```column-settings
Number of Columns: 2
Largest Column: standard
```

Pro
- eliminates additional costs
- already matched on important variables

--- column-break ---

Con
- possible recall [[bias]]
- need for good understanding of etiology of disease and predisposing factors
- possible overmatching


--- end-multi-column

> [!DANGER] Odds
> In a case-control study, we do not know the incidence in the exposed population, or the incidence in the unexposed population (cuz cases vs control)
> - → cannot calculate relative risk directly
> - → therefore use odds ratio

# Overview

![[Pasted image 20251001182706.png]]