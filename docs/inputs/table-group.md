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

The **Table Group** behaves similarly to an [**Input Group**](input-group) in that the _**developer**_ can create as many new **Table Groups** as needed, which are arranged vertically. Similarly a **Table Group** can be renamed, deleted, or dragged to change its vertical position relative to other **Input Groups** or **Table Groups**.

## Table Group Layout

The main differences between a **Table Group** and an [**Input Group**](input-group) is:

- The inputs share the same fixed width and cannot be resized.
- The Python variable available in the **Code** section is a two dimensional nested array (eg. `[[1,2],[3,4]]`).
- The number of columns and the variable name are specified by the _**developer**_ in the edit table popup.

There are also many similarities including:

- No restrictions on the type of input in each cell.
- Cells can be left empty.

For example, the following **Table Group** has three columns and 1 row. The header can be made using RichText input type and does NOT count as a row. The array name available for the **Code** step is `table`.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/table_group_numbered.png)

</div>

1. Drag the **Table Group** to order it vertically amongst the other groups
2. Edit the **Table Group** properties (described below)
3. Delete the **Table Group**
4. Duplicate the last row in the current **Table Group** (similar to duplicate input but for the whole row)

### Editing a table group

To edit the table group, click the :pencil2: icon near the top right side of the table group. A popup will appear with the following options:

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/edit_table_group_dialog.png)

</div>

1. **Title** -> the title of the table group
2. **Name** -> this is the variable name of the table which will be used in the python code
3. **Columns** -> the number of columns in the table

| :trophy: The following are [premium](https://mecsimcalc.com/pricing) features |
| ----------------------------------------------------------------------------- |

4. **Dynamic Rows** -> check this box if you want the user to be able to add and delete rows from the table  
    After checking this box a list of options will appear:  
   a) **_Max Rows_** -> The maximum number of rows that can be in the table (**NOT including the header row**)  
   b) **_Min Rows_** -> The minimum number of rows that can be in the table
   (**NOT including the header row**)  
   c) **_Row Group Size_** -> The number of rows that are 'combined' together when the user 'Adds' or 'Deletes' rows. (_This should almost always be set to 1 ...unless your row is comprised of multiple lines_)
5. **Conditional Input Group** -> [Learn more](/inputs/input-group#conditional-input-group)

:::caution
Don't forget to click on **APPLY** after editing the properties of the **Table Group**
:::

### Dynamic Rows

The following embedded app demonstrates the **Dynamic Rows** feature using the **Table Group** properties shown above. Enter the values and press submit to calculate the weighted GPA.  
Use the [dynamic table template](https://mecsimcalc.com/create) (under **The Basics**) to start creating a similar app!

<div style={{width: "100%", height: "900px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/7646727/weighted_gpa_calculator_mobile_friendly" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

The code simply loops through each row of the table to get the grade and weight values.

```python
def main(inputs):
    # get input table (list of rows)
    input_table = inputs['table']

    # calculate the grade average
    rows = len(input_table)
    weight = 0
    gpa_sum = 0
    for i in range(0, rows):
        gpa_sum += input_table[i][1] * input_table[i][2]
        weight += input_table[i][2]

    average = gpa_sum / weight

    # return the table in a dictionary
    return {'average': f'{average:.2f}'}
```

:::tip
The number of rows in the table will not be known beforehand, therefore using `len(tableName)` in the python code is essential.
This will allow you to get the # of rows in the table and then you can use it how you like!  
:::

### Labeling Rows

If the dynamic rows feature is enabled, the # of rows that will be used is unknown.
In order to have the rows labeled correctly, you can use the {{row}} placeholder.
This can be used in two different ways:

1. In an input label

![img alt](/docs/inputs/label_row_placeholder.png)

2. In a rich text input type

![img alt](/docs/inputs/richtext_row_placeholder.png)
