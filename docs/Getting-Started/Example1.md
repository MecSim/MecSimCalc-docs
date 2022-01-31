---
sidebar_label: "Example 1"
sidebar_position: 2
---

# Example 1: Distance Converter App

This tutorial provides instructions to create this [web-based](https://www.mecsimcalc.com/app/4022206/distance_converter) python _**app**_ to convert distance from meters to feet and inches. First, click on create a new blank **_app_**.

## Step 1: Info

You can fill in the required fields as shown in the following figure. You can use the default `Favicon Image`. The image available [here](/docs/Getting-Started/Ex1Converter.png) was used as the `Primary Image`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/Ex1.png)

</div>

The “Physics” tag is already available, so, you don’t need to create a new one. Alternatively, you can type and add a new tag.

## Step 2: Inputs

Start by creating an input group by hovering over the ![img alt](/docs/Getting-Started/Plus.png) sign and choosing `input group`. A new input group will be created with the name: “New Input Group Title”. Click on the title and change it to: “Converter”

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/IG.png)

</div>

However over the ![img alt](/docs/Getting-Started/Plus.png) sign again and now choose `input`. An input with the label: “New Input” will appear in the “Converter” group.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/IGI.png)

</div>

Hover over “New Input” and click on the edit button ![img alt](/docs/Getting-Started/Edit.png). Change the label to “Distance” and type “m” in the units. Set the default value to 10. In the Advanced options, change the minimum value to 0. Keep the step set as 0.001 allowing the precision to be in mm. Afterwards, click on: “Apply Changes” to confirm these changes.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/I.png)

</div>

:::caution

When editing an input, don't forget to click on `APPLY CHANGES` at the bottom of the screen to save your work

:::

The inputs should now look like:

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/I2.png)

</div>

## Step 3: Code

First create `main` function with two output variables.

```python
def main(inputs):
    return {"Feet":ft,"Inches":inches}
```

Click on `<> Input Variables` to get the list of available inputs:

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/IVAR.png)

</div>

As per the list, there is only one NumberInput available with the variable name `input_0`. To use this input in the code, copy the variable and paste as an assignment to a new variable `m`.

```python
def main(inputs):
    m=inputs['input_0']
    return {"Feet":ft,"Inches":inches}
```

To convert m to ft, we use the conversion rate of 1m = 3.28083989501ft. We then use the integer function in python to perform the required calculations and chose to round the inches up to 2 decimal points. We also choose to output the variable m to be embedded later in the output page:

```python
def main(inputs):
    m=inputs['input_0']
    distance=m*3.28083989501
    ft=int(distance)
    inches=(distance-ft)*12
    inches=round(inches,2)
    return {"Feet":ft,"Inches":inches,"Metre":m}
```

## Step 4: Output

Three outputs are available to embed in the output page: {{outputs.Feet}}, {{outputs.Inches}}, and {{outputs.Metre}}. These can be embedded within the output page text. For this example, you can then type the following in the output page:

```
The distance {{outputs.Metre}} in metres is equal to {{outputs.Feet}} ft and {{outputs.Inches}} in.
```

## Step 5: Docs

You don't need to add any _**app**_ documentation.

## Step 6: Preview

In the preview section, confirm that the app works as expected:

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/Pub1.png)

</div>

Once ready, click on “publish” to publish the app on the web.
This version of the app is available here:
https://www.mecsimcalc.com/app/4022206/distance_converter
