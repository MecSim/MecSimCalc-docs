---
sidebar_label: "Conditional Input"
sidebar_position: 5
---

# Conditional Input

| :trophy: This is a [premium](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

The following provides a detailed description about the Conditional Input feature

## How does it work?

This feature allows you to hide or disable an Input (or Input Group) based on a set of **_rules_**

<!-- ### :bulb: **Notes:**

- If the _**rule**_ is TRUE then the input will be visible
- Multiple _**rules**_ are combined using AND i.e. all _**rules**_ have to be TRUE in order for the input to be visible
- If ANY _**rule**_ is FALSE then the input will be hidden
 -->

### :bulb: **Notes:**

- **_Rules_** are evaluated together using AND, therefore if any **_rule_** is FALSE the overall result is FALSE.
- If the result of the **_rules_** is false you can either hide or disable the Input (or Input Group).
- Each _**rule**_ is composed of 3 parts and calculates a binary result (TRUE or FALSE) by evaluating the values of other Inputs.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_input_final.png)

</div>

1. **Input** - The other Input to be evaluated
2. **Operator** - How the other Input is evaluated (e.g. ==, !=, >=, ...)
3. **Value** - The value that the other Input is evaluted against

## Steps

1. When editing an iInput (or Input Group), check the Conditional Input box in order to start creating **_rules_**.

   <div style={{textAlign: 'center'}}>

   ![img alt](/docs/inputs/conditional_input_checked.png)

   </div>

2. Select the effect of the rules on the Input.

   1. Hide Input (s): If the rules evaluate to FA:SE then this Input will be hidden
   2. Disable Input (s): If the rules evaluatre to FALSE then this Input will be disabled (the **_user_** will be able to see the input but will be able to interact with it)

3. To create a _**rule**_ you must define the 3 subcomponents. Here is an example of creating a **_rule_** where the Slider Input will only be visible if Checkbox Input is TRUE (checked).

   First select the Checkbox Input

   <div style={{textAlign: 'center'}}>

   ![img alt](/docs/inputs/conditional_input_selection.png)

   </div>

   We want to check if the checkbox is TRUE, therefore select the '==' operator

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

Test out the _**rule**_ we created above for yourself!  
:::tip
If the Checkbox Input is TRUE (checked) the Slider will be visible.
:::

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/3643677/conditional_input_example" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

:information*source: **Note:**
We currently do not offer creating \*\*\_rules*\*\* based on the following input types: date, file, rich text.

## Additional

### Adding a rule

To add a **_rule_**, simply click the plus button. There can be as many **_rules_** as you want.  
:::tip
_**Rules**_ are combined using AND, therefore they all have to evaluate to TRUE for the input to be visible (or enabled).
:::

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_add_rule.png)

   </div>
