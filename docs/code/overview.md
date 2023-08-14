---
sidebar_label: "Overview"
sidebar_position: 1
---

# Overview

The **Code** step is responsible for running calculations on the user inputs with Python code, and then returning the computed values or visual diagrams to be displayed in the outputs. In this step, the _**developer**_ can write, debug, and compare Python code.

The `def main(inputs):` function is required, and makes the connection between inputs, code, and outputs. The `inputs` of the `main` function is a dictionary whose keys are the unique variable names defined in the **Inputs** step, and the values are the user inputs. The `main` function is expected to return a dictionary whose key-value pairs are to be used in the output step.

This step has a smart code editor (similar to VSCode) equipped with syntax highlighting, debugging, keyboard shortcuts, and code comparison. In addition, the input variables defined in the **Inputs** step can be accessed by clicking on `<> Input Variables`. The image below provides a description the code editor toolbar:

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/toolbar.png)

</div>

As an example, the function `main(inputs)` below provides the sum and product of two numerical input variables `var 1` and `var 2` and returns a dictionary of four keys: `"Sum"`, `"Product"`, `"First Variable"`, and `"Second Variable"`.

```python
def main(inputs):
    a = inputs['var_1']
    b = inputs['var_2']
    suma = a+b
    pr = a*b
    return {"Sum": suma, "Product":pr, "First Variable":a, "Second Variable":b}
```

## Input Variables

Clicking on `<> Input Variables` provides the _**developer**_ with a list of input variables that can be copied and pasted into the code editor. The pasted code will be a variable that contains the user inputted value.

As an example, the image below shows the four input variables `arrayname`, `input_0`, `input_3`, and `input_4`, where `FileInput`, `DateTimePicker`, and `NumberInput` are [input types](../inputs/input-types), and `arrayname` is a nested array of values from the [**Table Group**](../inputs/table-group).

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/input_variables.png)

</div>

These input variables correspond to the following inputs page:

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/ex_inputs.png)

</div>

## Supported Packages

The most popular Python packages are supported by default. Click on **Python 3.x** in the code toolbar to view the supported packages and its versions for all the default code environments.

If the _**developer's**_ desired library and/or version is not listed, or the _**developer**_ wishes to load a large file, then see the [**Custom Code Environments**](/code/environments) section.

In order to use these packages in the Python code, the _**developer**_ must first `import` the library as traditionally done in Python programs.

For example, the following code imports the `numpy` library and uses one of the associated functions on a numerical input.

```python
import numpy as np

def main(inputs):
    a = inputs['var_1']
    l = np.log(a)
    return{"Logarithm",l}
```
