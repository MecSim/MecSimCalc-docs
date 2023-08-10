"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[4715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_label:"Example 1",sidebar_position:2},r="Example 1: GeoPandas",p={unversionedId:"maps/example-1",id:"maps/example-1",title:"Example 1: GeoPandas",description:"This example provides a quick overview on how to use GeoPandas to create a GeoDataFrame, and how to visualize the data as a Folium map and a Matplotlib plot.",source:"@site/docs/maps/example-1.md",sourceDirName:"maps",slug:"/maps/example-1",permalink:"/maps/example-1",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Example 1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/maps/overview"},next:{title:"Example 2",permalink:"/maps/example-2"}},l={},s=[{value:"Step 1: Inputs",id:"step-1-inputs",level:2},{value:"Step 2.1: Code version 1",id:"step-21-code-version-1",level:2},{value:"Get the data",id:"get-the-data",level:3},{value:"Manipulate the data",id:"manipulate-the-data",level:3},{value:"Exporting the map",id:"exporting-the-map",level:3},{value:"Step 2.2: Code version 2",id:"step-22-code-version-2",level:2},{value:"Get the data",id:"get-the-data-1",level:3},{value:"Exporting the map",id:"exporting-the-map-1",level:3},{value:"Step 2.3: Full Code",id:"step-23-full-code",level:2},{value:"Step 3: Output",id:"step-3-output",level:2}],d={toc:s},m="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example-1-geopandas"},"Example 1: GeoPandas"),(0,o.kt)("p",null,"This example provides a quick overview on how to use ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/user_guide.html"},"GeoPandas")," to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame"),", and how to visualize the data as a Folium map and a Matplotlib plot."),(0,o.kt)("div",{style:{width:"100%",height:"600px",overflow:"hidden"}},(0,o.kt)("iframe",{src:"https://mecsimcalc.com/app/4620929/map_geospatial_data",width:"100%",height:"100%",title:"MecSimCalc",style:{position:"relative",left:"-45px",top:"-48px"},frameBorder:"0"})),(0,o.kt)("p",null,"To get started, go to ",(0,o.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/create"},"mecsimcalc.com/create"),", click on ",(0,o.kt)("strong",{parentName:"p"},"Maps"),", and select ",(0,o.kt)("strong",{parentName:"p"},"Mapping Geospatial data"),"."),(0,o.kt)("h2",{id:"step-1-inputs"},"Step 1: Inputs"),(0,o.kt)("p",null,"For the inputs, create a ",(0,o.kt)("strong",{parentName:"p"},"Single Select")," with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name:")," dataset"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Label:")," Dataset to visualize"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"naturalearth_cities"),(0,o.kt)("li",{parentName:"ul"},"naturalearth_lowres"),(0,o.kt)("li",{parentName:"ul"},"nybb")))),(0,o.kt)("h2",{id:"step-21-code-version-1"},"Step 2.1: Code version 1"),(0,o.kt)("p",null,"This code will get data from a GeoPanda's dataset, perform a distance calculation on the data, and then visualize it on an interactive Folium map."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(7791).Z,width:"1002",height:"597"}))),(0,o.kt)("h3",{id:"get-the-data"},"Get the data"),(0,o.kt)("p",null,"First, get the geospatial data to visualize. You can either read in a file, create a Panda's ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame"),", or create a ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame"),". In this example, we will use the user input ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs['dataset']")," to select a GeoPanda's and then read it in as a file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"path_to_data = geopandas.datasets.get_path(inputs['dataset'])\ngdf = geopandas.read_file(path_to_data)\n")),(0,o.kt)("h3",{id:"manipulate-the-data"},"Manipulate the data"),(0,o.kt)("p",null,"Once the data is loaded, we can manipulate the data using a ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.html"},(0,o.kt)("inlineCode",{parentName:"a"},"GeoDataFrame")),". You can convert your data to a GeoDataFrame by passing it as the input to ",(0,o.kt)("inlineCode",{parentName:"p"},"geopandas.GeoDataFrame(...)"),"."),(0,o.kt)("p",null,"In this example, we will create a new column called ",(0,o.kt)("inlineCode",{parentName:"p"},"distance")," that will calculate the distance from the first point to every other point in the dataset."),(0,o.kt)("p",null,"In order to get a list of points, set a new column called ",(0,o.kt)("inlineCode",{parentName:"p"},"centroid")," equal to the centroid of all the geometries by using the GeoPandas ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoSeries.centroid.html"},(0,o.kt)("inlineCode",{parentName:"a"},".centroid"))," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"gdf['centroid'] = gdf.centroid\n")),(0,o.kt)("p",null,"Next, get the first point from the centroid column in the 0th row using ",(0,o.kt)("inlineCode",{parentName:"p"},".iloc[0]"),". Notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"iloc")," is a Pandas function because ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," is an extension of Panda's ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame")," and therefore, any Pandas function can also be used on ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"first_point = gdf['centroid'].iloc[0]\n")),(0,o.kt)("p",null,"Now that we have a column of centroid points and the first point, we can perform the calculations. GeoPandas provides many functions for ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/reference/geoseries.html"},"geospatial calculations"),". We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoSeries.distance.html"},(0,o.kt)("inlineCode",{parentName:"a"},"distance()"))," function to calculate the distance of each point to the ",(0,o.kt)("inlineCode",{parentName:"p"},"first_point"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"gdf['distance'] = geopandas.GeoSeries(gdf['centroid']).distance(first_point)\n")),(0,o.kt)("h3",{id:"exporting-the-map"},"Exporting the map"),(0,o.kt)("p",null,"Finally, to export the ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," data as an interactive Folium map, use the ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.explore.html"},(0,o.kt)("inlineCode",{parentName:"a"},".explore()"))," function and pass in ",(0,o.kt)("inlineCode",{parentName:"p"},'"distance"')," as an input, where ",(0,o.kt)("inlineCode",{parentName:"p"},'"distance"'),' is the name of the column that you want to "explore" on the map. Then use ',(0,o.kt)("inlineCode",{parentName:"p"},"._repr_html_()")," to convert the Folium map object into an HTML string that can be displayed on the webpage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'m = gdf.explore("distance", legend=True)\ninteractive_map = m._repr_html_()\n')),(0,o.kt)("h2",{id:"step-22-code-version-2"},"Step 2.2: Code version 2"),(0,o.kt)("p",null,"This code will create data as a Panda's ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame"),", convert it to a ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame"),", and then export it as a Matplotlib plot image."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(2909).Z,width:"303",height:"397"}))),(0,o.kt)("h3",{id:"get-the-data-1"},"Get the data"),(0,o.kt)("p",null,"First, create a Panda's ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame")," with the data to visualize on the map."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame(\n    {'City': ['Buenos Aires', 'Brasilia', 'Santiago', 'Bogota', 'Caracas'],\n        'Country': ['Argentina', 'Brazil', 'Chile', 'Colombia', 'Venezuela'],\n        'Latitude': [-34.58, -15.78, -33.45, 4.60, 10.48],\n        'Longitude': [-58.66, -47.91, -70.66, -74.08, -66.86]})\n")),(0,o.kt)("p",null,"Convert the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFrame")," into a ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"df")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"geopandas.GeoDataFrame()"),". Then convert the latitude and longitude columns into Points using ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/reference/api/geopandas.points_from_xy.html"},(0,o.kt)("inlineCode",{parentName:"a"},"geopandas.points_from_xy()")),", and set these Points as the ",(0,o.kt)("inlineCode",{parentName:"p"},"geometry")," column."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"gdf = geopandas.GeoDataFrame(\n    df, geometry=geopandas.points_from_xy(df.Longitude, df.Latitude)\n)\n")),(0,o.kt)("p",null,"Optionally, you can set a background for the plot. In this example, we will use a map of South America from the geopandas dataset as the background of the plot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"path_to_data = geopandas.datasets.get_path(\"naturalearth_lowres\")\nworld = geopandas.read_file(path_to_data)\nax = world[world.continent == 'South America'].plot(color='white', edgecolor='black')\n")),(0,o.kt)("h3",{id:"exporting-the-map-1"},"Exporting the map"),(0,o.kt)("p",null,"Finally, to export the ",(0,o.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," as a Matplotlib plot, use the ",(0,o.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.plot.html"},(0,o.kt)("inlineCode",{parentName:"a"},".plot()"))," function, and then call ",(0,o.kt)("inlineCode",{parentName:"p"},"plt_show()")," to convert the Matplotlib figure into an image that can be displayed on the webpage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'m = gdf.plot(ax=ax, color="red")\nstatic_map = plt_show(m.figure)\n')),(0,o.kt)("h2",{id:"step-23-full-code"},"Step 2.3: Full Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import geopandas\nimport pandas as pd\nimport mecsimcalc as msc\n\n\ndef main(inputs):\n    # (i) Use a geopandas dataset\n    path_to_data = geopandas.datasets.get_path(inputs['dataset'])\n    gdf = geopandas.read_file(path_to_data)\n    # Manipulate geospatial data\n    gdf['centroid'] = gdf.centroid\n    first_point = gdf['centroid'].iloc[0]\n    # Calculate distance to first_point\n    gdf['distance'] = geopandas.GeoSeries(\n        gdf['centroid']).distance(first_point)\n    mean_of_distance = gdf['distance'].mean()\n    # (a) Export distance column as an interactive map\n    m = gdf.explore(\"distance\", legend=True)\n    interactive_map = m._repr_html_()\n\n    # (ii) Use a custom pandas dataset\n    df = pd.DataFrame(\n        {'City': ['Buenos Aires', 'Brasilia', 'Santiago', 'Bogota', 'Caracas'],\n         'Country': ['Argentina', 'Brazil', 'Chile', 'Colombia', 'Venezuela'],\n         'Latitude': [-34.58, -15.78, -33.45, 4.60, 10.48],\n         'Longitude': [-58.66, -47.91, -70.66, -74.08, -66.86]})\n    # Convert Pandas dataframe to GeoDataFrame\n    gdf = geopandas.GeoDataFrame(\n        # Use points_from_xy to convert to shapely.Point objects\n        df, geometry=geopandas.points_from_xy(df.Longitude, df.Latitude)\n    )\n    # Use a map of South America\n    path_to_data = geopandas.datasets.get_path(\"naturalearth_lowres\")\n    world = geopandas.read_file(path_to_data)\n    ax = world[world.continent == 'South America'].plot(color='white', edgecolor='black')\n    # (b) Export as a static image\n    m = gdf.plot(ax=ax, color=\"red\")\n    static_map = msc.print_plot(m.figure)\n\n    return {\"interactive_map\": interactive_map, \"static_map\": static_map, \"mean_of_distance\": mean_of_distance}\n")),(0,o.kt)("h2",{id:"step-3-output"},"Step 3: Output"),(0,o.kt)("p",null,"For the output, display the two maps: ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs.static_map")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs.interactive_map"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{{ outputs.static_map }}\n\n{{ outputs.interactive_map }}\n")))}c.isMDXComponent=!0},7791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ex1_interactive_map-150b448e535bae94c93b197a311e5534.png"},2909:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ex1_static_map-b7eac66153bf7841ec9ce8b2c8c5b3a8.png"}}]);