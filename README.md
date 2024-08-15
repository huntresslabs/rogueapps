# RogueApps
When Apps Go Rogue.

This repository documents observed the TTPs associated with OIDC/OAuth 2.0 application attacks.

For more information about this subject, please visit the [Wiki](https://github.com/huntresslabs/rogueapps/wiki).

## Contributing
If you want to contribue to the RogueApps project, please review the [Wiki Contribution Guide](https://github.com/huntresslabs/rogueapps/wiki/Contribution-Guide) and [open an Issue](https://github.com/huntresslabs/rogueapps/issues/new?assignees=&labels=new+rogueapp&projects=&template=custom.md&title=%5BNew+RogueApp%5D%3A+%28RogueApp+Name%29). Please follow the issue template and include details about the observed TTPs for the RogueApp. 
> ⚠️ **Please do not submit any sensitive, private, or proprietary information.**

## Adding Contributions
When a contribution is accepted into the repo, add the details of the contribution to the `rogueapps.json` file located in `public/`. The production data for rendering rogue apps to the site is pulled live from `https://raw.githubusercontent.com/huntresslabs/rogueapps/main/public/rogueapps.json`, so new entries must be merged into main to go live on the actual site.

## Development Guide
### Dev Install

First, clone the repository (main or dev branch).

Next, change directories into the repo and installl the Node modules:

```
npm install
```

Next, add a local dev env config file in the root directory called `.env.local`, which contains the following:
```
NEXT_PUBLIC_ENVIRONMENT=development
```

Now, start the dev server:
```
npm run dev
```
```
> rogueapps@0.1.0 dev
> next dev

  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
```
The dev server is now live at `localhost:3000`. The app will pull the JSON objects from the local `rogueapps.json` file instead of the live file on GitHub so you can test out adding new RogueApps before they get pushed to prod!

### API
As far as I can tell, Next.js and GitHub pages don't play nice when it comes to exposing an API. But if you want to access the RogueApps dataset, you can curl the GitHub content at `https://raw.githubusercontent.com/huntresslabs/rogueapps/main/public/rogueapps.json`"
```bash
$ curl -s https://raw.githubusercontent.com/huntresslabs/rogueapps/main/public/rogueapps.json | jq '.[] | select(.tags | index("BEC"))'
{
  "appId": "e9a7fea1-1cc0-4cd9-a31b-9137ca5deedd",
  "appDisplayName": "eM Client",
  ...[snip]...
```