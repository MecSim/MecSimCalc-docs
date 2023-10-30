---
sidebar_label: "Input Group"
sidebar_position: 2
---

# Input Group

In order to visually organize the inputs, **MecSimCalc** platform allows the _**developer**_ to visually group inputs into either an **Input Group** or a [**Table Group**](table-group). An **Input Group** can be created in the **Inputs** step by clicking on **Add Input Group**.

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

- The _**developer**_ can add as many inputs as needed..
- The inputs can be resized and moved within the input group using the mouse.
- A maximum of 10 inputs can appear on the same row.
- There is no restriction on the number of rows to be used.
- The height of the **Input Group** will automatically adjust as more inputs are added, removed, or dragged.

As an example, the image below shows an input group with 5 different inputs (two numerical inputs, two text inputs, and one single select input).

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/input_group.png)

</div>

### Conditional Input Group

| :trophy: This is a [premium](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

Click the :pencil2: icon near the top right of an input group and the **Edit Input Group** popup will appear.  
**Conditional Input Group** is similar to the [Conditional Input](/inputs/conditional-input) feature, but instead effects the entire **Input Group**.

:::tip
The conditions for the **Input Group** will effect the entire section (including all the inputs within it)
:::

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/edit_input_group_dialog.png)

</div>

:::caution
Don't forget to click on **APPLY** after editing the properties of the **Input Group**
:::

The following embedded app demonstrates the **Conditional Input Group** feature!
Use the [Conditional Input Group template](https://mecsimcalc.com/create) (under **Advanced**) to start creating a similar app!
Depending on the shape you pick, a different **Input Group** is shown!

<div style={{width: "100%", height: "900px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/8348786/premium_conditional_input_group" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>
