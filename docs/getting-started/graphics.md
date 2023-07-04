---
sidebar_label: "Generating Graphics"
sidebar_position: 3
---

# Generating Graphics

The output step is built on the popular [Jinja](https://jinja.palletsprojects.com/en/3.0.x/templates/) and [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) templating engines, which allows for the embedding of Python variables and for the use of Python-like expressions (eg. for-loops, if-statements).

If a _**developer**_ wishes to display graphics, such as [matplotlib](https://matplotlib.org/) plots, they can use a mecsimcalc function `msc.print_plot` provided in the following snippet of code, which exports the matplotlib figure into an html image.

```python
import matplotlib.pyplot as plt
import numpy as np
import mecsimcalc as msc

def main(inputs):
    # Code to generate a plot using matplotlib (plt)

    # The following line uses the msc.print_plot() function to create an HTML image
    img = msc.print_plot(plt)
    return {"Image": img}
```

As an example, the following snippet of code creates and exports an image of the cos function between 0 and 2Pi.

```python
import matplotlib.pyplot as plt
import numpy as np
import mecsimcalc as msc

def main(inputs):

    # Code to generate a plot using matplotlib (plt)
    x = np.arange(0,2*np.pi,0.1)
    y = np.cos(x)
    plt.plot(x,y,label="cos")
    plt.xlabel("x")
    plt.ylabel("y")

    # The following line uses the plt_show function to create an embeddable image
    img = msc.print_plot(plt)
    return {"Image": img}
```
