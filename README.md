# RogueApps
When Apps Go Rogue.

This repository documents observed the TTPs associated with OIDC/OAuth 2.0 application attacks.

For more information about this subject, please visit the [Wiki](https://github.com/huntresslabs/rogueapps/wiki).

## Contributing
If you want to contribue to the RogueApps project, please review the [Wiki Contribution Guide](https://github.com/huntresslabs/rogueapps/wiki/Contribution-Guide) and [open an Issue](https://github.com/huntresslabs/rogueapps/issues/new?assignees=&labels=new+rogueapp&projects=&template=custom.md&title=%5BNew+RogueApp%5D%3A+%28RogueApp+Name%29). Please follow the issue template and include details about the observed TTPs for the RogueApp. Please do not submit any sensitive, private, or proprietary information.

## Adding Contributions
When a contribution is accepted into the repo, add the details of the contribution to the `rogueapps.json` file located in `public/`. The JSON entries are dynamically queried by the API and the entry cards are then rendered to the Home page.

## Development Guide
### Dev Install

First, clone the repository (main or dev branch).

Next, change directories into the repo and installl the Node modules:

```
npm install
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
The dev server is now live at `localhost:3000`.



