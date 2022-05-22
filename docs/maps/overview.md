---
sidebar_label: "Overview"
sidebar_position: 1
---

# Overview

**MecSimCalc** supports the displaying of maps and makes working with geospatial data easy.
Two popular Python libraries used in working with maps are [GeoPandas](#geopandas) and [Folium](#folium).

<div style={{textAlign: 'center'}}>

![img alt](/docs/maps/ex3_map.png)
![img alt](/docs/maps/map_1.png)

</div>

:::note
**Interactive** map means the _**user**_ can interact with the map through dragging, zooming, panning, hovering, and clicking actions.<br/>
**Static** map means the map is an image that can not be interacted with.
:::

## [GeoPandas](https://geopandas.org/)

> [GeoPandas](https://geopandas.org/) makes working with geospatial data in Python easier. GeoPandas extends the datatypes used by [Pandas](https://pandas.pydata.org/docs/) to allow spatial operations on geometric types. Geometric operations are performed by [shapely](https://shapely.readthedocs.io). GeoPandas further depends on [fiona](https://fiona.readthedocs.io/) for file access and [matplotlib](https://matplotlib.org/) for plotting.

GeoPandas should be used when you either have a lot of data, have data structured as a table, or need to manipulate geospatial data. GeoPanda's `GeoDataFrame` is an extension of Panda's `DataFrame`, making it easy to manipulate large amounts of geospatial data.

Once the geospatial data to be visualized is stored as a `GeoDataFrame`, it can easily be exported as an interactive Folium map or as a static Matplotlib plot.

:::tip
All of Panda's [`DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) methods can similarly be applied to GeoPanda's [`GeoDataFrame`](https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.html).
You can think of `GeoDataFrame` as a Panda's `DataFrame` with added functionality for geospatial data.
:::

See GeoPandas documentation [here](https://geopandas.org/en/stable/docs/user_guide.html).

For detailed examples, see [example 1](example-1) and [example 2](example-2).

## [Folium](https://python-visualization.github.io/folium/)

> [Folium](https://python-visualization.github.io/folium/) builds on the data wrangling strengths of the Python ecosystem and the mapping strengths of the [Leaflet.js](https://leafletjs.com/) library. Folium makes it easy to visualize data that’s been manipulated in Python on an interactive Leaflet map. It enables both the binding of data to a map for choropleth visualizations as well as passing rich vector/raster/HTML visualizations as markers on the map.

Folium is an interactive mapping library that displays a map that the _**user**_ can drag, zoom, pan, click, and hover on. It also allows the drawing of shapes, such as lines, markers, and circles.
Folium lacks the data manipulation of GeoPanda's `GeoDataFrame`, and therefore, should only be used independently when visualizing very few data points. It is possible to prepare your data as a `GeoDataFrame`, and then export it as a Folium map, as demonstrated in the examples.

See Folium documentation [here](https://python-visualization.github.io/folium/modules.html).

For a detailed example, see [example 3](example-3).
