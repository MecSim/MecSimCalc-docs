---
sidebar_label: "Conditional Input"
sidebar_position: 5
---

# Conditional Input

| :trophy: This is a [premium](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

The following provides a detailed description about the **Conditional Input** feature

## Why use it?

The **Conditional Input** feature allows you to create more complex and dynamic user interfaces. You can now hide or disable an **Input** based on the value of other **Inputs**!

:::tip
This feature also works with **Input Groups**!
:::

This is useful when you want to create a more user-friendly interface by only showing or enabling **Inputs** when certain conditions are met.

### Examples use cases

- Have a **Slider** be visible only when a **Checkbox** is checked
- Display a different **Input Group** depending on the value of a **Dropdown**.

## How does it work?

For the **Input** that you want to hide or disable, you can create a set of **_conditions_** that will evaluate to TRUE or FALSE.

- If TRUE the **Input** will be visible and enabled!
- If the result is FALSE, you can select if the **Input** will be hidden or disabled.

### For example

We have a **Slider** that we only want to show when a **Checkbox** is checked.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_input_final.png)

</div>

Each **_condition_** is composed of 3 parts and calculates a binary result (TRUE or FALSE) by evaluating the values of other **Inputs**.

1. **Input** - The other **Input** (e.g Checkbox) to be evaluated
2. **Operator** - How the other **Input** is evaluated (e.g. ==, !=, >=, ...)
3. **Value** - The value that the other **Input** is evaluated against

:::tip
Think of the **_condition_** as a simple equation. For example, `checkbox == True` will evaluate to TRUE if the **Checkbox** is checked and FALSE if it is not.
:::

## Do it yourself

Let's make the **Slider** visible only when the **Checkbox** is checked.

**Step 1.** Click ![img alt](/docs/getting-started/edit_btn.png) to edit the **Slider Input** and select **Conditional Input**.

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_input_checked.png)

   </div>

**Step 2.** Select the effect on the **Input** if the **_conditions_** evaluate to FALSE. You can choose between:

_Hidden:_ The **Input** will be hidden  
_Disabled:_ The **Input** will be visible but disabled

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_input_hidden.png)

   </div>

Since we want to hide the **Slider** when the **Checkbox** is not checked, we select _Hidden_.

**Step 3.** To create a **_condition_** you must define the 3 sub-components.  
a. First select the **Checkbox** as the **Input** to be evaluated.

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_input_selection.png)

   </div>

b. We want to evaluate whether or not the **Checkbox** is TRUE, therefore select the `==` operator

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_operator_selection.png)

   </div>

c. Finally, the value TRUE is selected

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_value_selection.png)

   </div>

:::caution
When editing an input, don't forget to click on **APPLY CHANGES** at the bottom of the screen to save your work
:::

## Test it out for yourself

Test out the _**condition**_ we created above!  
:::tip
If the **Checkbox** is TRUE (checked) the **Slider** will be visible.
:::

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/8755703/premium_conditional_input" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

## Additional

:information_source: **Note:** We currently do not offer creating **_conditions_** based on the following **Input Types**: _Date Time_, _File_, _Rich Text_.

### Adding a condition

To add a **_condition_**, click the ![img alt](/docs/inputs/add_condition.png) button. There can be as many **_conditions_** as you want!

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_add_rule.png)

   </div>

### Combining Conditions

You can combine **_conditions_** using `AND` or `OR`.

#### Order of operations

`AND` takes precedence over `OR`.  
E.g. `A OR B AND C` is evaluated as `A OR (B AND C)`.

:::tip
Think of the **_conditions_** as a boolean expression. For example, `checkbox == True AND checkbox_2 == False` will evaluate to TRUE if checkbox_1 is checked and checkbox_2 is not checked. This could be thought of as `A AND !B` in boolean algebra.  
If this is confusing, don't worry! You can always test out your **_conditions_** to see if they work as expected!
:::
