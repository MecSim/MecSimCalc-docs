---
sidebar_label: "Latex"
sidebar_position: 2
---

# Latex

**MecsimCalc** uses [KateX](https://katex.org/) for displaying equations in latex format within the [Rich Text](../Inputs/Input-Types.md) and [**Output**](Overview) in-browser editors. A latex formula can be inserted using the following form

```
{{ "latex expression" | katex }}
```

Unlike traditional latex expressions, to display your formulas properly the character "\" should be replaced with "\\\". As an example, the following expression is used to display the equation that follows:

```
{{ "P=\\frac{2 \\sigma_y t}{OD} \\times F \\times L \\times J \\times T" | katex }}
```

$$P=\frac{2 \sigma_y t}{OD} \times F \times L \times J \times T$$
