---
sidebar_label: "Overview"
sidebar_position: 1
---

# Code

## Quick Overview

In the **Code** step, and through a smart in-browser code editor, the _**developer**_ is expected to code the function `main(inputs)`. All the input variables defined in the **Inputs** step are available as inputs to `main` as a dictionary whose key values are the unique variable names defined in the **Inputs** stage. The `main` function is expected to return a dictionary whose key values are available in the output stage.

**MecSimCalc** provides the _**developer**_ with a smart code editor with syntax highlighting, debugging, keyboard shortcuts, and code comparison. In addition, the input variables defined in the **Inputs** stage can be accessed in the **Code** stage through clicking on `<> Input Variables`. The figure below provides a description of the components of the code editor.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/code2.png)

</div>

As an example, the function `main(inputs)` below provides the sum and product of two numerical input variables `var 1` and `var 2` and returns a dictionary of four keys: `"Sum"`, `"Product"`, `"First Variable"`, and `"Second Variable"`.

```python
def main(inputs):
    a=inputs['var_1']
    b=inputs['var_2']
    suma=a+b
    pr=a*b
    return {"Sum": suma,"Product":pr, "First Variable":a, "Second Variable":b}
```

## Input Variables

Clicking on `Input Variables` provides the _**developer**_ with a list of the input variables that can be copied and pasted in the code editor. As an example, the figure below shows the four input variables `arrayname`, `input_0`, `input_3`, and `input_4`. These are available as output from the three [input types](../inputs/Input-Types.md): `FileInput`, `DateTimePicker`, and `NumberInput`. The `arrayname` on the other hand is a list of outputs of a [`Table Group`](../inputs/TableGroup.md).

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/code3.png)

</div>

These outputs correspond to the following inputs page:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/code4.png)

</div>

## Supported Libraries

The list of supported libraries are available by clicking on the relevant icon in the code editor. In order to use any of the supported libraries, the _**developer**_ should import the library as traditionally done in python programs. For example, the following code imports the `numpy` library and uses one of the associated functions applied to a numerical input.

```python
import numpy as np

def main(inputs):
    a=inputs['var_1']
    l=np.log(a)
    return{"Logarithm",l}
```
