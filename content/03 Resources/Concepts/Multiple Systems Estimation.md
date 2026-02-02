---
tags:
  - Concepts
  - Biostatistics
  - Human-rights
publish: true
created: 2026-01-14T17:38
modified: 2026-01-14T17:48
---
Multiple systems estimation, or MSE, is a family of techniques for _[[statistical inference]]_. MSE uses the overlaps between several incomplete lists of human rights violations to determine the total number of violations. In this blogpost, and four more to follow, I’ll answer both conceptual and practical questions about this important method. (In posts to follow, questions that refer to specific statistical procedures or debates will be marked, “In depth.”)

# How is MSE used for human rights projects? Is it right for my project?

MSE analyses extend naturally to the human rights context, as a number of HRDAG’s projects demonstrate. For example:

* In Guatemala, the number of uncounted deaths was about 85,000. This represents about half the total number of deaths and disappearances in the Guatemalan civil war.
* In Perú, where we assisted the Truth and Reconciliation Commission, under 25,000 deaths were documented directly (about 18,000 were documented by the Commission; another 7,000 were documented by other organizations but not the Commission). Using MSE analysis, we estimated approximately 70,000 deaths. Without MSE, around 45,000 deaths would not have been counted.
* In Casanare, Colombia, our team, working with Colombian partners, found that only about 40% of over 2,000 disappearances had been reported in any list of casualties.

# What are the steps in an MSE analysis?

The process varies somewhat from case to case. However, every MSE estimate shares several key steps, which will be described in greater detail, below:

- [[Data collection]] 
- Cleaning and canonicalization 
- Matching, also called de-duplication or record linkage  
- Stratification 
- Estimation 

# What does [[data collection]] look like in the human rights context? What kind of data do you collect?

“[[Data collection]]” can mean several things in the human rights context. In some cases, such as our work with the Timor-Leste Commission for Reception, Truth and Reconciliation (CAVR, in its Portuguese acronym), we partner with organizations during the initial phases of [[data collection]]. Participating in data-gathering from the outset facilitates later analyses. In these projects, we emphasize the use of controlled vocabularies as data are coded. A controlled vocabulary is a pre-selected set of well-defined categories that do not overlap, and that all trained coders can apply consistently and accurately. The accuracy and consistency of coding can be measured by comparing what all the coders do when given the same document. Their level of agreement is called inter-rater (or inter-coder) reliability ([IRR](http://www.amstat.org/meetings/jsm/2002/onlineprogram/index.cfm?fuseaction=abstract_details&abstractid=301562)), and high IRR is crucial to a high quality [[data collection]] project.

While analysis may be simpler when our team advises [[data collection]] and coding, this is seldom possible. More frequently, we receive “found data” from partners who have already collected testimonies or lists of violations. (On occasion we also work with literally “found” data; for example, border crossing records in Kosovo or abandoned paperwork in Chad.) When the data source has already been collected, we work with our partners to consider their analytical goals. We have advised several organizations, such as the [Colombian Commission of Jurists](http://www.coljuristas.org/), on issues of [[data collection]], coding and de-duplication.

# Do you include unnamed or anonymous victims in the matching process?

We do not use unnamed or anonymous reports for MSE, but we do use such information for other purposes. We often receive data in which some victims are unnamed. If other information about the victim is available (e.g., sex, location, etc.) then these anonymous records can still be used as the basis of descriptive statistics. However, while it is theoretically possible to match anonymous records when enough other information exists, it is not practically feasible. (For example, if each of two reports refers to an unnamed group of victims—say, one group of five victims and one group of seven—we can never be sure if one victim group is a subset of the other, if they share some but not all victims, or if they refer to completely different events. Therefore, while we occasionally include anonymous victims in descriptive statistics (or even comparisons of datasets), **we never include anonymous victims in MSE estimates, because we cannot include them in the matching process.**

# What do you mean by “cleaning” and “canonicalization”?

For us, “**data cleaning**” is a process that applies to a single dataset. It usually means making sure that data are entered and represented correctly–for example, by removing out-of-bounds values, checking for typos afflicting data entry, addressing problems of missing data, or making sure that data values are consistent. (For example, if you’ve coded the variable “sex” as “M” and “F,” you shouldn’t see numbers in that column.)

**Canonicalization** typically happens after cleaning (not always). By “canonicalization” we mean the process of unifying variable names and values, to the extent possible, across several datasets. Canonicalization begins with several datasets whose variable names and values may not match, or which may not be coded at the same level(s) of specificity. After renaming and possibly recoding variables, its final result is a single merged dataset that includes all observations from all component datasets.

# What are some of the challenges of canonicalization?
Let’s take the example of three datasets, each of which codes for sex (as in the question above). One dataset’s variable _sex_ has the values “M” and “F,” while a second dataset’s variable _SEX_ uses “Male,” “Female,” and “Unknown,” and a third dataset has a variable called _gender_ that uses 1 for male, 0 for female, 88 for “prefer not to say” and 99 for “unknown.” In this case, the analyst requires a system that incorporates all these possible values under a unified name and coding scheme. Perhaps we recode “M” as 1, “F” as 0, “Male” as 1, “Female” as 0, and “Unknown” as 99, and name the new variable sex.

But is there hidden complexity in this example? What if the dataset with values “M,” “F,” and “U” includes in the “unknown” category some individuals who are marked as “unknown” because they preferred not to say? _Post hoc_, there is no way to determine whether this is the case, and the most conservative strategy is to remove the “prefer not to say” code and recode these and all “unknown” observations as “unknown or prefer not to say.”

A somewhat analogous situation occurs when the variable(s) at issue describe human rights violations. **It is extremely important that each dataset utilize a controlled vocabulary as it codes violations.** However, different datasets may use very different vocabularies, such that violation types may not match in a one-to-one way across datasets. If one group uses only the values “torture” and “lethal violence,” but another dataset lists “physical torture,” “psychological torture,” “attempted murder,” “disappearance,” and “homicide,” **it is vital that we determine how these violation types are defined, so that the datasets can be accurately compared and, eventually, matched.**

While these types of decisions are central to the canonicalization process, there are other important tasks completed at this stage as well, including more complex [schema matching](http://en.wikipedia.org/wiki/Schema_matching), character set encodings, and parsing names, addresses, and locations into sub-parts (first, middle, last, house number, street, neighborhood, city, etc.).

# What do you mean by “overlap,” and why are overlaps important?
**MSE estimates the total number of violations by comparing the size of the overlap(s) between lists of human rights violations to the sizes of the lists themselves.** By “overlap,” we mean the set of incidents, such as deaths, that appear on more than one list of human rights violations. Accurately and efficiently identifying overlaps between lists is fundamental to the MSE process. However, determining how many items appear in more than one list can be a complicated process.

Consider the example of civilian killings during an armed conflict. If two organizations are keeping lists of civilian killings, these lists are _convenience samples_ of the true “population” of killings, which is unknown. A _sample_ is any subset of the true, unknown population of killings, and a _convenience sample_ is any sample not gathered via a systematic, representative survey of the true, unknown population. Organizations’ lists are nearly always convenience samples, because they consist of  killings that are reported in the media and/or killings reported directly to the organizations. It is important to remember that killings reported in a convenience sample might be very different, on average, from the full population of killings. For example, killings of poor people or those in rural areas may be much less likely to appear in a convenience sample than killings of rich urban-dwellers. So, we need a way to move from convenience samples to statistically valid inferences about the true population of killings. In a nutshell, that’s what MSE does—and the MSE process begins by identifying the overlaps between convenience samples. (More on [convenience samples](https://hrdag.org/convenience-samples-what-they-are/ "Convenience Samples: What they are, and what they should (and should not) be used for") here.)

The overlap is the set of killings that appears on both of our hypothetical organizations’ lists. To achieve an accurate MSE result, we need an accurate measurement of the overlap between three or more lists (also known as systems) of human rights violations. To arrive at an accurate measurement of the overlap between lists, each case on each list should be identifiable, often by name, date of violation, location, age or other characteristics. This can be a very difficult task, since many victims of human rights violations may be recorded with incomplete or incorrect information. HRDAG has developed an automated matching program (described in Q9) that facilitates matching of large datasets. Without automated matching, it would not be feasible to determine the overlap between large datasets, and MSE could not proceed.

See more: https://hrdag.org/2013/03/26/mse-does-it-really-work/

[[@Amelia Hoover Green]]