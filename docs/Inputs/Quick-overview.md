---
sidebar_label: "Overview"
sidebar_position: 1
---

# Overview

The **Inputs** step enables the _**developer**_ to use an array of different types of _**user**_ inputs that become available as inputs for the `main` function in the **Code** step. Any combination of inputs can be arranged within either an `Input Group` or an `Table Group` which the _**developer**_ has to create before adding inputs. An input cell can be resized and moved within an `Input Group` window which allows the maximum of 10 inputs on the same row. A single input can occupy the whole or part of the width of the `Input Group`. Sizing and moving the input cells can intuitively be done using the mouse. Once an input has been added, the _**developer**_ can edit its associated options such as default values, labels, and variable name by clicking on the ![img alt](/docs/Getting-Started/Edit.png) icon. The _**developer**_ can delete or duplicate any of the created inputs. When an input is duplicated, the duplicate copy maintains all the options of the original copy except for the variable name which will automatically be appended by a number that differentiates the duplicate from the original.

:::tip

The variable name associated with the input appears when the _**developer**_ hovers over the created input.

:::

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/inputslayout.png)

</div>

:::tip

The inputs page can be designed for desktop or mobile apps by choosing the appropriate icon at the top of the inputs page.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/mobile.png)

</div>

:::

The inputs inside an `Input Group` are available individually for the `main` function in the **Code** step. The `Table Group` on the other hand differs from the `Input Group` in two different aspects. First, the _**developer**_ has to specify the number of columns in a `Table Group` and the width of each input is then fixed accordingly. Second, the inputs from the `Table Group` are available for the `main` function inside an array whose name is specified by the _**developer**_ as will be shown in the examples later in this manual.

Below is a description of the different inputs that are currently available:

- **NumberInput**: This input type allows the _**user**_ to input a number. The range and precision of the number can be specified by the _**developer**_.
- **TextInput**: This input type allows the _**user**_ to input a text. There are many instances where a text field is useful as an input. For example, the text input can be useful when a particular message from the user is needed in the output page, or the _**developer**_ can allow the _**user**_ to input a general math function that can later be recognized using python.
- **FileInput**: The _**developer**_ can allow the _**user**_ to input a file.
- **SingleSelect**:
- **MultipleSelect**:
- **Checkbox**:
- **Slider**:
- **RangeSlider**:
- **ColorPicker**:
- **DateTimePicker**:
- **RichText**:
