---
sidebar_label: "Conditional Input"
sidebar_position: 5
---

# Conditional Input

| :trophy: This is a [premium](https://mecsimcalc.com/premium) feature |
| -------------------------------------------------------------------- |

The following provides a detailed description about the conditional input feature

## How does it work?

A set of rules that controls whether the input is visible or not to the _**user**_. Each rule is composed of 3 parts and calculates a binary result (TRUE or FALSE) based on the values of other inputs.

<div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_input_final.png)

</div>

1. **Input** - the other input to be evaluated

2. **Operator** - how the other input is evaluated

3. **Value** - the value that the other input is evaluted against

**Notes:**

- If the rule is TRUE then the input will be visible
- Multiple rules are combined using AND i.e. all rules have to be TRUE in order for the input to be visible
- If ANY rule is FALSE then the input will be hidden

## Steps

1. When editing an input, check the conditional input box in order to start creating rules.

   <div style={{textAlign: 'center'}}>

   ![img alt](/docs/inputs/conditional_input_checked.png)

   </div>

2. To create a rule the 3 parts must be selected. Let's create a rule where the slider input will only be visible if input checkbox is TRUE (checked).

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

Test out the rule we created above for yourself!  
**Remember:** If the checkbox is TRUE (checked) the slider will become visible.

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

:information_source: **Note:**
We currently do not offer creating a rule based off of the following input types: date, file, rich text.

## Additional

### Adding a rule

To add a rule, simply click the plus button. There can be as many rules as you want.  
**Don't Forget:** Rules are combined using AND therefore they all have to evaluate to TRUE for the input to be visible.

   <div style={{textAlign: 'center'}}>

![img alt](/docs/inputs/conditional_add_rule.png)

   </div>
