---
tags:
  - Biostatistics
publish: true
created: 2025-10-19T22:41
modified: 2025-10-19T23:51
---

|             | Binomial                                                                                                                               | Poisson                                                                                                                                                                                                                                                                  | Normal                                                                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Goal        | Describe the distribution of a random variable that is **dichotomous** (binary outcome)                                                | Describe the distribution of a random variable that represents the number of occurences of some events of interest **over a specified period**                                                                                                                           | Describe the distribution of a **continuous** random variable that has a bell-shape distribution                                                                                                                                              |
| Assumptions | 1. **Fixed numbers of trials**<br>2. Outcome of trials are **independent**<br>3. **Probability of success is constant for each trial** | 1**. Probability that a single event occurs within an interval is proportional** to the length of the interval<br>2. Fixed amount of time, **unlimited trials**<br>3. The events occur **independently** both within the same interval and between consecutive intervals | 1. Symmetric around the mean<br>2. Mean, median and mode are equal<br>3. Area under normal curve = 1.0<br>4. 68% of the area is within one standard deviation of the mean<br>5. 95% of the area is within 1.96 standard deviation of the mean |
| Formula     | ![[Pasted image 20251019224416.png]]                                                                                                   | ![[Pasted image 20251019224504.png]]                                                                                                                                                                                                                                     | Normal distribution: <br>![[Pasted image 20251019225050.png]]<br><br>**Standard** normal distribution:<br>![[Pasted image 20251019234253.png]]                                                                                                |

> [!INFO] Both Poisson and Binomial distributions: 
> - require **independent events**
> - can model the **count of a given event of interest**

> [!Attention] Two events are independent if: 
> - P (A ∩B)=P(A) P(B)
> - P(A│B)=(P(A∩B))/(P(B))=P(A)
> - P(B│A)=(P(A∩B))/(P(A))=P(B)




