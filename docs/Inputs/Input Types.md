---
sidebar_label: "Input Types"
sidebar_position: 4
---

The following provides a detailed description of each input type and its associated options.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Number" label="Number" default>

#### Number Input

The `NumberInput` as implied by its name, enables inputting a number to be available as an integer or a float, depending on the value entered by the _**user**_, for the **Code** step. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Units**: The units that would be displayed to the user. The units will be formatted using Latex.
- **Default Value**: The default value when the _**app**_ is deployed.
- Checkbox **Required**: If checked, the _**app**_ will not run unless the user specified a value for this input.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.
- **Step**: The precision by which the _**user**_ can input a number.
- **Min**: The minimum value that the _**user**_ can input.
- **Max**: The maximum value that the _**user**_ can input.

As an example, the following figure displays an input group with one number input labelled: "Distance" with a default value of 10 $m$ and a precision of 0.001$m$. The minimum and maximum values that are allowed as input are 0 and 10,000. The variable name to be used in the **Code** step is `dist`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/numberinput1.png)

</div>

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/numberinput2.png)

</div>
</TabItem>
<TabItem value="Text" label="Text" default>

#### Text Input

The `TextInput` as implied by its name, enables inputting text to be available as a string for the **Code** step. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Default Value**: The default value when the _**app**_ is deployed.
- **Placeholder**: If the input is blank, the Placeholder is a message displayed to the _**user**_ when editing the input.
- Checkbox **Required**: If checked, the _**app**_ will not run unless the user specified a value for this input.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.
- **Min Length**: The smallest number of characters that the _**user**_ can input.
- **Max Length**: The largest number of characters that the _**user**_ can input.
- **Pattern**: This is a sequence of characters that are used to validate the input against a form chosen by the _**developer**_. For example, the _**developer**_ can force the text input to contain letters without any numbers or special characters. For more information, consult with the [HTML input pattern attributes](https://www.w3schools.com/tags/att_input_pattern.asp) and [JavaScript Regular Expressions](https://www.w3schools.com/js/js_regexp.asp). The default value of `.*` allows any input containing spaces, special characters, letters, and numbers.

As an example, the following figure displays an input group with one text input labelled: "Pass Code" with the default value "Yes" and a placeholder of "Please input three letters". The minimum and maximum lengths are set at 3. The variable name to be used in the **Code** step is `input_0`. The pattern allows only upper case or lower case letters.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/textinput1.png)

</div>

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/textinput2.png)

</div>

</TabItem>
<TabItem value="File" label="File" default>

#### File Input

The `FileInput` as implied by its name, allows the _**user**_ to upload a file that can be read in the **Code** step. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Accept**: Provide a filter for the file. For example, type `.csv` to only allow `csv` file types.
- Checkbox **Required**: If checked, the _**app**_ will not run unless the user specified a value for this input.
- Checkbox **Multiple**: If checked, the _**user**_ can upload multiple files.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.

Please check the "Working with Files" section (coming soon) for more details about this input type. Otherwise, you can start exploring how to work with files by choosing the "Files" template when creating a new app:

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/files.png)

</div>

</TabItem>
<TabItem value="Single Select" label="Single Select" default>

#### Single Select

Using the `SingleSelect` input, the _**developer**_ provides a few options from which the _**user**_ can select a single one. The value chosen by the _**user**_ is available as a string for the **Code** step. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Accept**: Provide a filter for the file. For example, type `.csv` to only allow `csv` file types.
- **Options**: The _**developer**_ can add and remove as many options as needed.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.

Depending on the number of options, once the _**app**_ is deployed, the options will either be listed on the same line, or are available through a dropdown menu. The following example shows two `SingleSelect` inputs where `Option 1` is chosen by defaulted. The first input has three options while the second has five.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/optionselect.png)

</div>

</TabItem>
<TabItem value="Multiple Select" label="Multiple Select" default>

#### Multiple Select

Using the `MultipleSelect` input, the _**developer**_ provides a few options from which the _**user**_ can select multiple options. The options chosen by the _**user**_ are available as a list of strings for the **Code** step. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Options**: The _**developer**_ can add and remove as many options as needed.
- Checkbox **Required**: If checked, the _**app**_ will not run unless the user selected at least one option.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.
- Checkbox **Chip**: If checked, the chosen options will be displayed as chips. Otherwise, they will be simply listed and separated by commas.

The example below shows two of three options selected for a `Multiple Select` input with **Chip** checked.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/multipleselect.png)

</div>

</TabItem>
<TabItem value="Checkbox" label="Checkbox" default>

#### Checkbox

The `Checkbox` input is available in the **Code** step as a `bool` with values of `True`, if checked, and `False` if unchecked. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.
- Checkbox **Default checked**: If checked, this `Checkbox` input will be checked by default.

</TabItem>
<TabItem value="Slider" label="Slider" default>

#### Slider

Using the `Slider` input, the _**user**_ can input a number by sliding on a bar using the mouse. The _**developer**_ specifies the minimum and maximum values in addition to the step. The `Slider` input is available as an integer or a float in the **Code** step depending on the chosen value. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Default Value**: The default value of the slider input.
- **Min**: The value corresponding to the far left position of the slider.
- **Max**: The value corresponding to the far right position of the slider.
- **Step**: The precision (or step size) of the slider input.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.
- Checkbox **Marks**: If checked, tick marks separated by the step size will appear on the slider.

As an example, the figure below shows a slider with tick marks which returns a value between 0 and 100 with a step size of 5.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/slider.png)

</div>

</TabItem>
<TabItem value="Range Slider" label="Range Slider" default>

#### Range Slider

Using the `RangeSlider` input, the _**user**_ can input two numbers by sliding two ends of a bar using the mouse. The _**developer**_ specifies the minimum and maximum values in addition to the step. The `RangeSlider` input is available as a list of two integer or a float values in the **Code** step. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Default min value**: The default value of the first number in the returned list.
- **Default max value**: The default value of the second number in the returned list.
- **Min**: The value corresponding to the far left position of the range slider.
- **Max**: The value corresponding to the far right position of the range slider.
- **Step**: The precision (or step size) of the range slider input.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.
- Checkbox **Marks**: If checked, tick marks separated by the step size will appear on the slider.

As an example, the figure below shows a range slider with tick marks which returns a list of two numbers between 0 and 100 with a step size of 5. The returned value of this range slider is [25,75].

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/rangeslider.png)

</div>

</TabItem>
<TabItem value="Colour" label="Colour" default>

#### Colour Picker

The `ColorPicker` allows the _**user**_ to pick a colour from a colour palette and is available in the **Code** step as an integer value. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Default value**: The default value in the colour palette.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.

Below is a figure showing the `ColorPicker` input type.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/colour.png)

</div>

</TabItem>
<TabItem value="Date-Time" label="Date-Time" default>

#### Date-Time Picker

The `ColorPicker` allows the _**user**_ to pick a date and/or a time and is available in the **Code** step as a javascript date/time string value of the form "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'" which is the corresponding Greenwich Mean time. The following are the options that can be edited for this input type:

- **Name**: A unique variable name to be used in the **Code** step as input to the function `main`.
- **Label**: The label that appears to the _**user**_ once the final _**app**_ is deployed.
- **Type**: The _**developer**_ specifies whether the _**user**_ should input date and time, date only, or time only. If the _**user**_ is required to input the date only, then the current time will be used and vice versa.
- Checkbox **Disabled**: If checked, this input will be displayed to the _**user**_ without allowing the _**user**_ to change or edit the input values.

</TabItem>
<TabItem value="Rich Text" label="Rich Text" default>

#### Rich Text

The `RichText` editor, allows the _**developer**_ to add other elements such as formatted text, pictures, videos and many more to the input window. The text editor provides an array of icons that the _**developer**_ can use to design a visually pleasing rich text entry. Additionally, linux formatted formulas using [katex](https://katex.org/) can also be input by the _**developer**_ using the special code:

```python
{{"Linux code"|katex}}
```

:::tip

Use two backslashes "\\\" in lieu of one backslash "\" for Linux commands.

:::

For example, the following formula is used to display $$x^2+\frac{1}{x}$$.

```python
{{"x^2+\\frac{1}{x}"|katex}}
```

</TabItem>
</Tabs>

:::caution

When editing an input, don't forget to click on `APPLY CHANGES` at the bottom of the screen to save your work

:::
