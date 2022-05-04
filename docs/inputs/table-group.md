---
sidebar_label: "Table Group"
sidebar_position: 3
---

# Table Group

Similar to an [**Input Group**](input-group), a **Table Group** allows the _**developer**_ to visually group inputs. A **Table Group** can be created in the **Inputs** step by clicking on **Add Table Group**.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/add_table_group.png)

</div>

:::tip
The different input types appear in the menu only if an **Input Group** or a **Table Group** has already been created.
:::

The **Table Group** behaves similarly to an [**Input Group**](input-group) in that the _**developer**_ can create as many new **Table Groups** as needed, which are arranged vertically on top of each other. Similarly a **Table Group** can be renamed, deleted, or dragged to change its vertical position relative to other **Input Groups** or **Table Groups**.

## Table Group Layout

The main difference between a **Table Group** and an [**Input Group**](input-group) is:

- The inputs share the same fixed width and cannot be resized.
- The Python variable available in the **Code** section is a two dimensional nested array (eg. `[[1,2],[3,4]]`).
- The number of columns and the variable name are specified by the _**developer**_ at the top of the group.
- There is no restriction on the type of input in each cell.
- Cells can be left empty.

For example, the following **Table Group** has three columns and two rows. The cell in the second row and second column is left blank. A slider input type is chosen for the input cell in the first row and second column while a single select input type is chosen for the input cell in the second row and third column. The array name available for the **Code** step is `arrayname`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/table_group.png)

</div>

:::caution
Don't forget to click on **APPLY** after changing the number of _columns_ or the array _name_ of the **Table Group**
:::
