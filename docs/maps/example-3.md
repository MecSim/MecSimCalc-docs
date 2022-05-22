---
sidebar_label: "Example 3"
sidebar_position: 4
---

# Example 3: Folium

This example provides a quick overview on how to create a Folium map with some simple.

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/2028570/map_drawing_shapes" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

To start, go to [mecsimcalc.com/create](https://mecsimcalc.com/create), click on **Maps**, and select **Drawing shapes**.

## Step 1: Inputs

For the inputs, create a **Single Select** with the following properties:

- **Name:** map_tile
- **Label:** Map Tile
- **Options:**
  - OpenStreetMap
  - Stamen Terrain
  - Stamen Toner
  - Stamen Watercolor

and create a **Color Picker** with the following properties:

- **Name:** color
- **Label:** Shape color
- **Default value:** #43BFF5

## Step 2: Code

### Creating a map

Start by creating a Folium map `m` that has the following attributes:

- `location`: the initial center of the map iin latitude and longitude.
- `zoom_start`: the initial zoom level.
- `tiles`: map tiles.
  - Map tiles are the type of map to use, such as satellite vs. road.
  - `"OpenStreetMap"` is the standard tile used to see roads.
  - See possible map tiles [here](https://python-visualization.github.io/folium/modules.html).

```python
m = folium.Map(location=[45.372, -121.6972],
                zoom_start=15, tiles=inputs['map_tile'])
```

### Adding shapes

To add shapes to your map, create the shape and then use `.add_to(m)` to add it to your map.

Add two [`Marker`](https://python-visualization.github.io/folium/modules.html#folium.map.Marker) to your map.

- `location` is the marker position in latitude and longitude.
- `popup` shows up when you click on the marker. You can use HTML in the string.
- `tooltip` shows up when the user hovers over the marker.
- `icon` is the icon of the marker.

```python
folium.Marker(
    [45.372, -121.6972], popup="<i>Italic popup text</i>", tooltip="Click on Marker"
).add_to(m)

folium.Marker(  # Marker with icon
    location=[45.371, -121.683],
    popup="<b>Bold popup text</b>",
    tooltip="Click on Marker",
    icon=folium.Icon(color=inputs['color'], icon="info-sign"),
).add_to(m)
```

Add a [`PolyLine](https://python-visualization.github.io/folium/modules.html#folium.vector_layers.PolyLine) to your map.

- `locations` is the list of points that when connected makes up the line.
- `color` is the color of the line as a hex color code.
- `tooltip` shows up when the user hovers over the PolyLine.
- `weight` is the line thickness.
- `opacity` is the transparency of the line.

```python
lat_lng_points = [[45.372, -121.6972],
                    [45.373, -121.6831],
                    [45.371, -121.683]]
folium.PolyLine(locations=lat_lng_points,
                color=inputs['color'],
                tooltip="PolyLine",
                weight=5,  # line thickness
                opacity=0.8  # transparency
                ).add_to(m)
```

Add a [`Circle](https://python-visualization.github.io/folium/modules.html#folium.vector_layers.Circle) to your map.

- `radius` is the radius of the circle.
- `location` is the center of the circle in latitude and longitude.
- `tooltip` shows up when the user hovers over the Circle.
- `popup` shows up when you click on the circle. You can use HTML in the string.
- `color` is the color of the circle as a hex color code.

```python
folium.Circle(
    radius=100,
    location=[45.372, -121.6972],
    tooltip="Click on Circle",
    popup="Circle",
    color=inputs['color'],
    fill=False,
).add_to(m)
```

### Exporting the map

Finally to export the map, simply use `._repr_html_()` to convert the Folium map object into HTML that can be displayed in the output.

```python
map_html = m._repr_html_()
return {"map": map_html}
```

### Full code

```python
import folium


def main(inputs):
    # Create a folium map
    m = folium.Map(location=[45.372, -121.6972],
                   zoom_start=15, tiles=inputs['map_tile'])

    # Add markers to map
    folium.Marker(
        [45.372, -121.6972], popup="<i>Italic popup text</i>", tooltip="Click on Marker"
    ).add_to(m)
    folium.Marker(  # Marker with icon
        location=[45.371, -121.683],
        popup="<b>Bold popup text</b>",
        tooltip="Click on Marker",
        icon=folium.Icon(color=inputs['color'], icon="info-sign"),
    ).add_to(m)

    # Add line shape
    lat_lng_points = [[45.372, -121.6972],
                      [45.373, -121.6831],
                      [45.371, -121.683]]
    folium.PolyLine(lat_lng_points,
                    color=inputs['color'],
                    tooltip="PolyLine",
                    weight=5,  # line thickness
                    opacity=0.8  # transparency
                    ).add_to(m)

    # Add circle shape
    folium.Circle(
        radius=100,
        location=[45.372, -121.6972],
        tooltip="Click on Circle",
        popup="Circle",
        color=inputs['color'],
        fill=False,
    ).add_to(m)

    # Export folium map as HTML string
    map_html = m._repr_html_()

    return {"map": map_html}
```

## Step 3: Output

```
{{ outputs.map }}
```

<div style={{textAlign: 'center'}}>

![img](/docs/maps/ex3_map.png)

</div>
