---
sidebar_label: "Conditionals"
sidebar_position: 3
---

# Conditionals

**MecsimCalc** platform is built upon [**Django**](https://www.djangoproject.com/); a high-level python web framework. **Django** operations, including `if` and `for` statements, can be performed within curly brackets `{}`. Output variables and their operations are inserted using two sets of curly brackets `{{}}` while conditionals should be typed within `{% %}`. Conditionals be typed in the editor or inserted using the icons.

## If Statement

The `if` statement in the following form can be used in the output editor:

```python
{% if test1 %}
#output if test1 is true
{% elif test2 %}
#output if test2 is true
{% else test2 %}
#output if all previous tests  are false
{%  endif %}
```

### Example

In this published [_**app**_](https://mecsimcalc.com/app/9164993/pressure_design_of_pipeline_according_to_csa_z_662), the CSA Z662.19 design equations are used to calculate the design pressure of a pipe. The _**app**_ then compares the design pressure with the operating pressure and `if` condition is used in the output to indicate whether the pipe is safe or unsafe.

There are seven inputs used. Four are [**numerical inputs**](../Inputs/Input-Types.md): the Diameter `d`, the Wall Thickness `t`, the Grade `sy`, and the Operating Pressuer `p` while three are [**Single Select**](../Inputs/Input-Types.md): the Location Factor `l`, the Temperature Factor `tf`, and the Joint Factor `j`. The layout of the inputs page is shown in the figure below.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/examplepipe.png)

</div>

The code for this app is given below

```python
def main(inputs):
    d=inputs['d']
    t=inputs['t']
    sy=inputs['sy']
    p=inputs['p']
    lf=inputs['l']
    ldic={"1.0":1.0,"0.9":0.90,"0.8":0.80, "0.75":0.75, "0.7":0.7, "0.625":0.625, "0.55":0.55, "0.5":0.5 }
    ln=ldic[lf]
    jf=inputs['j']
    jdic={"Seamless (1.00)":1.0, "Electric Welded (1.00)":1.0, "Submerged arc welded (1.00)":1.0, "Continuous welded (0.60)":0.6}
    jn=jdic[jf]
    tf=inputs['tf']
    tdic={"Up to 120 (1.00)": 1.0, "150 (0.97)":0.97, "180 (0.93)":0.93, "200 (0.91)":0.91, "230 (0.87)":0.87}
    tn=tdic[tf]
    dp=2*sy*t/d*0.8*ln*jn*tn
    dp=round(dp,2)
    return {"Operating Pressure": p, "Design Pressure":dp}
```

Notice how the **Single Select** variables which are strings are treated differently from the **Numerical Inputs**. A dictionary is used to find the factors corresponding to the option selected by the _**user**_. TThe code returns a dictionary with two keys: `Operating Pressure` and `Design Pressure`. The `if` condition compares the two variables with each other to display a different message based on this comparison. The following is the text in the **Output** editor (Notice that the output variables were used in the `if` statement without the curly brackets):

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/examplepipeoutput.png)

</div>

## For Statement

The `for` statement in the following form can be used in the output editor:

```python
{% for i in foo %}
#output for every i
{% endfor %}
```

### Example

In this published [_**app**_](https://mecsimcalc.com/app/1535961/using_for_loop), the user inputs an integer value. The _**app**_ then outputs a table of all the numbers up to the integer value along with their squares.

The _**user**_ is required to input an integer value `a`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/examplefor.png)

</div>

The code simply outputs a dictionary with one key `Count`:

```python
def main(inputs):
    a = inputs['a']
    return {"Count": a}
```

In the output editor, a condition along with the HTML table tags are used to generate a table based on the value of `Count`.

```
<table>
<th>Number</th><th>It's square</th>

{% for i in range(outputs.Count) %}
<tr>
<td>
{{i+1}}
</td>
<td>
{{(i+1)**2}}
</td>
</tr>
{% endfor %}

</table>
```

Notice how the python function `range` was used in the `for` statement and that inside the `for` statement, the output variable `outputs.Count` was used without any curly brackets. Notice as well how arithmetic operations (adding of the value of 1 and squaring the numbers) are done within two sets of curly brackets.
