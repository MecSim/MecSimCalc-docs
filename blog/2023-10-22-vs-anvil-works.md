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
| Target Audience    | Enterprise                                                                                                                                              | Designed for non-technical users                                                                                      |
| Required Knowledge | Python, Anvil library                                                                                                                                   | Python                                                                                                                |
| Ideal Use Case     | Business websites with database                                                                                                                         | Computational simulation and calculation                                                                              |
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

**Step 1:** Create a new app by selecting from one of the Anvil templates
![Create page](/blog/compare/anvil_create.jpg)

**Step 2:** On the inputs page, use the side menu on the right to configure each input settings and drag-and-drop in more inputs.
![Inputs page](/blog/compare/anvil_inputs.png)
![New component](/blog/compare/anvil_new_component.png)

**Step 3:** On the code page, use custom anvil functions to write the Python code that uses the input values to execute commands, such as database executions.
![Code page](/blog/compare/anvil_code.png)

**Step 4:** Finally, to deploy the app, open the Publish popup and click on Publish
![Publish](/blog/compare/anvil_publish.png)

**Step 5:** The app is now deployed and accessible at an Anvil url:
Keep in mind that Anvil apps on the free tier come with a banner at the top.

![Anvil app](/blog/compare/anvil_app.png)

### MecSimCalc

Internally, MecSimCalc uses serverless functions to run Python functions, make it suitable for computational simulation and calculation, which may require more computing power and longer runtimes.

Here is a simplified workflow for creating and deploying a basic MecSimCalc app:

**Step 1:** Visit https://mecsimcalc.com/create and select one of the templates to create a new app.
![Create page](/blog/compare/mecsimcalc_create.png)

**Step 2:** On the inputs step, use the drag and drop interface to add, delete, and position the inputs. Edit the each input by clicking on it.
![Inputs step](/blog/compare/mecsimcalc_inputs.png)
![Edit inputs](/blog/compare/mecsimcalc_edit_inputs.png)

**Step 3:** On the code step, write the Python code that uses the `inputs` to calculate the output. No need for custom functions nor installations. The toolbar on the right allows for installing Python packages, debugging the code, and seeing the input variables.
![Code step](/blog/compare/mecsimcalc_code.png)

**Step 4:** On the outputs step, use the rich text editor to stylize the outputs and embed the outputs variables from the code.
![Outputs step](/blog/compare/mecsimcalc_outputs.png)

**Step 5:** Finally, to deploy the app, simply click on the _Publish_ button at the bottom of the Preview step and the app will be accessible at a MecSimCalc url within a few seconds.
![Publish](/blog/compare/mecsimcalc_publish.png)

This is the final app:
![MecSimCalc app](/blog/compare/mecsimcalc_app.png)

## Conclusion

Both Anvil and MecSimCalc aim to simplify web application development, enabling users to leverage the power of Python without the need for extensive web development experience. While Anvil is designed for building full-fledged websites and offers more features, MecSimCalc is geared towards non-technical users and simplifies complex computations.

### Key Takeaways

- MecSimCalc offers a solution for simplifying complex calculations with Python.
- Anvil's extensive feature set can create complexity, but it is more suitable for building full-fledged websites.
- MecSimCalc excels at simplifying the app-building process for non-technical users.

In summary, the choice between Anvil and MecSimCalc depends on your specific needs and the complexity of the web applications you intend to develop. Both tools offer the power of Python, but with different target audiences and features.
