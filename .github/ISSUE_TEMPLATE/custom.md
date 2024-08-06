---
name: New RogueApp
about: Submit a new RogueApp to the repository.
title: "[New RogueApp]: (RogueApp Name)"
labels: new rogueapp
assignees: ''

---
> ⚠️ Please include as much detail as possible

* **Contributor Name:** [your name, research group name, or handle]
* **RogueApp Name:** [the name of the RogueApp]
* **RogueApp Description:** [the description of the RogueApp and the summary of how it is used maliciously.]
* **RogueApp Platform:** [the platform where the RogueApp is installed, i.e. Azure, M365, Google Workspace, etc]
* **MITRE ATT&CK ID:** [any applicable MITRE ATT&CK IDs. Comma separated]
* **Tags:** [any applicable tags, i.e. `BEC`, `persistence`, `spam`. Comma separated]
* **References:** [References for the observed TTPs for the RogueApp. We require writeups on the specific adversary tactics for any submitted RogueApp. References can also include the official application documentation.]

### Reference
The RogueApp specification is defined in [types.ts](../../lib/types.ts):

```typescript
    name: string;
    description: string;
    contributor: string;
    mitreTTP: string;
    category: string;
    riskLevel: string;
    dateAdded: string;
    tags: string[];
    references: string[];
    permissions: string[];
```
