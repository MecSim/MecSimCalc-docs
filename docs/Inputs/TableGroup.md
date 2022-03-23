---
sidebar_label: "Table Group"
sidebar_position: 3
---

# Table Group

Similar to an [`Input Group`](InputGroup.md), a [`Table Group`](TableGroup.md) allows the _**developer**_ to visually group any set of inputs. A `Table Group` can be created in the **Inputs** step by clicking on `Add Table Group`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/tablegroup1.png)

</div>

:::tip

The different input types appear in the menu only if an `Input Group` or a `Table Group` has already been created.

:::

The `Table Group` behaves similar to an [`Input Group`](InputGroup.md) in that the _**developer**_ can create as many new `Table Groups` as needed which are arranged vertically on top of each other. Similarly a `Tabe Group` can be renamed, deleted, or dragged to change its vertical position relative to other `Input Groups` or `Table Groups`.

# Layout of a Table Group

The main difference between a `Table Group` and an [`Input Group`](InputGroup.md) is that the inputs within a `Table Group` have a fixed width and are available in the **Code** section as a two dimensional array. The number of columns and the array name are specified by the _**developer**_ at the top of the `Table Group`. There is no restriction on the type of input in each cell within the `Table Group` and the _**developer**_ can leave some cells empty. For example, the following `Table Group` has three columns and two rows. The cell in the second row and second column is left blank. A slider input type is chosen for the input cell in the first row and second column while a single select input type is chosen for the input cell in the second row and third column. The array name available for the **Code** stage is `arrayname`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/tablegroup2.png)

</div>

:::caution

Don't forget to click on `APPLY` after changing the number of columns or the array name of the `Table Group`

:::
