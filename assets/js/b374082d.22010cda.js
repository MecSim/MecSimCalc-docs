"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[9902],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,N=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4931:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={sidebar_label:"Example 2",sidebar_position:3},o="Example 2: Advanced GeoPandas",m={unversionedId:"maps/example-2",id:"maps/example-2",title:"Example 2: Advanced GeoPandas",description:"This example provides a detailed explanation on how to use GeoPandas to visualize structured data.",source:"@site/docs/maps/example-2.md",sourceDirName:"maps",slug:"/maps/example-2",permalink:"/maps/example-2",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Example 2",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Example 1",permalink:"/maps/example-1"},next:{title:"Example 3",permalink:"/maps/example-3"}},d=[{value:"Step 1: Code",id:"step-1-code",children:[{value:"Get the data",id:"get-the-data",children:[],level:3},{value:"Manipulate the data",id:"manipulate-the-data",children:[],level:3},{value:"Exporting the map",id:"exporting-the-map",children:[{value:"Interactive map",id:"interactive-map",children:[],level:4},{value:"Static map",id:"static-map",children:[],level:4}],level:3}],level:2},{value:"Step 2: Output",id:"step-2-output",children:[],level:2}],s={toc:d};function u(e){var t=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"example-2-advanced-geopandas"},"Example 2: Advanced GeoPandas"),(0,l.kt)("p",null,"This example provides a detailed explanation on how to use GeoPandas to visualize structured data."),(0,l.kt)("div",{style:{width:"100%",height:"600px",overflow:"hidden"}},(0,l.kt)("iframe",{src:"https://mecsimcalc.com/app/1213364/map_advanced_geo_pandas",width:"100%",height:"100%",title:"MecSimCalc",style:{position:"relative",left:"-45px",top:"-48px"},frameBorder:"0"})),(0,l.kt)("p",null,"To start, go to ",(0,l.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/create"},"mecsimcalc.com/create"),", click on ",(0,l.kt)("strong",{parentName:"p"},"Maps"),", and select ",(0,l.kt)("strong",{parentName:"p"},"Create a new blank app"),"."),(0,l.kt)("h2",{id:"step-1-code"},"Step 1: Code"),(0,l.kt)("h3",{id:"get-the-data"},"Get the data"),(0,l.kt)("p",null,"First, import or create the geospatial data to visualize. In this example, we will create a Panda's ",(0,l.kt)("inlineCode",{parentName:"p"},"DataFrame")," and then convert it into a ",(0,l.kt)("inlineCode",{parentName:"p"},"GeoDataFrame"),"."),(0,l.kt)("p",null,"Create a DataFrame with Easting and Northing coordinates."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'df = pd.DataFrame({"Easting": [444246.35, 444247.044, 444247.3266, 444247.5912, 444247.8385],\n                   "Northing": [5465340.18, 5465359.6118, 5465367.5256, 5465374.9338, 5465381.8589]})\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Easting"),(0,l.kt)("th",{parentName:"tr",align:null},"Northing"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444246.3500"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465340e+06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.0440"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465360e+06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.3266"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465368e+06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.5912"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465375e+06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.8385"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465382e+06")))),(0,l.kt)("p",null,"Merge the ",(0,l.kt)("inlineCode",{parentName:"p"},"Easting")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Northing")," into one column, this will make it easier to create shapes from later on. Save the new column as ",(0,l.kt)("inlineCode",{parentName:"p"},"geometry"),", the column must be called geometry as will be explained later."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'df["geometry"] = df[["Easting", "Northing"]].values.tolist()\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Easting"),(0,l.kt)("th",{parentName:"tr",align:null},"Northing"),(0,l.kt)("th",{parentName:"tr",align:null},"geometry"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444246.3500"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465340e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"[444246.35, 5465340.18]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.0440"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465360e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"[444247.044, 5465359.6118]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.3266"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465368e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"[444247.3266, 5465367.5256]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.5912"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465375e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"[444247.5912, 5465374.9338]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.8385"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465382e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"[444247.8385, 5465381.8589]")))),(0,l.kt)("p",null,"Now, convert the ",(0,l.kt)("inlineCode",{parentName:"p"},"df")," DataFrame into a GeoDataFrame, ",(0,l.kt)("inlineCode",{parentName:"p"},"gdf"),". Notice, that the coordinates are in ",(0,l.kt)("em",{parentName:"p"},"Easting")," and ",(0,l.kt)("em",{parentName:"p"},"Northing"),", whereas, GeoPandas expects latitude and longitude. Therefore, the coordinates must be projected into latitude and longitude. Fortunately, ",(0,l.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," has a built-in ",(0,l.kt)("a",{parentName:"p",href:"https://geopandas.org/en/stable/docs/user_guide/projections.html"},(0,l.kt)("inlineCode",{parentName:"a"},"crs"))," (Coordinate Reference Systems) that applies the projection to the ",(0,l.kt)("inlineCode",{parentName:"p"},"geometry")," column."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You shapes must be in the ",(0,l.kt)("inlineCode",{parentName:"p"},"geometry")," column in order for the ",(0,l.kt)("inlineCode",{parentName:"p"},"crs")," projection to be applied!"))),(0,l.kt)("p",null,"In this example, ",(0,l.kt)("inlineCode",{parentName:"p"},"crs")," is ",(0,l.kt)("inlineCode",{parentName:"p"},'"EPSG:26911"'),", but it is likely to be different for your code, depending on which reference system is used. If your coordinates are already in latitude and longitude, then you can avoid using ",(0,l.kt)("inlineCode",{parentName:"p"},"crs")," entirely."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'gdf = geopandas.GeoDataFrame(df, crs="EPSG:26911")\n')),(0,l.kt)("h3",{id:"manipulate-the-data"},"Manipulate the data"),(0,l.kt)("p",null,"Convert all the geometries into points by applying the ",(0,l.kt)("inlineCode",{parentName:"p"},"Point")," function from ",(0,l.kt)("inlineCode",{parentName:"p"},"shapely.geometry")," to the geometry column."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'gdf["geometry"] = gdf["geometry"].apply(Point)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Easting"),(0,l.kt)("th",{parentName:"tr",align:null},"Northing"),(0,l.kt)("th",{parentName:"tr",align:null},"geometry"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444246.3500"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465340e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444246.350 5465340.180)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.0440"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465360e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.044 5465359.612)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.3266"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465368e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.327 5465367.526)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.5912"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465375e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.591 5465374.934)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.8385"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465382e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.839 5465381.859)")))),(0,l.kt)("p",null,"Next, we will create more geometries in a separate ",(0,l.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," and then append it to the end of ",(0,l.kt)("inlineCode",{parentName:"p"},"gdf"),"."),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"LineString")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Polygon")," to create new shapes inside a new ",(0,l.kt)("inlineCode",{parentName:"p"},"GeoDataFrame")," called ",(0,l.kt)("inlineCode",{parentName:"p"},"more_geometries"),"."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can find more ",(0,l.kt)("strong",{parentName:"p"},"shapely")," geometries ",(0,l.kt)("a",{parentName:"p",href:"https://shapely.readthedocs.io/en/stable/manual.html"},"here"),"."))),(0,l.kt)("p",null,"Then use ",(0,l.kt)("inlineCode",{parentName:"p"},"pd.concat")," to concatenate ",(0,l.kt)("inlineCode",{parentName:"p"},"more_geometries")," to the end of ",(0,l.kt)("inlineCode",{parentName:"p"},"gdf"),". Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"axis=0")," means to concatenate as a new row, whereas ",(0,l.kt)("inlineCode",{parentName:"p"},"axis=1")," concatenates it column-wise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'more_geometries = geopandas.GeoDataFrame(\n    {\n        "geometry": [\n            LineString([[444248.0694, 5.465388e06], [444248.2847, 5.465394e06], [444248.4852, 5.465400e06]]),\n            Polygon([[444243.6719, 5.465405e06], [444248.8454, 5.465410e06], [444249.0068, 5.465415e06], [444299.1569, 5.465419e06]]),\n        ]\n    }\n)\ngdf = pd.concat((gdf, more_geometries), axis=0)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Easting"),(0,l.kt)("th",{parentName:"tr",align:null},"Northing"),(0,l.kt)("th",{parentName:"tr",align:null},"geometry"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444246.3500"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465340e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444246.350 5465340.180)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.0440"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465360e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.044 5465359.612)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.3266"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465368e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.327 5465367.526)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.5912"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465375e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.591 5465374.934)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.8385"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465382e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.839 5465381.859)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"LINESTRING(444248.069 5465388.000, 444248.285...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"POLYGON((444243.672 5465405.000, 444248.845 5...))")))),(0,l.kt)("p",null,"Now that we have defined all the geometries, we can add our computed values for each geometry as a new column called ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'gdf["value"] = [1,2,3,4,5,6,7] # computed values\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Easting"),(0,l.kt)("th",{parentName:"tr",align:null},"Northing"),(0,l.kt)("th",{parentName:"tr",align:null},"geometry"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444246.3500"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465340e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444246.350 5465340.180)"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.0440"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465360e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.044 5465359.612)"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.3266"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465368e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.327 5465367.526)"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.5912"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465375e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.591 5465374.934)"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"444247.8385"),(0,l.kt)("td",{parentName:"tr",align:null},"5.465382e+06"),(0,l.kt)("td",{parentName:"tr",align:null},"POINT(444247.839 5465381.859)"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"LINESTRING(444248.069 5465388.000...)"),(0,l.kt)("td",{parentName:"tr",align:null},"6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"NaN"),(0,l.kt)("td",{parentName:"tr",align:null},"POLYGON((444243.672 5465405.000...))"),(0,l.kt)("td",{parentName:"tr",align:null},"7")))),(0,l.kt)("h3",{id:"exporting-the-map"},"Exporting the map"),(0,l.kt)("h4",{id:"interactive-map"},"Interactive map"),(0,l.kt)("p",null,"Export the ",(0,l.kt)("inlineCode",{parentName:"p"},"gdf")," GeoDataFrame as an interactive map:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'m1 = gdf.explore("value", cmap="Spectral", name="My shapes", tiles=None)\nm1.options["preferCanvas"] = True\n')),(0,l.kt)("p",null,"Where,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gdf.explore")," returns a Folium map object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"value"')," is the column of ",(0,l.kt)("inlineCode",{parentName:"li"},"gdf")," that contains the numerical values to be visualized."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cmap")," is the color of the scale. See more ",(0,l.kt)("a",{parentName:"li",href:"https://matplotlib.org/3.5.0/tutorials/colors/colormaps.html"},"colormaps")," here."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," is the ",(0,l.kt)("em",{parentName:"li"},"LayerControl")," name for the shape geometries."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tiles=None")," to not set a map tile. In most cases, you do not need to specify the ",(0,l.kt)("inlineCode",{parentName:"li"},"tiles")," attribute."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'m1.options["preferCanvas"] = True')," should be set to ",(0,l.kt)("inlineCode",{parentName:"li"},"True")," when you are drawing lots of geometries or when the map feels slow or laggy. Otherwise, you can leave this line out.")),(0,l.kt)("p",null,"Next, we will had a ",(0,l.kt)("strong",{parentName:"p"},"LayerControl")," to the map that will allow switching map tiles and toggling the geometries on and off."),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:a(6164).Z}))),(0,l.kt)("p",null,"First, add each ",(0,l.kt)("inlineCode",{parentName:"p"},"TileLayer")," separately to the map. Notice, that ",(0,l.kt)("strong",{parentName:"p"},"OpenStreetMap")," and ",(0,l.kt)("strong",{parentName:"p"},"Stamen Terrain"),", whereas, ",(0,l.kt)("strong",{parentName:"p"},"Satellite")," must specify an url for ",(0,l.kt)("inlineCode",{parentName:"p"},"tiles"),". This is because ",(0,l.kt)("strong",{parentName:"p"},"OpenStreetMap")," and ",(0,l.kt)("strong",{parentName:"p"},"Stamen Terrain")," are built into Folium, whereas ",(0,l.kt)("strong",{parentName:"p"},"Satellite")," is a custom map tile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'folium.TileLayer("OpenStreetMap", name="Road").add_to(m1)\nfolium.TileLayer("Stamen Terrain", name="Terrain").add_to(m1)\nfolium.TileLayer(\n    tiles="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",\n    attr="Esri",\n    name="Satellite",\n).add_to(m1)\nfolium.LayerControl().add_to(m1)\n')),(0,l.kt)("p",null,"Finally, convert the map object to HTML that can be displayed on the webpage."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"interactive_map = m1._repr_html_()\n")),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:a(9937).Z}))),(0,l.kt)("h4",{id:"static-map"},"Static map"),(0,l.kt)("p",null,"We will also export the map as a static Matplotlib plot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def plt_show(plt, width=500, dpi=100):\n    # Converts matplotlib plt to image data string\n    #   plt is the matplotlib pyplot or figure\n    #   width is the width of the graph image in pixels\n    #   dpi (dots per inch) is the resolution of the image\n    bytes = io.BytesIO()\n    plt.savefig(bytes, format="png", dpi=dpi)  # Save as png image\n    if hasattr(plt, "close"):\n        plt.close()\n    bytes.seek(0)\n    base64_string = "data:image/png;base64," + base64.b64encode(bytes.getvalue()).decode("utf-8")\n    return "<img src=\'" + base64_string + "\' width=\'" + str(width) + "\'>"\n\n\nm2 = gdf.plot("value", cmap="Spectral", legend=True)\nstatic_map = plt_show(m2.figure)\n')),(0,l.kt)("p",null,"Where,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gdf.plot")," returns a Matplotlib figure."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"value"')," is the column of ",(0,l.kt)("inlineCode",{parentName:"li"},"gdf")," that contains the numerical values to be visualized."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cmap")," is the color of the scale. See more ",(0,l.kt)("a",{parentName:"li",href:"https://matplotlib.org/3.5.0/tutorials/colors/colormaps.html"},"colormaps")," here."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"legend=True")," displays the color bar on the right."),(0,l.kt)("li",{parentName:"ul"},"Pass in ",(0,l.kt)("inlineCode",{parentName:"li"},"m2.figure")," into ",(0,l.kt)("inlineCode",{parentName:"li"},"plt_show")," to return an image.")),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:a(4707).Z}))),(0,l.kt)("h2",{id:"step-2-output"},"Step 2: Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{{ outputs.interactive_map }}\n{{ outputs.static_map }}\n")))}u.isMDXComponent=!0},9937:function(e,t,a){t.Z=a.p+"assets/images/ex2_interactive_map-b5a7340d988b5b03e10639183c012e2f.png"},6164:function(e,t){t.Z="data:image/png;base64,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"},4707:function(e,t,a){t.Z=a.p+"assets/images/ex2_static_map-797f9e729bf55def31472df0beb27d2e.png"}}]);