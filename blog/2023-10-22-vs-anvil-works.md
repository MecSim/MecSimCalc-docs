---
slug: vs-anvil-works-2023
title: Anvil vs. MecSimCalc
authors: [wqiu]
tags: [Compare]
---

![Banner](/blog/compare/vs_anvil_banner.jpg)

In today's fast-paced digital world, the ability to develop web applications quickly and efficiently can make a significant difference for businesses and developers alike. Anvil and MecSimCalc are two tools that aim to simplify web app development, offering the power of Python without the complexity of traditional web development. In this article, we will compare Anvil and MecSimCalc across various dimensions to help you choose the one that best suits your needs.

## Overview

Before diving into the technical details, let's take a look at the basic information.

| Feature            | Anvil                                                                                                                                                   | MecSimCalc                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Website            | [Anvil Works](https://anvil.works/)                                                                                                                     | [MecSimCalc](https://mecsimcalc.com/)                                                                                 |
| Description        | "Build web apps with nothing but Python. Build seriously powerful web apps with all the flexibility of Python. No web development experience required." | "The simplest way to build and share computational tools. Create and share your Python web apps in minutes for free." |
| Target Audience    | Businesses                                                                                                                                              | Non-developers, e.g. engineers, consultants, educators, researchers, etc.                                             |
| Required Knowledge | Python, Anvil library                                                                                                                                   | Python                                                                                                                |
| Ideal Use Case     | Full-fledged business websites with a database                                                                                                          | Computational simulations and calculations                                                                            |
| Cost               | Free                                                                                                                                                    | Free                                                                                                                  |

## Features Comparison

Now, let's dive into the specific features and functionalities of both Anvil and MecSimCalc.

| Feature                        | Anvil                                                  | MecSimCalc                                                   |
| ------------------------------ | ------------------------------------------------------ | ------------------------------------------------------------ |
| Documentation                  | [anvil.works/docs](https://anvil.works/docs)           | [docs.mecsimcalc.com](https://docs.mecsimcalc.com)           |
| Blog                           | [anvil.works/blog](https://anvil.works/blog)           | [docs.mecsimcalc.com/blog](https://docs.mecsimcalc.com/blog) |
| Discourse Forum                | [anvil.works/community](https://anvil.works/community) | [community.mecsimcalc.com](https://community.mecsimcalc.com) |
| Drag-and-drop interface        | :white_check_mark:                                     | :white_check_mark:                                           |
| Cloud Deployment               | :white_check_mark:                                     | :white_check_mark:                                           |
| Self-Host                      | :white_check_mark:                                     | :white_check_mark:                                           |
| Github Integration             | :white_check_mark:                                     | :x:                                                          |
| Built-in Database              | :white_check_mark: Postgres DB                         | :x:                                                          |
| Built-in External Integrations | :white_check_mark: Stripe, OAuth, Jupyter, Email, etc. | :x:                                                          |
| In-Browser Editor              | :white_check_mark: No intellisense                     | :white_check_mark:                                           |
| Run in Background              | :white_check_mark:                                     | :white_check_mark:                                           |
| Custom Domain                  | :white_check_mark:                                     | :x:                                                          |
| App Marketplace                | :x:                                                    | :white_check_mark:                                           |

## The Workflow

Creating web applications should be a straightforward process. Let's explore how Anvil and MecSimCalc facilitate the app building and deploying process.

### Anvil

Anvil runs a web server that communicates with a database and other processes.

**Step 1:** Create a new app by selecting an Anvil template.

![Create page](/blog/compare/anvil_create.jpg)

**Step 2:** On the inputs page, use the side menu on the right to configure each input and use drag-and-drop to add more inputs from the toolbox. The inputs are linked to the code by selecting the appropriate code function within each input's side menu.

![Inputs page](/blog/compare/anvil_inputs.png)

<div style={{textAlign: 'center'}}>

![New component](/blog/compare/anvil_new_component.png)

</div>

**Step 3:** On the code page, use custom Anvil functions to write Python code that executes commands, like interacting with databases, using the provided input values.

![Code page](/blog/compare/anvil_code.png)

**Step 4:** Finally, to deploy the app, click on the _Publish_ button and set the appropriate settings in the popup window.

![Publish](/blog/compare/anvil_publish.png)

**Step 5:** The app is now deployed and accessible at an Anvil url.
Keep in mind that Anvil apps on the free tier come with a banner at the top.

![Anvil app](/blog/compare/anvil_app.png)

### MecSimCalc

Internally, MecSimCalc uses serverless functions to run Python functions, making it suitable for computational simulations and calculations, which may require more compute power and longer runtimes.

Here is a simplified workflow for creating and deploying a basic MecSimCalc app:

**Step 1:** Visit https://mecsimcalc.com/create and select one of the templates to create a new app.
![Create page](/blog/compare/mecsimcalc_create.png)
**Step 2:** On the inputs step, use the drag-and-drop interface to add, position, and delete the inputs. Customize each input by clicking on it.
![Inputs step](/blog/compare/mecsimcalc_inputs.png)
![Edit inputs](/blog/compare/mecsimcalc_edit_inputs.png)
**Step 3:** On the code step, write Python code that uses the `inputs` to calculate the outputs. No need to learn new functions nor any installations. Use the toolbar on the right to install Python packages, debug the code, and list the input variables.
![Code step](/blog/compare/mecsimcalc_code.png)
**Step 4:** On the outputs step, use the rich text editor to stylize the outputs section and embed the output variables generated from the code.
![Outputs step](/blog/compare/mecsimcalc_outputs.png)
**Step 5:** Finally, to deploy the app, simply click on the _Publish_ button at the bottom of the Preview step and the app will be accessible and searchable on MecSimCalc within a few seconds.
![Publish](/blog/compare/mecsimcalc_publish.png)
This is what the final app looks like:
![MecSimCalc app](/blog/compare/mecsimcalc_app.png)

## Conclusion

Anvil and MecSimCalc present distinct approaches to simplifying web application development, harnessing the capabilities of Python without necessitating extensive programming expertise. Anvil, catering to comprehensive website creation, boasts an array of features, potentially introducing complexity, whereas MecSimCalc targets non-technical users, streamlining intricate computations.

MecSimCalc specifically excels in simplifying complex calculations using Python, offering a more straightforward learning curve due to its sequential layout and familiar Python code structure. In contrast, Anvil's robust feature set, while powerful for creating full-scale websites, may require a few hours for users to grasp the Anvil web layout and anvil code library.

Anvil suits businesses seeking database interaction within a website, while MecSimCalc serves as an optimal choice for non-developers aspiring to create simple web apps like calculators. Its strength lies in facilitating app development for non-technical users.

Ultimately, the selection between Anvil and MecSimCalc hinges on individual needs and the complexity of the intended web applications. Both tools leverage the capabilities of Python but cater to different audiences and offer distinct features.
