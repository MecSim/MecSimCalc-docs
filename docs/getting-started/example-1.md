---
sidebar_label: "Example 1"
sidebar_position: 2
---

# Example 1: Distance Converter App

This tutorial provides instructions to create this [web-based](https://www.mecsimcalc.com/app/4022206/distance_converter) Python _**app**_ that converts distance from meters to feet and inches.

<div style={{width: "100%", height: "500px", overflow: "hidden"}}>
<iframe src='https://mecsimcalc.com/app/4022206/distance_converter' style={{position:"relative", left:"-45px", top:"-48px"}} width="100%" height="500" title="MecSimCalc" frameborder="0"></iframe>
</div>

To start, go to [mecsimcalc.com/create](https://mecsimcalc.com/create), click on **The Basics**, and select **Create a new blank app**.

## Step 1: Info

- You can fill in the required fields as shown in the following image.
- You can use the default **Favicon Image** or upload your own.
- The **Primary Image** used in this example is available [here](/docs/getting-started/ex1_primary.png).
- Select the "Physics" tag from the tags dropdown. If your desired tag is not available, type the tag name into the Tags dropdown and click on the add option to add a new tag.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex1_info.png)

</div>

## Step 2: Inputs

Start by creating an input group by clicking on the ![img alt](/docs/getting-started/add_btn.png) button and choosing **Input Group**. A new input group will be created with the title: "New Input Group Title". Click on the title and change it to: "Converter".

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex1_group_title.png)

</div>

Click on the ![img alt](/docs/getting-started/add_btn.png) button again, and drag and drop **NumberInput** into the input group. An input with the label: "New Input" will appear in the "Converter" group and can be resized and moved within the input group.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex1_input_btns.png)

</div>

Hover over "New Input" and click on the ![img alt](/docs/getting-started/edit_btn.png) button to open the input settings.

- Change the **label** to "Distance".
- Type "m" in the **units**.
- Set the **default value** to 10.
- In the Advanced options, change the **minimum value** to 0.
- Change the step size to 0.001 allowing the precision to be in mm.

Click on **APPLY CHANGES** to apply these new changes.

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex1_edit_input.png)

</div>

:::caution
When editing an input, don't forget to click on **APPLY CHANGES** at the bottom of the screen to save your changes
:::

The inputs should now look like this:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex1_edited_input.png)

</div>

## Step 3: Code

First, create the `main` function with two output variables:

```python
def main(inputs):
    return {"Feet":ft, "Inches":inches}
```

Click on `<> Input Variables` in the right sidebar to view and copy available inputs:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex1_input_vars.png)

</div>

As shown in the input variables list, there is only one _NumberInput_ available with the variable name `input_0`. To use this input in the code, copy the variable by clicking on it and then paste it into the code (ctrl + v).

```python
def main(inputs):
    m = inputs['input_0']
    return {"Feet":ft, "Inches":inches}
```

To convert $m$ to $ft$, we use the conversion rate of $1m = 3.28083989501ft$. We then use the integer function in python to perform the required calculations and round the inches up to 2 decimal points. We also `return` the variable `m` to be displayed later in the output page:

```python
def main(inputs):
    m = inputs['input_0']
    distance = m*3.28083989501
    ft = int(distance)
    inches = (distance-ft)*12
    inches = round(inches,2)
    return {"Feet":ft, "Inches":inches, "Metre":m}
```

## Step 4: Output

The dictionary returned from the `main` function in the code step had three key-value pairs: `{"Feet":ft, "Inches":inches, "Metre":m}`.
These outputs are available to be embedded in the output page: `{{outputs.Feet}}`, `{{outputs.Inches}}`, and `{{outputs.Metre}}`.

```
The distance {{outputs.Metre}} in metres is equal to {{outputs.Feet}} ft and {{outputs.Inches}} in.
```

## Step 5: Docs

You don't need to add any _**app**_ documentation.

## Step 6: Preview

In the preview section, confirm that the app works as expected:

<div style={{textAlign: 'center'}}>

![img alt](/docs/getting-started/ex1_preview.png)

</div>

Once ready, click on **PUBLISH** to publish your app to the web.
This version of the app is available here:
https://mecsimcalc.com/app/4022206/distance_converter
