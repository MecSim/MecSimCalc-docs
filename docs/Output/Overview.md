---
sidebar_label: "Overview"
sidebar_position: 1
---

# Overview

The **Output** step has an in-browser editor that allows the _**developer**_ to easily design a smart output page, which can incorporate HTML elements, images, videos, hyperlinks, formatted text, latex, code blocks and much more. Therefore, the outputs page can be designed just like a word document using the toolbar at the top.

The following image highlights the buttons that can be used for adding latex math equations, `if` and `for` statements, and the available output variables.

<div style={{textAlign: 'center'}}>

![img alt](/docs/output/output_editor.png)

</div>

## Output Variables

As described in the [Code Output Section](../code/code-output#overview), the dictionary keys returned by the `main` function can be embedded anywhere within the output page in the form of `{{outputs.xxxx}}` or `{{outputs["xxxx"]}}`, where `xxxx` is any of the returned dictionary's keys. In the **Output** step, the _**developer**_ can view and copy the outputs returned from the `main` function by clicking on the `<> Output Variables` button, as shown below:

<div style={{textAlign: 'center'}}>

![img alt](/docs/output/output_variables.png)

</div>
