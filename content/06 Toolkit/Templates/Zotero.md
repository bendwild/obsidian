---
title: '"{{title | escape}}"'
Year: '{{date | format("YYYY")}}'
Authors: "{{authors}}"
tags:
  - Papers
created: 2026-04-12T17:35
modified: 2026-10-02T18:51:32+02:00
---
---

# {{title}}

> [!cite] Citation  
> {{bibliography}}
> 
> 


{% if creators %}  
**Authors:** {% for creator in creators %}{% if creator.name %}{{creator.name}}{% else %}{{creator.firstName}} {{creator.lastName}}{% endif %}{% if not loop.last %} · {% endif %}{% endfor %}  
{% endif %}  
**Year:** {{date | format("YYYY")}}{% if publicationTitle %} · **{{publicationTitle}}**{% endif %}

---

## Abstract

{% if abstractNote %}  
{{abstractNote}}  
{% else %}  
_No abstract available._  
{% endif %}

---

## My Notes

{% persist "notes" %}  
{% if isFirstImport %}

### Summary

> Write the paper's argument in 2–4 sentences.

### Key Ideas

-   
    
-   
    
-   
    

### Why It Matters

-   
    

### Questions / Critique

-   
    

### Connections

- [[ ]]
    

{% endif %}  
{% endpersist %}

---

## Annotations

{% persist "annotations" %}  
{% set newAnnotations = annotations | filterby("date", "dateafter", lastImportDate) %}

{% if newAnnotations.length %}

_Imported {{importDate | format("YYYY-MM-DD HH")}}_

{% for annotation in newAnnotations %}

{% if annotation.color == "#ffd400" %}

> [!quote] Important  
> {% elif annotation.color == "#5fb236" %}  
> [!success] Key Point  
> {% elif annotation.color == "#2ea8e5" %}  
> [!info] Definition / Concept  
> {% elif annotation.color == "#f19837" %}  
> [!warning] Actionable  
> {% elif annotation.color == "#a28ae5" %}  
> [!example] To Explore  
> {% elif annotation.color == "#ff6666" %}  
> [!danger] Problem / Disagreement  
> {% elif annotation.color == "#e56eee" %}  
> [!todo] Task  
> {% else %}  
> [!cite] Annotation  
> {% endif %}

{% if annotation.annotatedText %}

> **Highlight**  
> {{annotation.annotatedText | replace("\n", "\n> ")}}  
> {% endif %}

{% if annotation.comment %}

> **My/Zotero Comment**  
> {{annotation.comment | replace("\n", "\n> ")}}  
> {% endif %}

{% if annotation.imageRelativePath %}

> ![[{{annotation.imageRelativePath}}]]  
> {% endif %}

> [p. {{annotation.pageLabel}} · Open in Zotero](https://chatgpt.com/c/%7B%7Bannotation.desktopURI%7D%7D)

{% if annotation.allTags %}

> Tags: {{annotation.allTags}}  
> {% endif %}

---

{% endfor %}

{% endif %}  
{% endpersist %}

---

## Source

{% if pdfZoteroLink %}  
[Open PDF in Zotero](https://chatgpt.com/c/%7B%7BpdfZoteroLink%7D%7D)  
{% endif %}

{% if DOI %}  
[DOI](https://doi.org/%7B%7BDOI%7D%7D)  
{% endif %}

{% if relations | selectattr("citekey") | list | length %}

### Related

{% for relation in relations | selectattr("citekey") %}

- [[{{relation.citekey}}]]  
    {% endfor %}  
    {% endif %}