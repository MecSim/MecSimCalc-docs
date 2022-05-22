---
sidebar_label: "Example 2"
sidebar_position: 3
---

# Example 2: Advanced GeoPandas

This example provides a detailed explanation on how to use GeoPandas to visualize structured data.

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/1213364/map_advanced_geo_pandas" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

To start, go to [mecsimcalc.com/create](https://mecsimcalc.com/create), click on **Maps**, and select **Create a new blank app**.

## Step 1: Code

### Get the data

First, import or create the geospatial data to visualize. In this example, we will create a Panda's `DataFrame` and then convert it into a `GeoDataFrame`.

Create a DataFrame with Easting and Northing coordinates.

```python
df = pd.DataFrame({"Easting": [444246.35, 444247.044, 444247.3266, 444247.5912, 444247.8385],
                   "Northing": [5465340.18, 5465359.6118, 5465367.5256, 5465374.9338, 5465381.8589]})
```

| Easting     | Northing     |
| ----------- | ------------ |
| 444246.3500 | 5.465340e+06 |
| 444247.0440 | 5.465360e+06 |
| 444247.3266 | 5.465368e+06 |
| 444247.5912 | 5.465375e+06 |
| 444247.8385 | 5.465382e+06 |

Merge the `Easting` and `Northing` into one column, this will make it easier to create shapes from later on. Save the new column as `geometry`, the column must be called geometry as will be explained later.

```python
df["geometry"] = df[["Easting", "Northing"]].values.tolist()
```

| Easting     | Northing     | geometry                    |
| ----------- | ------------ | --------------------------- |
| 444246.3500 | 5.465340e+06 | [444246.35, 5465340.18]     |
| 444247.0440 | 5.465360e+06 | [444247.044, 5465359.6118]  |
| 444247.3266 | 5.465368e+06 | [444247.3266, 5465367.5256] |
| 444247.5912 | 5.465375e+06 | [444247.5912, 5465374.9338] |
| 444247.8385 | 5.465382e+06 | [444247.8385, 5465381.8589] |

Now, convert the `df` DataFrame into a GeoDataFrame, `gdf`. Notice, that the coordinates are in _Easting_ and _Northing_, whereas, GeoPandas expects latitude and longitude. Therefore, the coordinates must be projected into latitude and longitude. Fortunately, `GeoDataFrame` has a built-in [`crs`](https://geopandas.org/en/stable/docs/user_guide/projections.html) (Coordinate Reference Systems) that applies the projection to the `geometry` column.

:::caution
You shapes must be in the `geometry` column in order for the `crs` projection to be applied!
:::

In this example, `crs` is `"EPSG:26911"`, but it is likely to be different for your code, depending on which reference system is used. If your coordinates are already in latitude and longitude, then you can avoid using `crs` entirely.

```python
gdf = geopandas.GeoDataFrame(df, crs="EPSG:26911")
```

### Manipulate the data

Convert all the geometries into points by applying the `Point` function from `shapely.geometry` to the geometry column.

```python
gdf["geometry"] = gdf["geometry"].apply(Point)
```

| Easting     | Northing     | geometry                      |
| ----------- | ------------ | ----------------------------- |
| 444246.3500 | 5.465340e+06 | POINT(444246.350 5465340.180) |
| 444247.0440 | 5.465360e+06 | POINT(444247.044 5465359.612) |
| 444247.3266 | 5.465368e+06 | POINT(444247.327 5465367.526) |
| 444247.5912 | 5.465375e+06 | POINT(444247.591 5465374.934) |
| 444247.8385 | 5.465382e+06 | POINT(444247.839 5465381.859) |

Next, we will create more geometries in a separate `GeoDataFrame` and then append it to the end of `gdf`.

Use `LineString` and `Polygon` to create new shapes inside a new `GeoDataFrame` called `more_geometries`.

:::tip
You can find more **shapely** geometries [here](https://shapely.readthedocs.io/en/stable/manual.html).
:::

Then use `pd.concat` to concatenate `more_geometries` to the end of `gdf`. Note that `axis=0` means to concatenate as a new row, whereas `axis=1` concatenates it column-wise.

```python
more_geometries = geopandas.GeoDataFrame(
    {
        "geometry": [
            LineString([[444248.0694, 5.465388e06], [444248.2847, 5.465394e06], [444248.4852, 5.465400e06]]),
            Polygon([[444243.6719, 5.465405e06], [444248.8454, 5.465410e06], [444249.0068, 5.465415e06], [444299.1569, 5.465419e06]]),
        ]
    }
)
gdf = pd.concat((gdf, more_geometries), axis=0)
```

| Easting     | Northing     | geometry                                           |
| ----------- | ------------ | -------------------------------------------------- |
| 444246.3500 | 5.465340e+06 | POINT(444246.350 5465340.180)                      |
| 444247.0440 | 5.465360e+06 | POINT(444247.044 5465359.612)                      |
| 444247.3266 | 5.465368e+06 | POINT(444247.327 5465367.526)                      |
| 444247.5912 | 5.465375e+06 | POINT(444247.591 5465374.934)                      |
| 444247.8385 | 5.465382e+06 | POINT(444247.839 5465381.859)                      |
| NaN         | NaN          | LINESTRING(444248.069 5465388.000, 444248.285...)  |
| NaN         | NaN          | POLYGON((444243.672 5465405.000, 444248.845 5...)) |

Now that we have defined all the geometries, we can add our computed values for each geometry as a new column called `value`.

```python
gdf["value"] = [1,2,3,4,5,6,7] # computed values
```

| Easting     | Northing     | geometry                              | value |
| ----------- | ------------ | ------------------------------------- | ----- |
| 444246.3500 | 5.465340e+06 | POINT(444246.350 5465340.180)         | 1     |
| 444247.0440 | 5.465360e+06 | POINT(444247.044 5465359.612)         | 2     |
| 444247.3266 | 5.465368e+06 | POINT(444247.327 5465367.526)         | 3     |
| 444247.5912 | 5.465375e+06 | POINT(444247.591 5465374.934)         | 4     |
| 444247.8385 | 5.465382e+06 | POINT(444247.839 5465381.859)         | 5     |
| NaN         | NaN          | LINESTRING(444248.069 5465388.000...) | 6     |
| NaN         | NaN          | POLYGON((444243.672 5465405.000...))  | 7     |

### Exporting the map

#### Interactive map

Export the `gdf` GeoDataFrame as an interactive map:

```python
m1 = gdf.explore("value", cmap="Spectral", name="My shapes", tiles=None)
m1.options["preferCanvas"] = True
```

Where,

- `gdf.explore` returns a Folium map object.
- `"value"` is the column of `gdf` that contains the numerical values to be visualized.
- `cmap` is the color of the scale. See more [colormaps](https://matplotlib.org/3.5.0/tutorials/colors/colormaps.html) here.
- `name` is the _LayerControl_ name for the shape geometries.
- `tiles=None` to not set a map tile. In most cases, you do not need to specify the `tiles` attribute.
- `m1.options["preferCanvas"] = True` should be set to `True` when you are drawing lots of geometries or when the map feels slow or laggy. Otherwise, you can leave this line out.

Next, we will had a **LayerControl** to the map that will allow switching map tiles and toggling the geometries on and off.

<div style={{textAlign: 'center'}}>

![img](/docs/maps/ex2_layer_control.png)

</div>

First, add each `TileLayer` separately to the map. Notice, that **OpenStreetMap** and **Stamen Terrain**, whereas, **Satellite** must specify an url for `tiles`. This is because **OpenStreetMap** and **Stamen Terrain** are built into Folium, whereas **Satellite** is a custom map tile.

```python
folium.TileLayer("OpenStreetMap", name="Road").add_to(m1)
folium.TileLayer("Stamen Terrain", name="Terrain").add_to(m1)
folium.TileLayer(
    tiles="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attr="Esri",
    name="Satellite",
).add_to(m1)
folium.LayerControl().add_to(m1)
```

Finally, convert the map object to HTML that can be displayed on the webpage.

```python
interactive_map = m1._repr_html_()
```

<div style={{textAlign: 'center'}}>

![img](/docs/maps/ex2_interactive_map.png)

</div>

#### Static map

We will also export the map as a static Matplotlib plot.

```python
def plt_show(plt, width=500, dpi=100):
    # Converts matplotlib plt to image data string
    #   plt is the matplotlib pyplot or figure
    #   width is the width of the graph image in pixels
    #   dpi (dots per inch) is the resolution of the image
    bytes = io.BytesIO()
    plt.savefig(bytes, format="png", dpi=dpi)  # Save as png image
    if hasattr(plt, "close"):
        plt.close()
    bytes.seek(0)
    base64_string = "data:image/png;base64," + base64.b64encode(bytes.getvalue()).decode("utf-8")
    return "<img src='" + base64_string + "' width='" + str(width) + "'>"


m2 = gdf.plot("value", cmap="Spectral", legend=True)
static_map = plt_show(m2.figure)
```

Where,

- `gdf.plot` returns a Matplotlib figure.
- `"value"` is the column of `gdf` that contains the numerical values to be visualized.
- `cmap` is the color of the scale. See more [colormaps](https://matplotlib.org/3.5.0/tutorials/colors/colormaps.html) here.
- `legend=True` displays the color bar on the right.
- Pass in `m2.figure` into `plt_show` to return an image.

<div style={{textAlign: 'center'}}>

![img](/docs/maps/ex2_static_map.png)

</div>

## Step 2: Output

```
{{ outputs.interactive_map }}
{{ outputs.static_map }}
```
