---
sidebar_label: "Latex"
sidebar_position: 2
---

# Latex

**MecSimCalc** uses [KateX](https://katex.org/) for displaying equations in latex format within the [Rich Text](../inputs/Input-Types) and [**Output**](Overview) in-browser editors. A latex formula can be inserted using the following form:

```
{{ "latex expression" | katex }}
```

Unlike traditional latex expressions, to display your formulas properly the character "\" should be replaced with "\\\". As an example, the following expression is used to display the equation that follows:

```
{{ "P=\\frac{2 \\sigma_y t}{OD} \\times F \\times L \\times J \\times T" | katex }}
```

$$P=\frac{2 \sigma_y t}{OD} \times F \times L \times J \times T$$

Alternatively, the _**developer**_ can choose to use the `main` function in the **Code** stage to return a latex expression as a string (with the escape character repeated "\\\") or a [raw string](https://www.journaldev.com/23598/python-raw-string) (which precludes the need to repeat the escape character) and then use this output variable in place of "latex expression". A [raw string](https://www.journaldev.com/23598/python-raw-string) is simply created by adding the character r before the string quotation marks.

As a demonstration, the online [_**app**_](https://mecsimcalc.com/app/8432496/displaying_katex_equations) provides an example where the _**user**_ inputs a value for $y$ and the _**app**_ then displays the following equation using three different methods:
$$y=value=\frac{x^2+f(x)+\log(x)}{\cos(x)}$$

The code for this app has the form:

```python
def main(inputs):
    y=inputs['y']
    string1="y="+str(y)+"=\\frac{x^2+f(x)+\\log(x)}{\\cos{x}}"
    string2="y="+str(y)+r"=\frac{x^2+f(x)+\log(x)}{\cos{x}}"
    return {"Regular String": string1, "Raw String": string2, "y":y}
```

The following is the text in the output editor:

```
Equation output using regular string:
{{ outputs["Regular String"] |katex}}

Equation output using raw string:
{{ outputs["Raw String"] |katex}}

Equation output using output editor:
{{ "y=" | katex }}{{ outputs.y | katex }}{{ "=\\frac{x^2+f(x)+\\log(x)}{\\cos(x)}" | katex}}
```
