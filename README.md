# RationaleDesign.com

## Development Environment

Fork the master repo. Once forked go to the location of the forked repo `git clone yourHttpRepoLocation` down to your local computer.

__Node__, __Bower__, & __Gulp__ need to be installed.

### Node
[Node Download](https://nodejs.org/en/download/)

### Gulp & Bower
`npm install -g gulp && bower`

### Install the dependencies
`npm install`

`bower install`

### Add upstream remote (master codebase)

`git remote add upstream https://github.com/rationaledesign/rationale.git`

After changes to Siteleaf CMS content, PR merges, and generally before you start work it's good to pull down from upstream into your local master

`git pull --rebase upstream master`

### Run the server

`gulp`

_if it doesn't build the first time try again...there is an issue with the fonts right now_

Go to `localhost:3000` to view the site locally.

## Siteleaf CMS

[Siteleaf Docs](https://learn.siteleaf.com/getting-started/)

You will need to get editor access to the Siteleaf CMS to publish changes and make edits to content.

Siteleaf pages pull from `_layouts` and those layouts also include files from `_includes`

Collection pages are located in `_our-work`, `_resources`, & `store`. These are static files that pull from the Siteleaf CMS changes.

Layout templating is done through [Jekyll](https://jekyllrb.com/)

## Pulling changes from Siteleaf CMS & Github

After your upstream remote has been set. Checkout your master branch `git checkout master` and run `git pull --rebase upstream master`

Running this will sync your forks master branch with the master Repo

## Pushing changes to github

Before making changes locally create a branch from the master branch named something related to the changes you will make.

`git checkout -b yourBranchName`

Make changes and push these changes to your fork

add files and commit your changes

`git push origin yourBranchName`

Submit a PR on your github repo

[submit a PR](https://help.github.com/articles/creating-a-pull-request/)

After a PR is submitted the code owner will approve or request new changes and publish them to the live site.

## Code Architecture

### _assets

This is where bower components, Fonts, JS, and SCSS files are stored. Fonts, JS, and SCSS are edited here and are live reloaded to the page.

The SCSS folder is a bit messy right now and should be cleaned up as work is done.

scss/_globals contains all the variables for the css. Spacing units, breakpoint, colors.

__Breakpoint__ is used for managing media queries.

```
@include breakpoint($breakPointVariable) {
  // change styles here
}
```
__Grid__ is a bit wonky right now. I'm planning to make more of a classes based grid layout. You can create and use grid items in `_assets/_globals/_grid.scss`









