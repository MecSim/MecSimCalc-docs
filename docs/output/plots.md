---
sidebar_label: "Plots"
sidebar_position: 2
---

# Plots

MecSimCalc supports the two most popular plotting libraries:

1. Matplotlib
2. Plotly

## Matplotlib

> Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.

Visit [matplotlib.org](https://matplotlib.org/) for full documentation on how to use Matplotlib:

- [Users guide](https://matplotlib.org/stable/users/index.html)
- [Reference](https://matplotlib.org/stable/api/index.html)
- [Tutorials](https://matplotlib.org/stable/tutorials/index.html)

Once your Matplotlib figure is ready to be displayed, convert it to a HTML string using the mecsimcalc library as follows:

### Code

```python
import matplotlib.pyplot as plt
import numpy as np
import mecsimcalc as msc


def main(inputs):
    # Create matplotlib figure
    x = np.arange(0, 2, 0.01)
    y = 2*(np.cos(4*x))
    plt.plot(x, y)

    # Convert figure to html using msc.print_plot()
    plot_html = msc.print_plot(plt)
    return {"plot": plot_html}
```

### Output

```html
{{ outputs.plot }}
```

See [Example 2](../getting-started/example-2) in the introduction section for a detailed example on using Matplotlib.

## Plotly

> Plotly's Python graphing library makes interactive, publication-quality graphs.

Visit [plotly.com/python](https://plotly.com/python/) for full documentation on how to use Plotly:

- [Reference](https://plotly.com/python-api-reference/)
- [Fundamentals](https://plotly.com/python/plotly-fundamentals/)

Once your Plotly figure is ready to be displayed, convert it to a HTML string that can be embedded into the outputs step. As follows:

### Code

```python
import plotly.express as px
import pandas as pd
import numpy as np


def main(inputs):
    # Create plotly figure
    x = np.arange(0, 2, 0.01)
    y = 2*(np.cos(4*x))
    fig = px.line(x, y, title="Cosine")

    # Convert figure to html using to_html()
    plot_html = fig.to_html(include_plotlyjs=True, full_html=False)
    return {"plot": plot_html}
```

:::caution
In `.to_html()`, `include_plotlyjs` must be set to `True` for the plot to be displayed.
:::

### Output

```html
{{ outputs.plot }}
```

### Plotly Slider

To create a plotly figure with a slider, you can use the `plot_slider` function from the `mecsimcalc` library. The `plot_slider` function takes in a function and returns the plotly figure with a slider. The function has two arguments: the first argument is the value of the slider, and the second argument is the x value.

### Code

```python
import mecsimcalc as msc

def parabola(a, x): # a is the value of the slider
    return a * x ** 2

def main(inputs):
    plot_html = msc.plot_slider(parabola, x_range=(-10, 10), y_range=(-100, 100), initial_value=4, slider_range=(-10,10))
    return {"plot": plot_html}
```

### Output

<div style={{textAlign: 'center'}}>

![sine function gif](./images/slider.png)

</div>
