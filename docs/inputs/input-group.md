---
sidebar_label: "Input Group"
sidebar_position: 2
---

# Input Group

On **MecSimCalc** you can visually group inputs using either an **Input Group** or a [**Table Group**](table-group). In **Step 2: Inputs** (when editing an app) click on ![img alt](/docs/getting-started/add_btn.png) and then **Add Input Group**.

The **Input Group** is a container for inputs, and must be used to visually organize inputs. The **Input Group** can be used to group inputs that are related to each other, or to group inputs that are used to define a specific section of the app.

Inputs can be freely moved and resized within the **Input Group**.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/add_input_group.png)

</div>

:::tip
The different input types appear in the menu only if an **Input Group** or a **Table Group** has already been created.
:::

The _**developer**_ can create as many new **Input Groups** as needed, which are arranged vertically one above the other. Each **Input Group** can be renamed, deleted, or dragged to change its vertical position relative to the other **Input Groups**. For example, the image below shows two **Input Groups** named "Input Group 1" and `"Input Group 2".

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/input_group_actions.png)

</div>

## Input Group Layout

In an **Input Group**:

- The _**developer**_ can add as many inputs as needed.
- The inputs can be resized and moved within the input group using the mouse.
- A maximum of 10 inputs can appear on the same row.
- There is no restriction on the number of rows that can be used.
- The height of the **Input Group** will automatically adjust as inputs are added, removed, or dragged.

As an example, the image below shows an input group with 5 different inputs (two numerical inputs, two text inputs, and one single select input).

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/input_group.png)

</div>

### Conditional Input Group

| :trophy: This is a [premium](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

Click the ![img alt](/docs/getting-started/edit_btn.png) icon near the top right of an **Input Group** and the **Edit Input Group** popup will appear.  
**Conditional Input Group** is similar to the **[Conditional Input](/inputs/conditional-input)** feature, but instead affects the entire **Input Group**.

:::tip
**Conditional Input Group** will affect the visibility of the entire **Input Group** (and all of the inputs within it)
:::

<div style={{textAlign: 'center', margin:'auto 1rem'}}>

![img alt](/docs/inputs/edit_input_group_dialog.png)

</div>

:::caution
Don't forget to click on **APPLY** after editing the properties of the **Input Group**
:::

The following embedded app demonstrates the **Conditional Input Group** feature!
Use the [Conditional Input Group template](https://mecsimcalc.com/create) (under **Advanced**) to start creating a similar app!
Depending on the shape you pick, a different **Input Group** is shown!

<div style={{width: "100%", height: "900px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/8348786/premium_conditional_input_group" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>
