---
created: 2025-06-12T21:17
modified: 2026-02-02T13:31
banner: "![[content/06 Toolkit/pixel-banner-images/maxresdefault.jpg]]"
---

```search-bar 
show recent files 
```

--- start-multi-column: ID_guu7
```column-settings
Number of Columns: 3
Largest Column: standard
```

```contributionGraph
title: INBOX
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: "1"
showCellRuleIndicators: true
titleStyle:
  textAlign: center
  fontSize: 15px
  fontWeight: normal
dataSource:
  type: PAGE
  value: '"content/00 Inbox"'
  dateField:
    type: FILE_MTIME
fillTheScreen: false
enableMainContainerShadow: false
cellStyleRules:
  - id: Wine_a
    color: "#d8b0b3"
    min: 1
    max: 2
  - id: Wine_b
    color: "#c78089"
    min: 2
    max: 3
  - id: Wine_c
    color: "#ac4c61"
    min: 3
    max: 5
  - id: Wine_d
    color: "#830738"
    min: 5
    max: 9999

```

```contributionGraph
title: PROJECTS
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: "1"
showCellRuleIndicators: true
titleStyle:
  textAlign: center
  fontSize: 15px
  fontWeight: normal
dataSource:
  type: PAGE
  value: '"content/01 Projects"'
  dateField:
    type: FILE_MTIME
fillTheScreen: false
enableMainContainerShadow: false
cellStyleRules:
  - id: Lovely_a
    color: "#fedcdc"
    min: 1
    max: 2
  - id: Lovely_b
    color: "#fdb8bf"
    min: 2
    max: 3
  - id: Lovely_c
    color: "#f892a9"
    min: 3
    max: 5
  - id: Lovely_d
    color: "#ec6a97"
    min: 5
    max: 9999

```

--- column-break ---

```contributionGraph
title: AREAS
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: "1"
showCellRuleIndicators: true
titleStyle:
  textAlign: center
  fontSize: 15px
  fontWeight: normal
dataSource:
  type: PAGE
  value: '"content/02 Areas"'
  dateField:
    type: PAGE_PROPERTY
    value: modified
fillTheScreen: false
enableMainContainerShadow: false
cellStyleRules: []

```

```contributionGraph
title: RESOURCES
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: 1
showCellRuleIndicators: true
titleStyle:
  textAlign: center
  fontSize: 15px
  fontWeight: normal
dataSource:
  type: PAGE
  value: '"content/03 Resources"'
  dateField:
    type: PAGE_PROPERTY
    value: modified
fillTheScreen: false
enableMainContainerShadow: false
cellStyleRules: []

```

--- column-break ---

```contributionGraph
title: JOURNALING
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: "1"
showCellRuleIndicators: true
titleStyle:
  textAlign: center
  fontSize: 15px
  fontWeight: normal
dataSource:
  type: PAGE
  value: '"content/04 Journals"'
  dateField:
    type: PAGE_PROPERTY
    value: modified
fillTheScreen: false
enableMainContainerShadow: false
cellStyleRules:
  - id: Halloween_a
    color: "#fdd577"
    min: 1
    max: 2
  - id: Halloween_b
    color: "#faaa53"
    min: 2
    max: 3
  - id: Halloween_c
    color: "#f07c44"
    min: 3
    max: 5
  - id: Halloween_d
    color: "#d94e49"
    min: 5
    max: 9999

```

```contributionGraph
title: PERMANENT
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: "1"
showCellRuleIndicators: true
titleStyle:
  textAlign: center
  fontSize: 15px
  fontWeight: normal
dataSource:
  type: PAGE
  value: '"content/05 Permanent"'
  dateField:
    type: PAGE_PROPERTY
    value: modified
fillTheScreen: false
enableMainContainerShadow: false
cellStyleRules:
  - id: Halloween_a
    color: "#fdd577"
    min: 1
    max: 2
  - id: Halloween_b
    color: "#faaa53"
    min: 2
    max: 3
  - id: Halloween_c
    color: "#f07c44"
    min: 3
    max: 5
  - id: Halloween_d
    color: "#d94e49"
    min: 5
    max: 9999

```

--- end-multi-column
