---
sidebar_label: "Overview"
sidebar_position: 1
---

# Overview

The **Inputs** step enables the _**developer**_ to use a variety of different types of _**user**_ inputs that you would commonly find on a webpage. The values of these user inputs will become available as Python variables in the `main` function when writing the **Code** step.

Any combination of inputs can be arranged within either an **Input Group** or a **Table Group**, which the _**developer**_ has to create before adding inputs. An input cell can be resized and moved within an **Input Group** box, which allows a maximum of 10 inputs on the same row. A single input can occupy the whole or part of the **Input Group** width.

## Input actions

Hover over each input to show the following actions:

- Moving: click and drag the six dots on the far left to move the input.
- Re-sizing: click and drag the bottom-right corner to re-size the input.
- Edit settings: click on the ![img alt](/docs/getting-started/edit_btn.png) button to edit input settings, such as its default value, label, and variable name.
- Delete/duplicate: click the three dots on the far right to open the overflow menu with options to delete or duplicate the input.
  - When an input is duplicated, the duplicate copy maintains all the settings of the original copy except for the variable name which will automatically be appended by a number that differentiates the duplicate from the original.
- Variable name: the `name` value of the input is shown at the bottom left.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/input_actions.png)

</div>

:::tip

The layout of the inputs page can be adjusted for **both** desktop and mobile apps by choosing the appropriate icon at the top of the inputs page. Use this to make your app mobile-friendly!

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/mobile_toggle.png)

</div>

:::

## Input group vs. Table group

The inputs inside an **Input Group** are available individually for the `main` function in the **Code** step. The **Table Group** on the other hand differs from the **Input Group** in two different aspects:

1. The _**developer**_ has to specify the _number of columns_ in a **Table Group** and the width of each input is then fixed accordingly.
2. The inputs from the **Table Group** are available for the `main` function inside a nested array, whose name is specified by the _**developer**_, as will be shown in the examples later in this manual.

Use a **Table Group** when you have multiple user inputs that you want condensed into a single nested array variable in the Code step.

Below is a description of the different inputs that are currently available or you can visit the [Input Types](input-types) page for more details. You can also explore the behaviour of many of these inputs in our published [All Inputs App](https://mecsimcalc.com/app/0325014/all_inputs):

## Input types

| Input Type         |               Variable Type               | Description                                                                                                                                                                                                                                                                                                                                                          |
| :----------------- | :---------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NumberInput**    |           `integer` or `float`            | This input type allows the _**user**_ to input a number. The range and precision of the number can be specified by the _**developer**_                                                                                                                                                                                                                               |
| **TextInput**      |                 `string`                  | This input type allows the _**user**_ to input a text. There are many instances where a text field is useful as an input. For example, the text input can be useful when a particular message from the user is needed in the output page, or the _**developer**_ can allow the _**user**_ to input a general math function that can later be recognized using Python |
| **FileInput**      |                 `string`                  | The _**developer**_ can allow the _**user**_ to upload a file                                                                                                                                                                                                                                                                                                        |
| **SingleSelect**   |                 `string`                  | This input type allows selecting one option out of a list of options                                                                                                                                                                                                                                                                                                 |
| **MultipleSelect** |             list of `strings`             | This input type allows selecting multiple options out of a list of options                                                                                                                                                                                                                                                                                           |
| **Checkbox**       |       `boolean` (`True` or `False`)       | This input type returns either `True` or `False`                                                                                                                                                                                                                                                                                                                     |
| **Slider**         |           `integer` or `float`            | This input type allows the _**user**_ to select a number using a slider                                                                                                                                                                                                                                                                                              |
| **RangeSlider**    | list of two `integer` or `float` elements | This input type allows the _**user**_ to select a range or a list of two numbers using a range slider                                                                                                                                                                                                                                                                |
| **ColorPicker**    |                 `string`                  | This input type allows the _**user**_ to select a colour from a color picker                                                                                                                                                                                                                                                                                         |
| **DateTimePicker** |                 `string`                  | This input type allows the _**user**_ to select a date, time, or both                                                                                                                                                                                                                                                                                                |
| **RichText**       |                    N/A                    | This is a field that the _**developer**_ can use to add information within the input page                                                                                                                                                                                                                                                                            |
