---
sidebar_label: "Conditional Input"
sidebar_position: 5
---

# Conditional Input

| :trophy: This is a [pro](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

The following provides a detailed description about the conditional input feature

## How does it work?

A set of rules that controls whether the input is visible or not to the _**user**_ running your app. Each _**rule**_ is composed of 3 parts and calculates a binary result (TRUE or FALSE) based on the values of other inputs.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_input_final.png)

</div>

1. **Input** - the other input to be evaluated
2. **Operator** - how the other input is evaluated (e.g. ==, !=, >=, ...)
3. **Value** - the value that the other input is evaluted against

### :bulb: **Notes:**

- If the _**rule**_ is TRUE then the input will be visible
- Multiple _**rules**_ are combined using AND i.e. all _**rules**_ have to be TRUE in order for the input to be visible
- If ANY _**rule**_ is FALSE then the input will be hidden

## Steps

1. When editing an input, check the conditional input box in order to start creating _**rules**_.

   <div style={{textAlign: 'center'}}>

   ![img alt](/docs/inputs/conditional_input_checked.png)

   </div>

2. To create a _**rule**_ the 3 parts must be selected. Here is an example of creating a _**rule**_ where the slider input will only be visible if input checkbox is TRUE (checked).

   First select the checkbox input

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
If the checkbox is TRUE (checked) the slider will become visible.
:::

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/3643677/conditional_input_example" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

:information_source: **Note:**
We currently do not offer creating **rules** based on the following input types: date, file, rich text.

## Additional

### Adding a rule

To add a _**rule**_, simply click the plus button. There can be as many _**rules**_ as you want.  
:::tip
_**Rules**_ are combined using AND, therefore they all have to evaluate to TRUE for the input to be visible.
:::

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_add_rule.png)

   </div>
