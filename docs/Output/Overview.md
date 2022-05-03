---
sidebar_label: "Overview"
sidebar_position: 1
---

# Output

## Quick Overview

**MecSimCalc** platform has incorporated an in-browser editor that allows the _**developer**_ to easily design a smart output page which can incorporate HTML elements, images, formatted text, latex and many more. The **Output** editor also enables using conditionals for results. Formatting text and inserting objects such as images, videos, and links can be done using the icons available at the top of the editor. Additionally, the figure below, which represents the output stage of the [Text Spaces Manipulation _**App**_](https://mecsimcalc.com/app/6383921/text_spaces_manipulation_function), highlights the icons that can be used for adding latex formatted equations, `if` and `for` statements, and the available output variables.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/outputeditor.png)

</div>

## Output Variables

As described in the [Code Output Section](../Code/Code-output#overview), the dictionary keys returned by the function `main` can be embedded anywhere within the output page in the form of `{{outputs.xxxx}}` or `{{outputs["xxxx"]}}` where `xxxx` is any of the `keys` of the returned dictionary. In the **Output** stage, the _**developer**_ can retrieve the outputs available from the function `main` by clicking on the `<>Output Variables` icon available at the top of the editor. The figure below shows the output variables available in the [Text Spaces Manipulation _**App**_](https://mecsimcalc.com/app/6383921/text_spaces_manipulation_function). The code for this app can be found [here](../Code/Tools#debugging).

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/outputvariables2.png)

</div>
