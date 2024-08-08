---
sidebar_label: "Plot Draw"
sidebar_position: 2
---

<div style={{ margin: '1em 0' }}>
  <label htmlFor="version-select" style={{ fontWeight: 'bold', marginRight: '10px' }}>Select Version:</label>
  <select id="version-select" onChange={(e) => window.location.href = e.target.value}>
     <option value="">Latest Release (v0.2.0)</option>
    <option value="https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.1.9/PLOTDRAW_README.md">v0.1.9</option>
  </select>
</div>
# Plot Draw

This library is designed to provide a set of functions for drawing various types of plots, arrows, segments, and shapes using Matplotlib. These functions allow for customized plotting and annotation of graphical elements.

## General

### draw_arrow

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L7C1-L84C78)

```python
draw_arrow(
    start,
    end,
    thickness = 5,
    color = "black",
    text = "",
    text_offset = 0.5,
    head_width = 0.08,
    head_length = 0.08,
    fontsize = 12,
    ax = None
) -> None
```

#### Description:

Draws an arrow between two points on a plot.

#### Arguments:

| Argument          | Type                    | Description                                                                       |
| ----------------- | ----------------------- | --------------------------------------------------------------------------------- |
| **`start`**       | **Tuple[float, float]** | The starting point of the arrow (x, y).                                           |
| **`end`**         | **Tuple[float, float]** | The ending point of the arrow (x, y).                                             |
| **`thickness`**   | **float** (optional)    | The thickness of the arrow line. (Default is 5)                                   |
| **`color`**       | **str** (optional)      | The color of the arrow. (Default is 'black')                                      |
| **`text`**        | **str** (optional)      | Text to display near the arrow. (Default is None)                                 |
| **`text_offset`** | **float** (optional)    | Distance from the arrow end point where the text will be placed. (Default is 0.5) |
| **`head_width`**  | **float** (optional)    | Width of the arrow head. (Default is 0.08)                                        |
| **`head_length`** | **float** (optional)    | Length of the arrow head. (Default is 0.08)                                       |
| **`fontsize`**    | **float** (optional)    | Font size of the text. (Default is 12)                                            |
| **`ax`**          | **plt.Axes** (optional) | The Axes object to draw the arrow on. (Default is None)                           |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_arrow((0, 0), (1, 1), thickness=2, color='red', text='Arrow', text_offset=0.1, head_width=0.1, head_length=0.1, fontsize=10)
    plt.xlim(-1, 2)
    plt.ylim(-1, 2)
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

#### Output:

<div style={{textAlign: 'center'}}>
![Arrow](./images/draw_arrow.png)
</div>

### calculate_midpoint

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L87C1-L121C1)

```python
calculate_midpoint(
    coord1,
    coord2
) -> Tuple[float, float]
```

#### Description:

Calculates the midpoint between two coordinates.

#### Arguments:

| Argument     | Type                    | Description                   |
| ------------ | ----------------------- | ----------------------------- |
| **`coord1`** | **Tuple[float, float]** | The first coordinate (x, y).  |
| **`coord2`** | **Tuple[float, float]** | The second coordinate (x, y). |

#### Returns:

| Return Type          | Description                                         |
| -------------------- | --------------------------------------------------- |
| **`(float, float)`** | A tuple containing the coordinates of the midpoint. |

#### Example:

```python
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    midpoint = plot_draw.calculate_midpoint((0, 0), (2, 2))
    return {"midpoint": midpoint}

# Expected output: {"midpoint": (1.0, 1.0)}

```

### draw_arc

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L123C1-L167C22)

```python
draw_arc(
    radius,
    start_angle,
    end_angle,
    center = (0, 0),
    degrees = False,
    color = "red",
    ax = None,
) -> None
```

#### Description:

Draws an arc of a circumference with a given radius between two angles.

#### Arguments:

| Argument          | Type                    | Description                                           |
| ----------------- | ----------------------- | ----------------------------------------------------- |
| **`radius`**      | **float**               | The radius of the circumference.                      |
| **`start_angle`** | **float**               | The starting angle of the arc in radians.             |
| **`end_angle`**   | **float**               | The ending angle of the arc in radians.               |
| **`center`**      | **tuple** (optional)    | The center of the circumference. (Default is (0, 0))  |
| **`degrees`**     | **bool** (optional)     | Whether the angles are. (Default is False)            |
| **`color`**       | **str** (optional)      | The color of the arc. (Default is 'red')              |
| **`ax`**          | **plt.Axes** (optional) | The Axes object to draw the arc on. (Default is None) |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_arc(5, 0, 90, degrees=True)
    plot = msc.print_plot(plt)
    return {'plot': plot}.
```

<div style={{textAlign: 'center'}}>
![quarter circle arc](./images/draw_arc.png)
</div>

### create_blank_canvas

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L170C1-L213C14)

```python
create_blank_canvas(
    width = 1000,
    height = 1000,
    color = "white"
) -> plt.Axes
```

#### Description:

Creates a blank image with specified width and height, displaying a grid.

#### Arguments:

| Argument     | Type               | Description                                             |
| ------------ | ------------------ | ------------------------------------------------------- |
| **`width`**  | **int** (optional) | The width of the image in pixels. (Default is 1000)     |
| **`height`** | **int** (optional) | The height of the image in pixels. (Default is 1000)    |
| **`color`**  | **str**(optional)  | The background color of the image. (Default is 'white') |

#### Returns:

| Return Type    | Description                                 |
| -------------- | ------------------------------------------- |
| **`plt.Axes`** | The Axes object of the created blank image. |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    ax = plot_draw.create_blank_canvas(800, 600, color='lightgrey')
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![grey canvas](./images/create_blank_canvas.png)
</div>

### draw_three_axes

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L216C1-L343C14)

```python
draw_three_axes(
    arrow_length,
    arrow_thickness = 2,
    text_offset = 0.1,
    longx = 1.5,
    axis_y_negative = False,
    axis_x_negative = False,
    ax = None
) -> plt.Axes
```

#### Description:

Draws a set of three axes (x, y, z) with optional negative directions for x and y.

#### Arguments:

| Argument              | Type                    | Description                                                                    |
| --------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| **`arrow_length`**    | **float**               | The length of the arrows representing the axes.                                |
| **`arrow_thickness`** | **float** (optional)    | The thickness of the arrows. (Default is 2)                                    |
| **`text_offset`**     | **float** (optional)    | The distance between the end of the arrow and the label text. (Default is 0.1) |
| **`longx`**           | **float** (optional)    | The factor to adjust the length of the diagonal x-axis. (Default is 1.5)       |
| **`axis_y_negative`** | **bool** (optional)     | Draws negative y-axis if True. (Default is False)                              |
| **`axis_x_negative`** | **bool** (optional)     | draws negative x-axis if True. (Default is False)                              |
| **`ax`**              | **plt.Axes** (optional) | The Axes object to draw the axes on. (Default is None)                         |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc

def main(inputs):
    ax = msc.draw_three_axes(arrow_length=1, axis_y_negative=True, axis_x_negative=True)
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![three axes](./images/draw_three_axes.png)
</div>

### draw_two_inclined_axes

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L346C1-L460C14)

```python
draw_two_inclined_axes(
    arrow_length,
    arrow_thickness = 2,
    text_offset = 0.1,
    longx = 1.5,
    axis_y_negative = False,
    axis_x_negative = False,
    ax = None
) -> plt.Axes
```

#### Description:

Draws two inclined axes (x and y) with optional negative directions.

#### Arguments:

| Argument              | Type                    | Description                                                                    |
| --------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| **`arrow_length`**    | **float**               | The length of the arrows representing the axes.                                |
| **`arrow_thickness`** | **float** (optional)    | The thickness of the arrows. (Default is 2)                                    |
| **`text_offset`**     | **float** (optional)    | The distance between the end of the arrow and the label text. (Default is 0.1) |
| **`longx`**           | **float** (optional)    | The factor to adjust the length of the diagonal y-axis. (Default is 1.5)       |
| **`axis_y_negative`** | **bool** (optional)     | Draws negative y-axis if True. (Default is False)                              |
| **`axis_x_negative`** | **bool** (optional)     | Draws negative x-axis if True. (Default is False)                              |
| **`ax`**              | **plt.Axes** (optional) | The Axes object to draw the axes on. (Default is None)                         |

#### Returns:

| Return Type    | Description                          |
| -------------- | ------------------------------------ |
| **`plt.Axes`** | The Axes object with the drawn axes. |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    ax = plot_draw.draw_two_inclined_axes(arrow_length=1, arrow_thickness=2, text_offset=0.1, longx=1.5, axis_y_negative=True, axis_x_negative=True)
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![2 inclined axes](./images/draw_two_inclined_axes.png)
</div>

## Segments

### plot_dashed_line

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L463C1-L549C1)

```python
plot_dashed_line(
    start,
    end,
    text = "",
    text_offset = 150,
    fontsize = 15,
    alpha = 0.8
    line_properties = None,
    text_properties = None,
    ax = None
) -> Tuple[float, float]
```

#### Description:

Plots a line segment between two points and adds a label at the end point.

#### Arguments:

| Argument              | Type                    | Description                                                                           |
| --------------------- | ----------------------- | ------------------------------------------------------------------------------------- |
| **`start`**           | **tuple**               | The starting point of the line segment (x, y).                                        |
| **`end`**             | **tuple**               | The ending point of the line segment (x, y).                                          |
| **`text`**            | **str** (optional)      | The text to display near the end point of the line segment. (Default is "")           |
| **`text_offset`**     | **float** (optional)    | Minimum spacing for the text from the end point. (Default is 150)                     |
| **`fontsize`**        | **int** (optional)      | Font size of the text. (Default is 15)                                                |
| **`alpha`**           | **float** (optional)    | Transparency level of the line segment. (Default is 0.8)                              |
| **`line_properties`** | **dict** (optional)     | Properties for the line, including color, linewidth, and linestyle. (Default is None) |
| **`text_properties`** | **dict** (optional)     | Properties for the text, such as horizontal and vertical alignment. (Default is None) |
| **`ax`**              | **plt.Axes** (optional) | The Axes object to draw the line segment on. (Default is None)                        |

#### Returns:

| Return Type          | Description                               |
| -------------------- | ----------------------------------------- |
| **`(float, float)`** | The end point of the line segment (x, y). |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    start = (100, 200)
    end = (400, 500)
    end = plot_draw.plot_dashed_line(start, end, text="Segment", text_offset=50)
    plot = msc.print_plot(plt)
    return {'plot': plot, 'end': end}

# The end point of the segment is (400, 500).
```

<div style={{textAlign: 'center'}}>
![segment](./images/plot_dashed_line.png)
</div>

### plot_annotate_arrow

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L551C1-L699C1)

```python
plot_annotate_arrow(
    start,
    angle,
    length,
    degrees = False,
    text = "",
    text_offset = 0.1,
    fontsize = 11,
    text_properties = None ,
    arrow_properties = None,
    reverse = False,
    center_text = False,
    reverse_text = False,
    alpha = 0.8,
    ax = None
) -> tuple[float, float]
```

#### Description:

Plots an annotated arrow starting from a given point and extending in a given direction.

#### Arguments:

| Argument               | Type                    | Description                                                                                               |
| ---------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------- |
| **`start`**            | **tuple**               | The starting point of the arrow (x, y).                                                                   |
| **`angle`**            | **float**               | The angle of the arrow.                                                                                   |
| **`length`**           | **float**               | The length of the arrow.                                                                                  |
| **`degrees`**          | **bool** (optional)     | Whether the angle is. (Default is False)                                                                  |
| **`text`**             | **str** (optional)      | The text to display near the arrow. (Default is "")                                                       |
| **`text_offset`**      | **float** (optional)    | Distance from the arrow end point where the text will be placed. (Default is 0.1)                         |
| **`fontsize`**         | **float** (optional)    | Font size of the text.                                                                                    |
| **`text_properties`**  | **dict** (optional)     | Properties for the text, such as horizontal and vertical alignment. (Default is None)                     |
| **`arrow_properties`** | **dict** (optional)     | Properties for the arrow, including width, head_width, head_length, fill color (fc), and edge color (ec). |
| **`reverse`**          | **str** (optional)      | Whether to reverse the direction of the arrow. (Default is False)                                         |
| **`center_text`**      | **str** (optional)      | Whether to place the text in the center of the arrow. (Default is False)                                  |
| **`reverse_text`**     | **str** (optional)      | Whether to reverse the text orientation. (Default is False)                                               |
| **`alpha`**            | **float** (optional)    | Transparency level of the arrow.                                                                          |
| **`ax`**               | **plt.Axes** (optional) | The Axes object to draw the arrow on.                                                                     |

#### Returns:

| Return Type          | Description                        |
| -------------------- | ---------------------------------- |
| **`(float, float)`** | The end point of the arrow (x, y). |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    start = (100, 200)
    angle = 45
    length = 100
    end = plot_draw.plot_annotate_arrow(start, angle, length, text="Arrow", text_offset=50)
    plot = msc.print_plot(plt)
    return {'plot': plot, 'end': end}

# The end point of the arrow is (170.71067811865476, 270.71067811865476)
```

<div style={{textAlign: 'center'}}>
![arrow](./images/plot_annotate_arrow.png)
</div>

### draw_custom_arrow

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L700C1-L785C1)

```python
draw_custom_arrow(
    start,
    end,
    factor = 0.5,
    max_value = 100,
    arrow_vector_length = 50,
    arrow_width = 5,
    arrow_color = "blue",
    line_width = 1,
    text = "",
    ax = None
) -> None
```

#### Description:

Draws a custom arrow from a start point to another point on a given axis, using pixel-based parameters.

#### Arguments:

| Argument                  | Type                    | Description                                                                         |
| ------------------------- | ----------------------- | ----------------------------------------------------------------------------------- |
| **`start`**               | **tuple**               | The starting point of the arrow (x, y) in pixels.                                   |
| **`end`**                 | **tuple**               | The end point of the arrow (x, y) in pixels.                                        |
| **`factor`**              | **float** (optional)    | A factor to adjust the position of the text relative to the arrow. (Default is 0.5) |
| **`max_value`**           | **float** (optional)    | The maximum value for scaling the arrow length. (Default is 100)                    |
| **`arrow_vector_length`** | **float** (optional)    | The length of the arrow vector. (Default is 50)                                     |
| **`arrow_width`**         | **float** (optional)    | The width of the arrow head in pixels. (Default is 5)                               |
| **`arrow_color`**         | **str** (optional)      | The color of the arrow. (Default is 'blue')                                         |
| **`line_width`**          | **float** (optional)    | The width of the arrow line. (Default is 1)                                         |
| **`text`**                | **str** (optional)      | The text to display near the end of the arrow.                                      |
| **`ax`**                  | **plt.Axes** (optional) | The Axes object to draw the arrow on.                                               |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    fig, ax = plt.subplots()
    plot_draw.draw_custom_arrow(ax, (0, 0), (100, 100), factor=0.5, max_value=100, arrow_vector_length=50, arrow_width=5, text="Custom Arrow")
    plot = msc.print_plot(plt)
    return {'plot': plot}

# Expected output: A plot displaying a custom arrow with the label "Custom Arrow".

```

### calculate_arrow_endpoint

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L787C1-L823C1)

```python
calculate_arrow_endpoint(
    start,
    angle,
    length,
    degrees = False
) -> tuple[float, float]
```

#### Description:

Calculates the end point of an arrow in pixel coordinates.

#### Arguments:

| Argument      | Type      | Description                                                  |
| ------------- | --------- | ------------------------------------------------------------ |
| **`start`**   | **tuple** | The starting point of the arrow (x, y) in pixel coordinates. |
| **`angle`**   | **float** | The angle of the arrow.                                      |
| **`length`**  | **float** | The length of the arrow.                                     |
| **`degrees`** | **bool**  | Whether the angle is. (Default is False)                     |

#### Returns:

| Return Type          | Description                                             |
| -------------------- | ------------------------------------------------------- |
| **`(float, float)`** | The end point of the arrow (x, y) in pixel coordinates. |

#### Example:

```python
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    endpoint = plot_draw.calculate_arrow_endpoint((100, 200), 45, 50, degrees=True)
    return {"endpoint": endpoint}

# Expected output: {"endpoint": (135.35533905932738, 235.35533905932738)}
```

### plot_segment

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L825C1-L911C21)

```python
plot_segment(
    start,
    angle,
    length,
    degrees = False,
    text = "",
    text_offset = 150,
    fontsize = 15,
    alpha = 0.8,
    line_properties = None,
    text_properties = None,
    ax = None
) -> tuple[float, float]
```

#### Description:

Plots a line segment starting from a given point with a specific angle and length.

#### Arguments:

| Argument              | Type                    | Description                                                                        |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| **`start`**           | **tuple**               | The starting point of the line segment (x, y).                                     |
| **`angle`**           | **float**               | The angle of the line segment.                                                     |
| **`length`**          | **float**               | The length of the line segment.                                                    |
| **`degrees`**         | **bool** (optional)     | Whether the angle is. (Default is False)                                           |
| **`text`**            | **str** (optional)      | The text to display near the end of the line segment. (Default is "")              |
| **`text_offset`**     | **float** (optional)    | Minimum spacing between the end of the line segment and the text. (Default is 150) |
| **`fontsize`**        | **int** (optional)      | The font size of the text. (Default is 15)                                         |
| **`alpha`**           | **float** (optional)    | The alpha value for transparency. (Default is 0.8)                                 |
| **`line_properties`** | **dict** (optional)     | Properties of the line segment such as color and linewidth.                        |
| **`text_properties`** | **dict** (optional)     | Properties for the text, such as horizontal and vertical alignment.                |
| **`ax`**              | **plt.Axes** (optional) | The Axes object to draw the line segment on.                                       |

#### Returns:

| Return Type          | Description                               |
| -------------------- | ----------------------------------------- |
| **`(float, float)`** | The end point of the line segment (x, y). |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    end = plot_draw.plot_segment((100, 200), 45, 50, text='Value', degrees=True)
    plot = msc.print_plot(plt)
    return {'plot': plot, 'end': end}

# The end point of the segment is (135.35533905932738, 235.35533905932738).
```

<div style={{textAlign: 'center'}}>
![segment](./images/plot_segment.png)
</div>

### plot_segment_dashed

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L914C1-L1001C21)

```python
plot_segment_dashed(
    start,
    angle,
    length,
    degrees: bool = False,
    text = "",
    text_offset = 150,
    fontsize = 15,
    alpha = 0.8,
    line_properties = None,
    text_properties = None,
    ax = None
) -> tuple[float, float]
```

#### Description:

Plots a dashed line segment starting from a given point with a specific angle and length.

#### Arguments:

| Argument              | Type                    | Description                                                                        |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| **`start`**           | **tuple**               | The starting point of the line segment (x, y).                                     |
| **`angle`**           | **float**               | The angle of the line segment.                                                     |
| **`length`**          | **float**               | The length of the line segment.                                                    |
| **`text`**            | **str** (optional)      | The text to display near the end of the line segment. (Default is "")              |
| **`text_offset`**     | **float** (optional)    | Minimum spacing between the end of the line segment and the text. (Default is 150) |
| **`fontsize`**        | **int** (optional)      | The font size of the text. (Default is 15)                                         |
| **`alpha`**           | **float** (optional)    | The alpha value for transparency. (Default is 0.8)                                 |
| **`line_properties`** | **dict** (optional)     | Properties of the line segment such as color and linewidth. (Default is None)      |
| **`text_properties`** | **dict** (optional)     | Location parameters for the text. (Default is None)                                |
| **`ax`**              | **plt.Axes** (optional) | The Axes object to draw the line segment on. (Default is None)                     |

#### Returns:

| Return Type          | Description                               |
| -------------------- | ----------------------------------------- |
| **`(float, float)`** | The end point of the line segment (x, y). |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    end = plot_draw.plot_segment_dashed((100, 200), 45, 50, text='Value')
    plot = msc.print_plot(plt)
    return {'plot': plot, 'end': end}

# The end point of the segment is (135.35533905932738, 235.35533905932738)
```

<div style={{textAlign: 'center'}}>
![dashed segment](./images/plot_segment_dashed.png)
</div>

## Shapes

### draw_circle

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1004C1-L1041C1)

```python
draw_circle(
    center = (0, 0),
    radius = 10,
    color = "black",
    ax = None
) -> None
```

#### Description:

Draws a custom circle on a given axis.

#### Arguments:

| Argument     | Type                    | Description                                                |
| ------------ | ----------------------- | ---------------------------------------------------------- |
| **`center`** | **tuple** (optional)    | The center point of the circle (x, y). (Default is (0, 0)) |
| **`radius`** | **float** (optional)    | The size of the circle. (Default is 100)                   |
| **`color`**  | **str** (optional)      | The color of the circle. (Default is 'black')              |
| **`ax`**     | **plt.Axes** (optional) | The Axes object to draw the circle on. (Default is None)   |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    fig, ax = plt.subplots()
    plot_draw.draw_circle((100, 100), radius=20, color='red')
    plot = msc.print_plot(plt)
    return {'plot': plot}

# Expected output: A plot displaying a red circle with a center at (100, 100) and size 200.
```

<div style={{textAlign: 'center'}}>
![arrow](./images/draw_circle.png)
</div>

### draw_rounded_rectangle

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1042C1-L1120C1)

```python
draw_rounded_rectangle(
    width,
    height,
    center = (0, 0),
    corner_radius = 0.5,
    color = "black",
    ax = None
) -> None
```

#### Description:

Draws a rounded rectangle with specified properties.

#### Arguments:

| Argument            | Type                    | Description                                                                           |
| ------------------- | ----------------------- | ------------------------------------------------------------------------------------- |
| **`width`**         | **float**               | The width of the rounded rectangle.                                                   |
| **`height`**        | **float**               | The height of the rounded rectangle.                                                  |
| **`center`**        | **tuple** (optional)    | The middle point of the top side of the rounded rectangle (x, y). (Default is (0, 0)) |
| **`corner_radius`** | **float** (optional)    | The radius of the corners. (Default is 0.5)                                           |
| **`color`**         | **str** (optional)      | The color of the rectangle. (Default is 'black')                                      |
| **`ax`**            | **plt.Axes** (optional) | The Axes object to draw the rectangle on. (Default is None)                           |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_rounded_rectangle(4, 2, center = (0,0), corner_radius = 0.5,  color='blue')
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![rounded rectangle](./images/draw_rounded_rectangle.png)
</div>

### calculate_intersection_point

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1122C1-L1178C44)

```python
calculate_intersection_point(
    point1,
    angle1,
    point2,
    angle2,
    degrees = False
) -> tuple[float, float]
```

#### Description:

Calculates the intersection point of two lines defined by points and angles.

#### Arguments:

| Argument      | Type                | Description                                                                      |
| ------------- | ------------------- | -------------------------------------------------------------------------------- |
| **`point1`**  | **tuple**           | The coordinates of the first point (x, y) through which the first line passes.   |
| **`angle1`**  | **float**           | The angle of the first line.                                                     |
| **`point2`**  | **tuple**           | The coordinates of the second point (x, y) through which the second line passes. |
| **`angle2`**  | **float**           | The angle of the second line.                                                    |
| **`degrees`** | **bool** (optional) | Whether the angles are. (Default is False)                                       |

#### Returns:

| Return Type          | Description                                       |
| -------------------- | ------------------------------------------------- |
| **`(float, float)`** | The coordinates of the intersection point (x, y). |

#### Example:

```python
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    intersection = plot_draw.calculate_intersection_point((0, 0), 45, (1, 1), 135, degrees=True)
    return {"intersection"ersection}

# Expected output: {"intersection": (1.0, 0.9999999999999999)}
```

### draw_segment

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1181C1-L1229C1)

```python
draw_segment(
    start,
    end,
    line_width = 0.001,
    color = "black",
    ax = None
) -> None
```

#### Description:

Draws a segment between two points with a specified line width and color.

#### Arguments:

| Argument         | Type                    | Description                                               |
| ---------------- | ----------------------- | --------------------------------------------------------- |
| **`start`**      | **tuple**               | The coordinates of the starting point (x, y).             |
| **`end`**        | **tuple**               | The coordinates of the final point (x, y).                |
| **`line_width`** | **float** (optional)    | The width of the segment. (Default is 0.001)              |
| **`color`**      | **str** (optional)      | The color of the segment. (Default is 'black')            |
| **`ax`**         | **plt.Axes** (optional) | The Axes object to draw the segment on. (Default is None) |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_segment((0, 0), (1, 1), line_width=0.005, color='blue')
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![segment](./images/draw_segment.png)
</div>

### plot_annotate_arrow_end

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1231C1-L1369C1)

```python
plot_annotate_arrow_end(
    end,
    angle,
    length,
    degrees = False,
    text = "",
    text_offset = 0.5,
    fontsize = 12,
    alpha = 0.8,
    reverse = False,
    center_text = False,
    reverse_text = False,
    text_properties = None,
    arrow_properties = None,
    ax = None
) -> tuple[float, float]
```

#### Description:

Plots an arrow annotation at the end point of a vector.

#### Arguments:

| Argument               | Type                    | Description                                                   |
| ---------------------- | ----------------------- | ------------------------------------------------------------- |
| **`end`**              | **tuple**               | The coordinates of the end point (x, y) of the vector.        |
| **`angle`**            | **float**               | The trigonometric angle of the vector.                        |
| **`length`**           | **float**               | The length of the vector.                                     |
| **`text`**             | **str** (optional)      | The text to be displayed near the arrow.                      |
| **`text_offset`**      | **float** (optional)    | The distance between the text and the arrow. (Default is 0.5) |
| **`fontsize`**         | **int** (optional)      | The font size of the text. (Default is 12)                    |
| **`alpha`**            | **float** (optional)    | The transparency of the arrow and text. (Default is 0.8)      |
| **`reverse`**          | **str** (optional)      | Whether to reverse the arrow. (Default is False)              |
| **`center_text`**      | **str** (optional)      | Whether to place the text in the center. (Default is False)   |
| **`reverse_text`**     | **str** (optional)      | Whether to reverse the text. (Default is False)               |
| **`text_properties`**  | **dict** (optional)     | The text alignment. (Default is None)                         |
| **`arrow_properties`** | **dict** (optional)     | The properties of the arrow. (Default is None)                |
| **`ax`**               | **plt.Axes** (optional) | The Axes object to draw the arrow on. (Default is None)       |

#### Returns:

| Return Type          | Description                                             |
| -------------------- | ------------------------------------------------------- |
| **`(float, float)`** | The coordinates of the start point (x, y) of the arrow. |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    start = plot_draw.plot_annotate_arrow_end((1, 1), 45, 1, text="End", text_offset=0.5, fontsize=12, text_properties={'ha': 'center', 'va': 'top'})
    plot = msc.print_plot(plt)
    return {'plot': plot, 'start': start}

# Expected output: A plot displaying an arrow annotation at the end point (1, 1) with the label "End".
# The coordinates of the start point of the arrow is (10.899494936611665, 10.899494936611665)
```

<div style={{textAlign: 'center'}}>
![annotate arrow](./images/plot_annotate_arrow_end.png)
</div>

### draw_arc_with_text

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1371C1-L1430C1)

```python
draw_arc_with_text(
    center,
    radius,
    start_angle,
    end_angle,
    text = "",
    degrees = False,
    text_offset = 0.7,
    fontsize = 8,
    ax = None
) -> None
```

#### Description:

Draws an arc with text annotation.

#### Arguments:

| Argument          | Type         | Description                                                                           |
| ----------------- | ------------ | ------------------------------------------------------------------------------------- |
| **`center`**      | **tuple**    | The coordinates (x, y) of the center point of the circle from which the arc is drawn. |
| **`radius`**      | **float**    | The radius of the arc.                                                                |
| **`start_angle`** | **float**    | The start angle of the arc.                                                           |
| **`end_angle`**   | **float**    | The final angle of the arc.                                                           |
| **`text`**        | **str**      | The text to be displayed along the arc. (Default is "")                               |
| **`degrees`**     | **bool**     | Whether the angles are in degrees. (Default is False)                                 |
| **`text_offset`** | **float**    | The distance between the text and the arc. (Default is 0.7)                           |
| **`fontsize`**    | **float**    | The font size of the text. (Default is 8)                                             |
| **`ax`**          | **plt.Axes** | The Axes object to draw the arc on. (Default is None)                                 |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_arc_with_text((0, 0), 5, 270, 120, "Sample Text", degrees=True)
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![arc with text](./images/draw_arc_with_text.png)
</div>

### draw_three_axes_rotated

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1431C1-L1566C1)

```python
draw_three_axes_rotated(
    arrow_length,
    line_thickness = 1.5,
    text_offset = 0.2,
    longx = 1,
    negativeaxis_y = False,
    negativeaxis_x = False,
    ax = None
) -> plt.Axes
```

#### Description:

Draws three rotated axes in a 3D coordinate system.

#### Arguments:

| Argument             | Type      | Description                                            |
| -------------------- | --------- | ------------------------------------------------------ |
| **`arrow_length`**   | **float** | The length of the arrow.                               |
| **`line_thickness`** | **float** | The thickness of the line.                             |
| **`text_offset`**    | **float** | The offset of the text from the arrow.                 |
| **`longx`**          | **float** | The length of the x-axis.                              |
| **`negativeaxis_y`** | **bool**  | Whether to include negative y-axis (Default is False). |
| **`negativeaxis_x`** | **bool**  | Whether to include negative x-axis (Default is False). |

#### Returns:

| Return Type    | Description                                     |
| -------------- | ----------------------------------------------- |
| **`plt.Axes`** | The matplotlib Axes object containing the plot. |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    ax = plot_draw.draw_three_axes_rotated(arrow_length=1.0, negativeaxis_y=True, negativeaxis_x=True)
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![three axes rotated](./images/draw_three_axes_rotated.png)
</div>

### draw_double_arrowhead

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1568C1-L1639C6)

```python
draw_double_arrowhead(
    start,
    end,
    color = "black",
    line_thickness = 1,
    ax = None
) -> None
```

#### Description:

Draws a double arrowhead between two points.

#### Arguments:

| Argument             | Type                 | Description                                       |
| -------------------- | -------------------- | ------------------------------------------------- |
| **`start`**          | **tuple**            | Coordinates of the start point (x, y).            |
| **`end`**            | **tuple**            | Coordinates of the end point (x, y).              |
| **`color`**          | **str** (optional)   | Color of the arrow and line. (Default is 'black') |
| **`line_thickness`** | **float** (optional) | Thickness of the line. (Default is 1)             |
| **`ax`**             | **plt.Axes**         | The Axes object to draw the arrow on.             |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_double_arrowhead(start=(0, 0), end=(1, 1))
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![double arrowhead](./images/draw_double_arrowhead.png)
</div>

### draw_custom_arrow_end

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1642C1-L1705C1)

```python
draw_custom_arrow_end(
    start,
    end,
    color = "black",
    line_thickness = 1,
    ax = None
) -> None
```

#### Description:

Draws a custom arrow at the end of a line segment.

#### Arguments:

| Argument             | Type                 | Description                                       |
| -------------------- | -------------------- | ------------------------------------------------- |
| **`start`**          | **tuple**            | Coordinates of the start point (x, y).            |
| **`end`**            | **tuple**            | Coordinates of the end point (x, y).              |
| **`color`**          | **str** (optional)   | Color of the arrow and line. (Default is 'black') |
| **`line_thickness`** | **float** (optional) | Thickness of the line. (Default is 1)             |
| **`ax`**             | **plt.Axes**         | The Axes object to draw the arrow on.             |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_custom_arrow_end(start=(0, 0), end=(1, 1))
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![custom arrow end](./images/draw_custom_arrow_end.png)
</div>

### draw_two_axes

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1706C1-L1815C14)

```python
draw_two_axes(
    arrow_length,
    line_thickness = 1.5,
    text_offset = 0.1,
    longx = 1,
    negativeaxis_y = False,
    negativeaxis_x = False,
    ax = None
) -> plt.Axes
```

#### Description:

Draws two axes representing the x and y directions.

#### Arguments:

| Argument             | Type         | Description                                                     |
| -------------------- | ------------ | --------------------------------------------------------------- |
| **`arrow_length`**   | **float**    | Length of the arrows representing the axes.                     |
| **`line_thickness`** | **float**    | Thickness of the arrows representing the axes. (Default is 1.5) |
| **`text_offset`**    | **float**    | Offset for the axis labels. (Default is 0.1)                    |
| **`longx`**          | **float**    | Length factor for the x-axis. (Default is 1)                    |
| **`negativeaxis_y`** | **bool**     | Draws negative y-axis if True. (Default is False)               |
| **`negativeaxis_x`** | **bool**     | Draws negative x-axis if True. (Default is False)               |
| **`ax`**             | **plt.Axes** | The Axes object to draw the axes on.                            |

#### Returns:

| Return Type    | Description  |
| -------------- | ------------ |
| **`plt.Axes`** | Axes object. |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    ax = plot_draw.draw_two_axes(arrow_length=1.0, negativeaxis_y=True, negativeaxis_x=True)
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![two axes](./images/draw_two_axes.png)
</div>

### vertical_arrow_rain

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1818C1-L1864C1)

```python
vertical_arrow_rain(
    quantity_arrows,
    start,
    end,
    y_origin = 0,
    arrow_color = "blue",
    head_width = 0.05,
    head_length = 0.1,
    ax = None
) -> None
```

#### Description:

Draws a specific quantity of arrows from equidistant points on a segment that extends from start to end, with all arrows pointing to y_origin.

#### Arguments:

| Argument              | Type         | Description                                                   |
| --------------------- | ------------ | ------------------------------------------------------------- |
| **`quantity_arrows`** | **int**      | Number of arrows to draw.                                     |
| **`start`**           | **tuple**    | Tuple (x, y) representing the starting point of the segment.  |
| **`end`**             | **tuple**    | Tuple (x, y) representing the final point of the segment.     |
| **`y_origin`**        | **float**    | y-coordinate to which all arrows should point. (Default is 0) |
| **`arrow_color`**     | **str**      | Color of the arrows. (Default is 'blue')                      |
| **`head_width`**      | **float**    | Width of the arrow head. (Default is 0.05)                    |
| **`head_length`**     | **float**    | Length of the arrow head. (Default is 0.1)                    |
| **`ax`**              | **plt.Axes** | The Axes object to draw the arrows on.                        |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.vertical_arrow_rain(quantity_arrows=5, start=(0, 1), end=(1, 1), y_origin=0)
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![vertical arrow rain](./images/vertical_arrow_rain.png)
</div>

### horizontal_arrow_rain

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1865C1-L1918C1)

```python
horizontal_arrow_rain(
    quantity_arrows,
    start,
    end,
    x_origin = 0,
    arrow_color = "blue",
    head_width = 0.05,
    head_length = 0.1,
    ax = None
) -> None
```

#### Description:

Draws a specific quantity of arrows from a vertical line at x_origin to equidistant points on a segment that extends from start to end.

#### Arguments:

| Argument              | Type         | Description                                                  |
| --------------------- | ------------ | ------------------------------------------------------------ |
| **`quantity_arrows`** | **int**      | Number of arrows to draw.                                    |
| **`start`**           | **tuple**    | Tuple (x, y) representing the starting point of the segment. |
| **`end`**             | **tuple**    | Tuple (x, y) representing the final point of the segment.    |
| **`x_origin`**        | **float**    | x-coordinate from which all arrows originate. (Default is 0) |
| **`arrow_color`**     | **str**      | Color of the arrows. (Default is 'blue')                     |
| **`head_width`**      | **float**    | Width of the arrow head. (Default is 0.05)                   |
| **`head_length`**     | **float**    | Length of the arrow head. (Default is 0.1)                   |
| **`ax`**              | **plt.Axes** | The Axes object to draw the arrows on. (Default is None)     |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.horizontal_arrow_rain(quantity_arrows=5, start=(1, 1), end=(1, 0), x_origin=0)
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![horizontal arrow rain](./images/horizontal_arrow_rain.png)
</div>

## Angles

### calculate_angle

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1919C1-L1954C1)

```python
calculate_angle(
    start: tuple,
    end: tuple,
    degrees: bool = False
) -> float
```

#### Description:

Calculates the angle (in degrees) between two points.

#### Arguments:

| Argument      | Type      | Description                                                |
| ------------- | --------- | ---------------------------------------------------------- |
| **`start`**   | **tuple** | Tuple (x, y) representing the starting point.              |
| **`end`**     | **tuple** | Tuple (x, y) representing the final point.                 |
| **`degrees`** | **bool**  | Whether to return the angle in degrees. (Default is False) |

#### Returns:

| Return Type | Description                       |
| ----------- | --------------------------------- |
| **`float`** | The angle between the two points. |

#### Example:

```python
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    angle = plot_draw.calculate_angle(start=(0, 0), end=(1, 1), degrees=True)
    return {"angle": angle}

# Expected output: {"angle": 45.0}
```

### draw_segment_1

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1955C1-L1979C1)

```python
draw_segment_1(
    start,
    end,
    ax = None
) -> None
```

#### Description:

Draws a line segment in black ('k').

#### Arguments:

| Argument    | Type                    | Description                                               |
| ----------- | ----------------------- | --------------------------------------------------------- |
| **`start`** | **Tuple[float, float]** | The coordinates of the starting point [x1, y1].           |
| **`end`**   | **Tuple[float, float]** | The coordinates of the ending point [x2, y2].             |
| **`ax`**    | **plt.Axes** (optional) | The Axes object to draw the segment on. (Default is None) |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_segment_1((0, 0), (10, 0))
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![segment](./images/draw_segment_1.png)
</div>

### draw_segment_2

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L1981C1-L2004C64)

```python
draw_segment_2(
    start,
    end,
    ax = None
) -> None
```

#### Description:

Draws a line segment in red ('r').

#### Arguments:

| Argument    | Type                    | Description                                               |
| ----------- | ----------------------- | --------------------------------------------------------- |
| **`start`** | **Tuple[float, float]** | The coordinates of the starting point [x1, y1].           |
| **`end`**   | **Tuple[float, float]** | The coordinates of the ending point [x2, y2].             |
| **`ax`**    | **plt.Axes** (optional) | The Axes object to draw the segment on. (Default is None) |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_segment_2((0, 2.6), (10, 1))
    plot = msc.print_plot(plt)
    return {'plot': plot}

# Expected output: A plot displaying a red line segment from (0, 2.6) to (10, 1).

```

<div style={{textAlign: 'center'}}>
![segment](./images/draw_segment_2.png)
</div>

### draw_segment_3

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L2007C1-L2031C1)

```python
draw_segment_3(
    start,
    end,
    ax = None
) -> None
```

#### Description:

Draws a line segment in blue ('b').

#### Arguments:

| Argument    | Type                    | Description                                               |
| ----------- | ----------------------- | --------------------------------------------------------- |
| **`start`** | **Tuple[float, float]** | The coordinates of the starting point [x1, y1].           |
| **`end`**   | **Tuple[float, float]** | The coordinates of the ending point [x2, y2].             |
| **`ax`**    | **plt.Axes** (optional) | The Axes object to draw the segment on. (Default is None) |

#### Example:

```python
import matplotlib.pyplot as plt
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    plot_draw.draw_segment_3((0, 2.6), (10, 1))
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![segment](./images/draw_segment_3.png)
</div>

### get_arc_points

[**[Source]**](https://github.com/MecSimCalc/MecSimCalc-utils/blob/v0.2.0/mecsimcalc/plot_draw.py#L2033C1-L2074C16)

```python
get_arc_points(
    start_angle,
    end_angle,
    radius,
    center: Union[tuple, list]
) -> tuple[np.ndarray, np.ndarray]
```

#### Description:

Calculates points along a circular arc defined by a start angle and an end angle.

#### Arguments:

| Argument          | Type                    | Description                                        |
| ----------------- | ----------------------- | -------------------------------------------------- |
| **`start_angle`** | **float**               | The starting angle of the arc.                     |
| **`end_angle`**   | **float**               | The ending angle of the arc.                       |
| **`radius`**      | **float**               | The radius of the arc.                             |
| **`center`**      | **Tuple[float, float]** | The coordinates of the center of the arc [cx, cy]. |

#### Returns:

| Return Type                         | Description                                |
| ----------------------------------- | ------------------------------------------ |
| **`Tuple[np.ndarray, np.ndarray]`** | The x and y coordinates of the arc points. |

#### Example:

```python
import matplotlib.pyplot as plt
import numpy as np
import mecsimcalc as msc
import mecsimcalc.plot_draw as plot_draw

def main(inputs):
    arc_points_x1, arc_points_y1 = plot_draw.get_arc_points(90, 240, 0.25, (0, -0.25), degrees=True)
    plt.plot(arc_points_x1, arc_points_y1, 'k')
    plot = msc.print_plot(plt)
    return {'plot': plot}
```

<div style={{textAlign: 'center'}}>
![arc points](./images/get_arc_points.png)
</div>
