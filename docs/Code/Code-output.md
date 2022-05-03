---
sidebar_label: "Code Output"
sidebar_position: 2
---

# Code Output

## Overview

The outputs of the function `main` are available to be inserted in the **Output** step. **MecSimCalc** platform expects the function `main` to return a [dictionary](https://www.w3schools.com/python/python_dictionaries.asp) whose keys can be inserted in the **Output** editor. When the _**app**_ is run by the _**user**_, the corresponding values are then displayed. As described in the [Distance Converter Example](getting-started\example-1.md), the following figure shows the overall layout of the inputs, code, and output editor. The function `main` returned a dictionary with three keys: `"Feet"`, `"Inches"`, and `"Metre"` with the corresponding variables which were defined within the function itself: `ft`, `inches`, and `m`. The dictionary keys were then inserted in the output editor as `{{outputs.Feet}}`, `{{outputs.Inches}}`, and `{{outputs.Metre}}`. When a _**user**_ runs the _**app**_, the corresponding values are displayed.

<div style={{textAlign: 'center'}}>

![img alt](/docs/app_flow.png)

</div>

Below is an instance of running the [_**app**_](https://mecsimcalc.com/app/4022206/distance_converter) with an input of 10m.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/converter.png)

</div>

## Number Output

The _**developer**_ can chose to return any numerical variables defined within the `main` function. The numerical value can be output as is, or the _**developer**_ can chose to use any rounding or formatting function to ensure the number has a particular form. As shown in the figure above, the variable `ft` was defined as an integer value while the value `inches` was defined using the `round` function. One can also use the `.format()` [python function](https://queirozf.com/entries/python-number-formatting-examples) for formatting numbers. For example, the following code outputs the variable `payment` as a dollar value with two decimal places:

```python
def main(inputs):
    ...
    payment=......
    return{"Payment",'${:,.2f}'.format(payment)}
```

Please see the [Mortgage Calculator _**app**_](https://mecsimcalc.com/app/3333910/mortgage_calculator) for an example whose output is in currency format.

## String Output

The _**developer**_ can choose to have the function `main` return string variables. For example, the following code returns the string variable `t` which is input by the user. The `.replace()` method is used to strip any spaces and create the string variable `s` which is also returned by the functon `main`. The two output strings are available in the output editor as: `{{ outputs["Original Text"] }}` and `{{ outputs["Stripped Text"] }}`. You can see this _**app**_ in action [here](https://mecsimcalc.com/app/6796205/strip_spaces_function).

```python
def main(inputs):
    t=inputs['input_0']
    s=t.replace(" ","")
    return {"Original Text": t,"Stripped Text":s}
```

## HTML Output

As described in [Step 4: Output](../getting-started/quick-overview#step-4-output), the _**developer**_ can design a **smart** output page using an **Output** editor which accepts html content. The _**developer**_ can choose to output any string of html format which can then be embedded in the **Output** editor. Please review [Example 3](../getting-started/Example3.md) which provides the details of outputting a table using html.

## File Data Output

The _**developer**_ can also choose to output file data as a string. The data can then be available for the _**user**_ to download as a file. More details are provided at a later section detailing managing files input and output through **MecSimCalc**.
