---
sidebar_label: "Generating Graphics"
sidebar_position: 3
---

MecSimCalc platform is built over [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) allowing embedding of many python elements into an HTML file. If a _**developer**_ wishes to display graphics such as those generated using [matplotlib](https://matplotlib.org/), they can use a utility function `plt_show` provided in the following snippet of code, that exports the matplotlib object into an image embeddable into the output page.

```python
import matplotlib.pyplot as plt
import numpy as np
import base64
import io

def plt_show(plt, width=500, dpi=100):
    # Converts matplotlib plt to data string
    # dpi (dots per inch) is the resolution of the image
    # width is width of image in pixels
    bytes = io.BytesIO()
    plt.savefig(bytes, format='png', dpi=dpi)  # Save as png image
    plt.close()
    bytes.seek(0)
    base64_string = "data:image/png;base64," + \
        base64.b64encode(bytes.getvalue()).decode("utf-8")
    return "<img src='" + base64_string + "' width='" + str(width) + "'>"

def main(inputs):
    # Code to generate a plot using matplot lib (plt)
    # The following line uses the plt_show function to create an embeddable image
    img = plt_show(plt, 500)
    return {"Image": img}
```

As an example, the following snippet of code creates and exports an image of the cos function between 0 and 2Pi.

```python
import matplotlib.pyplot as plt
import numpy as np
import base64
import io

def plt_show(plt, width=500, dpi=100):
    # Converts matplotlib plt to data string
    # dpi (dots per inch) is the resolution of the image
    # width is width of image in pixels
    bytes = io.BytesIO()
    plt.savefig(bytes, format='png', dpi=dpi)  # Save as png image
    plt.close()
    bytes.seek(0)
    base64_string = "data:image/png;base64," + \
        base64.b64encode(bytes.getvalue()).decode("utf-8")
    return "<img src='" + base64_string + "' width='" + str(width) + "'>"

def main(inputs):
    x=np.arange(0,2*np.pi,0.1)
    y=np.cos(x)
    plt.plot(x,y,label="cos")
    # Labels
    plt.xlabel("x")
    plt.ylabel("y")
    # The following line uses the plt_show function to create an embeddable image
    img = plt_show(plt, 500)
    return {"Image": img}
```
