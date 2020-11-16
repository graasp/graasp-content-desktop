# Graasp Content Desktop

The Graasp Desktop's [website](https://desktop.graasp.org), built with GatsbyJS starting with the [Woo](https://www.styleshout.com/free-templates/woo/) template. The website contains:

- Graasp Desktop latest release
- An overview of the Graasp Desktop features
- A Getting started guide

![screenshot](https://user-images.githubusercontent.com/19671041/99301997-6fecfc80-2857-11eb-9a31-fac58d25f2f7.png)

## Getting Started

To edit and view the website in your local environment, follow the instructions below.

### Prerequisites

Make sure you have GatsbyJS installed. If you don't, click [here](https://www.gatsbyjs.org/docs/preparing-your-environment/) for installation instructions.

### Installation

1. After cloning the repository, run `yarn install`
2. Run `yarn start` to launch the project on a live local server; by default, the project will launch on [http://localhost:8000](#)
3. Edit the source code! The main sections of the site are placed in `src/components`. When you finish editing, save your changes, and Gatsby will automatically reload [http://localhost:8000](#) to reflect them

### Deployment

When you are ready to show the site to the world:

1. Run `yarn build`
2. Deploy the website to the development environment by running `./scripts/deploy.sh -e .env.dev`
3. Deploy the website to production by running `./scripts/deploy.sh -e .env.prod`

## Credits

This theme was originally designed by [StyleShout](https://www.styleshout.com/free-templates/woo/) and was ported to Gatsby by [Fahad Desmukh](https://github.com/desmukh/).
