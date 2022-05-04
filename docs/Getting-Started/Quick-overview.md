---
sidebar_label: "Quick Overview"
sidebar_position: 1
---

# Quick Overview

**MecSimCalc** is a platform that simplifies the building and sharing of Python apps on the web. In a matter of minutes, you can transform any snippet of Python code to a computational _**app**_ available instantly to the entire world wide web.
:::note
**MecSimCalc** gives you all the tools to build a modern online app without having to learn web programming languages, such as HTML, CSS, or Javascript.
:::

In this documentation, the term _**developer**_ is used to refer to the person who is developing an _**app**_ on the platform, while the term _**user**_ is used to refer to the person who would be using the _**app**_ after development.

## Step 1: Info

In the Info step, the _**developer**_ specifies the _**app's**_ name, description, category, and tags. This information can later help **_users_** to search and find the app. The _**developer**_ can also upload different images of the _**app**_ to appear in MecSimCalc search results.

## Step 2: Inputs

In the Inputs step, the _**developer**_ specifies the types and format of the inputs required from the _**user**_ to run the _**app**_. This step also allows the _**developer**_ to preview and test how the inputs page responds to the _**user's**_ input.

By clicking on the ![img alt](/docs/getting-started/add_btn.png) button in the bottom right, the _**developer**_ can add "input groups" and different types of inputs. "Input groups" are used to visually group the inputs, and must be added first before dragging inputs into the groups.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/inputs_menu.png)

</div>

The _**developer**_ can then drag and drop any of the available input types such as numerical inputs, text inputs, file inputs, and others from the inputs menu and into the input groups. The different inputs within an input group can be arranged, resized, and moved using the mouse.

The following example shows two input groups: "Input Group 1" and "Input Group 2". "Input Group 1" has two numerical inputs with default values of 0 and 10 while "Input Group 2" has a text input with a default value of "DefaultText".

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/inputs_example.png)

</div>

The _**developer**_ can navigate to the preview section to view how the input page appears to the **_user_**:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/inputs_preview.png)

</div>

When hovering over any of the added inputs, the edit button ![img alt](/docs/getting-started/edit_btn.png) appears allowing the _**developer**_ to edit the input's type, variable name (to be used at the later steps), default value, precision for numerical inputs, and other settings.

## Step 3: Code

In the code step, the **_developer_** is expected to write a Python function called: `def main(inputs):`. The `inputs` of the `main` function are the user inputs defined in the inputs step. The `main` function is expected to `return` a dictionary whose values are to be displayed in the output step.

By clicking on `<> Input Variables` in the sidebar on the right, the _**developer**_ can view and copy the names of the input variables available to the `main` function.

As an example, the following `main` function adds two numerical inputs, `input_0` and `input_1`, and returns their sum, `out1`. It also returns the third text input `input_2` as `out2`:

```python
def main(inputs):
    out1 = inputs['input_0'] + inputs['input_1']
    out2 = inputs['input_2']
    return {"Sum":out1, "Message":out2}
```

The dictionary keys, `Sum` and `Message`, are available for the _**developer**_ to display anywhere on the output page (as explained in the next step).

## Step 4: Output

In the output step, the **_developer_** displays the values returned from _Step 3_ using a familiar WYSIWYG (What You See Is What You Get) editor.

The dictionary key-value outputs from the code step can be embedded anywhere in the output page using the syntax `{{outputs.key}}`. As an example, the following output page displays the values of `Sum` and `Message` generated in the example in the code step.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/outputs_1.png)

</div>

The outputs available for the _**developer**_ to embed in the output page can be viewed and copied by clicking on `<> Output Variables`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/output_variables.png)

</div>

The _**developer**_ can also use conditional logic in designing the output page. By clicking on `if` or `for` in the toolbar, the syntax needed for these logical expressions is automatically generated.

As an example, the following output page displays the value of the `Sum` only if it is greater than 0.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/outputs_2.png)

</div>

:::tip
The outputs editor leverages the simple styling from a WYSIWYG text editor with the power of [Jinja](https://jinja.palletsprojects.com/en/3.0.x/templates/) and [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) for conditional logic, and [Katex](https://katex.org/docs/api.html) for beautiful math equations.
:::

## Step 5: Docs

In the docs step, the **_developer_** can provide a documentation page on how to use the _**app**_, or any references or other relevant information for the _**app**_.

## Step 6: Preview

In the final preview step, the _**developer**_ can test the _**app**_ before publishing it. Once published, the _**app**_'s status changes from **draft** to **published** and the _**app**_ becomes publicly available and shareable at a unique url.

## Main Steps of an App

The inputs, code, and outputs steps are the 3 layers that make an _**app**_. The _**developer**_ designs an inputs page whose values are then available as input to the Code step `main` function. The outputs of the the `main` function can then be embedded into a nicely formatted output page.

The following diagram show how these steps work together to create the [distance converter](https://www.mecsimcalc.com/app/4022206/distance_converter) web-app. The inputs page requests the value of `input_0` from the user, which is then used as a variable in the Python code (`inputs['input_0']`). The function `main(inputs)` then returns a dictionary of three keys: `Feet`, `Inches`, and `Metre`. These three keys are embedded into the output page using the syntax `{{outputs.Feet}}`, `{{outputs.Inches}}`, and `{{outputs.Metre}}`, respectively. The app is also also explained in details in [Example 1](/getting-started/example-1)

<div style={{textAlign: 'center'}}>

![img alt](/docs/app_flow.png)

</div>
