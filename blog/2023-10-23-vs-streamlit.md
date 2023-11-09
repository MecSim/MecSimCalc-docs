---
slug: vs-streamlit-2023
title: Streamlit vs. MecSimCalc
authors: [wqiu]
tags: [Compare]
---

![Banner](/blog/compare/vs_streamlit_banner.jpg)

Streamlit and MecSimCalc both offer solutions to simplify app development and data visualization with Python. However, they cater to different user bases and provide unique features. In this article, we'll delve into a detailed comparison between Streamlit and MecSimCalc.

## Overview

Let's start with an overview of both platforms.

| Feature            | Streamlit                                                                                                                                                           | MecSimCalc                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Website            | [Streamlit](https://streamlit.io/)                                                                                                                                  | [MecSimCalc](https://mecsimcalc.com/)                                                                                 |
| Description        | "A faster way to build and share data apps. Streamlit turns data scripts into shareable web apps in minutes. All in pure Python. No front‑end experience required." | "The simplest way to build and share computational tools. Create and share your Python web apps in minutes for free." |
| Target Audience    | Python developers                                                                                                                                                   | Python developers and non-technical users                                                                             |
| Required Knowledge | Python, Terminal, GitHub, Markdown, Streamlit library                                                                                                               | Python                                                                                                                |
| Ideal Use Case     | Data visualization                                                                                                                                                  | Computational simulation and calculation                                                                              |
| Cost               | Free                                                                                                                                                                | Free                                                                                                                  |

## Features Comparison

Now, let's explore the specific features and functionalities of both Streamlit and MecSimCalc.

| Feature                    | Streamlit                                                | MecSimCalc                                                   |
| -------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| Documentation              | [docs.streamlit.io](https://docs.streamlit.io)           | [docs.mecsimcalc.com](https://docs.mecsimcalc.com)           |
| Blog                       | [blog.streamlit.io](https://blog.streamlit.io)           | [docs.mecsimcalc.com/blog](https://docs.mecsimcalc.com/blog) |
| Discourse Forum            | [streamlit.io/community](https://streamlit.io/community) | [community.mecsimcalc.com](https://community.mecsimcalc.com) |
| Download Required          | Yes                                                      | No                                                           |
| Custom Code Syntax         | Yes, requires custom `streamlit` functions               | No, works with plain Python                                  |
| Resource Limits            | 1 GB RAM, sleeps after 7 days of inactivity              | 7 days, 16 vCPUs, 120 GB RAM, 200GB disk space               |
| Monetize Apps              | :x:                                                      | :white_check_mark:                                           |
| Conditional Inputs         | :white_check_mark:                                       | :white_check_mark:                                           |
| Dynamic Tables             | :white_check_mark:                                       | :white_check_mark:                                           |
| Interactivity & Animations | :white_check_mark:                                       | :x:                                                          |
| Plotting                   | :white_check_mark:                                       | :white_check_mark:                                           |
| Maps                       | :white_check_mark:                                       | :white_check_mark:                                           |
| Embeddable                 | :white_check_mark:                                       | :white_check_mark:                                           |
| Drag-and-drop interface    | :x:                                                      | :white_check_mark:                                           |
| Run in Background          | :x:                                                      | :white_check_mark:                                           |

## The Workflow

Next, we will briefly explore the workflow of both Streamlit and MecSimCalc, from creating an app to deploying it.

### Streamlit

Internally, Streamlit uses Tornado as its web server. Streamlit runs on websockets, making it suitable for interactive real-time applications.

Here is a simplified workflow for creating and deploying a basic Streamlit app:

**Step 1:** Download and start streamlit via the terminal:

```bash
# Prerequisite: download Python and pip, if not already installed
pip install streamlit
touch my_app.py
streamlit run my_app.py
```

After running `streamlit run`, a new tab will open in your browser with the app running at a `localhost` url. All the coding will be done locally on your computer and edits in `my_app.py` will automatically be reflected in the browser.

**Step 2:** Write the Streamlit code inside `my_app.py`. Refer to Streamlit docs for custom `st` functions required to build the interface and layout.

```python
# my_app.py

import streamlit as st

st.write("# a+b")

col1, col2, col3 = st.columns([6, 1, 6])
with col1:
    a = st.number_input("a", value=12)
with col2:
    st.write("# +")
with col3:
    b = st.number_input("b", value=34)

sum = a + b
product = a * b

st.write("The sum of the two numbers is " + str(sum))
st.write("The product of the two numbers is " + str(product))
```

**Step 3:** The inputs, code, and outputs are all handled in the single Python file. The localhost webpage looks like this:
![Streamlit app](/blog/compare/streamlit_app.png)

**Step 4:** Before deploying the app, first create a [Github](https://github.com/) account and a new Github repository. Then save the code to the repository by downloading and using the Github desktop app or using the terminal:

```bash
git add .
git commit -m "saving my_app.py"
git push
```

**Step 4:** Finally, to deploy the app to Streamlit cloud, create a streamlit cloud account and fill out the _Deploy an app_ form with the Github repository link. Once submitted, the app will build for a few minutes before becoming accessible at a streamlit url.

<div style={{ width:"100%", overflow: "hidden" }}>
<video muted="" loop="" controls style={{ width:"100%", overflow: "hidden" }}>
    <source src="https://s3-us-west-2.amazonaws.com/assets.streamlit.io/videos/streamlit_sharing_silent.mp4"/>
</video>
</div>

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

Streamlit and MecSimCalc offer solutions to different segments of users. Streamlit is designed for developers who want to create interactive data apps rapidly but may require familiarity with custom Streamlit functions and terminal/Github integration. On the other hand, MecSimCalc is tailored for non-technical users, eliminating the need to change existing Python codes and works in-browser.
