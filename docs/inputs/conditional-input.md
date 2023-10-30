---
sidebar_label: "Conditional Input"
sidebar_position: 5
---

# Conditional Input

| :trophy: This is a [premium](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

The following provides a detailed description about the Conditional Input feature

## How does it work?

This feature allows you to hide or disable an **Input** based on a set of **_conditions_**

### :bulb: **Notes:**

- The input will be hidden or disabled if any **_condition_** is not satisfied
- Each **_condition_** is composed of 3 parts and calculates a binary result (TRUE or FALSE) by evaluating the values of other Inputs.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_input_final.png)

</div>

1. **Input** - The other Input to be evaluated
2. **Operator** - How the other Input is evaluated (e.g. ==, !=, >=, ...)
3. **Value** - The value that the other Input is evaluted against

## Steps

1. When editing an **Input**, check the Conditional Input box in order to start creating **_conditions_**.

   <div style={{textAlign: 'center'}}>

   ![img alt](/docs/inputs/conditional_input_checked.png)

   </div>

2. Select the effect on the **Input**

   1. Hidden: If any **_condition_** is not satisfied then the **Input** will be hidden
   2. Disabled: If any **_condition_** is not satisfied then the **Input** will be disabled

3. To create a **_condition_** you must define the 3 subcomponents. Here is an example of creating a **_condition_** where the **Slider Input** will be hidden if the condition
   `Checkbox == True` is not satisfied.
   First select the **Checkbox Input**

   <div style={{textAlign: 'center'}}>

   ![img alt](/docs/inputs/conditional_input_selection.png)

   </div>

   We want to check whether or not the **Checkbox** is TRUE, therefore select the '==' operator

   <div style={{textAlign: 'center'}}>

   ![img alt](/docs/inputs/conditional_operator_selection.png)

   </div>

   Finally, the value TRUE is selected

   <div style={{textAlign: 'center'}}>

   ![img alt](/docs/inputs/conditional_value_selection.png)

   </div>

:::caution
When editing an input, don't forget to click on **APPLY CHANGES** at the bottom of the screen to save your work
:::

## Test it out for youself

Test out the _**condition**_ we created above!  
:::tip
If the Checkbox Input is TRUE (checked) the Slider will be visible.
:::

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/8755703/premium_conditional_input" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

## Additional

:information_source: **Note:** We currently do not offer creating conditions based on the following input types: date, file, rich text.

### Adding a condition

To add a **_condition_**, simply click the plus button. There can be as many **_conditions_** as you want.

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_add_rule.png)

   </div>
