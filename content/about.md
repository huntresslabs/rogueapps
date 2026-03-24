+++
title = "About RogueApps"
description = "Learn about the RogueApps project — documenting OAuth application abuse to help defenders protect their environments."
+++

# About RogueApps

## What is a RogueApp?

A RogueApp is an OIDC/OAuth 2.0 application that, while not inherently malicious, has been observed being abused during real-world identity compromises. These are legitimate applications — email clients, backup tools, file sync utilities — that attackers weaponize to maintain persistence, exfiltrate data, or stage fraud after gaining access to a victim's environment.

## Mission

RogueApps catalogs the emerging attack surface of SaaS, OIDC, and OAuth 2.0 applications to help defenders with:

- **Detection** — Identify suspicious application consent grants in your tenant
- **Deterrence** — Proactively block or restrict known-abused applications
- **Mitigation** — Respond quickly when a RogueApp is discovered in your environment

As attackers increasingly target identity infrastructure, understanding which applications they leverage — and how — is critical to defending the modern SaaS landscape.

## Open Source

RogueApps is fully open source. Explore the repository, report issues, or submit new RogueApps on [GitHub](https://github.com/huntresslabs/rogueapps).

---

## Disclaimer

This project documents the tradecraft of OAuth applications and how they are used in attacks. It is not a substitute for a full investigation into any specific application instance. The presence of an application in this repository does not confirm malicious intent — only that it has been observed in adversarial contexts. Use this resource for reference and education only.

---

## Acknowledgements

RogueApps was inspired by [WTFBins](https://wtfbins.wtf/), the excellent work of [The Taggart Institute](https://taggartinstitute.org/).

Created by **Matt Kiely**, Principal Security Researcher at [Huntress](https://www.huntress.com), and the **Huntress Research Team**.
