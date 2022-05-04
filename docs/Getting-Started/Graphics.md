---
sidebar_label: "Generating Graphics"
sidebar_position: 3
---

# Generating Graphics

The output step is built on the popular [Jinja](https://jinja.palletsprojects.com/en/3.0.x/templates/) and [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) templating engines, which allows for the embedding of Python variables and for the use of Python-like expressions (eg. for-loops, if-statements).

If a _**developer**_ wishes to display graphics, such as [matplotlib](https://matplotlib.org/) plots, they can use a utility function `plt_show` provided in the following snippet of code, that exports the matplotlib figure into an image that can be embedded into the output page.

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
    # Code to generate a plot using matplot lib (plt)
    # The following line uses the plt_show function to create an embeddable image
    img = plt_show(plt)
    return {"Image": img}
```

As an example, the following snippet of code creates and exports an image of the cos function between 0 and 2Pi.

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
    x = np.arange(0,2*np.pi,0.1)
    y = np.cos(x)
    plt.plot(x,y,label="cos")
    # Labels
    plt.xlabel("x")
    plt.ylabel("y")
    # The following line uses the plt_show function to create an embeddable image
    img = plt_show(plt)
    return {"Image": img}
```
