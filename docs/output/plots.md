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

Once your Matplotlib figure is ready to be displayed, convert it to a HTML string with the `<img>` tag that can be embedded into the outputs step. As follows:

### Code

```python
import matplotlib.pyplot as plt
import numpy as np
import base64
import io


def plt_show(plt, width=500, dpi=100):
    # Converts matplotlib plt to image data string
    #   plt is the matplotlib pyplot or figure
    #   width is the width of the graph image in pixels
    #   dpi (dots per inch) is the resolution of the image
    bytes = io.BytesIO()
    plt.savefig(bytes, format='png', dpi=dpi)  # Save as png image
    if hasattr(plt, "close"):
        plt.close()
    bytes.seek(0)
    base64_string = "data:image/png;base64," + \
        base64.b64encode(bytes.getvalue()).decode("utf-8")
    return "<img src='" + base64_string + "' width='" + str(width) + "'>"

def main(inputs):
    # Create matplotlib figure
    x = np.arange(0, 2, 0.01)
    y = 2*(np.cos(4*x))
    plt.plot(x, y)

    # Convert figure to html using plt_show()
    plot_html = plt_show(plt)
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
