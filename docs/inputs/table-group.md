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
- The number of columns and the variable name are specified by the _**developer**_ in the edit table popup.
- There is no restriction on the type of input in each cell.
- Cells can be left empty.

For example, the following **Table Group** has three columns and two rows. The cell in the second row and second column is left blank. A slider input type is chosen for the input cell in the first row and second column while a single select input type is chosen for the input cell in the second row and third column. The array name available for the **Code** step is `arrayname`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/table_group.png)

</div>

To edit the table group, click the pencil icon on the right side of the table group title. A popup will appear with the following options:

1. **Name** -> this is the variable name of the table which will be used in the python code
2. **Columns** -> the number of columns in the table
3. **Dynamic Rows** -> check this box if you want the user to be able to add and delete rows from the table  
   After checking this box a list of options will appear:  
   a) **_Max Rows_** -> this is the maximum number of rows that can be in the table  
   b) **_Min Rows_** -> the minimum number of rows (including header) in the table  
   c) **_Row Group Size_** -> the number of rows to 'add' (copy) when the user presses the 'Add Row' button

:::caution
Don't forget to click on **APPLY** after editing the properties of the **Table Group**
:::

### Dynamic Rows

The following embedded app demonstrates the Dynamic Rows feature using the table group settings we chose above.

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/4620929/map_geospatial_data" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

Enter the values and press submit to calculate the sum. Try adding and deleting rows to see the output change!

:::tip
The number of rows in the table will not be known beforehand, therefore using `len('tableName')` in the python code is essential.
This will allow you to get the # of rows in the table and then you can use it how you like!  
Try it out for yourself using the [dynamic table template](https://mecsimcalc.com/create)
:::
