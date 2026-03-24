# RogueApps
When Apps Go Rogue.

This repository documents observed the TTPs associated with OIDC/OAuth 2.0 application attacks.

For more information about this subject, please visit the [Wiki](https://github.com/huntresslabs/rogueapps/wiki).

## Contributing
If you want to contribute to the RogueApps project, please review the [Wiki Contribution Guide](https://github.com/huntresslabs/rogueapps/wiki/Contribution-Guide) and [open an Issue](https://github.com/huntresslabs/rogueapps/issues/new?assignees=&labels=new+rogueapp&projects=&template=custom.md&title=%5BNew+RogueApp%5D%3A+%28RogueApp+Name%29). Please follow the issue template and include details about the observed TTPs for the RogueApp. 
> ⚠️ **Please do not submit any sensitive, private, or proprietary information.**

## Adding Contributions
When a contribution is accepted into the repo, add the details of the contribution to the `rogueapps.json` file located in `static/`. New entries must be merged into main to go live on the actual site.

## Development Guide

This site is built with [Zola](https://www.getzola.org/), a fast static site generator written in Rust.

### Prerequisites

Install Zola: https://www.getzola.org/documentation/getting-started/installation/

### Dev Install

Clone the repository and start the dev server:

```bash
zola serve
```

The dev server is now live at `http://127.0.0.1:1111`. Changes to templates, content, and static files are hot-reloaded.

### Building

```bash
zola build
```

Output is written to the `public/` directory.

### Docker Quickstart

Clone the repo and then run the following from the root directory:

```bash
docker build -t rogueapps .
docker run -it -p 80:80 rogueapps
```

### API
If you want to access the RogueApps dataset, you can curl the GitHub content at `https://raw.githubusercontent.com/huntresslabs/rogueapps/main/static/rogueapps.json`, i.e.:
```bash
$ curl -s https://raw.githubusercontent.com/huntresslabs/rogueapps/main/static/rogueapps.json | jq '.[] | select(.tags | index("BEC"))'
{
  "appId": "e9a7fea1-1cc0-4cd9-a31b-9137ca5deedd",
  "appDisplayName": "eM Client",
  ...[snip]...
```